import dynamic from 'next/dynamic'
import { motion } from 'framer-motion'

// Primitives
import CustomHead from 'components/primitives/custom-head'

// Layout
import Header from '../header'
import Container from '../container'

// Constants
import { DURATION } from 'lib/gsap'
import { NewsletterProps } from 'components/sections/common/newsletter'

// Dynamic Imports
const Newsletter = dynamic(
  () => import('components/sections/common/newsletter'),
  { ssr: false }
)

const Footer = dynamic(() => import('../footer'), {
  ssr: false
})

interface Props {
  children?: React.ReactNode
  contain?: boolean
  headProps: React.ComponentPropsWithoutRef<typeof CustomHead>
  newsletter?: NewsletterProps
}

const easing = [0.175, 0.85, 0.42, 0.96]

const transitionVariants = {
  initial: { y: 30, opacity: 0 },
  enter: {
    y: 0,
    opacity: 1,
    transition: { duration: DURATION, ease: easing, staggerChildren: 0.15 }
  },
  exit: {
    y: 30,
    opacity: 0,
    transition: {
      duration: DURATION * 0.8,
      ease: easing
    }
  }
}

const PageLayout = ({ children, contain, headProps, newsletter }: Props) => {
  return (
    <div className="overflow-hidden">
      <CustomHead {...headProps} />
      <Header />
      <motion.main
        className="relative mt-16 bg-aserto-black"
        animate="enter"
        exit="exit"
        initial="initial"
        variants={transitionVariants}
      >
        {contain ? <Container>{children}</Container> : children}
      </motion.main>
      {newsletter && <Newsletter {...newsletter} />}
      <Footer />
    </div>
  )
}

export default PageLayout
