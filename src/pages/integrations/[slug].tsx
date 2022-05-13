// Layout
import PageLayout from 'components/layout/page'
import cms from 'lib/sanity'
import { GetStaticProps } from 'next'
import { IntegrationFragment } from 'lib/sanity/generated'
import Error from 'next/error'
import Integration from 'components/sections/integrations/integration'
import CallToAction from 'components/sections/homepage/call-to-action'

type Props = {
  integration: IntegrationFragment
}

const IntegrationPage = ({ integration }: Props) => {
  if (!integration) return <Error statusCode={404} />

  return (
    <PageLayout
      contain
      footer="regular"
      headProps={{
        title: `Aserto - integration with ${integration.technology}`,
        description: `Aserto technology integration with ${integration.technology}`,
        image: 'images/og.png'
      }}
    >
      <Integration integration={integration} />
      <CallToAction />
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

  return {
    props: { integration },
    revalidate: 1
  }
}

export default IntegrationPage
