import HeroSection from './components/HeroSection'
import Brands from './components/Brands'
import Projects from './components/Projects'
import Pricing from './components/Pricing'
import Cta from './components/Cta'
import Process from './components/Process'

export const metadata = {
  title: 'საიტის აწყობა | ვებ გვერდის დამზადება',
  description: 'საიტის აწყობა და ვებ გვერდის დამზადება პროფესიონალურად. ონლაინ მაღაზია, კორპორატიული საიტი. სწრაფი, თანამედროვე და SEO ოპტიმიზებული საიტები.',
  keywords: 'საიტის აწყობა, ვებ გვერდის დამზადება, ონლაინ მაღაზია, საიტის დამზადება, ვებ დიზაინი, კორპორატიული საიტი, საიტის შექმნა, saitisackoba',
  alternates: {
    canonical: 'https://saitisackoba.com',
  },
  openGraph: {
    title: 'საიტის აწყობა | ვებ გვერდის დამზადება',
    description: 'საიტის აწყობა და ვებ გვერდის დამზადება პროფესიონალურად. ონლაინ მაღაზია, კორპორატიული საიტი, ლენდინგ პეიჯი.',
    url: 'https://saitisackoba.com',
    images: [{ url: '/pics/web3.png', width: 1519, height: 793, alt: 'საიტის აწყობა' }],
  },
  robots: { index: true, follow: true },
}

export default function Home() {
  return (
    <>
      <HeroSection />
      <Brands />
      <Projects />
      <Process />
      <Pricing />
      <Cta />
    </>
  )
}