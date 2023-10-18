import Button from 'components/primitives/button'
import Link from 'components/primitives/link'
import { NameToFormId } from 'lib/hubspot/HubspotIds'
import SignupContainer from 'components/sections/signup/SignupContainer'
import HubspotForm from 'lib/hubspot/HubspotForm'
import { useState } from 'react'
const StayInformed = () => {
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

      <div className="flex flex-col mt-24 ml-8 gap-6 mb-4 maxlg:w-1/3 maxsm:w-1/2 maxlg:mt-6">
        <p className="text-aserto-grey-90 text-lg font-medium">Stay informed</p>
        <Button
          className="maxl:w-36"
          size="sm"
          onClick={() => setShowBlogModal(true)}
        >
          <img
            src="/images/about/envelope.svg"
            className="cursor-pointer inline mr-2 mb-0.5"
          />
          Subscribe
        </Button>
        <Button className="maxl:w-36" size="sm">
          <img
            src="/images/about/slack.svg"
            className="cursor-pointer inline mr-2"
          />
          <Link href="https://join.slack.com/t/asertocommunity/shared_invite/zt-yjvq8kwy-M_wtwFO35I9ToJiHg1Tutg">
            Join the discussion
          </Link>
        </Button>
        <Button className="maxl:w-36" size="sm">
          <img
            src="/images/about/call.svg"
            className="cursor-pointer inline mr-2"
          />
          <Link href="/contact-engineer">Talk to an engineer</Link>
        </Button>
      </div>
    </>
  )
}
export default StayInformed
