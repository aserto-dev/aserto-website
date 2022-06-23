import PageLayout from 'components/layout/page'
import EventsItems from 'components/sections/events'
import Hero from 'components/sections/events/hero'
import cms from 'lib/sanity'
import { InferGetStaticPropsType } from 'next'

const Events = ({
  page,
  events
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <PageLayout
      contain
      footer="regular"
      headProps={{
        title: page.metadata?.title ?? 'Events - Aserto',
        description:
          page.metadata?.description ?? 'Meet the Aserto team at these events.',
        image: 'images/og.png'
      }}
    >
      <Hero page={page} />
      <EventsItems events={events} />
    </PageLayout>
  )
}

export const getStaticProps = async () => {
  const { allEventsPage, allEvent } = await cms().EventsPage()
  const page = allEventsPage[0]
  return {
    props: { page, events: allEvent },
    revalidate: 1
  }
}

export default Events
