// Layout
import PageLayout from 'components/layout/page'
import Post from 'components/sections/blog/blog-post'
import cms from 'lib/sanity'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import { PostFragment, PostMetaFragment } from 'lib/sanity/generated'
import Error from 'next/error'
import RelatedContent from 'components/sections/common/related_content/related-content'
import { useFadeInBottom } from 'hooks/use-gsap'
import StayInformed from 'components/sections/blog/blog-post/StayInformed'

type Props = {
  post: PostFragment
  allPosts: PostMetaFragment[]
}

const BlogPost = ({
  post,
  allPosts
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const [section] = useFadeInBottom()

  if (!post) return <Error statusCode={404} />
  return (
    <div className="mx-auto">
      <PageLayout
        contain
        footer="regular"
        headProps={{
          title:
            post.metadata?.title ??
            `${String(post?.title || '') as string} - Blog - Aserto`,
          description:
            post.metadata?.description ??
            `${String(post?.title || '') as string}`,
          image: String(post?.mainImage?.asset?.url)
        }}
        newsletter={{
          title: 'Sign up for our newsletter',
          description: 'Get the latest company updates and technology articles'
        }}
      >
        <Post post={post} />
        <div className="w-full maxlg:w-11/12 mx-auto flex flex-col mt-8 ">
          {allPosts ? (
            <>
              <h1 className="text-2xl text-aserto-grey-90 mt-8 pb-4">
                Related Content
              </h1>
              <RelatedContent posts={allPosts}></RelatedContent>
              <div
                className="grid gap-8 mx-auto mt-20 maxlg:mt-0 lg:grid-cols-3"
                ref={section}
              ></div>
              <div className="lg:hidden">
                <StayInformed />
              </div>
            </>
          ) : (
            <></>
          )}
        </div>
      </PageLayout>
    </div>
  )
}

export const getStaticPaths = async () => {
  const { allPost } = await cms().BlogPostPaths()
  return {
    paths:
      allPost?.map((post) => ({
        params: { slug: post.slug?.current as string }
      })) ?? [],
    fallback: false
  }
}

export const getStaticProps: GetStaticProps<Props> = async (ctx) => {
  const slug = ctx.params?.slug as string
  const {
    allPost: [post]
  } = await cms().BlogPost({ slug })
  const { allPost: allPosts } = await cms().BlogIndex({
    now: new Date(Date.now()).toISOString()
  })
  const postCategories = post?.categories || []
  const posts =
    allPosts
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
  return {
    props: { post, allPosts: posts }
  }
}

export default BlogPost
