import CustomHead from 'components/primitives/custom-head'
import Signup from 'components/sections/signup'
import React from 'react'

const Page = () => (
  <>
    <CustomHead
      title="Signup - Aserto"
      description="Sign up for a free Aserto account"
    />
    <Signup />
  </>
)

export default Page
