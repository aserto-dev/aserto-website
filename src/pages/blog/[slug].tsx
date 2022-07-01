// Layout
import PageLayout from 'components/layout/page'
import Post from 'components/sections/blog/blog-post'
import cms from 'lib/sanity'
import { GetStaticProps } from 'next'
import { PostFragment } from 'lib/sanity/generated'
import Error from 'next/error'

type Props = {
  post: PostFragment
}

const BlogPost = ({ post }: Props) => {
  if (!post) return <Error statusCode={404} />
  return (
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
    </PageLayout>
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

  return {
    props: { post },
    revalidate: 1
  }
}

export default BlogPost
