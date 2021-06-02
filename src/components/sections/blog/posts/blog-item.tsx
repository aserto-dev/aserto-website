import { PostMetaFragment } from 'lib/sanity/generated'
import { formatPostDate } from 'lib/util'
import Image from 'next/image'
import Link from 'next/link'
import { BlockContent } from 'components/primitives/block-content'

type Props = {
  data: PostMetaFragment
}

const BlogPost = ({ data }: Props) => {
  return (
    <Link href={`/blog/${data.slug?.current}`}>
      <a className="flex flex-col overflow-hidden border rounded border-aserto-grey-10">
        <Image
          src={data.mainImage?.asset?.url || '/404'}
          alt="Blog post cover"
          width={384}
          height={298}
          objectFit="cover"
          layout="responsive"
        />
        <div className="relative flex flex-col justify-between flex-1 px-10 py-8 bg-aserto-black">
          <div className="flex-1">
            <p className="text-xl text-aserto-grey-90 sm:text-1.5xl">
              {data.title}
            </p>
            <BlockContent
              className="pb-4 mt-3 mb-8 leading-relaxed tracking-wide sm:mt-5 text-aserto-grey-60 font-roboto"
              blocks={data.excerptRaw}
            />
            <p className="absolute left-10 bottom-8 text-aserto-grey-90">
              {formatPostDate(data.publishedAt)}
            </p>
          </div>
        </div>
      </a>
    </Link>
  )
}

export default BlogPost
