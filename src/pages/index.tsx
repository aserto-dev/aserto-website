// Primitives
import CustomHead from 'components/primitives/custom-head'

// Layout
import PageLayout from 'components/layout/page'

// Sections
import Hero from 'components/sections/homepage/hero'
import Testimonials from 'components/sections/homepage/testimonials'
import Intro from 'components/sections/homepage/intro'
import { InferGetStaticPropsType } from 'next'
import cms from 'lib/sanity'
import Container from 'components/layout/container'
import TheProblem from '../components/sections/homepage/the-problem'
import CustomerSpotlight from 'components/sections/homepage/customers'

const HomePage = ({
  page,
  caseStudies
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <PageLayout
      footer
      headProps={{
        title: 'Aserto',
        description: 'Welcome to modern authorization',
        image: 'images/og.png'
      }}
    >
      <CustomHead
        title="Aserto - Welcome to modern authorization"
        description="Aserto provides cloud-native authorization as a service for developers"
        image="images/og.png"
      />
      <Container>
        <Hero page={page} />
        <Intro page={page} />
        <TheProblem page={page} />
        {page.customerSpotlightSectionEnabled && (
          <CustomerSpotlight page={page} caseStudies={caseStudies} />
        )}
        <Testimonials page={page} />
      </Container>
    </PageLayout>
  )
}

export const getStaticProps = async () => {
  const { allHome, allCaseStudy } = await cms().HomePage()
  const page = allHome[0]
  return {
    props: { page, caseStudies: allCaseStudy },
    revalidate: 1
  }
}

export default HomePage
