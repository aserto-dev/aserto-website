// Layout
import PageLayout from 'components/layout/page'

import cms from 'lib/sanity'
import { GetStaticProps } from 'next'
import { LandingPageFragment, Testimonial } from 'lib/sanity/generated'
import Error from 'next/error'

import LandingPageSection from 'components/sections/landing-pages/landing-page'
import Testimonials from 'components/sections/homepage/testimonials'
import Signup from 'components/sections/signup'

type Props = {
  landingPage: LandingPageFragment
  testimonials: Testimonial[]
}

const LandingPage = ({ landingPage, testimonials }: Props) => {
  if (!landingPage) return <Error statusCode={404} />

  return (
    <PageLayout
      footer="regular"
      headProps={{
        title:
          landingPage.metadata?.title ??
          `Aserto - better together with ${landingPage.name}`,
        description:
          landingPage.metadata?.description ??
          `Aserto relationship with ${landingPage.name}`,
        image: '/images/og.png'
      }}
    >
      <LandingPageSection landingPage={landingPage} />

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

      <div className="max-w-container mt-10 mx-auto p-5 max-w-[544px] bg-aserto-grey-10 rounded-[6px]">
        <Signup />
      </div>

      <div className="py-10">
        <img
          className="w-[480px] h-[350px] object-cover mx-auto"
          src="/images/lottie.png"
          alt="Lottie"
        />
        <h2 className="text-center text-aserto-grey-90 text-[36px] font-medium">{`Authorization as easy as an API call`}</h2>
      </div>
    </PageLayout>
  )
}

export const getStaticPaths = async () => {
  const { allLandingPage } = await cms().LandingPagePaths()
  return {
    paths:
      allLandingPage?.map((lp) => ({
        params: { slug: lp.slug?.current as string }
      })) ?? [],
    fallback: false
  }
}

export const getStaticProps: GetStaticProps<Props> = async (ctx) => {
  const slug = ctx.params?.slug as string
  const {
    allLandingPage: [lp]
  } = await cms().LandingPage({ slug })
  const { allTestimonial } = await cms().Testimonials()

  return {
    props: { landingPage: lp, testimonials: allTestimonial },
    revalidate: 1
  }
}

export default LandingPage
