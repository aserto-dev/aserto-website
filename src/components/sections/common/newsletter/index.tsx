import clsx from 'clsx'
import HubspotForm from '../../../../lib/hubspot/HubspotForm'

// Layout
import Container from 'components/layout/container'

// Hooks
import { useFadeInBottom } from 'hooks/use-gsap'

// Styles
import s from './newsletter.module.css'

import { PostFragment, PostMetaFragment } from 'lib/sanity/generated'
import RelatedContent from '../related_content/related-content'

export type NewsletterProps = {
  title: string
  description: string
  posts?: PostMetaFragment[]
  post?: PostFragment
}
const NewsletterSection = ({
  title,
  description,
  posts,
  post
}: NewsletterProps) => {
  const [section] = useFadeInBottom()
  const postCategories = post?.categories || []
  const relatedContent =
    posts
      ?.filter((p) => p._id !== post?._id)
      .filter((p) =>
        p.categories?.map((c) => c?.title).includes(postCategories[0]?.title)
      )
      .sort((a: PostMetaFragment) => {
        return (
          new Date(post?.publishedAt).getTime() -
          new Date(a.publishedAt).getTime()
        )
      })
      .slice(0, 3) || []

  return (
    <section
      className="relative z-10 mb-32 bg-aserto-black"
      id="sign-up"
      ref={section}
    >
      <Container>
        <div
          className={clsx(
            'px-6 py-6 rounded-lg md:py-16 md:px-16 flex flex-col md:flex-row md:items-center md:justify-evenly text-center md:text-left',
            s.background
          )}
        >
          <div className="w-full md:w-6/12">
            <h2 className="tracking-normal text-aserto-grey-90 text-4.5xl">
              {title}
            </h2>
            <p className="max-w-3xl mt-4 text-lg text-aserto-grey-70 font-roboto">
              {description}
            </p>
          </div>
          <div className="flex flex-col items-center justify-center my-8 md:my-0 md:mx-7">
            <HubspotForm formId="0ba34fad-afcf-4dde-8b51-b73c32c9595c" />
          </div>
        </div>
        {posts ? (
          <div className="w-full flex flex-col">
            <h1 className="text-2xl ml-2 text-aserto-grey-90 pt-4 pb-4">
              Related Content
            </h1>
            <RelatedContent posts={relatedContent}></RelatedContent>
            <div
              className="grid gap-8 mx-auto mt-20 lg:grid-cols-3"
              ref={section}
            ></div>
          </div>
        ) : (
          <></>
        )}
      </Container>
    </section>
  )
}

export default NewsletterSection
