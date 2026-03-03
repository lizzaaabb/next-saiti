'use client'
import React, { useEffect, useState } from 'react'
import TemplateHeader from './TemplateHeader'
import TemplateText from './TemplateText'
import '../styles/Templates2.css'

const WHATSAPP_BASE = 'https://wa.me/995574065469?text='

const templates = [
  {
    color: 'blue',
    img: '/transbg.png',
    link: 'https://template2-cyan.vercel.app',
    message: 'გამარჯობა, 150 ლარიანი საიტის შეკვეთა მინდა - ლურჯი დიზაინით',
  },
  {
    color: 'brown',
    img: '/tansbg2.png',
    link: 'https://template3-hazel.vercel.app',
    message: 'გამარჯობა, 150 ლარიანი საიტის შეკვეთა მინდა - კრემისფერი დიზაინით',
  },
  {
    color: 'green',
    img: '/tansbg1.png',
    link: 'https://template1-psi-livid.vercel.app',
    message: 'გამარჯობა, 150 ლარიანი საიტის შეკვეთა მინდა - მწვანე დიზაინით',
  },
]

export default function Templates2() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="t2-page">
      <TemplateHeader />
      <TemplateText />
      <div className={`t2-grid ${mounted ? 't2-grid--in' : ''}`}>
        {templates.map(({ color, img, link, message }, i) => (
          <div
            key={color}
            className="t2-col"
            style={{ transitionDelay: `${i * 0.12}s` }}
          >
            <div className={`t2-panel t2-panel--${color}`}>
              <div className={`t2-glow t2-glow--${color}`} />
              <img src={img} alt={color} className={`t2-img t2-img--${color}`} />
              <div className="t2-fade-top" />
              <div className="t2-fade-bot" />
            </div>
            <div className="t2-actions">
              <a
                href={`${WHATSAPP_BASE}${encodeURIComponent(message)}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`t2-btn t2-btn--primary t2-btn--${color}`}
              >
                შეკვეთა
              </a>
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className={`t2-btn t2-btn--outline t2-btn--outline-${color}`}
              >
                შაბლონის ნახვა
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}