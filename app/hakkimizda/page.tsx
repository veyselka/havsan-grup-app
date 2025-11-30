'use client';

import { FadeIn, SlideUp, StaggerContainer } from '@/components/animations';
import { Card } from '@/components/ui';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function HakkimizdaPage() {
  const stats = [
    { number: '2015', label: 'Kuruluş Yılı' },
    { number: '500+', label: 'Mutlu Müşteri' },
    { number: '1000+', label: 'Tamamlanan Proje' },
    { number: '7/24', label: 'Teknik Destek' },
  ];

  const values = [
    {
      icon: '🎯',
      title: 'Müşteri Odaklılık',
      description: 'Müşterilerimizin ihtiyaçlarını anlıyor, onlara özel çözümler sunuyoruz.',
    },
    {
      icon: '🚀',
      title: 'İnovasyon',
      description: 'Sürekli gelişen teknolojileri takip ediyor, yenilikçi çözümler üretiyoruz.',
    },
    {
      icon: '🤝',
      title: 'Güvenilirlik',
      description: 'İş ortaklarımızla uzun soluklu, güven temelli ilişkiler kuruyoruz.',
    },
    {
      icon: '⚡',
      title: 'Verimlilik',
      description: 'Hızlı ve etkili çözümlerle işlerinizi kolaylaştırıyoruz.',
    },
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 px-6 py-20 lg:py-32">
        <div className="mx-auto max-w-7xl relative z-10">
          <FadeIn>
            <h1 className="mb-6 text-5xl font-bold text-white md:text-6xl lg:text-7xl text-center">
              Hakkımızda
            </h1>
            <p className="mb-8 max-w-3xl mx-auto text-xl text-white/90 md:text-2xl text-center">
              2015 yılından beri teknoloji ile geleceği inşa ediyoruz
            </p>
          </FadeIn>
        </div>

        {/* Decorative Elements */}
        <div className="absolute -right-20 -top-20 h-96 w-96 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 h-96 w-96 rounded-full bg-white/10 blur-3xl" />
      </section>

      {/* Stats Section */}
      <section className="bg-white px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat, index) => (
              <SlideUp key={index} delay={index * 0.1}>
                <motion.div
                  className="text-center"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="mb-2 text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </motion.div>
              </SlideUp>
            ))}
          </div>
        </div>
      </section>

      {/* Vizyon & Misyon */}
      <section className="px-6 py-16 lg:py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-2">
            <SlideUp>
              <Card className="h-full p-8 bg-gradient-to-br from-blue-50 to-purple-50 border-2 border-blue-200 hover:shadow-2xl transition-all duration-300">
                <div className="mb-4 text-6xl">🎯</div>
                <h2 className="mb-4 text-3xl font-bold text-gray-900">
                  Vizyonumuz
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Türkiye'nin önde gelen teknoloji şirketlerinden biri olarak, 
                  robotik kodlamadan yapay zekaya, enerji çözümlerinden yazılıma kadar 
                  geniş bir yelpazede hizmet veren, yenilikçi ve güvenilir bir marka olmak. 
                  Geleceğin teknolojilerini bugünden şekillendirerek, topluma ve ekonomiye 
                  değer katan bir ekosistem yaratmak.
                </p>
              </Card>
            </SlideUp>

            <SlideUp delay={0.2}>
              <Card className="h-full p-8 bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-200 hover:shadow-2xl transition-all duration-300">
                <div className="mb-4 text-6xl">🚀</div>
                <h2 className="mb-4 text-3xl font-bold text-gray-900">
                  Misyonumuz
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Müşterilerimize en yüksek kalitede teknoloji çözümleri sunarak, 
                  işlerini dijitalleştirmelerine ve rekabet avantajı elde etmelerine 
                  yardımcı olmak. Çocuklarımıza 21. yüzyıl becerilerini kazandırarak 
                  geleceğin liderlerini yetiştirmek. Sürdürülebilir enerji çözümleriyle 
                  çevreye duyarlı bir gelecek inşa etmek.
                </p>
              </Card>
            </SlideUp>
          </div>
        </div>
      </section>

      {/* İş Kollarımız */}
      <section className="px-6 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <SlideUp>
            <h2 className="mb-4 text-center text-4xl font-bold text-gray-900">
              İş Kollarımız
            </h2>
            <p className="mb-12 text-center text-lg text-gray-600">
              Üç ana alanda uzman ekibimizle hizmet veriyoruz
            </p>
          </SlideUp>

          <StaggerContainer staggerDelay={0.15}>
            <div className="grid gap-8 md:grid-cols-3">
              <SlideUp>
                <motion.div
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="h-full p-8 hover:shadow-2xl transition-all duration-300 border-t-4 border-robotik-primary">
                    <div className="mb-4 text-5xl">🤖</div>
                    <h3 className="mb-3 text-2xl font-bold text-robotik-primary">
                      Robotik Kodlama
                    </h3>
                    <p className="text-gray-700 mb-4">
                      6-18 yaş arası öğrencilere Arduino, Raspberry Pi ve robotik kodlama 
                      eğitimleri veriyoruz. STEM eğitimi ile geleceğin teknoloji liderlerini yetiştiriyoruz.
                    </p>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-start gap-2">
                        <span className="text-robotik-primary">✓</span>
                        <span>Arduino ve sensör uygulamaları</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-robotik-primary">✓</span>
                        <span>Blok tabanlı kodlama</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-robotik-primary">✓</span>
                        <span>Proje bazlı öğrenme</span>
                      </li>
                    </ul>
                  </Card>
                </motion.div>
              </SlideUp>

              <SlideUp delay={0.15}>
                <motion.div
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="h-full p-8 hover:shadow-2xl transition-all duration-300 border-t-4 border-ai-primary">
                    <div className="mb-4 text-5xl">🧠</div>
                    <h3 className="mb-3 text-2xl font-bold text-ai-primary">
                      AI & Yazılım
                    </h3>
                    <p className="text-gray-700 mb-4">
                      Google Workspace resmi iş ortağı olarak kurumsal çözümler, 
                      yapay zeka uygulamaları ve özel yazılım geliştirme hizmetleri sunuyoruz.
                    </p>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-start gap-2">
                        <span className="text-ai-primary">✓</span>
                        <span>Google Workspace kurulumu</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-ai-primary">✓</span>
                        <span>Yapay zeka entegrasyonu</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-ai-primary">✓</span>
                        <span>ISO 27001 & KVKK danışmanlığı</span>
                      </li>
                    </ul>
                  </Card>
                </motion.div>
              </SlideUp>

              <SlideUp delay={0.3}>
                <motion.div
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="h-full p-8 hover:shadow-2xl transition-all duration-300 border-t-4 border-enerji-primary">
                    <div className="mb-4 text-5xl">⚡</div>
                    <h3 className="mb-3 text-2xl font-bold text-enerji-primary">
                      Enerji Çözümleri
                    </h3>
                    <p className="text-gray-700 mb-4">
                      Güneş enerji santralleri için drone termal görüntüleme, 
                      panel temizleme ve bakım hizmetleri ile sürdürülebilir enerji destekliyoruz.
                    </p>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-start gap-2">
                        <span className="text-enerji-primary">✓</span>
                        <span>GES bakım ve onarım</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-enerji-primary">✓</span>
                        <span>Drone termal görüntüleme</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-enerji-primary">✓</span>
                        <span>Panel temizleme hizmetleri</span>
                      </li>
                    </ul>
                  </Card>
                </motion.div>
              </SlideUp>
            </div>
          </StaggerContainer>
        </div>
      </section>

      {/* Değerlerimiz */}
      <section className="bg-gray-50 px-6 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <SlideUp>
            <h2 className="mb-4 text-center text-4xl font-bold text-gray-900">
              Değerlerimiz
            </h2>
            <p className="mb-12 text-center text-lg text-gray-600">
              Çalışma prensiplerimizdeki temel değerler
            </p>
          </SlideUp>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <SlideUp key={index} delay={index * 0.1}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <Card className="h-full p-6 text-center hover:shadow-xl transition-all duration-300">
                    <div className="mb-4 text-5xl">{value.icon}</div>
                    <h3 className="mb-3 text-xl font-bold text-gray-900">
                      {value.title}
                    </h3>
                    <p className="text-gray-600">{value.description}</p>
                  </Card>
                </motion.div>
              </SlideUp>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-20">
        <div className="mx-auto max-w-4xl text-center relative z-10">
          <SlideUp>
            <h2 className="mb-6 text-4xl font-bold text-white md:text-5xl">
              Birlikte Çalışmaya Hazır mısınız?
            </h2>
            <p className="mb-8 text-xl text-white/90">
              Projeleriniz için profesyonel destek almak istiyorsanız, 
              hemen bizimle iletişime geçin.
            </p>
            <motion.a
              href="/iletisim"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              <button className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl">
                Hemen İletişime Geçin
              </button>
            </motion.a>
          </SlideUp>
        </div>

        <div className="absolute -right-20 -top-20 h-96 w-96 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 h-96 w-96 rounded-full bg-white/10 blur-3xl" />
      </section>
    </main>
  );
}
