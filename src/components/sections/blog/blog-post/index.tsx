import React from 'react'
import { BlockContent } from 'components/primitives/block-content'
import { PostFragment } from 'lib/sanity/generated'
import { formatPostDate } from 'lib/util'
import Image from 'components/primitives/image'
import s from './blog-post.module.scss'
import clsx from 'clsx'
import AuthorCard from './AuthorCard'
import Link from 'components/primitives/link'
import Button from 'components/primitives/button'

type Props = {
  post: PostFragment
}

const PostComponent = ({ post }: Props) => {
  const authors = post.authors || []
  return (
    <div className="flex maxsm:flex-col">
      <div className="w-4/5 relative pt-12 maxxl:pt-12 lg:pl-32 md:pt-12 mb-4 maxsm:w-full">
        <div className="lg:w-10/12">
          <h1 className="text-4xl leading-none tracking-tight text-aserto-grey-90 mx-auto">
            {post.title}
          </h1>
          <div className="flex-col mt-2">
            <p className="text-aserto-grey-90 font-roboto ml-auto text-sm">
              {formatPostDate(post.publishedAt)}
            </p>
            <div className="left-0 flex flex-wrap w-full bottom-14 font-roboto ">
              {post.categories?.map((c, i, { length }) => {
                const isLast = i === length - 1
                return (
                  <Link
                    key={i}
                    className="text-aserto-lochivar-accent-40 hover:underline"
                    href=""
                  >
                    {c?.title}
                    {isLast ? (
                      ''
                    ) : (
                      <span className="select-none">
                        &nbsp;&nbsp;|&nbsp;&nbsp;
                      </span>
                    )}
                  </Link>
                )
              })}
            </div>
          </div>
        </div>
        <figure className="w-full pt-8">
          <Image
            alt={post.mainImage?.alt ?? 'Post cover'}
            height="500"
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
          className={clsx('w-full text-justify mt-8', s.body)}
        />
      </div>
      <div className="w-1/5  ml-3 flow maxsm:w-4/5">
        <div className="pt-12 pl-9 flex flex-row flex-wrap flex-start gap-10 justify-between  maxsm:pl-0">
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
        <div className="flex flex-col mt-24 ml-8 gap-6 mb-4">
          <Button size="sm">
            <img
              src="/images/about/envelope.svg"
              className="cursor-pointer inline mr-2"
            />
            Subscribe
          </Button>
          <Button size="sm">
            <img
              src="/images/about/slack.svg"
              className="cursor-pointer inline mr-2"
            />
            Join the discussion
          </Button>
          <Button size="sm">
            <img
              src="/images/about/call.svg"
              className="cursor-pointer inline mr-2"
            />
            Talk to an eng
          </Button>
        </div>
      </div>
    </div>
  )
}

const Post = React.memo(PostComponent)
export default Post
