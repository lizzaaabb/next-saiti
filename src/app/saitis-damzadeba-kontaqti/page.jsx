
import Contact from '../components/Contact'

export const metadata = {
  title: 'კონტაქტი | საიტის დამზადება',
  description: 'დაგვიკავშირდი საიტის დამზადებასთან დაკავშირებით. WhatsApp, ტელეფონი, მეილი — გიპასუხებთ სწრაფად.',
  alternates: {
    canonical: 'https://saitisackoba.com/contact',
  },
  openGraph: {
    title: 'საიტის დამზადება - კონტაქტი | saitisackoba.com',
    description: 'დაგვიკავშირდი საიტის დამზადებასთან დაკავშირებით.',
    url: 'https://saitisackoba.com/contact',
  },
  robots: { index: true, follow: true },
}

export default function KontaqtiPage() {
  return <Contact />
}