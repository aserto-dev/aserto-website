// Primitives
import CustomHead from 'components/primitives/custom-head'

// Layout
import PageLayout from 'components/layout/page'

// Sections
import Hero from 'components/sections/careers/hero'

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
      <Hero />
      <CustomHead />
    </PageLayout>
  )
}

export default Careers
