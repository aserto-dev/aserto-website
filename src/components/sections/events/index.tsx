// Primitives
import Button from 'components/primitives/button'

// Hooks
import { useFadeInBottom } from 'hooks/use-gsap'
import { EventFragment } from 'lib/sanity/generated'
import { useCallback, useMemo, useState } from 'react'

// Components
import EventItem from './event-item'

const pageSize = 6

const EventsItems = ({ events }: { events: EventFragment[] }) => {
  const [section] = useFadeInBottom()
  const [shownPages, setShownPages] = useState(1)

  const handleShowMore = useCallback(() => {
    setShownPages((p) => p + 1)
  }, [])

  const canShowMore = useMemo(() => {
    return events.length > shownPages * pageSize
  }, [events.length, shownPages])
  return (
    <section className="pb-28">
      <div className="grid gap-8 mx-auto mt-20 lg:grid-cols-3" ref={section}>
        {events.map((event, index) => {
          return index < shownPages * pageSize ? (
            <EventItem event={event} key={index} />
          ) : (
            <a
              className="hidden"
              href={`/blog/${event.slug?.current}`}
              key={index}
            >
              {event.title}
            </a>
          )
        })}
      </div>
      {canShowMore && (
        <div className="mt-24 text-center">
          <Button variant="secondary" size="md" onClick={handleShowMore}>
            More
          </Button>
        </div>
      )}
    </section>
  )
}

export default EventsItems
