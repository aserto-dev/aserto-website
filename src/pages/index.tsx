import { useEffect, useRef } from 'react'
import dynamic from 'next/dynamic'
import gsap from 'gsap'

// Primitives
import CustomHead from 'components/primitives/custom-head'

// Sections
import TheSolution from 'components/sections/homepage/the-solution'
import TheProblem from 'components/sections/homepage/the-problem'
import Hero from 'components/sections/homepage/hero'

// Constants
import { DURATION } from 'lib/gsap'

// Dynamic Imports
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
      <Hero />
      <TheProblem />
      <TheSolution />
      <NewsletterSection />
      <FooterSection />
    </main>
  )
}

export default HomePage
