import Header from './components/Header'
import Footer from './components/Footer'
import './globals.css'

export const metadata = {
  title: 'საიტის დამზადება | ვებ გვერდების დამზადება | saitisackoba.com',
  description: 'პრემიუმ ხარისხის საიტის დამზადება. ვქმნით სწრაფ, თანამედროვე და SEO-ოპტიმიზებულ საიტებს. საიტის ფასები 500₾-დან.',
  icons: {
    icon: '/favicon.ico',
    apple: '/logo192.png',
  },
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