// Layout
import PageLayout from 'components/layout/page'
import Script from 'next/script'

// Sections
import Hero from 'components/sections/events/hero'
import Container from 'components/layout/container'

const Events = () => {
  return (
    // to pass into PageLayout: bg-gradient-to-t from-aserto-black to-aserto-indigo-100
    <PageLayout
      contain
      footer
      headProps={{
        title: 'Aserto Events',
        description: 'Aserto Events',
        image: 'images/og.png'
      }}
    >
      <div className="relative">
        <Container>
          <Hero />
          <section className="pb-28 flex gap-[25px]">
            <div
              className="w-[400px] bg-aserto-black text-aserto-grey-90
              h-[655px] py-[20px] my-[15px] rounded-[6px]"
            >
              <h2>We would love to meet up!</h2>
              <h3>
                Please reserve a suitable time during the event using the form
                and we promise to confirm with you as soon as we can.
              </h3>
              <div>
                <img alt="Valencia, Spain" src="images/events/Valencia.jpeg" />
                <img
                  alt="KubeCon"
                  src="images/events/kccnc-eu-2022-black.svg"
                />
              </div>
            </div>
            <div className="w-[700px] rounded-[6px]">
              {/* <!-- Start of Meetings Embed Script --> */}
              <div
                className="meetings-iframe-container"
                data-src="https://meetings.hubspot.com/omri-gazitt/conference-event-meeting?embed=true"
              ></div>
              <Script
                type="text/javascript"
                src="https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js"
              ></Script>
              {/*   <!-- End of Meetings Embed Script --> */}
            </div>
          </section>
        </Container>
      </div>
    </PageLayout>
  )
}

export default Events
