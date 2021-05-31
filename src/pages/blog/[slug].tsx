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
        title: 'Aserto Faq',
        description: 'Description',
        image: 'images/og.png'
      }}
      newsletter={{
        copy: 'Sign up for our newsletter'
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
