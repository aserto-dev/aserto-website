import { useState } from 'react'

// Primitives
import Button from 'components/primitives/button'
import Link from 'components/primitives/link'

import Container from '../container'
import Signup from 'components/sections/signup'

const Hero = () => {
  const [showSignupModal, setShowSignupModal] = useState(false)
  return (
    <Container className="py-[100px] bg-hero">
      {showSignupModal && (
        <Signup closeModal={() => setShowSignupModal(false)} />
      )}
      <img
        className="w-[400px] mx-auto"
        src="images/aserto-horizontal-white.svg"
        alt="Aserto Logo"
      />
      <h1 className="my-[20px] text-[30px] text-aserto-grey-90 text-center">
        The fastest path to enterprise-grade authorization.
      </h1>
      <div className="flex flex-col sm:flex-row mt-[50px] justify-center text-center gap-8 sm:gap-4">
        <Button
          variant="primary"
          size="sm"
          className="inline-block h-[48px] px-[20px] items-center cursor-pointer text-[16px] self-center"
          onClick={() => setShowSignupModal(true)}
        >
          Get started free
        </Button>
        <Link
          href="/contact-engineer"
          className="inline-block sm:mt-0 h-[48px] leading-[48px] px-[20px] text-[16px] font-semibold
          text-aserto-lochivar-accent-40 border-2 border-aserto-lochivar-100 rounded-[4px] self-center
          hover:border-aserto-lochivar-accent-10 hover:underline focus:text-aserto-lochivar-accent-20"
        >
          Speak with an engineer
        </Link>
      </div>
    </Container>
  )
}

export default Hero
