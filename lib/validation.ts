import { z } from 'zod';

// Contact Form Schema
export const contactFormSchema = z.object({
  name: z.string().min(2, 'İsim en az 2 karakter olmalıdır'),
  email: z.string().email('Geçerli bir e-posta adresi giriniz'),
  phone: z.string().optional(),
  message: z.string().min(10, 'Mesaj en az 10 karakter olmalıdır'),
  businessUnit: z.enum(['robotik', 'ai', 'enerji']).optional(),
});

// Robotik Form Schema
export const robotikFormSchema = z.object({
  parentName: z.string().min(2, 'Veli adı en az 2 karakter olmalıdır'),
  childName: z.string().min(2, 'Çocuk adı en az 2 karakter olmalıdır'),
  phone: z.string().min(10, 'Geçerli bir telefon numarası giriniz'),
  age: z.string().refine((val) => {
    const num = parseInt(val);
    return num >= 6 && num <= 18;
  }, 'Yaş 6-18 arasında olmalıdır'),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
export type RobotikFormData = z.infer<typeof robotikFormSchema>;
