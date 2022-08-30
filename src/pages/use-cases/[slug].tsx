import { GetStaticProps } from 'next'
import Error from 'next/error'

import cms from 'lib/sanity'
import { UseCaseFragment } from 'lib/sanity/generated'

// Layout
import PageLayout from 'components/layout/page'

import Lottie, { ctaOptions } from 'components/sections/common/lottie/Lottie'
import Hero from 'components/sections/use-case/hero'
import Intro from 'components/sections/use-case/intro'

const UseCasePage = ({
  useCase
}: {
  useCase: UseCaseFragment
  allUseCases: UseCaseFragment[]
}) => {
  if (!useCase) return <Error statusCode={404} />

  return (
    <PageLayout
      footer="regular"
      headProps={{
        title:
          useCase.metadata?.title ??
          'Enterprise-grade authorization-as-a-service for apps - Aserto',
        description:
          useCase.metadata?.description ??
          'Aserto provides cloud-native authorization as a service for developers. Add fine-grained RBAC, ABAC, or ACL to your application in under a day.',
        image: '/images/og.png'
      }}
    >
      <Hero page={useCase} />
      <Intro page={useCase} />
      <div className="bg-featureCta">
        <Lottie {...ctaOptions({ ...useCase.callToAction })} />
      </div>
    </PageLayout>
  )
}

export const getStaticPaths = async () => {
  const { allUseCasePage } = await cms().UseCasesPagePaths()
  return {
    paths:
      allUseCasePage?.map((uc) => ({
        params: { slug: uc.slug?.current as string }
      })) ?? [],
    fallback: false
  }
}

export const getStaticProps: GetStaticProps<{
  useCase: UseCaseFragment
  allUseCases: UseCaseFragment[]
}> = async (ctx) => {
  const slug = ctx.params?.slug as string
  const {
    allUseCasePage: [useCase]
  } = await cms().UseCasesPage({ slug })
  const { allUseCasePage: allUseCases } = await cms().UseCasesPages()

  return {
    props: { useCase, allUseCases },
    revalidate: 1
  }
}

export default UseCasePage
