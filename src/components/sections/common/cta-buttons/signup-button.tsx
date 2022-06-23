import { useState } from 'react'

// Primitives
import Button from 'components/primitives/button'
import Signup from 'components/sections/signup'

const SignupButton = () => {
  const [showSignupModal, setShowSignupModal] = useState(false)
  return (
    <>
      {showSignupModal && (
        <Signup closeModal={() => setShowSignupModal(false)} />
      )}
      <Button
        variant="primary"
        size="sm"
        className="inline-flex w-[221px] h-[48px] px-[20px] justify-center items-center cursor-pointer text-[16px] self-center"
        onClick={() => setShowSignupModal(true)}
      >
        Get started free
      </Button>
    </>
  )
}

export default SignupButton
