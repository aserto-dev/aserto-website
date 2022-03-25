// Layout
import PageLayout from 'components/layout/page'
import Script from 'next/script'

const Events = () => {
  return (
    <PageLayout
      contain
      footer="slim"
      headProps={{
        title: 'Aserto Events',
        description: 'Aserto Events',
        image: 'images/og.png'
      }}
    >
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
    </PageLayout>
  )
}

export default Events
