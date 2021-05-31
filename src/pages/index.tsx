// Primitives
import CustomHead from 'components/primitives/custom-head'

// Layout
import PageLayout from 'components/layout/page'

// Sections
import Hero from 'components/sections/homepage/hero'
import Testimonials from 'components/sections/homepage/testimonials'
<<<<<<< HEAD
=======
import TheProblem from 'components/sections/homepage/the-problem'
>>>>>>> 5a9aba1 (Add intro items)
import Intro from 'components/sections/homepage/intro'
import { InferGetStaticPropsType } from 'next'
import cms from 'lib/sanity'
import Container from 'components/layout/container'
import { useEffect } from 'react'
import TheProblem from '../components/sections/homepage/the-problem'

const HomePage = ({ page }: InferGetStaticPropsType<typeof getStaticProps>) => {
  useEffect(() => {
    if (window.location.hash === '#sign-up') {
      document.querySelector('#sign-up')?.scrollIntoView()
    }
  }, [])

  return (
    <PageLayout
      headProps={{
        title: 'Aserto',
        description: 'Description',
        image: 'images/og.png'
      }}
      newsletter={{
        mailchimpEndpoint:
          'https://aserto.us6.list-manage.com/subscribe/post?u=37bc48a192e946b134dc161ba&amp;id=6b960336df',
        title: 'Request early access',
        description: 'Sign up now to get ahead of the line.'
      }}
    >
      <CustomHead />
      <Container>
        <Hero page={page} />
        <Intro page={page} />
        <TheProblem page={page} />
      </Container>
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
