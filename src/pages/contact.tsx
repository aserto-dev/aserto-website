// Layout
import PageLayout from 'components/layout/page'

// Primitives
// import Image from 'components/primitives/image'

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
      {/* <div className="relative bg-gradient-to-t from-aserto-black to-aserto-lochivar-50"> */}
      {/* <div className="absolute top-[-100px] left-0 right-0">
          <Image
            // src="/images/blog/bg-gradient.png"
            src="/images/background.png"
            objectFit="cover"
            layout="responsive"
            loading="eager"
          />
        </div> */}
      <div
        className="relative bg-gradient-to-t from-aserto-black to-aserto-lochivar-50
          md:py-[100px] md:px-auto p-[20px] h-full w-full items-center"
      >
        <div
          className="md:w-[700px] md:mx-auto p-[20px] bg-aserto-grey-10
            border border-[#717171] rounded-[11px] shadow-contact"
        >
          <HubspotContactForm />
        </div>
      </div>
      {/* </div> */}
    </PageLayout>
  )
}

export default Contact
