// Layout
import PageLayout from 'components/layout/page'
import Post from 'components/sections/blog/blog-post'
import cms from 'lib/sanity'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import { PostFragment, PostMetaFragment } from 'lib/sanity/generated'
import Error from 'next/error'

type Props = {
  post: PostFragment
  allPosts: PostMetaFragment[]
}

const BlogPost = ({
  post,
  allPosts
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  if (!post) return <Error statusCode={404} />
  return (
    <div>
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
          description: 'Get the latest company updates and technology articles',
          posts: allPosts
        }}
      >
        <Post post={post} />
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
