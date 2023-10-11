// Layout
import Posts from 'components/sections/blog/posts'
import cms from 'lib/sanity'
import { InferGetStaticPropsType } from 'next'
import { useMemo } from 'react'

const RelatedContent = ({
  posts
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { restPosts } = useMemo(() => {
    const [...restPosts] = posts
    return { restPosts }
  }, [posts])

  return (
    <div>
      <Posts posts={restPosts} />
    </div>
  )
}

export const getStaticProps = async () => {
  const { allPost } = await cms().BlogIndex({
    now: new Date(Date.now()).toISOString()
  })

  return {
    props: {
      posts: allPost
    }
  }
}

export default RelatedContent
