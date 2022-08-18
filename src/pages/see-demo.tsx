import cms from 'lib/sanity'
import { InferGetStaticPropsType } from 'next'
import Script from 'next/script'

import PageLayout from 'components/layout/page'
import SignupButton from 'components/sections/common/cta-buttons/signup-button'

const Demo = ({ page }: InferGetStaticPropsType<typeof getStaticProps>) => {
  page = {}
  return (
    <PageLayout
      contain
      footer="regular"
      headProps={{
        title: page.metadata?.title ?? 'See a Demo - Aserto',
        description:
          page.metadata?.description ??
          `See what Aserto can do with an overview of its fine-grained access control system. Then,
          sign up for free to try it for yourself, or schedule a 1:1 demo with a product export.`,
        image: 'images/og.png'
      }}
    >
      <section
        className="py-20 relative flex flex-col h-full w-full mt-12
        mb-32 gap-20 items-center text-center text-aserto-grey-90"
      >
        <h2 className="text-2xl text-aserto-grey-90 text-center">
          Watch an on-demand demo of Aserto access control system
        </h2>
        <div>
          <iframe
            width="810"
            height="457"
            src="https://www.youtube.com/embed/RJkgmdjJn_w"
            title="Welcome to Modern Authorization | Aserto Overview"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <SignupButton />
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl text-aserto-grey-90 text-center">
            Book 1:1 time with an engineer
          </h1>
          <p>Get all of your questions answered with a personal demo</p>
        </div>
        {/* <!-- Start of Meetings Embed Script --> */}
        <div
          className="meetings-iframe-container w-full"
          data-src="https://meetings.hubspot.com/omri-gazitt/speak-with-an-engineer?embed=true"
        ></div>
        <Script
          type="text/javascript"
          src="https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js"
        ></Script>
        {/* <!-- End of Meetings Embed Script --> */}
      </section>
    </PageLayout>
  )
}

export const getStaticProps = async () => {
  const { allFaq } = await cms().FaqPage()
  const page = allFaq[0]
  return {
    props: { page },
    revalidate: 1
  }
}

export default Demo
