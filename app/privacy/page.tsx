import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gizlilik Politikası | HAVSAN GRUP',
  description: 'HAVSAN GRUP gizlilik politikası ve kişisel verilerin korunması hakkında bilgiler.',
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Gizlilik Politikası</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 mb-6">
            Son Güncelleme: 29 Kasım 2025
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">1. Kişisel Verilerin Toplanması</h2>
            <p className="text-gray-700 mb-4">
              HAVSAN GRUP olarak, web sitemiz üzerinden topladığımız kişisel verilerinizi 6698 sayılı 
              Kişisel Verilerin Korunması Kanunu uyarınca işlemekteyiz.
            </p>
            <p className="text-gray-700">
              Toplanan veriler: Ad, soyad, e-posta adresi, telefon numarası, IP adresi ve çerez verileri.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">2. Verilerin Kullanım Amacı</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>İletişim taleplerini yanıtlamak</li>
              <li>Hizmet kalitesini artırmak</li>
              <li>Eğitim programları hakkında bilgilendirme yapmak</li>
              <li>Teknik destek sağlamak</li>
              <li>Yasal yükümlülükleri yerine getirmek</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">3. Çerezler (Cookies)</h2>
            <p className="text-gray-700 mb-4">
              Web sitemiz, kullanıcı deneyimini iyileştirmek için çerezler kullanmaktadır. 
              Tarayıcınız üzerinden çerez ayarlarını yönetebilirsiniz.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">4. Veri Güvenliği</h2>
            <p className="text-gray-700">
              Kişisel verileriniz SSL şifreleme ile korunmaktadır. Verileriniz yetkisiz erişime 
              karşı teknik ve idari önlemlerle güvence altındadır.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">5. Kullanıcı Hakları</h2>
            <p className="text-gray-700 mb-4">KVKK kapsamında aşağıdaki haklara sahipsiniz:</p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Kişisel verilerinizin işlenip işlenmediğini öğrenme</li>
              <li>İşlenmişse buna ilişkin bilgi talep etme</li>
              <li>İşlenme amacını ve amacına uygun kullanılıp kullanılmadığını öğrenme</li>
              <li>Yurt içinde veya yurt dışında aktarıldığı üçüncü kişileri bilme</li>
              <li>Eksik veya yanlış işlenmiş olması hâlinde düzeltilmesini isteme</li>
              <li>Verilerin silinmesini veya yok edilmesini isteme</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">6. İletişim</h2>
            <p className="text-gray-700">
              Gizlilik politikamız hakkında sorularınız için:{' '}
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
