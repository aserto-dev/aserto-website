// Layout
import PageLayout from 'components/layout/page'
import Container from 'components/layout/container'

// Sections
import Hero from 'components/sections/integrations/hero'
import Integrations from 'components/sections/integrations/integrations'
import Image from 'components/primitives/image'
import cms from 'lib/sanity'
import { InferGetStaticPropsType } from 'next'

const IntegrationsPage = ({
  integrations
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <PageLayout
      footer="regular"
      headProps={{
        title: 'Aserto Integrations',
        description: 'Aserto technology integrations',
        image: 'images/og.png'
      }}
    >
      <div className="relative">
        <div className="absolute top-0 left-0 right-0">
          <Image
            src="/images/blog/bg-gradient.png"
            width={3840}
            height={1920}
            loading="eager"
          />
        </div>
        <Container>
          <Hero />
          <Integrations integrations={integrations} />
        </Container>
      </div>
    </PageLayout>
  )
}

export const getStaticProps = async () => {
  const { allIntegration } = await cms().Integrations()
  return {
    props: { integrations: allIntegration },
    revalidate: 1
  }
}

export default IntegrationsPage
