// Primitives
import Button from 'components/primitives/button'

// Hooks
import { useFadeInBottom } from 'hooks/use-gsap'
import { PostMetaFragment } from 'lib/sanity/generated'
import { useCallback, useMemo, useState } from 'react'

// Components
import BlogItem from './blog-item'

const pageSize = 6

const Posts = ({ posts }: { posts: PostMetaFragment[] }) => {
  const [section] = useFadeInBottom()
  const [shownPages, setShownPages] = useState(1)

  const handleShowMore = useCallback(() => {
    setShownPages((p) => p + 1)
  }, [])

  const canShowMore = useMemo(() => {
    return posts.length > shownPages * pageSize
  }, [posts.length, shownPages])

  return (
    <section className="pb-28">
      <div className="grid gap-8 mx-auto mt-20 lg:grid-cols-3" ref={section}>
        {posts.slice(0, shownPages * pageSize).map((post) => {
          return <BlogItem data={post} key={post._id} />
        })}
      </div>
      {canShowMore && (
        <div className="mt-24 text-center">
          <Button variant="secondary" size="md" onClick={handleShowMore}>
            More
          </Button>
        </div>
      )}
    </section>
  )
}

export default Posts
