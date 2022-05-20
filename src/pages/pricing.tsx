// Layout
import PageLayout from 'components/layout/page'

// Sections
import Hero from 'components/sections/pricing/hero'
import Editions from 'components/sections/pricing/editions'
import PricingTable from 'components/sections/pricing/table'
import Container from 'components/layout/container'
import Image from 'components/primitives/image'
import cms from 'lib/sanity'
import { InferGetStaticPropsType } from 'next'

const PricingPage = ({
  page,
  editions
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <PageLayout
      footer="regular"
      headProps={{
        title: page.metadata?.title ?? 'Aserto Pricing',
        description:
          page.metadata?.description ??
          'Pricing for the editions of the Aserto authorization service',
        image: 'images/og.png'
      }}
    >
      <div className="relative">
        <div className="absolute top-[-478px] left-0 right-0">
          <Image
            src="/images/pricing/background.svg"
            loading="eager"
            layout="responsive"
          />
        </div>
        <Container>
          <Hero page={page} />
          <Editions page={page} editions={editions} />
          <PricingTable page={page} editions={editions} />
        </Container>
      </div>
    </PageLayout>
  )
}

export const getStaticProps = async () => {
  const { allPricing, allEdition } = await cms().Pricing()
  const page = allPricing[0]
  return {
    props: { page, editions: allEdition },
    revalidate: 1
  }
}

export default PricingPage
