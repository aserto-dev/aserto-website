import clsx from 'clsx'

// Layout
import PageLayout from 'components/layout/page'
import Script from 'next/script'

// Sections
import Hero from 'components/sections/events/hero'
import Container from 'components/layout/container'

const Events = () => {
  const bgColor = 'bg-gradient-to-t from-aserto-black to-aserto-indigo-100'
  const pageInfo = {
    title: 'Meet Aserto at KubeCon EU',
    subtitle: 'May 17-20 2022 in Valencia, Spain'
  }
  const meetHeader = 'We would love to meet up!'
  const meetText = `Please reserve a suitable time during the event using the 
    form and we promise to confirm with you as soon as we can.`
  const imgOpacity = 'opacity-80'

  return (
    <PageLayout
      footer
      headProps={{
        title: 'Aserto Events',
        description: 'Aserto Events',
        image: 'images/og.png'
      }}
    >
      <div className={clsx('relative', bgColor)}>
        <Container>
          <Hero page={pageInfo} />
          <section className="pb-20 md:pb-10 flex flex-wrap justify-center gap-[25px]">
            <div
              className="w-[450px] h-[655px] text-aserto-grey-90
              my-[15px] rounded-[6px] bg-aserto-black opacity-80"
            >
              <div className="p-[15px]">
                <h2 className="text-2xl">{meetHeader}</h2>
                <h3 className="text-base mt-[15px]">{meetText}</h3>
              </div>
              <div className="relative">
                <img
                  className="h-[506px] object-cover rounded-b-[6px]"
                  alt="Valencia, Spain"
                  src="images/events/Valencia.jpeg"
                />
                <img
                  className={clsx(
                    'absolute bottom-0 w-full px-[15px] bg-white rounded-b-[6px]',
                    imgOpacity
                  )}
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
