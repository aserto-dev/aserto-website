import { useState } from 'react'
import Button from 'components/primitives/button'
import Container from '../container'
import SignupContainer from 'components/sections/signup/SignupContainer'
import HubspotForm from 'lib/hubspot/HubspotForm'
import { NameToFormId } from 'lib/hubspot/HubspotIds'
import Lottie, { ctaOptions } from 'components/sections/common/lottie/Lottie'
import { CtaBlock } from 'lib/sanity/generated'

const CallToAction = (ctaBlock: CtaBlock) => {
  const [showBlogModal, setShowBlogModal] = useState(false)
  return (
    <>
      {showBlogModal && (
        <SignupContainer
          closeModal={() => setShowBlogModal(false)}
          background={false}
        >
          <>
            <h4 className="text-[18px] text-aserto-grey-90 text-center font-semibold my-4">
              Sign up for our newsletter
            </h4>
            <HubspotForm formId={NameToFormId.newsletter} />
          </>
        </SignupContainer>
      )}
      <Container className="py-[50px] bg-aserto-grey-10 text-aserto-grey-90 text-center">
        <div className="text-[36px] pb-[50px] font-medium">
          Join the community
        </div>
        <div className="grid sm:grid-rows-2 sm:grid-flow-col xl:gap-x-80 gap-12 py-[45px] px-[50px]">
          <div className="w-full">
            <picture>
              <img
                className="w-[80px] mb-[30px] mx-auto"
                src="/images/slack-logo.svg"
                alt="Lottie"
              />
            </picture>
            <h4 className="text-[22px] font-semibold">Join our slack</h4>
            <p className="text-[18px]">
              Discuss authorization patterns, get answers, and engage with our
              community.
            </p>
          </div>
          <div>
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
            <picture>
              <img
                className="w-[80px] mb-[30px] mx-auto"
                src="/images/aserto-logo.png"
                alt="Aserto Logo"
              />
            </picture>
            <h4 className="text-[22px] font-semibold">
              Sign up for our newsletter
            </h4>
            <p className="text-[18px]">
              Get the latest technology articles and company updates in your
              inbox.
            </p>
          </div>
          <div>
            <Button
              variant="primary"
              size="sm"
              as="a"
              className="w-[200px] h-[36px] text-[16px] m-[20px] justify-center
                    inline-flex items-center cursor-pointer"
              onClick={() => setShowBlogModal(true)}
            >
              Sign up for updates
            </Button>
          </div>
        </div>
      </Container>

      <Lottie {...ctaOptions(ctaBlock)} />
    </>
  )
}

export default CallToAction
