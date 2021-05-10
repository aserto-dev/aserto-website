// Primitives
import CustomHead from 'components/primitives/custom-head'

// Layout
import PageLayout from 'components/layout/page'

// Sections
import Advisors from 'components/sections/about/advisors'
import Founders from 'components/sections/about/founders'
import Hero from 'components/sections/about/hero'
import Investors from 'components/sections/about/investors'
import Team from 'components/sections/about/team'
import Hiring from 'components/sections/about/hiring'

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
      <Advisors />
      <Hiring />
    </PageLayout>
  )
}

export default About
