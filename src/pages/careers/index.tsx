// Primitives
import CustomHead from 'components/primitives/custom-head'

// Layout
import PageLayout from 'components/layout/page'

// Sections
import Hero from 'components/sections/careers/hero'
import OurValues from 'components/sections/careers/our-values'
import Benefits from 'components/sections/careers/benefits'
import OpenPositions from 'components/sections/careers/open-positions'
import Container from 'components/layout/container'
import Image from 'components/primitives/image'
import cms from 'lib/sanity'
import { InferGetStaticPropsType } from 'next'

const Careers = ({
  page,
  jobPostings
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <PageLayout
      headProps={{
        title: 'Aserto Careers',
        description: 'Welcome to modern authorization',
        image: 'images/og.png'
      }}
    >
      <div className="relative">
        <div className="absolute top-0 left-0 right-0">
          <Image
            src="/images/careers/background.png"
            width={3840}
            height={1920}
            loading="eager"
          />
        </div>
        <CustomHead />
        <Container>
          <Hero page={page} />
          <OurValues
            title={page.cultureSectionTitle ?? ''}
            subtitleRaw={page.cultureSectionSubtitleRaw}
            cols={4}
            features={page.culture ?? []}
            taglineRaw={page.cultureSectionTaglineRaw}
          />
          <OurValues
            title={page.diversitySectionTitle ?? ''}
            subtitleRaw={page.diversitySectionSubtitleRaw}
          />
          <OurValues
            title={page.valuesSectionTitle ?? ''}
            subtitleRaw={page.valuesSectionSubtitleRaw}
            cols={3}
            features={page.values ?? []}
          />
          <Benefits page={page} />
          <OpenPositions page={page} positions={jobPostings} />
        </Container>
      </div>
    </PageLayout>
  )
}

export const getStaticProps = async () => {
  const { allCareers, allJobPosting } = await cms().CareersPage()
  const page = allCareers[0]
  return {
    props: { page, jobPostings: allJobPosting },
    revalidate: 1
  }
}

export default Careers
