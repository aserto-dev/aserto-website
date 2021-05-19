import { BlockContent } from 'lib/sanity'
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
      width={384}
      height={298}
      objectFit="cover"
      layout="responsive"
    />
    <div className="flex flex-col justify-between flex-1 px-10 py-8 bg-aserto-black">
      <div className="flex-1">
        <p className="text-xl text-aserto-grey-90 sm:text-1.5xl">
          {data.title}
        </p>
        <div className="mt-3 leading-relaxed tracking-wide sm:mt-5 text-aserto-grey-60 font-roboto">
          <BlockContent blocks={data.subtitleRaw} />
        </div>
      </div>
    </div>
  </div>
)

export default BlogPost
