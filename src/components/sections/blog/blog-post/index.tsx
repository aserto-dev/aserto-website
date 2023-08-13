import React from 'react'
import Link from 'components/primitives/link'
import { BlockContent } from 'components/primitives/block-content'
import { PostFragment } from 'lib/sanity/generated'
import { formatPostDate } from 'lib/util'
import Image from 'components/primitives/image'
import s from './blog-post.module.scss'
import clsx from 'clsx'
import AuthorCard from './AuthorCard'

type Props = {
  post: PostFragment
}

const PostComponent = ({ post }: Props) => {
  const authors = post.authors || []
  return (
    <section className="relative mx-auto pt-12 lg:pt-24  md:pt-24 mb-52">
      <div className="w-full mx-auto lg:w-10/12">
        <Link
          href="/blog"
          className="inline-block mb-12 text-aserto-grey-70 font-roboto"
        >
          Back to listing
        </Link>
        <h1 className="text-4xl leading-none tracking-tight text-aserto-grey-90 mx-auto">
          {post.title}
        </h1>
        <div className="flex items-start justify-between mt-14 mb-16 pb-14">
          <div className="relative flex flex-col flex-grow w-4/12">
            <div className="flex flex-row flex-wrap-reverse">
              <div className="flex flex-row flex-wrap flex-start gap-10 justify-between">
                {authors.map(
                  (a) =>
                    !!a?.author && (
                      <AuthorCard
                        key={a.author.slug?.current || 'undefined'}
                        author={a.author}
                      />
                    )
                )}
              </div>
              <p className="text-aserto-grey-90 font-roboto ml-auto">
                {formatPostDate(post.publishedAt)}
              </p>
            </div>
            <div className="relative left-0 flex flex-wrap w-full uppercase -bottom-14 text-aserto-grey-70 font-roboto">
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
        </div>
      </div>
      <figure className="w-full mx-auto lg:w-10/12">
        <Image
          alt={post.mainImage?.alt ?? 'Post cover'}
          height="600"
          objectFit="cover"
          src={post.mainImage?.asset?.url ?? '/404'}
          width="1216"
        />
        {post.mainImage?.captionRaw && (
          <figcaption className="mt-2 text-sm text-aserto-grey-70">
            {post.mainImage.captionRaw}
          </figcaption>
        )}
      </figure>
      <BlockContent
        blocks={post.bodyRaw}
        className={clsx('w-full sm:w-8/12 mx-auto mt-20', s.body)}
      />
    </section>
  )
}

const Post = React.memo(PostComponent)
export default Post
