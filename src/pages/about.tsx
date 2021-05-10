// Primitives
import CustomHead from 'components/primitives/custom-head'

// Layout
import PageLayout from 'components/layout/page'

// Sections
import Hero from 'components/sections/about/hero'
import Founders from 'components/sections/about/founders'

const About = () => {
  return (
    <PageLayout
      contain
      headProps={{
        title: 'Aserto',
        description: 'Description',
        image: 'images/og.png'
      }}
    >
      <CustomHead />
      <Hero />
      <Founders />
    </PageLayout>
  )
}

export default About
