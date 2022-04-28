// Layout
import PageLayout from 'components/layout/page'
import Link from 'components/primitives/link'

import HubspotForm from 'lib/hubspot/HubspotForm'

const Contact = () => {
  return (
    <PageLayout
      headProps={{
        title: 'Contact us',
        description: 'Contact us',
        image: 'images/og.png'
      }}
    >
      <div
        className="relative h-full w-full bg-gradient-to-t from-aserto-black to-aserto-lochivar-50
          py-10 md:py-20 md:px-auto px-[20px] mb-20 items-center text-aserto-grey-90 text-center"
      >
        <h1 className="text-5xl my-8 leading-none">Contact us</h1>
        <h2 className="text-3xl mb-20 leading-none">
          Three easy ways to get in touch with us.
        </h2>
        <div className="flex flex-col md:flex-row items-start justify-center gap-12 md:gap-4">
          <div
            className="md:w-[600px] mx-auto md:mx-0 md:order-2 p-[20px] w-full bg-aserto-grey-10
            border border-[#717171] rounded-[11px] shadow-contact"
          >
            <h4 className="text-[18px] font-semibold my-4">
              Send us a message
            </h4>
            <img
              src="images/message-icon.svg"
              alt="Message"
              className="mx-auto my-8 w-[60px]"
            />
            <HubspotForm formId="fc7c232e-cab9-4eb5-822e-5d0c0d3d2714" />
          </div>
          <div
            className="md:w-[275px] mx-auto md:mx-0 md:order-3 p-[20px] w-full sm:w-8/12 bg-aserto-grey-10
            border border-[#717171] rounded-[11px] shadow-contact"
          >
            <h4 className="text-[18px] font-semibold my-4">
              Speak with an engineer
            </h4>
            <img
              src="images/schedule-icon.svg"
              alt="Schedule"
              className="mx-auto my-8 w-[55px]"
            />
            <p>Schedule a 1-on-1 meeting with an Aserto engineer.</p>
            <Link
              href=""
              className="w-full p-[10px] mt-[30px] bg-aserto-lochivar-100 border-2 inline-block
                border-aserto-lochivar-100 rounded-[4px] text-[14px] font-semibold
                hover:bg-aserto-lochivar-accent-10 hover:border-aserto-lochivar-accent-10 hover:text-white"
            >
              Schedule a meeting
            </Link>
          </div>
          <div
            className="md:w-[275px] mx-auto md:mx-0 md:order-1 p-[20px] w-full sm:w-8/12 bg-aserto-grey-10
            border border-[#717171] rounded-[11px] shadow-contact"
          >
            <h4 className="text-[18px] font-semibold my-4">Join our Slack</h4>
            <img
              src="images/slack-logo.svg"
              alt="Slack"
              className="mx-auto my-8 w-[55px]"
            />
            <p>
              Discuss authorization patterns, get answers, and interact with our
              growing community.
            </p>
            <Link
              href="https://join.slack.com/t/asertocommunity/shared_invite/zt-yjvq8kwy-M_wtwFO35I9ToJiHg1Tutg"
              className="w-full p-[10px] mt-[30px] bg-aserto-lochivar-100 border-2 inline-block
                border-aserto-lochivar-100 rounded-[4px] text-[14px] font-semibold
                hover:bg-aserto-lochivar-accent-10 hover:border-aserto-lochivar-accent-10 hover:text-white"
            >
              Join our Slack
            </Link>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}

export default Contact
