import { InferGetStaticPropsType } from 'next'
import cms from 'lib/sanity'

// Layout
import PageLayout from 'components/layout/page'
import Container from 'components/sections/homepage/container'

// Sections
import Hero from 'components/sections/homepage/hero'
import { AsertoInActionValueProp } from 'components/sections/homepage/aserto-in-action'
import Testimonials from 'components/sections/homepage/testimonials'
import LatestInfo from 'components/sections/homepage/latest'
import Intro from 'components/sections/homepage/intro'
import Problem from 'components/sections/homepage/problem-statement'
import CallToAction from 'components/sections/homepage/call-to-action'
import { SectionBlockFragment } from 'lib/sanity/generated'

const HomePage = ({
  post,
  event,
  page,
  testimonials
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const problems: SectionBlockFragment[] =
    page.theProblemSectionCards as SectionBlockFragment[]
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
      <Hero
        title={
          page.tagline ?? 'The fastest path to enterprise-grade authorization.'
        }
      />
      <Intro page={page} />
      <Container className="text-aserto-grey-90 lg:px-12">
        <AsertoInActionValueProp
          direction="right"
          title="Authorizer locally, manage centrally"
        />
      </Container>

      <Problem title={page.theProblemSectionTitle ?? ''} problems={problems} />
      <Container className="py-[100px] bg-aserto-grey-10 bg-homepageInfo text-aserto-grey-90">
        <h2 className="text-[36px] font-medium text-center">
          {page.testimonialsSectionTitle}
        </h2>
        <Testimonials testimonials={testimonials} />
        <LatestInfo
          title={'Our latest content and events'}
          latestBlogPost={post}
          latestEvent={event}
        />
      </Container>
      <CallToAction {...page.callToAction} />
    </PageLayout>
  )
}

export const getStaticProps = async () => {
  const { allPost } = await cms().BlogIndex({
    now: new Date(Date.now()).toISOString()
  })
  const { allEvent } = await cms().EventsPage()
  const { allHome } = await cms().HomePage()
  const { allTestimonial } = await cms().Testimonials()

  return {
    props: {
      post: allPost[0],
      event: allEvent[0],
      page: allHome[0],
      testimonials: allTestimonial
    },
    revalidate: 1
  }
}

export default HomePage
