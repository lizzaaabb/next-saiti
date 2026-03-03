import React, { useEffect, useRef, useState } from 'react'
import '../styles/Templates.css'
import TemplateHeader from './TemplateHeader'
import TemplateText from './TemplateText'

const back1 = '/transbg.png'
const back2 = '/tansbg1.png'
const back3 = '/tansbg2.png'

const WHATSAPP_BASE = 'https://wa.me/995574065469?text='

const templates = [
  {
    color: 'blue',
    img: back1,
    link: 'https://template2-cyan.vercel.app',
    message: 'გამარჯობა, 150 ლარიანი საიტის შეკვეთა მინდა - ლურჯი დიზაინით',
  },
  {
    color: 'brown',
    img: back3,
    link: 'https://template3-hazel.vercel.app',
    message: 'გამარჯობა, 150 ლარიანი საიტის შეკვეთა მინდა - კრემისფერი დიზაინით',
  },
  {
    color: 'green',
    img: back2,
    link: 'https://template1-psi-livid.vercel.app',
    message: 'გამარჯობა, 150 ლარიანი საიტის შეკვეთა მინდა - მწვანე დიზაინით',
  },
]

export default function Templates() {
  const splitRef = useRef(null)
  const [splitVisible, setSplitVisible] = useState(true)

  useEffect(() => {
    window.scrollTo(0, 0)

    // fix blank screen on back navigation (bfcache restore)
    const handlePageShow = (e) => {
      if (e.persisted) {
        document.body.style.display = 'none'
        void document.body.offsetHeight
        document.body.style.display = ''
      }
    }
    window.addEventListener('pageshow', handlePageShow)

    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setSplitVisible(true) },
      { threshold: 0.1 }
    )
    if (splitRef.current) observer.observe(splitRef.current)

    return () => {
      observer.disconnect()
      window.removeEventListener('pageshow', handlePageShow)
    }
  }, [])

  return (
    <div className="templates-page">
      <TemplateHeader />
      <TemplateText />
      <div className={`split-section ${splitVisible ? 'is-visible' : ''}`} ref={splitRef}>
        {templates.map(({ color, img, link, message }) => (
          <div className="split-col" key={color}>
            <div className={`split-panel split-panel--${color}`}>
              <div className={`panel-glow panel-glow--${color}`} />
              <img src={img} alt={color} className={`panel-img panel-img--${color}`} />
              <div className="panel-fade-top" />
              <div className="panel-fade" />
            </div>
            <div className={`cta-card cta-card--${color}`}>
              <div className="cta-btns">
                <a
                  href={`${WHATSAPP_BASE}${encodeURIComponent(message)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`btn btn-primary btn-primary--${color}`}
                >
                  შეკვეთა
                </a>
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`btn btn-outline btn-outline--${color}`}
                >
                  შაბლონის ნახვა
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}