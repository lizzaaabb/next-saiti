'use client'
import React, { useEffect, useRef } from 'react'
import '../styles/Process.css'

const steps = [
  {
    id: '01',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>
      </svg>
    ),
    title: 'საიტის დიზაინს ვამზადებთ თქვენი გემოვნებით',
    desc: 'დიზაინი იქმნება თქვენი სურვილების, ბრენდისა და სტილის მიხედვით - არანაირი შაბლონები, კოდს ვწერთ 0-დან.',
  },
  {
    id: '02',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>
      </svg>
    ),
    title: 'პროცესში თქვენ აქტიურად იქნებით ჩართული',
    desc: 'რაც მოგწონთ ან არ მოგწონთ - ყველაფერს გავითვალისწინებთ. თქვენი აზრი ყოველ ეტაპზე მნიშვნელოვანია.',
  },
  {
    id: '03',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    title: 'მოგემსახურებათ პროფესიონალებით დაკომპლექტებული მეგობრული გუნდი',
    desc: 'ზოგი 5+, ზოგი 10+ წლიანი გამოცდილებით - ჩვენ ვიცით რას ვაკეთებთ და სიამოვნებით ვითანამშრომლებთ.',
  },
  {
    id: '04',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
      </svg>
    ),
    title: 'ხელმისაწვდომ ფასებს - მაღალ ხარისხთან ერთად',
    desc: 'პრემიუმ შედეგი არ ნიშნავს ძალიან მაღალ ფასს. ჩვენ გვჯერა, რომ ხარისხი ყველასთვის ხელმისაწვდომი უნდა იყოს.',
  },
]

function StepCard({ step, index }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('prc-card--visible')
          observer.disconnect()
        }
      },
      { threshold: 0.12 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className="prc-card"
      style={{ transitionDelay: `${index * 90}ms` }}
    >
      {/* subtle top shimmer */}
      <div className="prc-card-shimmer" aria-hidden="true" />

      {/* step number — top left */}
      <span className="prc-step-num">{step.id}</span>

      {/* icon */}
      <div className="prc-icon-wrap" aria-hidden="true">
        <div className="prc-icon-glow" />
        {step.icon}
      </div>

      {/* content */}
      <h3 className="prc-title">{step.title}</h3>
      <p className="prc-desc">{step.desc}</p>

      {/* corner accent */}
      <div className="prc-corner-accent" aria-hidden="true" />
    </div>
  )
}

function Process() {
  return (
    <section className="prc-section">
      {/* ambient background glows */}
      <div className="prc-glow prc-glow--top" aria-hidden="true" />
      <div className="prc-glow prc-glow--bottom-left" aria-hidden="true" />

      {/* heading */}
      <div className="prc-heading-wrap">
        <span className="prc-line prc-line--left" />
        <h2 className="prc-heading">რას მიიღებთ ჩვენთან მუშაობით</h2>
        <span className="prc-line prc-line--right" />
      </div>

      <p className="prc-lead">
        ჩვენ არ ვყიდით მხოლოდ საიტს - ვყიდით გამოცდილებას, სიმარტივეს და შედეგს.
      </p>

      {/* grid */}
      <div className="prc-grid">
        {steps.map((step, i) => (
          <StepCard key={step.id} step={step} index={i} />
        ))}
      </div>
    </section>
  )
}

export default Process