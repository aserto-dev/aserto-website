// Layout
import PageLayout from 'components/layout/page'
import cms from 'lib/sanity'
import Script from 'next/script'

const News = () => {
  return (
    <PageLayout
      contain
      footer
      headProps={{
        title: 'Aserto Events',
        description: 'Aserto Events',
        image: 'images/og.png'
      }}
      newsletter={{
        title: 'Sign up for our newsletter',
        description: 'Get the latest company updates and technology articles',
        mailchimpEndpoint:
          'https://aserto.us1.list-manage.com/subscribe/post?u=69b1ad0e50144ade95e55f9d1&amp;id=016646afa1'
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

export const getStaticProps = async () => {
  const { allNews } = await cms().NewsPage()
  const page = allNews[0]

  return {
    props: {
      page
    },
    revalidate: 1
  }
}

export default News
