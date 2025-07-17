// Layout
import PageLayout from 'components/layout/page'
//import HubspotSchedulingEmbed from 'lib/hubspot/HubspotSchedulingEmbed'

const ContactEngineer = () => {
  const page = {
    title: 'Speak with an Engineer - Aserto',
    subtitle:
      'Schedule a 1-on-1 meeting with an engineer to talk about how Aserto can help solve your authorization challenges.',
    hubSpotDataSrc:
      'https://meetings.hubspot.com/omri-gazitt/speak-with-an-engineer?embed=true'
  }
  return (
    <PageLayout
      headProps={{
        title: 'Speak with an Engineer - Aserto',
        description:
          "Schedule a 1-on-1 meeting with an Aserto engineer to discuss your specific authorization needs and Aserto's authorization as a service",
        image: 'images/og.png'
      }}
    >
      <div
        className="relative h-full w-full bg-gradient-to-t from-aserto-black to-aserto-lochivar-50
          mx-auto mb-32 py-10 px-[20px] items-center text-center text-aserto-grey-90"
      >
        <div>
          <h2 className="text-3xl mb-16 leading-normal sm:w-8/12 sm:mx-auto">
            Aserto has ceased operations. To obtain support for <a className="underline" href="https://www.topaz.sh">Topaz</a>,
            please visit that page or email maintainers@topaz.sh.
          </h2>
          {/*
          <h1 className="text-5xl my-8 leading-none">{page.title}</h1>
          <h2 className="text-3xl mb-16 leading-normal sm:w-8/12 sm:mx-auto">
            {page.subtitle}
          </h2>
          <HubspotSchedulingEmbed
            hubSpotDataSrc={page.hubSpotDataSrc}
          ></HubspotSchedulingEmbed>
          */}
        </div>
      </div>
    </PageLayout>
  )
}

export default ContactEngineer
