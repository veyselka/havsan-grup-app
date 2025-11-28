'use client';

import { FadeIn, SlideUp, StaggerContainer } from '@/components/animations';
import { Button, Card } from '@/components/ui';
import Image from 'next/image';

export default function AIPage() {
  const services = [
    {
      title: 'ISO 27001',
      description: 'Bilgi güvenliği yönetim sistemi danışmanlığı',
      icon: '🔒',
    },
    {
      title: 'KVKK',
      description: 'Kişisel verilerin korunması uyum hizmetleri',
      icon: '🛡️',
    },
    {
      title: 'Yazılım Geliştirme',
      description: 'Özel yazılım ve web uygulamaları geliştirme',
      icon: '💻',
    },
    {
      title: 'Yapay Zeka',
      description: 'Kurumsal AI çözümleri ve otomasyon',
      icon: '🤖',
    },
  ];

  // Placeholder partner logos - will be fetched from Strapi
  const partners = [
    'Akdağ Grup',
    'Ardahan Üniversitesi',
    'Arslanlı Grup',
    'Çukurova Üniversitesi',
    'Eti Bakır',
    'Kolin Holding',
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section with Gradient */}
      <section
        className="relative overflow-hidden px-6 py-20 lg:py-32"
        style={{
          background: 'linear-gradient(135deg, #4E85EB 0%, #D9666F 100%)',
        }}
      >
        <div className="mx-auto max-w-7xl">
          <FadeIn>
            <h1 className="mb-6 text-5xl font-bold text-white md:text-6xl lg:text-7xl">
              AI & Yazılım
            </h1>
            <p className="mb-8 max-w-2xl text-xl text-white/90 md:text-2xl">
              Kurumsal yapay zeka ve yazılım geliştirme çözümleri ile
              işletmenizi geleceğe taşıyın
            </p>
            <Button
              size="lg"
              className="bg-white text-ai-primary hover:bg-gray-100"
            >
              Hizmetlerimizi Keşfedin
            </Button>
          </FadeIn>
        </div>

        <div className="absolute -right-20 -top-20 h-96 w-96 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 h-96 w-96 rounded-full bg-white/10 blur-3xl" />
      </section>

      {/* Services Grid */}
      <section className="bg-gray-50 px-6 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <SlideUp>
            <h2 className="mb-4 text-4xl font-bold text-ai-primary">
              Hizmetlerimiz
            </h2>
            <p className="mb-12 text-lg text-gray-600">
              Kurumunuza özel, güvenli ve ölçeklenebilir çözümler
            </p>
          </SlideUp>

          <StaggerContainer staggerDelay={0.1}>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {services.map((service, index) => (
                <SlideUp key={index}>
                  <Card className="h-full transition-all hover:shadow-xl">
                    <div className="mb-4 text-5xl">{service.icon}</div>
                    <h3 className="mb-2 text-xl font-semibold text-gray-900">
                      {service.title}
                    </h3>
                    <p className="text-gray-600">{service.description}</p>
                  </Card>
                </SlideUp>
              ))}
            </div>
          </StaggerContainer>
        </div>
      </section>

      {/* Google Workspace Partner Section */}
      <section className="px-6 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <SlideUp>
              <div>
                <h2 className="mb-4 text-4xl font-bold text-ai-primary">
                  Google Workspace Partner
                </h2>
                <p className="mb-6 text-lg text-gray-600">
                  Resmi Google Workspace iş ortağı olarak kurumunuza bulut
                  tabanlı iş birliği araçlarını entegre ediyoruz.
                </p>
                <ul className="mb-8 space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-google-green">✓</span>
                    <span className="text-gray-700">
                      Gmail, Drive, Meet ve tüm Google uygulamaları
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-google-green">✓</span>
                    <span className="text-gray-700">
                      Kurumsal e-posta ve özel domain
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-google-green">✓</span>
                    <span className="text-gray-700">
                      7/24 teknik destek ve eğitim
                    </span>
                  </li>
                </ul>
                <Button className="bg-ai-primary hover:bg-ai-primary/90">
                  Detaylı Bilgi
                </Button>
              </div>
            </SlideUp>

            <SlideUp delay={0.2}>
              <Card className="bg-gradient-to-br from-google-blue/10 to-google-green/10 p-8">
                <div className="flex h-64 items-center justify-center text-gray-400">
                  {/* TODO: Google Workspace logo/badge */}
                  <div className="text-center">
                    <div className="mb-4 text-6xl">🎯</div>
                    <p className="text-lg font-semibold text-gray-700">
                      Google Workspace
                    </p>
                    <p className="text-sm text-gray-600">Authorized Partner</p>
                  </div>
                </div>
              </Card>
            </SlideUp>
          </div>
        </div>
      </section>

      {/* References Carousel */}
      <section className="bg-gray-50 px-6 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <SlideUp>
            <h2 className="mb-4 text-center text-4xl font-bold text-ai-primary">
              Referanslarımız
            </h2>
            <p className="mb-12 text-center text-lg text-gray-600">
              Güvenilir kurumlarla çalışıyoruz
            </p>
          </SlideUp>

          {/* Placeholder for logo carousel - will be dynamic from Strapi */}
          <div className="relative overflow-hidden">
            <div className="flex gap-12 py-8">
              {partners.map((partner, index) => (
                <Card
                  key={index}
                  className="flex min-w-[200px] items-center justify-center grayscale transition-all hover:grayscale-0"
                >
                  <div className="p-6 text-center font-semibold text-gray-600">
                    {partner}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Training Calendar Section */}
      <section className="px-6 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <SlideUp>
            <h2 className="mb-4 text-4xl font-bold text-ai-primary">
              Eğitim Programları
            </h2>
            <p className="mb-12 text-lg text-gray-600">
              Kurumsal AI ve yazılım eğitimlerimiz
            </p>
          </SlideUp>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card className="hover:shadow-xl">
              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Yapay Zeka 101
              </h3>
              <p className="mb-4 text-gray-600">
                AI temellerini öğrenin ve işinize entegre edin
              </p>
              <Button variant="outline" size="sm">
                Detaylar
              </Button>
            </Card>

            <Card className="hover:shadow-xl">
              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Veri Güvenliği
              </h3>
              <p className="mb-4 text-gray-600">
                ISO 27001 ve KVKK uyumluluk eğitimi
              </p>
              <Button variant="outline" size="sm">
                Detaylar
              </Button>
            </Card>

            <Card className="hover:shadow-xl">
              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Yazılım Geliştirme
              </h3>
              <p className="mb-4 text-gray-600">
                Modern web ve mobil uygulama geliştirme
              </p>
              <Button variant="outline" size="sm">
                Detaylar
              </Button>
            </Card>
          </div>
        </div>
      </section>
    </main>
  );
}
