// Primitives
import CustomHead from 'components/primitives/custom-head'

// Layout
import PageLayout from 'components/layout/page'
import cms from 'lib/sanity'
import { GetStaticProps } from 'next'
import { CaseStudyFragment } from 'lib/sanity/generated'
import Error from 'next/error'
import CaseStudy from 'components/sections/case-studies/case-study'

type Props = {
  caseStudy: CaseStudyFragment
}

const CaseStudyPage = ({ caseStudy }: Props) => {
  if (!caseStudy) return <Error statusCode={404} />

  return (
    <PageLayout
      contain
      footer
      headProps={{
        title: 'Aserto Case Study',
        description: 'Welcome to modern authorization',
        image: 'images/og.png'
      }}
    >
      <CustomHead />
      <CaseStudy caseStudy={caseStudy} />
    </PageLayout>
  )
}

export const getStaticPaths = async () => {
  const { allCaseStudy } = await cms().CaseStudyPaths()
  return {
    paths:
      allCaseStudy?.map((caseStudy) => ({
        params: { slug: caseStudy.slug?.current as string }
      })) ?? [],
    fallback: false
  }
}

export const getStaticProps: GetStaticProps<Props> = async (ctx) => {
  const slug = ctx.params?.slug as string
  const {
    allCaseStudy: [caseStudy]
  } = await cms().CaseStudy({ slug })

  return {
    props: { caseStudy },
    revalidate: 1
  }
}

export default CaseStudyPage
