import { useState } from 'react'

// Primitives
import Button from 'components/primitives/button'

import Container from 'components/sections/homepage/container'
import Signup from 'components/sections/signup'

const Hero = () => {
  const [showSignupModal, setShowSignupModal] = useState(false)
  return (
    <Container className="py-[100px]">
      {showSignupModal && (
        <Signup closeModal={() => setShowSignupModal(false)} />
      )}
      <img
        className="w-[400px] mx-auto"
        src="images/aserto-horizontal-white.svg"
        alt="Aserto Logo"
      />
      <h1 className="my-[20px] text-[30px] text-aserto-grey-90 text-center">
        Powerful authorization-as-a-service,
        <br /> built to evolve with your customer requirements.
      </h1>
      <div className="mt-[50px] text-center">
        <Button
          variant="primary"
          size="sm"
          className="inline-flex h-[48px] px-[20px] items-center cursor-pointer text-[16px]"
          onClick={() => setShowSignupModal(true)}
        >
          Get started free
        </Button>
      </div>
    </Container>
  )
}

export default Hero
