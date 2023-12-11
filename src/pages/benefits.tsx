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
      <div className="relative bg-hero pb-36">
        <Hero
          title={
            page.title ??
            'Powerful authorization-as-a-service, built to evolve with your customer requirements.'
          }
        />
        <Video
          embed={page.youtubeUrl ?? 'https://www.youtube.com/embed/RJkgmdjJn_w'}
        />
        <picture>
          <img
            className="object-cover h-[250px] -bottom-28 absolute
        sm:object-fill sm:h-auto sm:-bottom-12 sm:left-1/2 sm:transform sm:-translate-x-1/2"
            src="images/homepage/seafloor.svg"
            alt="Sea Floor"
          />
        </picture>
        <picture>
          <img
            className="w-[350px] absolute -bottom-40 right-1/2 transform translate-x-1/2
        sm:w-[600px] sm:-bottom-80"
            src="images/homepage/Lottie.svg"
            alt="Lottie"
          />
        </picture>
      </div>
      <Benefits benefits={benefits} />

      <div className="bg-benefitsCta">
        <Lottie
          caption={`Let's talk about your authorization challenges`}
          contactEngineer
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
    }
  }
}

export default BenefitsPage
