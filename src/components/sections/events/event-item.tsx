import { Event } from 'lib/sanity/generated'
import Image from 'components/primitives/image'
import Link from 'next/link'

const EventsItem = ({ event }: { event: Event }) => {
  return (
    <Link href={`/events/${event.slug?.current}`}>
      <a className="flex flex-col overflow-hidden border rounded border-aserto-grey-10">
        <Image
          src={event.mainEventsPageImage?.asset?.url || '/404'}
          alt={event.mainEventsPageImage?.alt || ''}
          width={384}
          height={298}
          objectFit="cover"
          layout="responsive"
        />
        <div className="relative flex flex-col justify-between flex-1 px-10 py-8 bg-aserto-black">
          <div className="flex-1">
            <p className="text-xl text-aserto-grey-90 sm:text-1.5xl">
              {event.title}
            </p>
            <p className="pb-4 mt-3 mb-8 leading-relaxed tracking-wide sm:mt-5 text-aserto-grey-70 font-roboto">
              {event.heading}
            </p>
          </div>
        </div>
      </a>
    </Link>
  )
}

export default EventsItem
