import { Organization, WithContext } from 'schema-dts';

export const organizationSchema: WithContext<Organization> = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'HAVSAN GRUP',
  url: 'https://havsan.com',
  logo: 'https://havsan.com/images/logo.png',
  description: 'Robotik kodlama eğitimleri, yapay zeka hizmetleri ve enerji çözümleri sunan teknoloji şirketi',
  foundingDate: '2015',
  areaServed: 'TR',
  sameAs: [
    'https://www.linkedin.com/company/havsan',
    'https://www.instagram.com/havsan_grup',
    'https://twitter.com/havsan_grup',
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+90-XXX-XXX-XXXX',
    contactType: 'Customer Service',
    availableLanguage: ['Turkish'],
  },
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'TR',
    addressLocality: 'Istanbul',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'HAVSAN Hizmetler',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Robotik Kodlama Eğitimleri',
          description: 'Arduino, Raspberry Pi ve robotik kodlama eğitimleri',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Yapay Zeka Çözümleri',
          description: 'Özel AI modelleri, makine öğrenmesi ve veri analitiği',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Enerji Çözümleri',
          description: 'Yenilenebilir enerji sistemleri ve enerji yönetimi',
        },
      },
    ],
  },
};

export function getJsonLd(data: WithContext<Organization>) {
  return JSON.stringify(data);
}
