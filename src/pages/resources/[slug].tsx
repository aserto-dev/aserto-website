import { GetStaticProps } from 'next'
import Error from 'next/error'

import cms from 'lib/sanity'
import { ResourceFragment } from 'lib/sanity/generated'

import PageLayout from 'components/layout/page'
import Lottie, { ctaOptions } from 'components/sections/common/lottie/Lottie'

const ResourcePage = (page: ResourceFragment) => {
  if (!page) return <Error statusCode={404} />

  return (
    <PageLayout
      footer="regular"
      headProps={{
        title:
          page.metadata?.title ??
          'Enterprise-grade authorization-as-a-service for apps - Aserto',
        description:
          page.metadata?.description ??
          'Aserto provides cloud-native authorization as a service for developers. Add fine-grained RBAC, ABAC, or ACL to your application in under a day.',
        image: 'images/og.png'
      }}
    >
      <Lottie {...ctaOptions({ ...page.callToAction })} />
    </PageLayout>
  )
}

export const getStaticPaths = async () => {
  const { allResourcePage } = await cms().ResourcesPagePaths()
  return {
    paths:
      allResourcePage?.map((f) => ({
        params: { slug: f.slug?.current as string }
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
    props: { resource },
    revalidate: 1
  }
}

export default ResourcePage
