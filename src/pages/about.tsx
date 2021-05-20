// Primitives
import CustomHead from 'components/primitives/custom-head'

// Layout
import PageLayout from 'components/layout/page'

// Sections
import Advisors from 'components/sections/about/advisors'
import Founders from 'components/sections/about/founders'
import Hero from 'components/sections/about/hero'
import Hiring from 'components/sections/about/hiring'
import Investors from 'components/sections/about/investors'
import cms from 'lib/sanity'
import { InferGetStaticPropsType } from 'next'

const About = ({ page }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <PageLayout
      contain
      headProps={{
        title: 'Aserto',
        description: 'Description',
        image: 'images/og.png'
      }}
      currentPage="about"
    >
      <CustomHead />
      <Hero page={page} />
      <Founders page={page} />
      <Investors page={page} />
      <Advisors page={page} />
      <Hiring page={page} />
    </PageLayout>
  )
}

export const getStaticProps = async () => {
  const { allAbout } = await cms().AboutPage()
  const page = allAbout[0]
  return {
    props: { page },
    revalidate: 1
  }
}

export default About
