// Layout
import PageLayout from 'components/layout/page'
import Container from 'components/layout/container'

// Sections
import Hero from 'components/sections/landing-pages/hero'
import LandingPagesSection from 'components/sections/landing-pages/landing-pages'
import Image from 'components/primitives/image'
import cms from 'lib/sanity'
import { InferGetStaticPropsType } from 'next'

const LandingPages = ({
  landingPages
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <PageLayout
      footer="regular"
      headProps={{
        title: 'Aserto Landing Pages',
        description: 'Aserto technology-specific landing pages',
        image: '/images/og.png'
      }}
    >
      <div className="relative">
        <div className="absolute top-0 left-0 right-0">
          <Image
            src="/images/blog/bg-gradient.png"
            width={3840}
            height={1920}
            loading="eager"
          />
        </div>
        <Container>
          <Hero />
          <LandingPagesSection landingPages={landingPages} />
        </Container>
      </div>
    </PageLayout>
  )
}

export const getStaticProps = async () => {
  const { allLandingPage } = await cms().LandingPages()
  return {
    props: { landingPages: allLandingPage },
    revalidate: 1
  }
}

export default LandingPages
