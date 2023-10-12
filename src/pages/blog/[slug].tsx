// Layout
import PageLayout from 'components/layout/page'
import Post from 'components/sections/blog/blog-post'
import cms from 'lib/sanity'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import { PostFragment, PostMetaFragment } from 'lib/sanity/generated'
import Error from 'next/error'

type Props = {
  post: PostFragment
  restPosts: PostMetaFragment[]
}

const BlogPost = ({
  post,
  restPosts
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
          posts: restPosts,
          post: post
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
  const { allPost: restPosts } = await cms().BlogIndex({
    now: new Date(Date.now()).toISOString()
  })

  return {
    props: { post, restPosts }
  }
}

export default BlogPost
