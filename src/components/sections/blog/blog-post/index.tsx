import React from 'react'
import { BlockContent } from 'components/primitives/block-content'
import { PostFragment, PostMetaFragment } from 'lib/sanity/generated'
import { formatPostDate } from 'lib/util'
import Image from 'components/primitives/image'
import s from './blog-post.module.scss'
import clsx from 'clsx'
import AuthorCard from './AuthorCard'
import SmallAuthorCardSection from './SmallAuthorSection'
import StayInformed from './StayInformed'

type Props = {
  post: PostFragment
  posts?: PostMetaFragment[]
  isBlog?: boolean
}

const PostComponent = ({ post }: Props) => {
  const authors = post.authors || []

  return (
    <>
      <div className="flex pt-12 maxsm:flex-col">
        <div className="w-4/5 relative lg:pl-32 mb-4 mr-3 maxsm:w-full">
          <div className="lg:w-10/12">
            <h1 className="text-4xl leading-none tracking-tight text-aserto-grey-90 mx-auto">
              {post.title}
            </h1>
            <div className="flex-col mt-2">
              <p className="text-aserto-grey-90 font-roboto ml-auto">
                {formatPostDate(post.publishedAt)}
              </p>
              {authors.map(
                (a) =>
                  !!a?.author && (
                    <SmallAuthorCardSection
                      key={a.author.slug?.current || 'undefined'}
                      author={a.author}
                    />
                  )
              )}
              <div className="left-0 flex flex-wrap w-full bottom-14 font-roboto ">
                {post.categories?.map((c, i, { length }) => {
                  const isLast = i === length - 1
                  return (
                    <p key={i} className="text-aserto-grey-70 uppercase">
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
            className={clsx('w-full mt-8', s.body)}
          />
        </div>
        <div className="w-1/12 maxlg:border-none maxlg:hidden border-r border-gray-700"></div>
        <header className="w-1/5 h-full flow  sticky top-38 maxlg:hidden">
          <div className="pl-9 flex flex-row flex-wrap flex-start gap-10 justify-between  maxsm:pl-0">
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
          <StayInformed />
        </header>
      </div>
    </>
  )
}

const Post = React.memo(PostComponent)
export default Post
