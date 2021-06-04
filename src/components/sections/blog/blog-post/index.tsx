import Link from 'components/primitives/link'
import { BlockContent } from 'components/primitives/block-content'
import { PostFragment } from 'lib/sanity/generated'
import { formatPostDate } from 'lib/util'
import Image from 'components/primitives/image'
import s from './blog-post.module.scss'
import clsx from 'clsx'

type Props = {
  post: PostFragment
}

const Post = ({ post }: Props) => {
  const author = post.authors?.[0]?.author
  return (
    <section className="relative mx-auto pt-28 mb-52">
      <div className="w-full mx-auto sm:w-10/12">
        <Link
          href="/blog"
          className="inline-block mb-12 text-aserto-grey-60 font-roboto"
        >
          Back to listing
        </Link>
        <h1 className="text-5xl leading-none tracking-tighter text-white xl:text-6.5xl">
          {post.title}
        </h1>
        <div className="flex items-start justify-between mt-24 mb-16 sm:mt-32 pb-14">
          <div className="relative flex items-center flex-grow w-4/12">
            <div className="flex w-20 overflow-hidden rounded-full">
              <Image
                width="80"
                height="80"
                src={author?.image?.asset?.url ?? ''}
                alt={author?.name + ' avatar'}
                objectFit="cover"
              />
            </div>
            <div className="ml-6">
              <p className="text-aserto-grey-60 font-roboto">{author?.name}</p>
              <p className="text-aserto-grey-90 font-roboto">
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
          <p className="text-aserto-grey-90 font-roboto">
            {formatPostDate(post.publishedAt)}
          </p>
        </div>
      </div>
      <div className="w-full mx-auto sm:w-10/12">
        <Image
          alt={post.mainImage?.alt ?? 'Post cover'}
          height="600"
          objectFit="cover"
          src={post.mainImage?.asset?.url ?? '/404'}
          width="1216"
        />
      </div>
      <BlockContent
        blocks={post.bodyRaw}
        className={clsx('w-full sm:w-8/12 mx-auto mt-20', s.body)}
      />
    </section>
  )
}

export default Post
