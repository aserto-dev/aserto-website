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
      footer="regular"
      headProps={{
        title: 'Aserto Blog',
        description:
          'Aserto blog containing technology articles and company updates',
        image: 'images/og.png'
      }}
      newsletter={{
        title: 'Sign up for our newsletter',
        description: 'Get the latest company updates and technology articles'
      }}
    >
      <Hero />
      <MainPost post={mainPost} />
      <Posts posts={restPosts} />
    </PageLayout>
  )
}

export const getStaticProps = async () => {
  const { allPost } = await cms().BlogIndex({
    now: new Date(Date.now()).toISOString()
  })

  return {
    props: {
      posts: allPost
    },
    revalidate: 1
  }
}

export default Blog
