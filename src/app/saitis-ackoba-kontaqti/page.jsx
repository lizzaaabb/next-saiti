
import Contact from '../components/Contact'

export const metadata = {
  title: 'კონტაქტი | საიტის აწყობა',
  description: 'დაგვიკავშირდი საიტის აწყობასთან დაკავშირებით. WhatsApp, ტელეფონი, მეილი — გიპასუხებთ სწრაფად.',
  alternates: {
    canonical: 'https://saitisackoba.com/contact',
  },
  openGraph: {
    title: 'კონტაქტი | saitisackoba.com',
    description: 'დაგვიკავშირდი საიტის აწყობასთან დაკავშირებით.',
    url: 'https://saitisackoba.com/contact',
  },
  robots: { index: true, follow: true },
}

export default function KontaqtiPage() {
  return <Contact />
}