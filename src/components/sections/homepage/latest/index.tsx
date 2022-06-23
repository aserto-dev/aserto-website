import { BlockContent } from 'components/primitives/block-content'
import { EventFragment, PostFragment } from 'lib/sanity/generated'

type Props = {
  title: string
  latestBlogPost: PostFragment
  latestEvent: EventFragment
}

const LatestInfo = ({ title, latestBlogPost, latestEvent }: Props) => {
  const page = {
    title: title,
    information: [
      {
        itemTitle: latestBlogPost?.title,
        itemDesc: latestBlogPost?.excerptRaw,
        itemImage: latestBlogPost?.mainImage,
        linkText: 'Read more on our Blog',
        itemUrl: `/blog/${latestBlogPost?.slug?.current}`
      },
      {
        itemTitle: latestEvent?.title,
        itemDesc: latestEvent?.subheading,
        itemImage: latestEvent?.locationImage,
        linkText: 'Learn more',
        itemUrl: `/events/${latestEvent.slug?.current}`
      }
    ]
  }

  return (
    <>
      <div className="text-[36px] font-medium text-center">{page.title}</div>
      <div className="grid sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-12 my-[50px] mx-4 sm:mx-0">
        {page.information.map((info, i) => (
          <div
            key={i}
            className="h-full rounded-[6px] border-[2px] border-aserto-grey-30 bg-aserto-grey-5"
          >
            <img
              className="w-full h-[200px] object-cover mx-auto"
              src={info.itemImage?.asset?.url ?? '/404'}
              alt={info.itemImage?.alt ?? ''}
            />
            <div className="px-[40px] leading-[28px]">
              <h4 className="my-[20px] font-bold text-[22px]">
                {info.itemTitle}
              </h4>
              {info.itemDesc[0]?._type === 'block' ? (
                <BlockContent className="text-[18px]" blocks={info.itemDesc} />
              ) : (
                <p className="text-[18px]">{info.itemDesc}</p>
              )}
              <p className="my-[20px]">
                <a
                  href={info.itemUrl ?? '/404'}
                  className="text-aserto-lochivar-accent-40 hover:underline"
                >
                  {info.linkText}
                </a>
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default LatestInfo
