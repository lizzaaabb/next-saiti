import Header from './components/Header'
import Footer from './components/Footer'
import './globals.css'

export const metadata = {
  metadataBase: new URL('https://saitisackoba.com'),
  title: {
    default: 'საიტის დამზადება | ვებ გვერდის დამზადება — saitisackoba.com',
    template: '%s | saitisackoba.com',
  },
  description: 'საიტის დამზადება და ვებ გვერდის დამზადება პროფესიონალურად. ონლაინ მაღაზია, კორპორატიული საიტი, ლენდინგ ფეიჯი. სწრაფი, თანამედროვე და SEO ოპტიმიზებული.',
  keywords: 'საიტის დამზადება, ვებ გვერდის დამზადება, ონლაინ მაღაზია, საიტის დამზადება, ვებ დიზაინი, saitisackoba, saitis ackoba, veb gverdis damzadeba, საიტის დამზადები ფასები, saitis damzadeba ra girs, saitis damzadeba',
  alternates: {                               // ← დაამატე ეს
    canonical: 'https://saitisackoba.com',
    languages: {
      'en': 'https://apollocreations.net',
    },
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/logo192.png',
  },
  openGraph: {
    siteName: 'saitisackoba.com',
    locale: 'ka_GE',
    type: 'website',
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }) {
  return (
    <html lang="ka">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}