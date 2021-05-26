import { BlockContent } from 'components/primitives/block-content'
import { SectionBlockFragment } from 'lib/sanity/generated'
import Image from 'next/image'

type Props = {
  data: SectionBlockFragment
}

const BlogPost = ({ data }: Props) => (
  <div className="flex flex-col overflow-hidden border rounded border-aserto-grey-10">
    <Image
      src={data.image?.asset?.url ?? '/404'}
      alt="Blog post cover"
      width={data.image?.asset?.metadata?.dimensions?.width ?? 384}
      height={data.image?.asset?.metadata?.dimensions?.height ?? 298}
      objectFit="cover"
    />
    <div className="flex flex-col justify-between flex-1 px-10 py-8 bg-aserto-black">
      <div className="flex-1">
        <p className="text-xl text-aserto-grey-90 sm:text-1.5xl">
          {data.title}
        </p>
        <BlockContent
          className="mt-3 leading-relaxed tracking-wide sm:mt-5 text-aserto-grey-60 font-roboto"
          blocks={data.subtitleRaw}
        />
      </div>
    </div>
  </div>
)

export default BlogPost
