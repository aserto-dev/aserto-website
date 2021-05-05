import dynamic from 'next/dynamic'

// Primitives
import CustomHead from 'components/primitives/custom-head'

// Sections
import Hero from 'components/sections/homepage/hero'
import TheProblem from 'components/sections/homepage/the-problem'
import TheSolution from 'components/sections/homepage/the-solution'

import PageLayout from 'components/layout/page'
import Features from 'components/sections/homepage/features'

// Dynamic Imports
const Newsletter = dynamic(
  () => import('../components/sections/homepage/newsletter'),
  { ssr: false }
)

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
      <Newsletter />
    </PageLayout>
  )
}

export default HomePage
