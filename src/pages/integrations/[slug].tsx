// Layout
import PageLayout from 'components/layout/page'

import cms from 'lib/sanity'
import { GetStaticProps } from 'next'
import { IntegrationFragment, Testimonial } from 'lib/sanity/generated'
import Error from 'next/error'

import Integration from 'components/sections/integrations/integration'
import Testimonials from 'components/sections/homepage/testimonials'
import Lottie, { ctaOptions } from 'components/sections/common/lottie/Lottie'

type Props = {
  integration: IntegrationFragment
  testimonials: Testimonial[]
}

const IntegrationPage = ({ integration, testimonials }: Props) => {
  if (!integration) return <Error statusCode={404} />

  return (
    <PageLayout
      footer="regular"
      headProps={{
        title:
          integration.metadata?.title ??
          `${integration.technology} integration - Aserto`,
        description:
          integration.metadata?.description ??
          `Aserto technology integration with ${integration.technology}`,
        image: 'images/og.png'
      }}
    >
      <Integration integration={integration} />

      {/* testimonial heading */}
      <div className="bg-aserto-grey-10 px-5 pt-10">
        <div className="text-center text-4xl lg:text-4xl sm:leading-none text-aserto-grey-90 lg:px-20">
          Built for developers with{' '}
          <span style={{ color: 'red' }}>&#9829;</span>
        </div>
        <div className="max-w-screen-xl mx-auto">
          <Testimonials testimonials={testimonials} />
        </div>
      </div>

      <Lottie {...ctaOptions(integration.callToAction ?? {})} />
    </PageLayout>
  )
}

export const getStaticPaths = async () => {
  const { allIntegration } = await cms().IntegrationPaths()
  return {
    paths:
      allIntegration?.map((integration) => ({
        params: { slug: integration.slug?.current as string }
      })) ?? [],
    fallback: false
  }
}

export const getStaticProps: GetStaticProps<Props> = async (ctx) => {
  const slug = ctx.params?.slug as string
  const {
    allIntegration: [integration]
  } = await cms().Integration({ slug })
  const { allTestimonial } = await cms().Testimonials()

  return {
    props: { integration, testimonials: allTestimonial },
    revalidate: 1
  }
}

export default IntegrationPage
