// Primitives
import CustomHead from 'components/primitives/custom-head'

// Layout
import PageLayout from 'components/layout/page'

// Sections
import Hero from 'components/sections/about/hero'
import Founders from 'components/sections/about/founders'
import Team from 'components/sections/about/team'
import Investors from 'components/sections/about/investors'

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
      <Team />
      <Investors />
    </PageLayout>
  )
}

export default About
