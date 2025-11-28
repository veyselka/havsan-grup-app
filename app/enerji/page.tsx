'use client';

import { FadeIn, SlideUp, StaggerContainer } from '@/components/animations';
import { Button, Card } from '@/components/ui';
import { useState } from 'react';
import { Modal, ModalBody, ModalFooter, ModalHeader } from '@/components/ui';

export default function EnerjiPage() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const services = [
    {
      title: 'GES Bakım',
      description:
        'Güneş enerjisi santrallerinin periyodik bakım ve onarım hizmetleri',
      icon: '☀️',
      color: '#F3C242',
      features: [
        'Periyodik bakım',
        'Arıza tespiti',
        'Performans analizi',
        'Teknik raporlama',
      ],
    },
    {
      title: 'Drone Termal İzleme',
      description:
        'Termal kamera ile güneş panellerinde arıza tespiti ve performans kontrolü',
      icon: '🚁',
      color: '#F99F1B',
      features: [
        'Termal görüntüleme',
        'Hızlı arıza tespiti',
        'Detaylı raporlama',
        'Maliyet tasarrufu',
      ],
    },
    {
      title: 'Panel Temizliği',
      description:
        'Profesyonel ekipmanlarla güneş paneli temizlik hizmetleri',
      icon: '💧',
      color: '#00A786',
      features: [
        'Özel ekipman',
        'Çevre dostu ürünler',
        'Düzenli temizlik',
        'Verim artışı',
      ],
    },
    {
      title: 'Teknik Danışmanlık',
      description:
        'Enerji sektörüne yönelik teknik danışmanlık ve proje yönetimi',
      icon: '📊',
      color: '#009CC9',
      features: [
        'Proje yönetimi',
        'Teknik analiz',
        'Maliyet optimizasyonu',
        'Kalite kontrol',
      ],
    },
  ];

  // Placeholder field images - will be fetched from Strapi
  const fieldImages = Array.from({ length: 6 }, (_, i) => ({
    id: i + 1,
    title: `Saha Çalışması ${i + 1}`,
    description: 'Gerçekleştirdiğimiz projelerden görüntüler',
  }));

  return (
    <main className="min-h-screen">
      {/* Hero Section with Enerji Colors */}
      <section
        className="relative overflow-hidden px-6 py-20 lg:py-32"
        style={{
          background:
            'linear-gradient(135deg, #F3C242 0%, #F99F1B 50%, #00A786 100%)',
        }}
      >
        <div className="mx-auto max-w-7xl">
          <FadeIn>
            <h1 className="mb-6 text-5xl font-bold text-white md:text-6xl lg:text-7xl">
              Enerji Çözümleri
            </h1>
            <p className="mb-8 max-w-2xl text-xl text-white/90 md:text-2xl">
              Yenilenebilir enerji sektöründe profesyonel bakım, izleme ve
              danışmanlık hizmetleri
            </p>
            <Button
              size="lg"
              className="bg-white text-enerji-orange hover:bg-gray-100"
            >
              Teklif Alın
            </Button>
          </FadeIn>
        </div>

        <div className="absolute -right-20 -top-20 h-96 w-96 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 h-96 w-96 rounded-full bg-white/10 blur-3xl" />
      </section>

      {/* Services Grid */}
      <section className="px-6 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <SlideUp>
            <h2 className="mb-4 text-4xl font-bold text-enerji-orange">
              Hizmetlerimiz
            </h2>
            <p className="mb-12 text-lg text-gray-600">
              Enerji sektörüne özel profesyonel çözümler
            </p>
          </SlideUp>

          <StaggerContainer staggerDelay={0.15}>
            <div className="grid gap-8 md:grid-cols-2">
              {services.map((service, index) => (
                <SlideUp key={index}>
                  <Card className="group relative h-full overflow-hidden transition-all hover:shadow-2xl">
                    {/* Gradient Overlay */}
                    <div
                      className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-10"
                      style={{
                        background: `radial-gradient(circle at top left, ${service.color}, transparent)`,
                      }}
                    />

                    <div className="relative">
                      <div className="mb-4 flex items-center gap-4">
                        <div className="text-6xl">{service.icon}</div>
                        <div>
                          <h3
                            className="text-2xl font-bold"
                            style={{ color: service.color }}
                          >
                            {service.title}
                          </h3>
                        </div>
                      </div>

                      <p className="mb-6 text-gray-600">
                        {service.description}
                      </p>

                      {/* Features List */}
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span
                              className="mt-1"
                              style={{ color: service.color }}
                            >
                              ✓
                            </span>
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>

                      <Button
                        className="mt-6"
                        variant="outline"
                        style={{ borderColor: service.color, color: service.color }}
                      >
                        Detaylı Bilgi
                      </Button>
                    </div>
                  </Card>
                </SlideUp>
              ))}
            </div>
          </StaggerContainer>
        </div>
      </section>

      {/* Field Photos Gallery */}
      <section className="bg-gray-50 px-6 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <SlideUp>
            <h2 className="mb-4 text-4xl font-bold text-enerji-orange">
              Saha Çalışmalarımız
            </h2>
            <p className="mb-12 text-lg text-gray-600">
              Gerçekleştirdiğimiz projelerden görüntüler
            </p>
          </SlideUp>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {fieldImages.map((image, index) => (
              <SlideUp key={image.id} delay={index * 0.1}>
                <Card
                  className="group cursor-pointer overflow-hidden p-0 transition-all hover:shadow-xl"
                  onClick={() => setSelectedImage(image.id)}
                >
                  <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-enerji-polisilikon/20 to-enerji-emerald/20">
                    {/* Placeholder - will be replaced with actual images */}
                    <div className="flex h-full items-center justify-center">
                      <div className="text-center">
                        <div className="mb-2 text-4xl">📸</div>
                        <p className="text-sm text-gray-600">
                          {image.title}
                        </p>
                      </div>
                    </div>

                    {/* Overlay on Hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <div className="absolute bottom-4 left-4 right-4 text-white">
                        <p className="text-sm">{image.description}</p>
                      </div>
                    </div>
                  </div>
                </Card>
              </SlideUp>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Details Accordion */}
      <section className="px-6 py-16 lg:py-24">
        <div className="mx-auto max-w-4xl">
          <SlideUp>
            <h2 className="mb-4 text-center text-4xl font-bold text-enerji-orange">
              Teknik Detaylar
            </h2>
            <p className="mb-12 text-center text-lg text-gray-600">
              Hizmetlerimiz hakkında detaylı bilgi
            </p>
          </SlideUp>

          <div className="space-y-4">
            {[
              {
                title: 'GES Bakım Süreçleri',
                content:
                  'Periyodik kontroller, inverter bakımı, panel temizliği ve performans testlerini içeren kapsamlı bakım programları sunuyoruz.',
              },
              {
                title: 'Drone Teknolojisi',
                content:
                  'Son teknoloji termal kameralar ile donalı dronelarımız sayesinde hızlı ve etkili arıza tespiti yapıyoruz.',
              },
              {
                title: 'Kalite Standartları',
                content:
                  'Tüm hizmetlerimiz uluslararası kalite standartlarına uygun olarak gerçekleştirilmektedir.',
              },
            ].map((item, index) => (
              <Card
                key={index}
                className="cursor-pointer transition-all hover:shadow-lg"
              >
                <h3 className="mb-2 text-xl font-semibold text-enerji-orange">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.content}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <Modal
        isOpen={selectedImage !== null}
        onClose={() => setSelectedImage(null)}
        size="xl"
        title={`Saha Çalışması ${selectedImage}`}
      >
        <ModalBody>
          <div className="aspect-video bg-gradient-to-br from-enerji-polisilikon/20 to-enerji-emerald/20">
            <div className="flex h-full items-center justify-center">
              <p className="text-gray-500">
                {/* Full size image will be loaded here */}
                Görsel yükleniyor...
              </p>
            </div>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button variant="outline" onClick={() => setSelectedImage(null)}>
            Kapat
          </Button>
        </ModalFooter>
      </Modal>
    </main>
  );
}
