import Fasebi from '../components/Fasebi'

export const metadata = {
  title: 'საიტის დამზადების ფასები | ვებ გვერდის დამზადება',
  description: 'საიტის დამზადების ფასები — მარტივი გვერდი 900₾-დან, ონლაინ მაღაზია 2400₾-დან. პრემიუმ ხარისხის ვებ გვერდის დამზადება ხელმისაწვდომ ფასად.',
  keywords: 'საიტის დამზადების ფასი, ვებ გვერდის დამზადება ფასი,ონლაინ მაღაზიის შექმნა, საიტის აწყობა',
  alternates: {
    canonical: 'https://saitisackoba.com/saitis-damzadeba-fasebi',
  },
  openGraph: {
    title: 'საიტის დამზადების ფასები | რა ღირს საიტის დამზადება? | saitisackoba.com',
    description: 'საიტის დამზადების ფასები — მარტივი გვერდი 900₾-დან, ონლაინ მაღაზია 2400₾-დან.',
    url: 'https://saitisackoba.com/saitis-damzadeba-fasebi',
    images: [{ url: '/pics/web3.png', width: 1519, height: 793, alt: 'საიტის აწყობის ფასები' }],
  },
  robots: { index: true, follow: true },
}

export default function FasebiPage() {
  return <Fasebi />
}