'use client'

import HeroSection from './components/HeroSection'
import Brands from './components/Brands'
import Projects from './components/Projects'
import Pricing from './components/Pricing'
import Cta from './components/Cta'

export default function Home() {
  return (
    <>
      <HeroSection />
      <Brands />
      <Projects />
      <Pricing />
      <Cta />
    </>
  )
}