import { useEffect, useRef } from 'react'
import dynamic from 'next/dynamic'
import gsap from 'gsap'
import { DURATION } from 'lib/gsap'

import CustomHead from 'components/primitives/custom-head'
import FeaturesSection from 'components/sections/tailwind/features'
import FromTheBlog from 'components/sections/tailwind/from-the-blog'
import TailwindHero from 'components/sections/tailwind/hero'

const TestimonialsSection = dynamic(
  () => import('../components/sections/tailwind/testimonials'),
  { ssr: false }
)

const NewsletterSection = dynamic(
  () => import('../components/sections/tailwind/newsletter'),
  { ssr: false }
)

const FooterSection = dynamic(
  () => import('../components/sections/tailwind/footer'),
  { ssr: false }
)

const HomePage = () => {
  const main = useRef(null)

  useEffect(() => {
    if (!main.current) return
    gsap.to(main.current, {
      delay: DURATION / 3,
      autoAlpha: 1
    })
  }, [main])

  return (
    <main ref={main} style={{ opacity: 0 }}>
      <CustomHead />
      <TailwindHero />
      <FromTheBlog />
      <FeaturesSection />
      <TestimonialsSection />
      <NewsletterSection />
      <FooterSection />
    </main>
  )
}

export default HomePage
