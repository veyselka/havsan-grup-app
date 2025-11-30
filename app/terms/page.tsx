import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kullanım Şartları | HAVSAN GRUP',
  description: 'HAVSAN GRUP web sitesi kullanım şartları ve koşulları.',
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Kullanım Şartları</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 mb-6">
            Son Güncelleme: 29 Kasım 2025
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">1. Genel Hükümler</h2>
            <p className="text-gray-700 mb-4">
              Bu web sitesini kullanarak, aşağıdaki kullanım şartlarını kabul etmiş sayılırsınız. 
              Şartları kabul etmiyorsanız, lütfen siteyi kullanmayınız.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">2. Fikri Mülkiyet Hakları</h2>
            <p className="text-gray-700 mb-4">
              Bu web sitesindeki tüm içerik, grafikler, logolar, metinler ve yazılımlar 
              HAVSAN GRUP'a aittir ve telif hakkı yasaları ile korunmaktadır.
            </p>
            <p className="text-gray-700">
              İçeriklerin izinsiz kopyalanması, çoğaltılması veya dağıtılması yasaktır.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">3. Kullanıcı Sorumlulukları</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Yasal olmayan amaçlarla siteyi kullanmayacaksınız</li>
              <li>Başkalarının haklarını ihlal etmeyeceksiniz</li>
              <li>Yanıltıcı veya hatalı bilgi vermeyeceksiniz</li>
              <li>Site güvenliğini tehlikeye atmayacaksınız</li>
              <li>Virüs veya zararlı yazılım yüklemeyeceksiniz</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">4. Hizmet Kapsamı</h2>
            <p className="text-gray-700 mb-4">
              HAVSAN GRUP, web sitesi üzerinden sunulan bilgilerin doğruluğunu sağlamak için 
              çaba göstermektedir. Ancak, bilgilerin eksiksiz, güncel veya hatasız olduğunu 
              garanti etmemektedir.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">5. Sorumluluk Reddi</h2>
            <p className="text-gray-700 mb-4">
              HAVSAN GRUP, site kullanımından kaynaklanan dolaylı, tesadüfi veya özel 
              zararlardan sorumlu tutulamaz.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">6. Üçüncü Taraf Bağlantıları</h2>
            <p className="text-gray-700">
              Web sitemiz üçüncü taraf web sitelerine bağlantılar içerebilir. 
              Bu sitelerin içeriğinden sorumlu değiliz.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">7. Değişiklikler</h2>
            <p className="text-gray-700">
              HAVSAN GRUP, bu kullanım şartlarını önceden haber vermeksizin değiştirme 
              hakkını saklı tutar. Değişiklikler bu sayfada yayınlanacaktır.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">8. Uygulanacak Hukuk</h2>
            <p className="text-gray-700">
              Bu şartlar Türkiye Cumhuriyeti yasalarına tabidir. 
              Uyuşmazlıklar İstanbul Mahkemeleri ve İcra Daireleri'nde çözümlenecektir.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">9. İletişim</h2>
            <p className="text-gray-700">
              Kullanım şartları hakkında sorularınız için:{' '}
              <a href="mailto:bilgi@havsanrobotik.com.tr" className="text-google-blue hover:underline">
                bilgi@havsanrobotik.com.tr
              </a>
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
