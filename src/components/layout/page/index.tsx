import { useEffect, useRef } from 'react'
import dynamic from 'next/dynamic'
import gsap from 'gsap'

// Primitives
import CustomHead from 'components/primitives/custom-head'

// Layout
// import Header from '../header'
import Container from '../container'

// Constants
import { DURATION } from 'lib/gsap'

// Dynamic Imports
const Newsletter = dynamic(
  () => import('components/sections/homepage/newsletter'),
  { ssr: false }
)

const Footer = dynamic(() => import('../footer'), {
  ssr: false
})

interface Props {
  children?: React.ReactNode
  contain?: boolean
  headProps: React.ComponentPropsWithoutRef<typeof CustomHead>
}

const PageLayout = ({ children, contain, headProps }: Props) => {
  const mainRef = useRef(null)

  useEffect(() => {
    if (!mainRef.current) return
    gsap.to(mainRef.current, {
      delay: DURATION / 3,
      autoAlpha: 1
    })
  }, [])

  return (
    <>
      <CustomHead {...headProps} />
      {/* <Header /> */}
      <main ref={mainRef} className="opacity-0 bg-ds-background">
        {contain ? <Container>{children}</Container> : children}
      </main>
      <Newsletter />
      <Footer />
    </>
  )
}

export default PageLayout
