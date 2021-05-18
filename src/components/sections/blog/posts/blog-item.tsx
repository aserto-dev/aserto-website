import { PostMetaFragment } from 'lib/sanity/generated'
import { formatPostDate } from 'lib/util'
import Image from 'next/image'
import Link from 'next/link'
import { BlockContent } from 'lib/sanity'

type Props = {
  data: PostMetaFragment
}

const BlogPost = ({ data }: Props) => {
  return (
    <div className="flex flex-col overflow-hidden border rounded border-aserto-grey-10">
      <Link href={`/blog/${data.slug?.current}`}>
        <a className="block">
          <Image
            src={data.mainImage?.asset?.url || '/404'}
            alt="Blog post cover"
            width={384}
            height={298}
            objectFit="cover"
            layout="responsive"
          />
        </a>
      </Link>
      <div className="relative flex flex-col justify-between flex-1 px-10 py-8 bg-aserto-black">
        <div className="flex-1">
          <Link href={`/blog/${data.slug?.current}`}>
            <a>
              <p className="text-xl text-aserto-grey-90 sm:text-1.5xl">
                {data.title}
              </p>
              <div className="pb-4 mt-3 mb-8 leading-relaxed tracking-wide sm:mt-5 text-aserto-grey-60 font-roboto">
                <BlockContent blocks={data.excerptRaw} />
              </div>
              <p className="absolute left-10 bottom-8 text-aserto-grey-90">
                {formatPostDate(data.publishedAt)}
              </p>
            </a>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default BlogPost
