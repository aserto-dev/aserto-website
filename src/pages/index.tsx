// Primitives
import CustomHead from 'components/primitives/custom-head'

// Layout
import PageLayout from 'components/layout/page'

// Sections
import Features from 'components/sections/homepage/features'
import Hero from 'components/sections/homepage/hero'
import Testimonials from 'components/sections/homepage/testimonials'
import TheProblem from 'components/sections/homepage/the-problem'
import TheSolution from 'components/sections/homepage/the-solution'

const HomePage = () => {
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
      <TheProblem />
      <TheSolution />
      <Features />
      <Testimonials />
    </PageLayout>
  )
}

export const getStaticProps = () => {
  return {
    props: {}
  }
}

export default HomePage
