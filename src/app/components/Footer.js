'use client'
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import '../styles/Footer.css'

const navLinks = [
  { label: 'მთავარი', to: '/' },
  { label: 'პროექტები', to: '/saitis-damzadeba-proeqtebi' },
  { label: 'შაბლონები', to: '/saitis-ackoba-shabloni' },
  { label: 'საიტის ფასები', to: '/saitis-damzadeba-fasebi' },
  { label: 'კონტაქტი', to: '/saitis-ackoba-kontaqti' },
]

function Footer() {
  const pathname = usePathname()

  const handleClick = (to, e) => {
    if (pathname === to) {
      e.preventDefault()
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  return (
    <footer className="ftr-container" role="contentinfo" itemScope itemType="https://schema.org/Organization">
      <div className="ftr-inner">
        <div className="ftr-brand">
          <span className="ftr-logo" itemProp="name">საიტის დამზადება</span>
          <p className="ftr-tagline" itemProp="description">პრემიუმ ხარისხის ვებ გვერდების დამზადება</p>
          <meta itemProp="url" content="https://saitisackoba.com" />
          <meta itemProp="areaServed" content="Georgia" />
        </div>

        <div className="ftr-cols">
          <div className="ftr-col">
            <h4 className="ftr-col-title">ნავიგაცია</h4>
            <nav aria-label="Footer ნავიგაცია">
              {navLinks.map(link => (
                <Link
                  key={link.to}
                  href={link.to}
                  className="ftr-link"
                  onClick={(e) => handleClick(link.to, e)}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="ftr-col">
            <h4 className="ftr-col-title">კონტაქტი</h4>
            <a href="https://wa.me/995574065469" className="ftr-link" target="_blank" rel="noreferrer noopener">WhatsApp</a>
            <a href="tel:+995574065469" className="ftr-link" itemProp="telephone">+995 574 06 54 69</a>
            <a href="mailto:business@apollocreations.net" className="ftr-link" itemProp="email">business@apollocreations.net</a>
          </div>

          <div className="ftr-col">
            <h4 className="ftr-col-title">სოც ქსელები</h4>
            <a href="https://instagram.com/apollocreations_net" className="ftr-link" target="_blank" rel="noreferrer noopener">Instagram</a>
            <a href="https://tiktok.com/@apollocreations.net" className="ftr-link" target="_blank" rel="noreferrer noopener">TikTok</a>
            <a href="https://facebook.com" className="ftr-link" target="_blank" rel="noreferrer noopener">Facebook</a>
          </div>
        </div>
      </div>

      <div className="ftr-divider" aria-hidden="true" />

      <div className="ftr-bottom">
        <span className="ftr-copy">© {new Date().getFullYear()} Apollo Creations. ყველა უფლება დაცულია.</span>
        <span className="ftr-location" itemProp="address">თბილისი, საქართველო</span>
      </div>
    </footer>
  )
}

export default Footer