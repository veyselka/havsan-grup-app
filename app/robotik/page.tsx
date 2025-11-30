'use client';

import { FadeIn, SlideUp } from '@/components/animations';
import { Button, Card, Modal } from '@/components/ui';
import { RobotikTrialForm } from '@/components/forms/RobotikTrialForm';
import { robotikVideos } from '@/lib/robotik-videos';
import { useState } from 'react';

export default function RobotikPage() {
  const [showTrialModal, setShowTrialModal] = useState(false);

  return (
    <main className="min-h-screen bg-robotik-bg">
      {/* Trial Form Modal */}
      <Modal
        isOpen={showTrialModal}
        onClose={() => setShowTrialModal(false)}
        title="Ücretsiz Deneme Dersi"
        size="lg"
      >
        <p className="mb-6 text-gray-600">
          Formu doldurun, çocuğunuz için ücretsiz deneme dersine katılın
        </p>
        <RobotikTrialForm onSuccess={() => setShowTrialModal(false)} />
      </Modal>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-robotik-primary to-robotik-accent px-6 py-20 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <FadeIn>
            <h1 className="mb-6 text-5xl font-bold text-white md:text-6xl lg:text-7xl">
              Robotik Kodlama
            </h1>
            <p className="mb-8 max-w-2xl text-xl text-white/90 md:text-2xl">
              Çocuklarınız için modern STEM ve robotik kodlama eğitimleri
            </p>
            <Button
              size="lg"
              className="bg-white text-robotik-primary hover:bg-white/90 shadow-lg hover:shadow-xl transition-all duration-300 font-semibold"
              onClick={() => setShowTrialModal(true)}
            >
              Ücretsiz Deneme Dersi
            </Button>
          </FadeIn>
        </div>

        {/* Decorative Elements */}
        <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
      </section>

      {/* Eğitim İçeriği Section */}
      <section className="bg-white px-6 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <SlideUp>
            <h2 className="mb-4 text-center text-4xl font-bold text-robotik-accent">
              Eğitimimizin İçeriği
            </h2>
            <p className="mb-12 text-center text-lg text-gray-600">
              Robotik kodlama dünyasında öğrencilerimizle birlikte geliştirdiğimiz projeler
            </p>
          </SlideUp>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <SlideUp delay={0.1}>
              <Card className="h-full p-6 hover:shadow-xl transition-shadow">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-robotik-primary/10">
                  <svg className="h-6 w-6 text-robotik-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                  </svg>
                </div>
                <h3 className="mb-3 text-xl font-semibold text-gray-900">
                  Arduino ve Sensörler
                </h3>
                <p className="text-gray-600">
                  Öğrencilerimiz Arduino platformu üzerinde çeşitli sensörlerin kullanımını öğreniyor. 
                  Mesafe, sıcaklık, ışık sensörleri ile gerçek dünya problemlerine çözümler üretiyoruz.
                </p>
              </Card>
            </SlideUp>

            <SlideUp delay={0.2}>
              <Card className="h-full p-6 hover:shadow-xl transition-shadow">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-robotik-primary/10">
                  <svg className="h-6 w-6 text-robotik-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <h3 className="mb-3 text-xl font-semibold text-gray-900">
                  Blok Tabanlı Kodlama
                </h3>
                <p className="text-gray-600">
                  Scratch ve mBlock gibi görsel programlama araçları ile kodlamaya başlıyoruz. 
                  Öğrenciler mantıksal düşünme becerilerini geliştirirken eğlenceli projeler oluşturuyorlar.
                </p>
              </Card>
            </SlideUp>

            <SlideUp delay={0.3}>
              <Card className="h-full p-6 hover:shadow-xl transition-shadow">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-robotik-primary/10">
                  <svg className="h-6 w-6 text-robotik-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="mb-3 text-xl font-semibold text-gray-900">
                  Akıllı Projeler
                </h3>
                <p className="text-gray-600">
                  Otomatik bahçe sulama sistemi, akıllı kapı kilidi, robot araba gibi IoT projeleri geliştiriyoruz. 
                  Her öğrenci kendi fikirlerini hayata geçiriyor.
                </p>
              </Card>
            </SlideUp>

            <SlideUp delay={0.4}>
              <Card className="h-full p-6 hover:shadow-xl transition-shadow">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-robotik-primary/10">
                  <svg className="h-6 w-6 text-robotik-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                  </svg>
                </div>
                <h3 className="mb-3 text-xl font-semibold text-gray-900">
                  Elektronik Devre Tasarımı
                </h3>
                <p className="text-gray-600">
                  LED'lerden motorlara, breadboard kullanımından devre tasarımına kadar elektronik dünyasını keşfediyoruz. 
                  Temel elektrik bilgisi ile güçlü projeler üretiyoruz.
                </p>
              </Card>
            </SlideUp>

            <SlideUp delay={0.5}>
              <Card className="h-full p-6 hover:shadow-xl transition-shadow">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-robotik-primary/10">
                  <svg className="h-6 w-6 text-robotik-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="mb-3 text-xl font-semibold text-gray-900">
                  Takım Çalışması
                </h3>
                <p className="text-gray-600">
                  Grup projeleri ile işbirliği ve problem çözme becerilerini geliştiriyoruz. 
                  Robotik kodlama yarışmalarına hazırlık yaparak öğrencilerimizi geleceğe hazırlıyoruz.
                </p>
              </Card>
            </SlideUp>

            <SlideUp delay={0.6}>
              <Card className="h-full p-6 hover:shadow-xl transition-shadow">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-robotik-primary/10">
                  <svg className="h-6 w-6 text-robotik-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="mb-3 text-xl font-semibold text-gray-900">
                  Yaratıcı Düşünme
                </h3>
                <p className="text-gray-600">
                  Robotik kodlama alanına ilgisi olan öğrencilerimizle birlikte hayal gücünü kullanarak yenilikçi projeler geliştiriyoruz. 
                  Her ders farklı bir maceradır.
                </p>
              </Card>
            </SlideUp>
          </div>
        </div>
      </section>

      {/* Video Gallery Section */}
      <section className="px-6 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <SlideUp>
            <h2 className="mb-4 text-4xl font-bold text-robotik-accent">
              Eğitim Videoları
            </h2>
            <p className="mb-12 text-lg text-gray-600">
              Öğrencilerimizin projelerinden ve eğitim süreçlerinden görüntüler
            </p>
          </SlideUp>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {robotikVideos.map((video, index) => (
              <SlideUp key={video.id} delay={index * 0.1}>
                <Card className="overflow-hidden">
                  <div className="aspect-[9/16] bg-gray-900">
                    <video
                      src={video.videoPath}
                      controls
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="h-full w-full object-cover"
                      aria-label={video.title}
                    >
                      <track kind="captions" />
                    </video>
                  </div>
                  <div className="p-4">
                    <h3 className="text-sm font-medium text-gray-900">
                      {video.title}
                    </h3>
                  </div>
                </Card>
              </SlideUp>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="px-6 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <SlideUp>
            <h2 className="mb-4 text-4xl font-bold text-robotik-accent">
              Lokasyonumuz
            </h2>
            <p className="mb-12 text-lg text-gray-600">
              Ataşehir, Şeyh Edibali Sk. No:36, 23040 Elazığ Merkez/Elazığ
            </p>
          </SlideUp>

          <Card className="overflow-hidden p-0">
            <div className="aspect-video bg-gray-200">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3078.8686543934726!2d39.22297!3d38.67773!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4076c0e6e8c8e8e7%3A0x8e8e8e8e8e8e8e8e!2sAta%C5%9Fehir%2C%20%C5%9Eeyh%20Edibali%20Sk.%20No%3A36%2C%2023040%20Elaz%C4%B1%C4%9F%20Merkez%2FElaz%C4%B1%C4%9F!5e0!3m2!1str!2str!4v1234567890123!5m2!1str!2str"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Havsan Robotik - Ataşehir, Şeyh Edibali Sk. No:36, Elazığ"
              ></iframe>
            </div>
          </Card>
        </div>
      </section>
    </main>
  );
}
