// Primitives
import CustomHead from 'components/primitives/custom-head'

// Layout
import PageLayout from 'components/layout/page'

import { isIE } from 'react-device-detect'

// Sections
import Hero from 'components/sections/homepage/hero'
import Testimonials from 'components/sections/homepage/testimonials'
import Intro from 'components/sections/homepage/intro'
import { InferGetStaticPropsType } from 'next'
import cms from 'lib/sanity'
import Container from 'components/layout/container'
import TheProblem from '../components/sections/homepage/the-problem'

const HomePage = ({ page }: InferGetStaticPropsType<typeof getStaticProps>) => {
  if (isIE) {
    return (
      <div
        style={{
          width: '70vw',
          height: '50vh',
          padding: '5rem',
          marginTop: '10vh',
          color: 'whitesmoke',
          border: '1px solid white',
          borderRadius: '10px',
          fontSize: '40px',
          display: 'flex',
          margin: 'auto'
        }}
      >
        <p>
          🦖 Looks like you are using IE. Update your browser for more security,
          speed and the best experience on this site.
        </p>
      </div>
    )
  }
  return (
    <PageLayout
      footer
      headProps={{
        title: 'Aserto',
        description: 'Welcome to modern authorization',
        image: 'images/og.png'
      }}
    >
      <CustomHead />
      <Container>
        <Hero page={page} />
        <Intro page={page} />
        <TheProblem page={page} />
        <Testimonials page={page} />
      </Container>
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
