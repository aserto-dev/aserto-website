// Layout
import PageLayout from 'components/layout/page'

import cms from 'lib/sanity'
import { GetStaticProps } from 'next'
import { FrameworkPageFragment, Testimonial } from 'lib/sanity/generated'
import Error from 'next/error'

import Framework from 'components/sections/frameworks/framework'
import Testimonials from 'components/sections/homepage/testimonials'
import Lottie, { ctaOptions } from 'components/sections/common/lottie/Lottie'

type Props = {
  frameworkPage: FrameworkPageFragment
  testimonials: Testimonial[]
}

const FrameworkPage = ({ frameworkPage, testimonials }: Props) => {
  if (!frameworkPage) return <Error statusCode={404} />

  return (
    <PageLayout
      footer="regular"
      headProps={{
        title:
          frameworkPage.metadata?.title ??
          `Aserto - framework resources for ${frameworkPage.framework?.framework?.title}`,
        description:
          frameworkPage.metadata?.description ??
          `Aserto resources for ${frameworkPage.framework?.framework?.title} applications`,
        image: `/images/languages/${
          frameworkPage.framework?.framework?.codename ?? 'js'
        }.svg`
      }}
    >
      <Framework frameworkPage={frameworkPage} />

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

      <Lottie {...ctaOptions(frameworkPage.callToAction ?? {})} />
    </PageLayout>
  )
}

export const getStaticPaths = async () => {
  const { allFrameworkPage } = await cms().FrameworkPaths()
  return {
    paths:
      allFrameworkPage?.map((f) => ({
        params: { slug: f.slug?.current as string }
      })) ?? [],
    fallback: false
  }
}

export const getStaticProps: GetStaticProps<Props> = async (ctx) => {
  const slug = ctx.params?.slug as string
  const {
    allFrameworkPage: [frameworkPage]
  } = await cms().FrameworkPage({ slug })
  const { allTestimonial } = await cms().Testimonials()

  return {
    props: { frameworkPage, testimonials: allTestimonial },
    revalidate: 1
  }
}

export default FrameworkPage
