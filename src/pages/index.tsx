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
import { InferGetStaticPropsType } from 'next'
import cms from 'lib/sanity'
import Container from 'components/layout/container'

const HomePage = ({ page }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <PageLayout
      headProps={{
        title: 'Aserto',
        description: 'Description',
        image: 'images/og.png'
      }}
    >
      <CustomHead />
      <Container>
        <Hero page={page} />
        <TheProblem page={page} />
        <TheSolution page={page} />
      </Container>
      <Features page={page} />
      <Testimonials page={page} />
    </PageLayout>
  )
}

export const getStaticProps = async () => {
  const { allHome } = await cms().HomePage()
  const page = allHome[0]
  return {
    props: { page },
    revalidate: 1
  }
}

export default HomePage
