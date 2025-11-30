'use client';

import { FadeIn, SlideUp, StaggerContainer } from '@/components/animations';
import { Button, Card } from '@/components/ui';
import { useState } from 'react';
import { Modal, ModalBody, ModalFooter, ModalHeader } from '@/components/ui';
import Image from 'next/image';

export default function EnerjiPage() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [selectedService, setSelectedService] = useState<number | null>(null);

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
      detailedInfo: {
        overview: 'Güneş Enerji Santrali (GES) yatırımınızın maksimum verimlilikte çalışması için profesyonel bakım hizmetleri sunuyoruz. Deneyimli teknik ekibimiz ile santrallerinizin ömrünü uzatıyor, enerji üretimini optimize ediyoruz.',
        services: [
          {
            title: 'Periyodik Bakım',
            desc: 'Düzenli kontroller ile olası arızaları önceden tespit ediyoruz. İnverter, kablo bağlantıları, topraklama sistemleri ve tüm elektriksel ekipmanların kontrolü yapılır.',
          },
          {
            title: 'Performans İzleme',
            desc: 'Santral performansını sürekli izliyor, verimliliği düşüren faktörleri tespit edip çözüm öneriyoruz. Detaylı raporlama ile yatırımınızı takip edebilirsiniz.',
          },
          {
            title: 'Arıza Müdahalesi',
            desc: '7/24 teknik destek ile acil arıza durumlarında hızlı müdahale ediyoruz. Orijinal yedek parça garantisi ile uzun ömürlü çözümler sunuyoruz.',
          },
          {
            title: 'Modül Temizliği',
            desc: 'Özel ekipman ve çevre dostu kimyasallarla panel temizliği yapıyoruz. Düzenli temizlik ile %15-30 verim artışı sağlanır.',
          },
        ],
        benefits: [
          'Santral ömrünün uzaması',
          'Enerji üretiminde %15-30 verim artışı',
          'Arıza maliyetlerinde azalma',
          'Garanti sürelerinin korunması',
          'Profesyonel raporlama ve takip',
        ],
      },
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
      detailedInfo: {
        overview: 'Son teknoloji termal kameralı drone sistemlerimiz ile GES tesislerinizde hızlı ve etkili arıza tespiti yapıyoruz. Geleneksel yöntemlere göre %90 daha hızlı sonuç alıyoruz.',
        services: [
          {
            title: 'Termal Görüntüleme',
            desc: 'Yüksek çözünürlüklü termal kameralar ile panel sıcaklık haritası çıkarıyoruz. Sıcak noktalar (hot spots), çatlaklar ve bağlantı sorunları anında tespit edilir.',
          },
          {
            title: 'AI Destekli Analiz',
            desc: 'Yapay zeka algoritmaları ile termal görüntüler otomatik analiz ediliyor. Arıza türleri sınıflandırılıyor ve öncelik sıralaması yapılıyor.',
          },
          {
            title: 'Detaylı Raporlama',
            desc: 'Her panel için termal görüntü, GPS koordinatları ve arıza türü belirtilen detaylı rapor hazırlanır. Excel ve PDF formatında sunulur.',
          },
          {
            title: 'Periyodik Takip',
            desc: 'Düzenli termal tarama ile santral sağlığını izliyoruz. Performans değişimleri grafiklerle sunulur.',
          },
        ],
        benefits: [
          'Geleneksel yöntemlere göre %90 daha hızlı',
          'İnsan hatasının minimize edilmesi',
          'Geniş alanların kısa sürede taranması',
          'Detaylı ve profesyonel raporlama',
          'Erken arıza tespiti ile maliyet tasarrufu',
        ],
      },
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
      detailedInfo: {
        overview: 'Güneş panellerinin verimliliğini doğrudan etkileyen en önemli faktörlerden biri temizliktir. Profesyonel ekipman ve çevre dostu kimyasallarla panel temizliği yapıyoruz.',
        services: [
          {
            title: 'Robot ve Fırça Sistemleri',
            desc: 'Otomatik temizlik robotları ve özel fırça sistemleri ile panellerinizi çizmeden, zarar vermeden temizliyoruz. İnsan gücüne göre 10 kat daha hızlıdır.',
          },
          {
            title: 'Saf Su Teknolojisi',
            desc: 'Deiyonize edilmiş saf su kullanılarak panellerde leke ve iz bırakmadan temizlik yapılır. Kimyasal kalıntı oluşmaz.',
          },
          {
            title: 'Düzenli Bakım Programı',
            desc: 'Mevsimsel koşullara göre özel temizlik programları oluşturuyoruz. İlkbahar polen, sonbahar yaprak, kış kar temizliği.',
          },
          {
            title: 'Performans Ölçümü',
            desc: 'Temizlik öncesi ve sonrası performans ölçümü yapılır. Verim artışı %15-30 arasında olur.',
          },
        ],
        benefits: [
          '%15-30 verim artışı garantisi',
          'Panel ömrünün korunması',
          'Çevre dostu temizlik',
          'Hızlı ve etkili sonuç',
          'Düzenli bakım planlaması',
        ],
      },
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
      detailedInfo: {
        overview: 'GES projelerinizin her aşamasında profesyonel danışmanlık hizmeti sunuyoruz. Fizibilite çalışmasından devreye alma sonrası O&M süreçlerine kadar tam destek.',
        services: [
          {
            title: 'Fizibilite Çalışmaları',
            desc: 'Arazi analizi, güneş radyasyonu ölçümü, elektrik altyapısı incelemesi. Yatırım geri dönüş süresi hesaplaması ve raporlama.',
          },
          {
            title: 'Proje Tasarımı',
            desc: 'En uygun ekipman seçimi, sistem tasarımı, elektrik projeleri hazırlanması. PVsyst, AutoCAD ile profesyonel çizimler.',
          },
          {
            title: 'İhale ve Tedarik Desteği',
            desc: 'Tedarikçi seçimi, fiyat karşılaştırması, sözleşme yönetimi. En uygun fiyat ve kalitede ekipman temini.',
          },
          {
            title: 'Şantiye Takibi',
            desc: 'İnşaat aşamasında şantiye denetimi, kalite kontrol, iş güvenliği takibi. Düzenli fotoğraf ve video raporlama.',
          },
          {
            title: 'Devreye Alma',
            desc: 'Elektriksel testler, performans testleri, EPDK başvuru süreçleri. Resmi lisans alımı ve enerji satış anlaşmaları.',
          },
        ],
        benefits: [
          'Uzman kadro ile profesyonel destek',
          'Maliyet optimizasyonu',
          'Proje sürelerinde kısalma',
          'Risk yönetimi',
          'Tam süreç takibi',
        ],
      },
    },
  ];

  // Placeholder field images - will be fetched from Strapi
  const fieldImages = [
    {
      id: 1,
      title: 'GES Bakım Çalışması',
      description: 'Güneş enerji santralinde rutin bakım ve kontrol işlemleri',
      category: 'Bakım',
    },
    {
      id: 2,
      title: 'Drone Termal Görüntüleme',
      description: 'Termal kamera ile panel sıcaklık haritası çıkarma',
      category: 'Termal',
    },
    {
      id: 3,
      title: 'Panel Temizlik İşlemi',
      description: 'Robot sistemler ile panel temizliği uygulaması',
      category: 'Temizlik',
    },
    {
      id: 4,
      title: 'İnverter Kontrolü',
      description: 'İnverter sistemlerinin periyodik kontrolü ve bakımı',
      category: 'Bakım',
    },
    {
      id: 5,
      title: 'Kablo Bağlantı Kontrolü',
      description: 'Elektrik kablolarının ve bağlantı noktalarının testi',
      category: 'Bakım',
    },
    {
      id: 6,
      title: 'Performans Analizi',
      description: 'Santral performans ölçümü ve raporlama çalışması',
      category: 'Analiz',
    },
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section with Enerji Colors */}
      <section className="relative overflow-hidden px-6 py-20 lg:py-32">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1920&q=80"
            alt="Güneş Enerjisi"
            fill
            className="object-cover opacity-30"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-amber-500/60 via-orange-500/60 to-green-500/60" />
        </div>

        <div className="mx-auto max-w-7xl relative z-10">
          <FadeIn>
            <h1 className="mb-6 text-5xl font-bold text-white md:text-6xl lg:text-7xl drop-shadow-lg">
              Enerji Çözümleri
            </h1>
            <p className="mb-8 max-w-2xl text-xl text-white md:text-2xl drop-shadow-md">
              Yenilenebilir enerji sektöründe profesyonel bakım, izleme ve
              danışmanlık hizmetleri
            </p>
            <a
              href="https://wa.me/905347855957"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="bg-white text-enerji-orange hover:bg-gray-100"
              >
                Teklif Alın
              </Button>
            </a>
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
                        onClick={() => setSelectedService(index)}
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
              Güneş enerji santrallerinde gerçekleştirdiğimiz profesyonel hizmetlerden görüntüler
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
                    {/* Icon based on category */}
                    <div className="flex h-full items-center justify-center bg-gradient-to-br from-amber-100 to-orange-100">
                      <div className="text-center">
                        <div className="mb-3 text-6xl">
                          {image.category === 'Bakım' && '🔧'}
                          {image.category === 'Termal' && '🚁'}
                          {image.category === 'Temizlik' && '💧'}
                          {image.category === 'Analiz' && '📊'}
                        </div>
                        <div className="px-4">
                          <h3 className="font-semibold text-gray-900 mb-1">
                            {image.title}
                          </h3>
                          <p className="text-sm text-gray-600">
                            {image.category}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Overlay on Hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <div className="absolute bottom-4 left-4 right-4 text-white">
                        <p className="text-sm font-medium mb-1">{image.title}</p>
                        <p className="text-xs text-white/80">{image.description}</p>
                      </div>
                    </div>
                  </div>
                </Card>
              </SlideUp>
            ))}
          </div>

          {/* Info Cards */}
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <SlideUp delay={0.1}>
              <Card className="p-6 text-center bg-gradient-to-br from-amber-50 to-orange-50 border-2 border-amber-200">
                <div className="text-4xl mb-3">⚡</div>
                <h3 className="font-bold text-lg mb-2 text-gray-900">Hızlı Servis</h3>
                <p className="text-gray-600 text-sm">
                  Santrallerinizde oluşan arızalara 24 saat içinde müdahale ediyoruz
                </p>
              </Card>
            </SlideUp>

            <SlideUp delay={0.2}>
              <Card className="p-6 text-center bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200">
                <div className="text-4xl mb-3">🎯</div>
                <h3 className="font-bold text-lg mb-2 text-gray-900">Uzman Ekip</h3>
                <p className="text-gray-600 text-sm">
                  Sertifikalı teknik personelimiz ile profesyonel hizmet sunuyoruz
                </p>
              </Card>
            </SlideUp>

            <SlideUp delay={0.3}>
              <Card className="p-6 text-center bg-gradient-to-br from-blue-50 to-cyan-50 border-2 border-blue-200">
                <div className="text-4xl mb-3">📈</div>
                <h3 className="font-bold text-lg mb-2 text-gray-900">Verimlilik</h3>
                <p className="text-gray-600 text-sm">
                  Düzenli bakım ile santral verimliliğinde %20-30 artış sağlıyoruz
                </p>
              </Card>
            </SlideUp>
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

      {/* Service Detail Modal */}
      {selectedService !== null && (
        <Modal
          isOpen={selectedService !== null}
          onClose={() => setSelectedService(null)}
          size="xl"
          title={services[selectedService].title}
        >
          <div className="space-y-6 max-h-[70vh] overflow-y-auto pr-2">
            {/* Overview */}
            <div>
              <p className="text-lg text-gray-700 leading-relaxed">
                {services[selectedService].detailedInfo.overview}
              </p>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-2xl font-bold mb-4" style={{ color: services[selectedService].color }}>
                Hizmet Detayları
              </h3>
              <div className="grid gap-4 md:grid-cols-2">
                {services[selectedService].detailedInfo.services.map((item, idx) => (
                  <Card key={idx} className="p-4 hover:shadow-lg transition-shadow">
                    <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                      <span style={{ color: services[selectedService].color }}>•</span>
                      {item.title}
                    </h4>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </Card>
                ))}
              </div>
            </div>

            {/* Benefits */}
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-6">
              <h3 className="text-2xl font-bold mb-4" style={{ color: services[selectedService].color }}>
                Avantajlar
              </h3>
              <ul className="space-y-2">
                {services[selectedService].detailedInfo.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="font-bold" style={{ color: services[selectedService].color }}>✓</span>
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <div className="flex justify-center pt-4">
              <a
                href="https://wa.me/905347855957"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  className="bg-green-600 hover:bg-green-700 text-white shadow-lg"
                >
                  <span className="mr-2">📱</span>
                  Teklif Almak İçin İletişime Geçin
                </Button>
              </a>
            </div>
          </div>
        </Modal>
      )}

      {/* Lightbox Modal */}
      <Modal
        isOpen={selectedImage !== null}
        onClose={() => setSelectedImage(null)}
        size="xl"
        title={selectedImage ? fieldImages.find(img => img.id === selectedImage)?.title : ''}
      >
        <ModalBody>
          {selectedImage && (
            <div className="space-y-4">
              <div className="aspect-video bg-gradient-to-br from-amber-100 to-orange-100 rounded-lg flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="text-8xl mb-4">
                    {fieldImages.find(img => img.id === selectedImage)?.category === 'Bakım' && '🔧'}
                    {fieldImages.find(img => img.id === selectedImage)?.category === 'Termal' && '🚁'}
                    {fieldImages.find(img => img.id === selectedImage)?.category === 'Temizlik' && '💧'}
                    {fieldImages.find(img => img.id === selectedImage)?.category === 'Analiz' && '📊'}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {fieldImages.find(img => img.id === selectedImage)?.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {fieldImages.find(img => img.id === selectedImage)?.description}
                  </p>
                  <div className="inline-block bg-white px-4 py-2 rounded-full shadow-sm">
                    <span className="text-sm font-medium text-enerji-orange">
                      {fieldImages.find(img => img.id === selectedImage)?.category}
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6">
                <h4 className="font-semibold text-gray-900 mb-3">Hizmet Detayları</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-enerji-orange">•</span>
                    <span>Profesyonel ekipman ve sertifikalı personel ile gerçekleştirilen çalışmalar</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-enerji-orange">•</span>
                    <span>Tüm işlemler güvenlik standartlarına uygun olarak yapılmaktadır</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-enerji-orange">•</span>
                    <span>Detaylı raporlama ve dokümantasyon sağlanır</span>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </ModalBody>
        <ModalFooter>
          <a
            href="https://wa.me/905347855957"
            target="_blank"
            rel="noopener noreferrer"
            className="mr-3"
          >
            <Button className="bg-green-600 hover:bg-green-700 text-white">
              <span className="mr-2">📱</span>
              Teklif Al
            </Button>
          </a>
          <Button variant="outline" onClick={() => setSelectedImage(null)}>
            Kapat
          </Button>
        </ModalFooter>
      </Modal>
    </main>
  );
}
