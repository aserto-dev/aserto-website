// Primitives
import CustomHead from 'components/primitives/custom-head'
import Button from 'components/primitives/button'

// Layout
import PageLayout from 'components/layout/page'

// Sections
// import Hero from 'components/sections/homepage/hero'
// import Testimonials from 'components/sections/homepage/testimonials'
// import Intro from 'components/sections/homepage/intro'
// import TheProblem from '../components/sections/homepage/the-problem'
// import CustomerSpotlight from 'components/sections/homepage/customers'

const HomePage = () => {
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
      <section className="relative px-4 py-[50px] bg-aserto-grey-10 text-aserto-grey-90 text-center">
        <div className="max-w-screen-xl mx-auto">
          <h2 className="text-[36px] pb-[50px]">Join the community</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 lg:gap-80 py-[45px] px-[50px]">
            <div className="w-full">
              <img
                className="w-[80px] mb-[30px] mx-auto"
                src="images/slack.svg"
                alt="Lottie"
              />
              <h4 className="text-[22px] font-semibold">Join our slack</h4>
              <p className="text-[18px]">
                Discuss authorization patterns, get answers, and interact with
                our growing community.
              </p>
              <Button
                variant="primary"
                size="sm"
                as="a"
                className="w-[200px] h-[36px] text-[16px] m-[20px] justify-center
                          inline-flex items-center cursor-pointer"
                href="https://join.slack.com/t/asertocommunity/shared_invite/zt-yjvq8kwy-M_wtwFO35I9ToJiHg1Tutg"
              >
                Join now
              </Button>
            </div>
            <div className="w-full">
              <img
                className="w-[80px] mb-[30px] mx-auto"
                src="images/aserto-logo.png"
                alt="Lottie"
              />
              <h4 className="text-[22px] font-semibold">
                Sign up for our newsletter
              </h4>
              <p className="text-[18px]">
                Get the latest technology articles and company updates in your
                inbox.
              </p>
              <Button
                variant="primary"
                size="sm"
                as="a"
                className="w-[200px] h-[36px] text-[16px] m-[20px] justify-center
                          inline-flex items-center cursor-pointer"
                href="/"
              >
                Sign up for updates
              </Button>
            </div>
          </div>
        </div>
      </section>
      <section className="relative px-4 py-[180px] text-aserto-grey-90 text-center">
        <div className="max-w-screen-xl mx-auto">
          <div>
            <img
              className="w-[480px] h-[350px] object-cover mx-auto"
              src="images/lottie.png"
              alt="Lottie"
            />
            <h2 className="text-[36px]">{`Let's talk about your authorization challenges`}</h2>
            <div className="my-[50px]">
              <Button
                variant="primary"
                size="sm"
                as="a"
                className="inline-flex items-center cursor-pointer"
                href="/contact"
              >
                Contact us
              </Button>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}

export default HomePage
