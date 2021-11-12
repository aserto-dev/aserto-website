import CustomHead from 'components/primitives/custom-head'
import PageLayout from 'components/layout/page'
import Signup from 'components/sections/signup'
import React from 'react'

const Page = () => (
  <PageLayout
    contain
    footer
    headProps={{
      title: 'Aserto New User Signup',
      description: 'Welcome to modern authorization',
      image: 'images/og.png'
    }}
  >
    <CustomHead />
    <section className="py-20">
      <Signup />
    </section>
  </PageLayout>
)

export default Page
