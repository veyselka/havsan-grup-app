'use client';

import { FadeIn, SlideUp, StaggerContainer } from '@/components/animations';
import { Button, Card, Modal } from '@/components/ui';
import Image from 'next/image';
import { references } from '@/lib/references';
import { useState } from 'react';

export default function AIPage() {
  const [showGoogleModal, setShowGoogleModal] = useState(false);
  const services = [
    {
      title: 'ISO 27001',
      description: 'Bilgi güvenliği yönetim sistemi danışmanlığı',
      icon: '/images/iso/ISO 27001.jpg',
    },
    {
      title: 'KVKK',
      description: 'Kişisel verilerin korunması uyum hizmetleri',
      icon: '/images/iso/KKVK.jpg',
    },
    {
      title: 'Yazılım Geliştirme',
      description: 'Özel yazılım ve web uygulamaları geliştirme',
      icon: '💻',
    },
    {
      title: 'Yapay Zeka',
      description: 'Kurumsal AI çözümleri ve otomasyon',
      icon: '/images/iso/iso-42001-logo.webp',
    },
  ];

  return (
    <main className="min-h-screen">
      {/* Google Workspace Modal */}
      <Modal
        isOpen={showGoogleModal}
        onClose={() => setShowGoogleModal(false)}
        title="Google Workspace Kurulum Hizmetimiz"
        size="xl"
      >
        <div className="space-y-6 max-h-[70vh] overflow-y-auto pr-2">
          <p className="text-lg text-gray-700 leading-relaxed">
            Havsan Grup olarak, Google Workspace'in resmi iş ortağıyız. Kurumunuzun dijital dönüşümünde 
            size rehberlik ediyor, Google'ın güçlü bulut tabanlı araçlarını işinize en verimli şekilde entegre ediyoruz.
          </p>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
                <span className="text-2xl">📧</span>
                Gmail ve Kurumsal E-posta
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-google-blue mt-1">•</span>
                  <span>Kendi domain adınızla profesyonel e-posta adresleri</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-google-blue mt-1">•</span>
                  <span>Kullanıcı hesapları oluşturma ve yönetimi</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-google-blue mt-1">•</span>
                  <span>E-posta yönlendirme ve filtre ayarları</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-google-blue mt-1">•</span>
                  <span>Spam ve güvenlik ayarları</span>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
                <span className="text-2xl">📁</span>
                Google Drive ve Depolama
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-google-blue mt-1">•</span>
                  <span>Sınırsız bulut depolama alanı kurulumu</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-google-blue mt-1">•</span>
                  <span>Dosya paylaşım ve erişim yetkilendirmeleri</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-google-blue mt-1">•</span>
                  <span>Paylaşımlı sürücüler (Shared Drives) oluşturma</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-google-blue mt-1">•</span>
                  <span>Yedekleme ve sürüm kontrolü ayarları</span>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
                <span className="text-2xl">📅</span>
                Google Takvim
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-google-blue mt-1">•</span>
                  <span>Kurumsal takvim ve toplantı odası rezervasyonları</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-google-blue mt-1">•</span>
                  <span>Paylaşımlı takım takvimleri oluşturma</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-google-blue mt-1">•</span>
                  <span>Otomatik hatırlatıcı ve bildirim ayarları</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-google-blue mt-1">•</span>
                  <span>Çalışma saatleri ve izin yönetimi entegrasyonu</span>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
                <span className="text-2xl">🌐</span>
                Google Sites
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-google-blue mt-1">•</span>
                  <span>İç portal ve intranet siteleri oluşturma</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-google-blue mt-1">•</span>
                  <span>Proje sayfaları ve ekip sitesi tasarımı</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-google-blue mt-1">•</span>
                  <span>Şablon oluşturma ve özelleştirme</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-google-blue mt-1">•</span>
                  <span>Erişim kontrolü ve güvenlik ayarları</span>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
                <span className="text-2xl">📹</span>
                Google Meet
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-google-blue mt-1">•</span>
                  <span>Video konferans sistemi kurulumu</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-google-blue mt-1">•</span>
                  <span>Kayıt ve canlı yayın özelliklerini aktifleştirme</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-google-blue mt-1">•</span>
                  <span>Breakout rooms ve anket entegrasyonu</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-google-blue mt-1">•</span>
                  <span>Toplantı odası donanımı kurulumu</span>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
                <span className="text-2xl">⚙️</span>
                Yönetim ve Güvenlik
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-google-blue mt-1">•</span>
                  <span>Admin Console yönetimi ve kullanıcı eğitimi</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-google-blue mt-1">•</span>
                  <span>İki faktörlü kimlik doğrulama (2FA) kurulumu</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-google-blue mt-1">•</span>
                  <span>Veri kaybı önleme (DLP) politikaları</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-google-blue mt-1">•</span>
                  <span>Uyumluluk ve denetim raporları</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-r from-google-blue/10 to-google-green/10 rounded-lg p-6 mt-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Neden Havsan Grup?
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-google-green font-bold">✓</span>
                <span>Google Workspace sertifikalı uzman ekip</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-google-green font-bold">✓</span>
                <span>Ücretsiz danışmanlık ve ihtiyaç analizi</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-google-green font-bold">✓</span>
                <span>Kurulum sonrası 7/24 teknik destek</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-google-green font-bold">✓</span>
                <span>Personel eğitimleri ve kullanım kılavuzları</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-google-green font-bold">✓</span>
                <span>Eski sistemden veri taşıma hizmeti</span>
              </li>
            </ul>
          </div>

          <div className="flex justify-center pt-4">
            <a
              href="https://wa.me/905347855957"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="bg-green-600 hover:bg-green-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <span className="mr-2">📱</span>
                Bize WhatsApp'tan Ulaşın
              </Button>
            </a>
          </div>
        </div>
      </Modal>

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
            <a href="#services">
              <Button
                size="lg"
                className="bg-white text-ai-primary hover:bg-gray-100"
              >
                Hizmetlerimizi Keşfedin
              </Button>
            </a>
          </FadeIn>
        </div>

        <div className="absolute -right-20 -top-20 h-96 w-96 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 h-96 w-96 rounded-full bg-white/10 blur-3xl" />
      </section>

      {/* Services Grid */}
      <section id="services" className="bg-gray-50 px-6 py-16 lg:py-24">
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
                    <div className="mb-4 flex h-20 items-center justify-center">
                      {service.icon.startsWith('/') ? (
                        <Image
                          src={service.icon}
                          alt={service.title}
                          width={80}
                          height={80}
                          className="object-contain"
                        />
                      ) : (
                        <span className="text-5xl">{service.icon}</span>
                      )}
                    </div>
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
                <Button 
                  className="bg-ai-primary hover:bg-ai-primary/90"
                  onClick={() => setShowGoogleModal(true)}
                >
                  Detaylı Bilgi
                </Button>
              </div>
            </SlideUp>

            <SlideUp delay={0.2}>
              <Card className="bg-gradient-to-br from-google-blue/10 to-google-green/10 p-8 flex items-center justify-center">
                <div className="flex h-full w-full items-center justify-center">
                  <Image
                    src="/images/google/google workspace.png"
                    alt="Google Workspace Authorized Partner"
                    width={500}
                    height={250}
                    className="object-contain"
                  />
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

          {/* Scrolling logo carousel */}
          <div className="relative overflow-hidden">
            <div className="flex gap-12 py-8 animate-scroll">
              {references.concat(references).map((reference, index) => (
                <Card
                  key={index}
                  className="flex min-w-[200px] shrink-0 items-center justify-center transition-all hover:scale-105"
                >
                  <div className="p-6">
                    <Image
                      src={reference.logo}
                      alt={reference.name}
                      width={150}
                      height={80}
                      className="object-contain"
                    />
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
              <a 
                href="/documents/brochures/HAVSAN Enterprise Yapay Zeka Programı Kurumsal.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" size="sm">
                  PDF İndir
                </Button>
              </a>
            </Card>

            <Card className="hover:shadow-xl">
              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Kurumsal AI Çözümleri
              </h3>
              <p className="mb-4 text-gray-600">
                İşletmenize özel yapay zeka çözümleri
              </p>
              <a 
                href="/documents/brochures/HAVSAN Kurumsal YZ Çözümleri.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" size="sm">
                  PDF İndir
                </Button>
              </a>
            </Card>

            <Card className="hover:shadow-xl">
              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Kurumsal Çözüm Kataloğu
              </h3>
              <p className="mb-4 text-gray-600">
                Tüm hizmetlerimizi inceleyin
              </p>
              <a 
                href="/documents/brochures/HAVSAN Kurumsal Çözüm Kataloğu TR.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" size="sm">
                  PDF İndir
                </Button>
              </a>
            </Card>
          </div>
        </div>
      </section>
    </main>
  );
}
