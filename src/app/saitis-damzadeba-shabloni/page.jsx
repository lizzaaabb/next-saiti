import Templates2 from '../components/Templates2'

export const metadata = {
  title: 'საიტის შაბლონები | მზა დიზაინები 150₾-დან',
  description: 'მზა საიტის შაბლონები 150₾-დან. ლურჯი, კრემისფერი და მწვანე დიზაინები — სწრაფი გაშვება, პროფესიონალური დიზაინი.',
  keywords: 'საიტის შაბლონი, მზა საიტი, ვებ გვერდის შაბლონი, საიტის დამზადება 150 ლარი, იაფი საიტი',
  alternates: {
    canonical: 'https://saitisackoba.com/templates',
  },
  openGraph: {
    title: 'საიტის დამზადება - საიტის შაბლონები | saitisackoba.com',
    description: 'მზა საიტის შაბლონები 150₾-დან. სწრაფი გაშვება, პროფესიონალური დიზაინი.',
    url: 'https://saitisackoba.com/templates',
    images: [{ url: '/transbg.png', width: 1200, height: 630, alt: 'საიტის შაბლონები' }],
  },
  robots: { index: true, follow: true },
}

export default function TemplateFun() {
  return <Templates2 />
}