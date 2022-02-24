import { useState } from 'react'

// Primitives
import CustomHead from 'components/primitives/custom-head'

// Layout
import PageLayout from 'components/layout/page'

// Sections
import Hero from 'components/sections/quickstarts/hero'
import Card from 'components/sections/quickstarts/card'
import Signup from 'components/sections/signup'
import Container from 'components/layout/container'
import Image from 'components/primitives/image'

const quickstarts = [
  {
    title: 'Peoplefinder node.js / React sample',
    icons: ['nodejs', 'react'],
    link: 'peoplefinder-github-acmecorp-netlify',
    sccIcons: [
      {
        icon: 'github',
        label: 'GitHub',
        desc: 'Source code provider'
      },
      {
        icon: 'acmecorp',
        label: 'Acmecorp sample IDP',
        desc: 'Identity provider'
      }
    ]
  },
  {
    title: 'Peoplefinder node.js / React sample',
    icons: ['nodejs', 'react'],
    link: 'peoplefinder-github-auth0-netlify',
    sccIcons: [
      {
        icon: 'github',
        label: 'GitHub',
        desc: 'Source code provider'
      },
      {
        icon: 'auth0',
        label: 'Auth0',
        desc: 'Identity provider'
      }
    ]
  }
]

const Quickstarts = () => {
  const [showSignupModal, setShowSignupModal] = useState(false)

  return (
    <PageLayout
      footer
      headProps={{
        title: 'Aserto Quickstarts',
        description: 'Select a quickstart template',
        image: 'images/og.png'
      }}
    >
      {showSignupModal && (
        <Signup closeModal={() => setShowSignupModal(false)} />
      )}
      <div className="relative">
        <div className="absolute top-[-400px] left-0 right-0">
          <Image
            src="/images/blog/bg-gradient.png"
            width={2100}
            height={2100}
            loading="eager"
          />
        </div>
        <CustomHead />
        <Container>
          <Hero />
          <section className="pb-28">
            <div className="flex flex-wrap items-center justify-center gap-[20px]">
              {quickstarts.map((quickstart, i) => (
                <Card
                  key={i}
                  showSignupModal={() => setShowSignupModal(true)}
                  {...quickstart}
                />
              ))}
            </div>
          </section>
        </Container>
      </div>
    </PageLayout>
  )
}

export default Quickstarts
