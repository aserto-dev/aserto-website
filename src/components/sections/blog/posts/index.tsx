// Primitives
import Button from 'components/primitives/button'

// Hooks
import { useFadeInBottom } from 'hooks/use-gsap'
import { PostMetaFragment } from 'lib/sanity/generated'

// Components
import BlogItem from './blog-item'

const Posts = ({ posts }: { posts: PostMetaFragment[] }) => {
  const [section] = useFadeInBottom()
  return (
    <section className="pb-28">
      <div className="grid gap-8 mx-auto mt-20 lg:grid-cols-3" ref={section}>
        {posts.map((post) => {
          return <BlogItem data={post} key={post._id} />
        })}
      </div>
      <div className="mt-24 text-center">
        <Button variant="secondary" size="md">
          More
        </Button>
      </div>
    </section>
  )
}

export default Posts
