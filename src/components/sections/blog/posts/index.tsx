// Primitives
import Button from 'components/primitives/button'

// Hooks
import { useFadeInBottom } from 'hooks/use-gsap'

// Components
import BlogItem from './blog-item'

const problems: React.ComponentPropsWithoutRef<typeof BlogItem>[] = [
  {
    date: 'January 28th, 2021',
    image: '/images/blog/post001.png',
    title: 'Authentication != Authorization',
    description:
      'Authentication is a solved problem. But authorization remains a far bigger problem, and is far from solved.'
  },
  {
    date: 'April 2nd, 2021',
    image: '/images/blog/post002.png',
    title: 'The Five Principles of Authorization',
    description:
      'Five principles that any developer solution for application authorization should adhere to.'
  },
  {
    date: 'March 4th, 2021',
    image: '/images/blog/post003.png',
    title: 'Why separate policy from your code?',
    description:
      'Embedding your authorization logic inside your application is a constant source of pain. Separating policy from code brings many benefits.'
  },
  {
    date: 'January 28th, 2021',
    image: '/images/blog/post001.png',
    title: 'Authentication != Authorization',
    description:
      'Authentication is a solved problem. But authorization remains a far bigger problem, and is far from solved.'
  },
  {
    date: 'April 2nd, 2021',
    image: '/images/blog/post002.png',
    title: 'The Five Principles of Authorization',
    description:
      'Five principles that any developer solution for application authorization should adhere to.'
  },
  {
    date: 'March 4th, 2021',
    image: '/images/blog/post003.png',
    title: 'Why separate policy from your code?',
    description:
      'Embedding your authorization logic inside your application is a constant source of pain. Separating policy from code brings many benefits.'
  }
]

const Posts = () => {
  const [section] = useFadeInBottom()
  return (
    <section className="pb-28">
      <div className="grid gap-8 mx-auto mt-20 lg:grid-cols-3" ref={section}>
        {problems.map((post) => (
          <BlogItem {...post} key={post.title} />
        ))}
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
