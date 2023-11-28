import { InferGetStaticPropsType } from 'next'
import cms from 'lib/sanity'
import { FeatureBlockFragment, FeatureItemFragment } from 'lib/sanity/generated'
import PageLayout from 'components/layout/page'
import Lottie, { ctaOptions } from 'components/sections/common/lottie/Lottie'
import Hero from 'components/sections/features/hero'
import IconBlock from 'components/sections/features/icon-block'
import FeatureBlocks from 'components/sections/features/feature-blocks'

const FeaturesPage = ({
  page
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const features: FeatureBlockFragment[] =
    page.featureBlocks as FeatureBlockFragment[]
  const featureItems: FeatureItemFragment[] =
    page.featureItems as FeatureItemFragment[]
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
      <Hero page={page} />

      <img
        className="w-[150px] sm:w-[280px] mx-auto my-16 xl:my-40"
        src="images/homepage/Lottie.svg"
        alt="Lottie"
      />

      <FeatureBlocks features={features} />

      <IconBlock
        featureIcons={featureItems}
        iconBlockTitle={page.iconBlockTitleRaw}
      />

      <div className="bg-featureCta">
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
    }
  }
}

export default FeaturesPage
