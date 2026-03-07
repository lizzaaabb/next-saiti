import ProjectsPage from '../components/ProjectsPage'

export const metadata = {
  title: 'საიტის დამზადება პორტფოლიო | ნამუშევრები',
  description: 'საიტის დამზადების რეალური მაგალითები — ვებ დიზაინი, ონლაინ მაღაზია, კორპორატიული საიტი. Apollo Creations, Rent Car Geo, Greenhall Capital, Utopia VIP Travel.',
  keywords: 'საიტის დამზადება პორტფოლიო, ვებ გვერდის დამზადება მაგალითები, საიტის აწყობა ნამუშევრები, ვებ დიზაინი პორტფოლიო',
  alternates: {
    canonical: 'https://saitisackoba.com/saitis-damzadeba-proeqtebi',
  },
  openGraph: {
    title: 'საიტის დამზადება პორტფოლიო | saitisackoba.com',
    description: 'პრემიუმ ხარისხის ვებ გვერდების დამზადების პორტფოლიო. რეალური პროექტები, რეალური შედეგები.',
    url: 'https://saitisackoba.com/saitis-damzadeba-proeqtebi',
    images: [{ url: '/pics/web3.png', width: 1519, height: 793, alt: 'საიტის დამზადება პორტფოლიო' }],
  },
  robots: { index: true, follow: true },
}

export default function ProeqtebiPage() {
  return <ProjectsPage />
}