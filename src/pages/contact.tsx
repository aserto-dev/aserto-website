// Layout
import PageLayout from 'components/layout/page'

import HubspotContactForm from 'components/sections/contact/HubspotContactForm'

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
        className="relative bg-gradient-to-t from-aserto-black to-aserto-lochivar-50
          py-10 md:py-20 md:px-auto p-[20px] h-full w-full items-center"
      >
        <h1 className="text-5xl leading-none text-aserto-grey-90 text-center">
          Contact us
        </h1>
        <img
          className="w-[100px] mx-auto"
          src="images/lottie.png"
          alt="Lottie"
        />
        <div
          className="md:w-[600px] md:mx-auto p-[20px] bg-aserto-grey-10
            border border-[#717171] rounded-[11px] shadow-contact"
        >
          <HubspotContactForm />
        </div>
      </div>
    </PageLayout>
  )
}

export default Contact
