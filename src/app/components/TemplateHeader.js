import React from 'react'
import '../styles/TemplateHeader.css'

const blur = '/pics/blur.png'

function TemplateHeader() {
  return (
    <div className="th-wrapper">
      <img src={blur} alt="" aria-hidden="true" className="th-blur" />

      <section className="th-hero">
        <p className="th-eyebrow">შაბლონები</p>

        <h1 className="th-title">
          საიტის მზა
          <br />
          <span className="th-gradient">შაბლონები</span>
        </h1>

        <p className="th-desc">
          საიტის აწყობა მხოლოდ 150 ლარად, აირჩიე სასურველი დიზაინი და
          დაგვიკავშირდი, ჩვენ მას ძალიან სწრაფად გავამზადებთ
        </p>

        <div className="th-tags">
          {['Next.js', 'უფასო ჰოსტინგი', 'SEO მზად', 'პრემიუმ დიზაინი'].map((tag) => (
            <span key={tag} className="th-tag">{tag}</span>
          ))}
        </div>

        <div className="th-scroll">
          <span className="th-scroll-text">ჩასქროლე</span>
          <div className="th-scroll-arrows">
            <span /><span /><span />
          </div>
        </div>

      </section>
    </div>
  )
}

export default TemplateHeader