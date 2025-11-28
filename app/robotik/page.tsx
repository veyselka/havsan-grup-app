'use client';

import { FadeIn, SlideUp } from '@/components/animations';
import { Button, Card, Input } from '@/components/ui';
import { useState } from 'react';

export default function RobotikPage() {
  const [formData, setFormData] = useState({
    parentName: '',
    childName: '',
    phone: '',
    age: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Form submission logic
    console.log('Form submitted:', formData);
  };

  return (
    <main className="min-h-screen bg-robotik-bg">
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
              className="bg-robotik-cta text-robotik-accent hover:bg-robotik-cta/90"
            >
              Ücretsiz Deneme Dersi
            </Button>
          </FadeIn>
        </div>

        {/* Decorative Elements */}
        <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
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
            {/* Placeholder for YouTube Shorts - Will be populated from Strapi */}
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <SlideUp key={item} delay={item * 0.1}>
                <Card className="overflow-hidden">
                  <div className="aspect-[9/16] bg-gray-200">
                    {/* TODO: YouTube embed will go here */}
                    <div className="flex h-full items-center justify-center text-gray-400">
                      Video {item}
                    </div>
                  </div>
                </Card>
              </SlideUp>
            ))}
          </div>
        </div>
      </section>

      {/* Free Trial Form Section */}
      <section className="bg-white px-6 py-16 lg:py-24">
        <div className="mx-auto max-w-4xl">
          <SlideUp>
            <h2 className="mb-4 text-center text-4xl font-bold text-robotik-accent">
              Ücretsiz Deneme Dersi
            </h2>
            <p className="mb-12 text-center text-lg text-gray-600">
              Formu doldurun, çocuğunuz için ücretsiz deneme dersine katılın
            </p>
          </SlideUp>

          <Card className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <Input
                  label="Veli Adı Soyadı"
                  type="text"
                  placeholder="Adınız ve soyadınız"
                  value={formData.parentName}
                  onChange={(e) =>
                    setFormData({ ...formData, parentName: e.target.value })
                  }
                  required
                />
                <Input
                  label="Çocuğun Adı Soyadı"
                  type="text"
                  placeholder="Çocuğunuzun adı ve soyadı"
                  value={formData.childName}
                  onChange={(e) =>
                    setFormData({ ...formData, childName: e.target.value })
                  }
                  required
                />
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <Input
                  label="Telefon"
                  type="tel"
                  placeholder="0555 123 45 67"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  required
                />
                <Input
                  label="Yaş"
                  type="number"
                  placeholder="Çocuğunuzun yaşı"
                  min="6"
                  max="18"
                  value={formData.age}
                  onChange={(e) =>
                    setFormData({ ...formData, age: e.target.value })
                  }
                  required
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-robotik-primary hover:bg-robotik-primary/90"
              >
                Gönder
              </Button>
            </form>
          </Card>
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
              Elazığ - Ataşehir'de sizi bekliyoruz
            </p>
          </SlideUp>

          <Card className="overflow-hidden p-0">
            <div className="aspect-video bg-gray-200">
              {/* TODO: Google Maps embed will go here */}
              <div className="flex h-full items-center justify-center text-gray-400">
                Google Maps
              </div>
            </div>
          </Card>
        </div>
      </section>
    </main>
  );
}
