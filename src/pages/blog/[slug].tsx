// Primitives
import CustomHead from 'components/primitives/custom-head'

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
      headProps={{
        description: 'Authorization for All',
        image: 'images/og.png'
      }}
      newsletter={{
        title: 'Sign up for our newsletter',
        description: 'Get the latest company updates and technology articles',
        mailchimpEndpoint:
          'https://aserto.us1.list-manage.com/subscribe/post?u=69b1ad0e50144ade95e55f9d1&amp;id=016646afa1'
      }}
    >
      <CustomHead />
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
    fallback: 'blocking'
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
