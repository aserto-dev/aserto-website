// Primitives
import CustomHead from 'components/primitives/custom-head'

// Layout
import PageLayout from 'components/layout/page'

// Sections
import Hero from 'components/sections/careers/hero'
import OurValues from 'components/sections/careers/our-values'
import Benefits from 'components/sections/careers/benefits'

const Careers = () => {
  return (
    <PageLayout
      contain
      headProps={{
        title: 'Aserto Careers',
        description: 'Description',
        image: 'images/og.png'
      }}
    >
      <CustomHead />
      <Hero />
      <OurValues />
      <Benefits />
    </PageLayout>
  )
}

export default Careers
