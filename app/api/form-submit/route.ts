import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

// Validation schema
const contactFormSchema = z.object({
  name: z.string().min(2, 'İsim en az 2 karakter olmalıdır'),
  email: z.string().email('Geçerli bir e-posta adresi giriniz'),
  phone: z.string().optional(),
  message: z.string().min(10, 'Mesaj en az 10 karakter olmalıdır'),
  businessUnit: z.enum(['robotik', 'ai', 'enerji']).optional(),
});

const robotikFormSchema = z.object({
  parentName: z.string().min(2, 'Veli adı en az 2 karakter olmalıdır'),
  childName: z.string().min(2, 'Çocuk adı en az 2 karakter olmalıdır'),
  phone: z.string().min(10, 'Geçerli bir telefon numarası giriniz'),
  age: z.string().refine((val) => {
    const num = parseInt(val);
    return num >= 6 && num <= 18;
  }, 'Yaş 6-18 arasında olmalıdır'),
});

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

    // TODO: Implement email sending logic here
    // Example with Nodemailer (requires setup):
    // await sendEmail({
    //   to: process.env.SMTP_TO_EMAIL,
    //   subject: `Yeni Form: ${formType}`,
    //   html: generateEmailTemplate(validatedData, formType),
    // });

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
