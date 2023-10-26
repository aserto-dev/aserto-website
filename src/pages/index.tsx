import { InferGetStaticPropsType } from 'next'
import cms from 'lib/sanity'
import generateRSS from 'lib/generateRSS'

// Layout
import PageLayout from 'components/layout/page'
import Container from 'components/sections/homepage/container'

// Sections
import Hero from 'components/sections/homepage/hero'
import Testimonials from 'components/sections/homepage/testimonials'
import LatestInfo from 'components/sections/homepage/latest'
import Intro from 'components/sections/homepage/intro'
import Problem from 'components/sections/homepage/problem-statement'
import CallToAction from 'components/sections/homepage/call-to-action'
import { SectionBlockFragment } from 'lib/sanity/generated'
import Animations from 'components/sections/homepage/animations'

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
      <Hero page={page} />
      <Animations page={page} />
      <Intro page={page} />
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
      <img
        className="object-fit h-[200px] absolute left-0 right-0 -bottom-20 md:-bottom-16 sm:-bottom-12
        mx-auto mt-60 sm:mt-52 md:mt-20 lg:mt-56 xl:mt-0"
        src="images/homepage/seafloor-teal.svg"
        alt="Sea Floor"
      />
    </PageLayout>
  )
}

export const getStaticProps = async () => {
  const { allPost } = await cms().BlogIndex({
    now: new Date(Date.now()).toISOString()
  })

  //const { allEvent } = await cms().EventsPage()
  const { allHome, allEvent } = await cms().HomePage()
  const { allTestimonial } = await cms().Testimonials()

  await generateRSS(allPost)

  return {
    props: {
      post: allPost[0],
      event: allEvent[0],
      page: allHome[0],
      testimonials: allTestimonial
    }
  }
}

export default HomePage
