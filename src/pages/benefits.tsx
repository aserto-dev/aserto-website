import PageLayout from 'components/layout/page'
import Benefits from 'components/sections/benefits'
import Hero from 'components/sections/benefits/hero'
import Video from 'components/sections/benefits/video'
import Lottie from 'components/sections/common/lottie/Lottie'
import cms from 'lib/sanity'
import { SectionBlockFragment } from 'lib/sanity/generated'
import { InferGetStaticPropsType } from 'next'

const BenefitsPage = ({
  page
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const benefits: SectionBlockFragment[] =
    page.benefit as SectionBlockFragment[]
  return (
    <PageLayout
      footer="regular"
      headProps={{
        title: page.metadata?.title ?? 'Benefits - Aserto',
        description:
          page.metadata?.description ??
          'Aserto solution benefits for cloud-native authorization',
        image: 'images/og.png'
      }}
    >
      <Hero
        title={
          page.title ??
          'Powerful authorization-as-a-service, built to evolve with your customer requirements.'
        }
      />
      <Video
        embed={page.youtubeUrl ?? 'https://www.youtube.com/embed/RJkgmdjJn_w'}
      />
      <Benefits benefits={benefits} />

      <div className="bg-benefitsCta">
        <Lottie
          caption={`Let's talk about your authorization challenges`}
          contact
        />
      </div>
    </PageLayout>
  )
}

export const getStaticProps = async () => {
  const { allBenefits } = await cms().BenefitsPage()

  return {
    props: {
      page: allBenefits[0]
    },
    revalidate: 1
  }
}

export default BenefitsPage
