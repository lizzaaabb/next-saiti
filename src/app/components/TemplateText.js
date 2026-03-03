import React, { useEffect, useRef, useState } from 'react'
import '../styles/TemplateText.css'

const included = [
  'უფასო ჰოსტინგი - არანაირი თვიური გადასახადი',
  'საძიებო სისტემებისთვის ოპტიმიზაცია',
  'გუგლში საიტის დამატება',
  'იცვლება მხოლოდ ტექსტი და ლოგო',
]
const excluded = [
  'ადმინ პანელი (ცალკე შეგიძლიათ შეუკვეთოთ, თანხა დაემატება თქვენი მოთხოვნების მიხედვით)',
  'დომენის საფასური - თქვენით ყიდულობთ',
]

const Check = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
    <path d="M3.5 9.5L7.5 13.5L14.5 5" stroke="#8C45FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)
const X = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M3 3L13 13M13 3L3 13" stroke="#8C45FF" strokeWidth="2" strokeLinecap="round"/>
  </svg>
)

function Item({ text, type }) {
  const ref = useRef(null)
  const [vis, setVis] = useState(false)
  useEffect(() => {
    const o = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVis(true) }, { threshold: 0.1 })
    if (ref.current) o.observe(ref.current)
    return () => o.disconnect()
  }, [])
  return (
    <div ref={ref} className={`tt-item ${vis ? 'tt-vis' : ''}`}>
      <span className={`tt-icon tt-icon--${type}`}>{type === 'check' ? <Check /> : <X />}</span>
      <span className="tt-text">{text}</span>
    </div>
  )
}

export default function TemplateText() {
  const priceRef = useRef(null)
  const [priceVis, setPriceVis] = useState(false)
  useEffect(() => {
    const o = new IntersectionObserver(([e]) => { if (e.isIntersecting) setPriceVis(true) }, { threshold: 0.1 })
    if (priceRef.current) o.observe(priceRef.current)
    return () => o.disconnect()
  }, [])
  return (
    <section className="tt-section">
      <div ref={priceRef} className={`tt-price ${priceVis ? 'tt-vis' : ''}`}>
        <span className="tt-price-label">ფასი</span>
        <span className="tt-price-sep" />
        <span className="tt-price-val">₾150</span>
        <span className="tt-price-sep" />
        <span className="tt-price-sub">ერთჯერადი გადახდა</span>
      </div>
      <div className="tt-cols">
        <div>
          <p className="tt-head tt-head--in">შედის ფასში</p>
          <div className="tt-list">
            {included.map((t, i) => <Item key={i} text={t} type="check" />)}
          </div>
        </div>
        <div className="tt-col--out">
          <p className="tt-head tt-head--out" style={{alignSelf:"center"}}>არ შედის ფასში</p>
          <div className="tt-list">
            {excluded.map((t, i) => <Item key={i} text={t} type="x" />)}
          </div>
        </div>
      </div>
    </section>
  )
}