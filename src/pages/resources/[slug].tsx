import { GetStaticProps } from 'next'
import Error from 'next/error'

import cms from 'lib/sanity'
import { ResourceFragment, SectionBlockFragment } from 'lib/sanity/generated'

import PageLayout from 'components/layout/page'
import Lottie, { ctaOptions } from 'components/sections/common/lottie/Lottie'
import Hero from 'components/sections/resource/hero'
import Intro from 'components/sections/resource/intro'
import SectionBlocks from 'components/sections/resource/sectionBlocks'

const ResourcePage = ({ resource }: { resource: ResourceFragment }) => {
  if (!resource) return <Error statusCode={404} />
  const benefits: SectionBlockFragment[] =
    resource.sectionBlock as SectionBlockFragment[]

  return (
    <PageLayout
      footer="regular"
      headProps={{
        title:
          resource.metadata?.title ??
          'Enterprise-grade authorization-as-a-service for apps - Aserto',
        description:
          resource.metadata?.description ??
          'Aserto provides cloud-native authorization as a service for developers. Add fine-grained RBAC, ABAC, or ACL to your application in under a day.',
        image: 'images/og.png'
      }}
    >
      <Hero page={resource} />
      <Intro page={resource} />
      <SectionBlocks sectionBlocks={benefits} />
      <div className="bg-featureCta">
        <Lottie {...ctaOptions({ ...resource.callToAction })} />
      </div>
    </PageLayout>
  )
}

export const getStaticPaths = async () => {
  const { allResourcePage } = await cms().ResourcesPagePaths()
  return {
    paths:
      allResourcePage?.map((r) => ({
        params: { slug: r.slug?.current as string }
      })) ?? [],
    fallback: false
  }
}

export const getStaticProps: GetStaticProps<{
  resource: ResourceFragment
}> = async (ctx) => {
  const slug = ctx.params?.slug as string
  const {
    allResourcePage: [resource]
  } = await cms().ResourcesPage({ slug })

  return {
    props: { resource }
  }
}

export default ResourcePage
