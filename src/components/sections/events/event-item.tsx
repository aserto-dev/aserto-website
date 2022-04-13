import { Event, EventsPage } from 'lib/sanity/generated'
import Image from 'components/primitives/image'
import Link from 'next/link'

type Props = {
  page: EventsPage
  event: Event
}

const EventsItem = ({ page, event }: Props) => {
  console.log(page)
  // console.log(event)
  return (
    <Link href={`/events/${event.slug?.current}`}>
      <a className="flex flex-col overflow-hidden border rounded border-aserto-grey-10">
        <Image
          src={event.locationImage?.asset?.url || '/404'}
          alt={event.locationImage?.alt || ''}
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
            <p className="pb-4 mt-3 mb-8 leading-relaxed tracking-wide sm:mt-5 text-aserto-grey-60 font-roboto">
              {event.heading}
            </p>
          </div>
        </div>
      </a>
    </Link>
    // <a href={`/events/${event.slug?.current}`}>
    //   <div
    //     className="flex flex-col overflow-hidden border rounded border-aserto-grey-10"
    //     style={{ height: '100%' }}
    //   >
    //     <div className="relative flex flex-col justify-between flex-1 px-10 pt-8 bg-aserto-black">
    //       <Image
    //         src={event.locationImage?.asset?.url || '/404'}
    //         alt={event.locationImage?.alt || ''}
    //         width={384}
    //         height={100}
    //         objectFit="contain"
    //         layout="responsive"
    //       />
    //     </div>
    //     <div className="relative flex flex-col justify-between flex-1 px-10 py-8 bg-aserto-black">
    //       <div className="flex-1">
    //         <BlockContent
    //           className="pb-4 mb-8 leading-relaxed tracking-wide sm:mt-5 text-aserto-grey-60 font-roboto"
    //           blocks={event.heading}
    //         />
    //       </div>
    //     </div>
    //   </div>
    // </a>
  )
}

export default EventsItem
