import { InferGetStaticPropsType } from 'next'
import cms from 'lib/sanity'
import { FeatureBlockFragment } from 'lib/sanity/generated'
import PageLayout from 'components/layout/page'
import Lottie, { ctaOptions } from 'components/sections/common/lottie/Lottie'
import FeatureBlocks from 'components/sections/features/feature-blocks'
import Hero from 'components/sections/features/hero'

const FeaturesPage = ({
  page
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const features: FeatureBlockFragment[] =
    page.featureBlocks as FeatureBlockFragment[]
  return (
    <PageLayout
      footer="regular"
      headProps={{
        title: page.metadata?.title ?? 'Access Control Features - Aserto',
        description:
          page.metadata?.description ??
          `Learn more about Aserto access control system features. The Aserto directory, 
          Edge Authorizers, and Control plane help organizations build and manage fine-grained, 
          real-time , policy-based authorization for cloud applications and APIs.`,
        image: 'images/og.png'
      }}
    >
      <div className="relative pb-36">
        <Hero page={page} />
      </div>

      <FeatureBlocks features={features} />

      <div>
        {!!page.callToAction && (
          <Lottie {...ctaOptions({ ...page.callToAction })} />
        )}
      </div>
    </PageLayout>
  )
}

export const getStaticProps = async () => {
  const { allFeatures } = await cms().FeaturesPage()

  return {
    props: {
      page: allFeatures[0]
    },
    revalidate: 1
  }
}

export default FeaturesPage
