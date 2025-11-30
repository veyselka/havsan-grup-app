'use client';

import { useState } from 'react';
import { Container } from '@/components/ui';
import { Input, Textarea, Button } from '@/components/ui';
import { useToast } from '@/components/ui';
import { Mail, Phone, MapPin } from 'lucide-react';
import { Metadata } from 'next';

export default function IletisimPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { showToast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    
    // Honeypot spam protection
    const honeypot = formData.get('website');
    if (honeypot) {
      // Bot detected, silently reject
      setIsSubmitting(false);
      showToast('Mesajınız başarıyla gönderildi!', 'success');
      (e.target as HTMLFormElement).reset();
      return;
    }

    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      message: formData.get('message'),
      _subject: 'Yeni İletişim Formu Mesajı - Havsan Web',
    };

    try {
      const response = await fetch('https://formspree.io/f/mblvnory', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        showToast('Mesajınız başarıyla gönderildi!', 'success');
        (e.target as HTMLFormElement).reset();
      } else {
        showToast('Bir hata oluştu. Lütfen tekrar deneyin.', 'error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      showToast('Bağlantı hatası. Lütfen daha sonra tekrar deneyin.', 'error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      <Container className="py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-google-blue via-google-red to-google-yellow bg-clip-text text-transparent mb-4">
              İletişim
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Sorularınız veya projeleriniz için bizimle iletişime geçin. Size en kısa sürede dönüş yapacağız.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-white/20 hover:shadow-google-blue/10 transition-shadow duration-300">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">Mesaj Gönderin</h2>
              <form onSubmit={handleSubmit} className="space-y-6" aria-label="İletişim formu">
                {/* Honeypot field - hidden from users */}
                <input
                  type="text"
                  name="website"
                  tabIndex={-1}
                  autoComplete="off"
                  style={{
                    position: 'absolute',
                    left: '-9999px',
                    width: '1px',
                    height: '1px',
                    opacity: 0,
                  }}
                  aria-hidden="true"
                />
                <Input
                  name="name"
                  label="Ad Soyad"
                  placeholder="Adınız ve soyadınız"
                  required
                />
                <Input
                  name="email"
                  type="email"
                  label="E-posta"
                  placeholder="ornek@email.com"
                  required
                />
                <Input
                  name="phone"
                  type="tel"
                  label="Telefon"
                  placeholder="05XX XXX XX XX"
                />
                <Textarea
                  name="message"
                  label="Mesajınız"
                  placeholder="Mesajınızı buraya yazın..."
                  rows={6}
                  required
                />
                <Button
                  type="submit"
                  variant="primary"
                  className="w-full"
                  isLoading={isSubmitting}
                >
                  {isSubmitting ? 'Gönderiliyor...' : 'Gönder'}
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-white/20 hover:shadow-google-red/10 transition-shadow duration-300">
                <h2 className="text-2xl font-bold mb-6 text-gray-800">İletişim Bilgileri</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4 group">
                    <div className="w-14 h-14 bg-gradient-to-br from-google-blue to-google-blue/70 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1 text-gray-800">Telefon</h3>
                      <p className="text-gray-600">+90 534 785 59 57</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group">
                    <div className="w-14 h-14 bg-gradient-to-br from-google-red to-google-red/70 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1 text-gray-800">E-posta</h3>
                      <p className="text-gray-600">bilgi@havsanrobotik.com.tr</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group">
                    <div className="w-14 h-14 bg-gradient-to-br from-google-green to-google-green/70 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1 text-gray-800">Genel Merkez</h3>
                      <p className="text-gray-600">
                        Ankara, Yenimahalle
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-google-yellow/20 to-google-yellow/10 backdrop-blur-sm rounded-3xl shadow-xl p-8 border border-google-yellow/30">
                <h3 className="text-xl font-bold mb-4 text-gray-800">Çalışma Saatleri</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-gray-700">Hafta İçi:</span>
                    <span className="text-gray-600">11:00 - 17:00</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-gray-700">Hafta Sonu:</span>
                    <span className="text-gray-600">09:00 - 18:00</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}
