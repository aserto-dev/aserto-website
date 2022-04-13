// Layout
import PageLayout from 'components/layout/page'
import cms from 'lib/sanity'
import { GetStaticProps } from 'next'
import { EventFragment } from 'lib/sanity/generated'
import Error from 'next/error'
import clsx from 'clsx'
import Container from 'components/layout/container'
import Hero from 'components/sections/events/hero'
import Script from 'next/script'
import { BlockContent } from 'components/primitives/block-content'

type Props = {
  event: EventFragment
}

const EventPage = ({ event }: Props) => {
  if (!event) return <Error statusCode={404} />

  const windowTitle = `Meet Aserto at ${event.title || 'this event'}`
  const windowDescription = `Meet Aserto at ${event.title || 'this event'}`
  const favicon = 'images/og.png'
  const bgColor =
    event.backgroundColor ||
    'bg-gradient-to-t from-aserto-black to-aserto-indigo-100'
  const pageInfo = {
    title: event.heading!,
    subtitle: event.subheading!
  }
  const meetHeader = event.locationHeading || 'We would love to meet up!'
  const meetText = event.locationSubheadingRaw
  const eventBannerOpacity = `opacity-80`
  const eventBannerAlt = event.eventBannerImage?.alt!
  const eventBannerSrc = event.eventBannerImage?.asset?.url!
  const eventBannerHref = event.eventBannerImageHref!
  const locationImageAlt = event.locationImage?.alt!
  const locationImageSrc = event.locationImage?.asset?.url!
  const hubSpotDataSrc = event.hubspotMeetingDataSource
  return (
    <PageLayout
      footer="slim"
      headProps={{
        title: windowTitle,
        description: windowDescription,
        image: favicon
      }}
    >
      <div className={clsx('relative', bgColor)}>
        <Container>
          <Hero page={pageInfo} />
          <section className="pb-20 md:pb-10 flex flex-wrap justify-center gap-[25px]">
            <div
              className="w-[450px] h-[655px] text-aserto-grey-90
              my-[15px] rounded-[6px] bg-aserto-black"
            >
              <div className="p-[15px]">
                <h2 className="text-2xl">{meetHeader}</h2>
                <BlockContent
                  className="text-base mt-[15px] whitespace-normal"
                  blocks={meetText}
                />
              </div>
              <div className="relative">
                <img
                  className="h-[506px] object-cover rounded-b-[6px]"
                  alt={locationImageAlt}
                  src={locationImageSrc}
                />
                <a href={eventBannerHref} target="_blank" rel="noreferrer">
                  <img
                    className={clsx(
                      'absolute bottom-0 w-full px-[15px] bg-white rounded-b-[6px]',
                      eventBannerOpacity
                    )}
                    alt={eventBannerAlt}
                    src={eventBannerSrc}
                  />
                </a>
              </div>
            </div>
            {!!hubSpotDataSrc && (
              <div className="w-[700px] rounded-[6px]">
                {/* <!-- Start of Meetings Embed Script --> */}
                <div
                  className="meetings-iframe-container"
                  data-src={hubSpotDataSrc}
                ></div>
                <Script
                  type="text/javascript"
                  src="https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js"
                ></Script>
                {/*   <!-- End of Meetings Embed Script --> */}
              </div>
            )}
          </section>
        </Container>
      </div>
    </PageLayout>
  )
}

export const getStaticPaths = async () => {
  const { allEvent } = await cms().EventPaths()
  return {
    paths:
      allEvent?.map((event) => ({
        params: { slug: event.slug?.current as string }
      })) ?? [],
    fallback: false
  }
}

export const getStaticProps: GetStaticProps<Props> = async (ctx) => {
  const slug = ctx.params?.slug as string
  const {
    allEvent: [event]
  } = await cms().Event({ slug })

  return {
    props: { event },
    revalidate: 1
  }
}

export default EventPage
