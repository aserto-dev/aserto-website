import PageLayout from 'components/layout/page'
import Hero from 'components/sections/features/hero'
import cms from 'lib/sanity'
import { InferGetStaticPropsType } from 'next'

const FeaturesPage = ({
  page
}: InferGetStaticPropsType<typeof getStaticProps>) => {
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
      <div className="relative bg-hero pb-36">
        <Hero page={page} />
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
