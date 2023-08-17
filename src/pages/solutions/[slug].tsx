import { GetStaticProps } from 'next'
import Error from 'next/error'

import cms from 'lib/sanity'
import {
  FeatureItemFragment,
  SectionBlockFragment,
  SolutionFragment
} from 'lib/sanity/generated'

// Layout
import PageLayout from 'components/layout/page'

import Lottie, { ctaOptions } from 'components/sections/common/lottie/Lottie'
import IconBlock from 'components/sections/features/icon-block'
import Benefits from 'components/sections/solution/benefits'
import Hero from 'components/sections/solution/hero'

const SolutionPage = ({ solution }: { solution: SolutionFragment }) => {
  if (!solution) return <Error statusCode={404} />
  const benefits: SectionBlockFragment[] =
    solution.benefit as SectionBlockFragment[]
  const featureItems: FeatureItemFragment[] =
    solution.featureItems as FeatureItemFragment[]

  return (
    <PageLayout
      footer="regular"
      headProps={{
        title:
          solution.metadata?.title ??
          'Enterprise-grade authorization-as-a-service for apps - Aserto',
        description:
          solution.metadata?.description ??
          'Aserto provides cloud-native authorization as a service for developers. Add fine-grained RBAC, ABAC, or ACL to your application in under a day.',
        image: '/images/og.png'
      }}
    >
      <Hero page={solution} />
      <Benefits benefits={benefits} />
      <IconBlock
        featureIcons={featureItems}
        iconBlockTitle={solution.iconBlockTitleRaw}
      />
      <div className="bg-featureCta">
        <Lottie {...ctaOptions({ ...solution.callToAction })} />
      </div>
    </PageLayout>
  )
}

export const getStaticPaths = async () => {
  const { allSolutionPage } = await cms().SolutionsPagePaths()
  return {
    paths:
      allSolutionPage?.map((uc) => ({
        params: { slug: uc.slug?.current as string }
      })) ?? [],
    fallback: false
  }
}

export const getStaticProps: GetStaticProps<{
  solution: SolutionFragment
  allSolutions: SolutionFragment[]
}> = async (ctx) => {
  const slug = ctx.params?.slug as string
  const {
    allSolutionPage: [solution]
  } = await cms().SolutionsPage({ slug })
  const { allSolutionPage: allSolutions } = await cms().SolutionsPages()

  return {
    props: { solution, allSolutions },
    revalidate: 1
  }
}

export default SolutionPage
