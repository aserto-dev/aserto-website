// Primitives
import CustomHead from 'components/primitives/custom-head'

// Layout
import PageLayout from 'components/layout/page'
import Hero from 'components/sections/blog/hero'
import MainPost from 'components/sections/blog/main-post'
import Posts from 'components/sections/blog/posts'
import cms from 'lib/sanity'
import { InferGetStaticPropsType } from 'next'
import { useMemo } from 'react'

const Blog = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { mainPost, restPosts } = useMemo(() => {
    const [mainPost, ...restPosts] = posts
    return { mainPost, restPosts }
  }, [posts])

  return (
    <PageLayout
      contain
      footer
      headProps={{
        title: 'Aserto',
        description: 'Welcome to modern authorization',
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
      <Hero />
      <MainPost post={mainPost} />
      <Posts posts={restPosts} />
    </PageLayout>
  )
}

export const getStaticProps = async () => {
  const { allPost } = await cms().BlogIndex()

  return {
    props: {
      posts: allPost
    },
    revalidate: 1
  }
}

export default Blog
