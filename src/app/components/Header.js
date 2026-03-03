'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import '../styles/Header.css'

const Logo = '/pics/Logo.png'

const navLinks = [
  { label: 'მთავარი', to: '/' },
  { label: 'პროექტები', to: '/saitis-damzadeba-proeqtebi' },
  { label: 'მზა შაბლონები', to: '/saitis-ackoba-shablonebi' },
  { label: 'საიტის ფასები', to: '/saitis-damzadeba-fasebi' },
  { label: 'კონტაქტი', to: '/saitis-ackoba-kontaqti' },
]

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  const handleNavClick = (to, e) => {
    if (pathname === to) {
      e.preventDefault()
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
    setMenuOpen(false)
  }

  return (
    <header className="hdr-outer" role="banner">
      <nav className="hdr-inner" aria-label="მთავარი ნავიგაცია">
        <Link
          href="/"
          className="hdr-logo-wrap"
          aria-label="Apollo Creations - მთავარ გვერდზე გადასვლა"
          onClick={(e) => handleNavClick('/', e)}
        >
          <img
            src={Logo}
            alt="Apollo Creations ლოგო"
            className="hdr-logo"
            width="72"
            height="72"
            loading="eager"
          />
        </Link>

        <ul className="hdr-nav" role="list">
          {navLinks.map((link, i) => (
            <li key={link.label}>
              <Link
                href={link.to}
                className="hdr-nav-link"
                onClick={(e) => handleNavClick(link.to, e)}
              >
                {link.label}
              </Link>
              {i < navLinks.length - 1 && <span className="hdr-nav-divider" aria-hidden="true" />}
            </li>
          ))}
        </ul>

        <a href="tel:+995574065469" className="hdr-cta" aria-label="დაგვიკავშირდი - +995 574 06 54 69">
          დაგვიკავშირდი
        </a>

        <button
          className="hdr-hamburger"
          onClick={() => setMenuOpen(o => !o)}
          aria-label={menuOpen ? 'მენიუს დახურვა' : 'მენიუს გახსნა'}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          <span className={`hdr-ham-line ${menuOpen ? 'open' : ''}`} aria-hidden="true" />
          <span className={`hdr-ham-line ${menuOpen ? 'open' : ''}`} aria-hidden="true" />
          <span className={`hdr-ham-line ${menuOpen ? 'open' : ''}`} aria-hidden="true" />
        </button>
      </nav>

      <div
        id="mobile-menu"
        className={`hdr-mobile-menu ${menuOpen ? 'open' : ''}`}
        aria-hidden={!menuOpen}
      >
        <button
          className="hdr-drawer-close"
          onClick={() => setMenuOpen(false)}
          aria-label="მენიუს დახურვა"
        >
          ✕
        </button>

        {navLinks.map(link => (
          <Link
            key={link.label}
            href={link.to}
            className="hdr-mobile-link"
            onClick={(e) => handleNavClick(link.to, e)}
          >
            {link.label}
          </Link>
        ))}

        <a
          href="tel:+995574065469"
          className="hdr-mobile-cta"
          onClick={() => setMenuOpen(false)}
          aria-label="დაგვიკავშირდი - +995 574 06 54 69"
        >
          დაგვიკავშირდი
        </a>
      </div>
    </header>
  )
}

export default Header