import { NextRequest, NextResponse } from 'next/server';
import { sendEmail } from '@/lib/email';
import { contactFormSchema, robotikFormSchema } from '@/lib/validation';
import { z } from 'zod';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const formType = body.formType || 'contact';

    // Validate based on form type
    let validatedData;
    if (formType === 'robotik') {
      validatedData = robotikFormSchema.parse(body);
    } else {
      validatedData = contactFormSchema.parse(body);
    }

    // Send email notification
    const emailTo = process.env.SMTP_TO_EMAIL || process.env.SMTP_USER || '';
    
    if (emailTo) {
      try {
        await sendEmail({
          to: emailTo,
          subject: `Yeni Form Gönderimi: ${formType === 'robotik' ? 'Robotik Kodlama' : 'İletişim'}`,
          html: generateEmailTemplate(validatedData, formType),
          replyTo: formType === 'robotik' ? undefined : (validatedData as { email?: string }).email,
        });
      } catch (emailError) {
        console.error('Email sending failed:', emailError);
        // Continue even if email fails - form was still received
      }
    }

    // TODO: Optional - Save to Strapi
    // await createEntry('form-submissions', {
    //   formType,
    //   data: validatedData,
    //   submittedAt: new Date().toISOString(),
    // });

    console.log('Form submission received:', {
      formType,
      data: validatedData,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json(
      {
        success: true,
        message: 'Formunuz başarıyla gönderildi. En kısa sürede size dönüş yapacağız.',
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Form submission error:', error);

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          success: false,
          message: 'Form verileri geçersiz',
          errors: error.errors.map((e) => ({
            field: e.path.join('.'),
            message: e.message,
          })),
        },
        { status: 400 }
      );
    }

    return NextResponse.json(
      {
        success: false,
        message: 'Bir hata oluştu. Lütfen daha sonra tekrar deneyiniz.',
      },
      { status: 500 }
    );
  }
}

// Email template generator (for future use)
function generateEmailTemplate(data: any, formType: string): string {
  if (formType === 'robotik') {
    return `
      <h2>Yeni Robotik Kodlama Deneme Dersi Talebi</h2>
      <p><strong>Veli Adı:</strong> ${data.parentName}</p>
      <p><strong>Çocuk Adı:</strong> ${data.childName}</p>
      <p><strong>Telefon:</strong> ${data.phone}</p>
      <p><strong>Yaş:</strong> ${data.age}</p>
      <p><strong>Tarih:</strong> ${new Date().toLocaleDateString('tr-TR')}</p>
    `;
  }

  return `
    <h2>Yeni İletişim Formu</h2>
    <p><strong>İsim:</strong> ${data.name}</p>
    <p><strong>E-posta:</strong> ${data.email}</p>
    ${data.phone ? `<p><strong>Telefon:</strong> ${data.phone}</p>` : ''}
    ${data.businessUnit ? `<p><strong>İlgi Alanı:</strong> ${data.businessUnit}</p>` : ''}
    <p><strong>Mesaj:</strong></p>
    <p>${data.message}</p>
    <p><strong>Tarih:</strong> ${new Date().toLocaleDateString('tr-TR')}</p>
  `;
}
