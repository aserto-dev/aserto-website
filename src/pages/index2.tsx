import { InferGetStaticPropsType } from 'next'
import cms from 'lib/sanity'

// Primitives
import CustomHead from 'components/primitives/custom-head'

// Layout
import PageLayout from 'components/layout/page'
import Container from 'components/sections/homepage/container'

// Sections
import Hero from 'components/sections/homepage/hero2'
import Testimonials from 'components/sections/homepage/testimonials2'
import LatestInfo from 'components/sections/homepage/latest'
import Intro from 'components/sections/homepage/intro2'
import CallToAction from 'components/sections/homepage/call-to-action'

const HomePage = ({
  post,
  event
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <PageLayout
      footer="regular"
      headProps={{
        title: 'Aserto',
        description: 'Welcome to modern authorization',
        image: 'images/og.png'
      }}
    >
      <CustomHead
        title="Aserto - Welcome to modern authorization"
        description="Aserto provides cloud-native authorization as a service for developers"
        image="images/og.png"
      />
      <Hero />
      <Intro />
      <Container className="px-[65px] py-[100px] bg-aserto-grey-10 text-aserto-grey-90">
        <h2 className="text-[36px] font-medium text-center">
          {`Don't build undifferentiated plumbing`}
        </h2>
        <img
          className="w-[640px] my-[45px] mx-auto"
          src="images/homepage/wheel-man.svg"
          alt="Reinventing the wheel"
        />
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 px-4 sm:px-0 sm:gap-4">
          <div className="p-[18px] bg-aserto-grey-20 rounded-[6px]">
            <h4 className="font-bold pb-[10px] text-[22px]">
              Authorization is complex
            </h4>
            <p className="text-[18px] leading-[28px] self-end">
              {`Evaluating policy against real-time user attributes with
              millisecond latency and 100% availability is a distributed systems
              problem. Most engineering teams can't justify taking the time to
              fully solve it.`}
            </p>
          </div>
          <div className="p-[20px] bg-aserto-grey-20 rounded-[6px]">
            <h4 className="font-bold pb-[10px] text-[22px]">
              Requirements will evolve as your company grows
            </h4>
            <p className="text-[18px] leading-[28px]">
              {`Custom roles. Custom attributes. Integration with enterprise
              identity providers and directories. Decision logs. ISO 27001. As
              products move up-market, teams that build them can't keep up.`}
            </p>
          </div>
          <div className="p-[20px] bg-aserto-grey-20 rounded-[6px]">
            <h4 className="font-bold pb-[10px] text-[22px]">{`Don't build undifferentiated plumbing`}</h4>
            <p className="text-[18px] leading-[28px]">
              {`"I want to rewrite RBAC!" said no engineer, ever. Your team
              could be working on end-user features instead of undifferentiated
              heavy lifting.`}
            </p>
          </div>
        </div>
      </Container>
      <Container className="px-[65px] py-[100px] bg-aserto-grey-10 bg-homepageInfo text-aserto-grey-90">
        <h2 className="text-[36px] font-medium text-center">
          Built for developers
        </h2>
        <Testimonials />
        <LatestInfo
          title={'Our latest content and events'}
          latestBlogPost={post}
          latestEvent={event}
        />
      </Container>
      <CallToAction />
    </PageLayout>
  )
}

export const getStaticProps = async () => {
  const { allPost } = await cms().BlogIndex({
    now: new Date(Date.now()).toISOString()
  })
  const { allEvent } = await cms().EventsPage()

  return {
    props: {
      post: allPost[0],
      event: allEvent[0]
    },
    revalidate: 1
  }
}

export default HomePage
