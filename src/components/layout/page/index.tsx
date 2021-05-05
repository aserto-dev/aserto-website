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
  }, [mainRef])
  
  return (
    <>
      <CustomHead {...headProps} />
      {/* <Header /> */}
      <main ref={mainRef} className="bg-ds-background">
        {contain ? <Container>{children}</Container> : children}
      </main>
      <Footer />
    </>
  )
}

export default PageLayout
