// Primitives
import CustomHead from 'components/primitives/custom-head'

// Layout
import PageLayout from 'components/layout/page'

// Sections
import Hero from 'components/sections/careers/hero'
import OurValues from 'components/sections/careers/our-values'
import Benefits from 'components/sections/careers/benefits'
import OpenPositions from 'components/sections/careers/open-positions'
import Container from 'components/layout/container'
import Image from 'next/image'

const Careers = () => {
  return (
    <PageLayout
      headProps={{
        title: 'Aserto Careers',
        description: 'Description',
        image: 'images/og.png'
      }}
      currentPage='careers'
    >
      <div className="relative">
        <div className="absolute top-0 left-0">
          <Image
            src="/images/careers/background2.png"
            width={5000}
            height={3750}
          />
        </div>
        <CustomHead />
        <Container>
          <Hero />
          <OurValues />
          <Benefits />
          <OpenPositions />
        </Container>
      </div>
    </PageLayout>
  )
}

export default Careers
