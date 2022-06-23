// Layout
import PageLayout from 'components/layout/page'

// Sections
import Hero from 'components/sections/case-studies/hero'
import CaseStudies from 'components/sections/case-studies/case-studies'
import Container from 'components/layout/container'
import Image from 'components/primitives/image'
import cms from 'lib/sanity'
import { InferGetStaticPropsType } from 'next'

const CaseStudiesPage = ({
  page,
  caseStudies
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <PageLayout
      footer="regular"
      headProps={{
        title: page.metadata?.title ?? 'Case Studies - Aserto',
        description:
          page.metadata?.description ??
          'Case studies of happy Aserto customers',
        image: 'images/og.png'
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
          <Hero page={page} />
          <CaseStudies caseStudies={caseStudies} />
        </Container>
      </div>
    </PageLayout>
  )
}

export const getStaticProps = async () => {
  const { allCaseStudiesPage, allCaseStudy } = await cms().CaseStudiesPage()
  const page = allCaseStudiesPage[0]
  return {
    props: { page, caseStudies: allCaseStudy },
    revalidate: 1
  }
}

export default CaseStudiesPage
