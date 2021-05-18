import Link from 'components/primitives/link'
import { BlockContent } from 'lib/sanity'
import { PostFragment } from 'lib/sanity/generated'
import { formatPostDate } from 'lib/util'
import Image from 'next/image'
import s from './blog-post.module.scss'

type Props = {
  post: PostFragment
}

const Post = ({ post }: Props) => {
  const author = post.authors?.[0]?.author
  return (
    <section className="relative mx-auto pt-28 mb-52">
      <div className="w-10/12 mx-auto">
        <Link
          href="/blog"
          className="inline-block mb-12 text-aserto-grey-60 font-roboto"
        >
          Back to listing
        </Link>
        <h1 className="text-5xl leading-none tracking-tighter text-white xl:text-6.5xl">
          {post.title}
        </h1>
        <div className="flex items-start justify-between mt-32 mb-16 pb-14">
          <div className="relative flex items-center flex-grow w-4/12">
            <div className="flex overflow-hidden rounded-full">
              <Image
                width="80"
                height="80"
                src={author?.image?.asset?.url ?? '/404'}
                alt={author?.name + ' avatar'}
                objectFit="cover"
              />
            </div>
            <div className="ml-6">
              <p className="text-aserto-grey-60 font-roboto">{author?.name}</p>
              <p className="uppercase text-aserto-lochivar-100 font-roboto">
                {author?.position}
              </p>
            </div>
            <div className="absolute left-0 flex w-full uppercase -bottom-14 text-aserto-grey-60 font-roboto">
              {post.categories?.map((c, i, { length }) => {
                const isLast = i === length - 1
                return (
                  <p key={i} className="">
                    {c?.title}
                    {isLast ? (
                      ''
                    ) : (
                      <span className="select-none">
                        &nbsp;&nbsp;|&nbsp;&nbsp;
                      </span>
                    )}
                  </p>
                )
              })}
            </div>
          </div>
          <p className="uppercase text-aserto-lochivar-100 font-roboto">
            {formatPostDate(post.publishedAt)}
          </p>
        </div>
      </div>
      <div>
        <Image
          width="1216"
          height="600"
          src={post.mainImage?.asset?.url ?? '/404'}
          alt={post.mainImage?.alt ?? 'Post cover'}
        />
      </div>
      <div className="w-8/12 mx-auto mt-20">
        <BlockContent blocks={post.bodyRaw} className={s.body} />
      </div>
    </section>
  )
}

export default Post
