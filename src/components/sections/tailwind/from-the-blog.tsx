import { useFadeInBottom } from 'hooks/use-gsap'
import BlogPost from './blog-post'

const posts: React.ComponentPropsWithoutRef<typeof BlogPost>[] = [
  {
    image: '/images/opportunity-blindness.svg',
    title: 'Lack of visibility',
    category: 'Article',
    description:
      'GTM teams with a free plan or trial lack visibility into the behavior of their signups, trial users, and sales opportunities.',
    minutesToRead: 6,
    author: {
      name: 'Roel Aufderehar',
      avatar:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixqx=vTg5tun2eF&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
    },
    date: new Date()
  },
  {
    image: '/images/wasted-resources.svg',
    title: 'No way to prioritize',
    category: 'Video',
    description:
      'Revenue leaders waste countless hours figuring out which accounts and users their reps should engage with.',
    minutesToRead: 4,
    author: {
      name: 'Brenna Goyette',
      avatar:
        'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixqx=vTg5tun2eF&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
    },
    date: new Date()
  },
  {
    image: '/images/hesitation-&-uncertainty.svg',
    title: 'Inaction',
    category: 'Case Study',
    description:
      'Reps don’t know what action will lead to the best outcomes, which results in the wrong action (or no action at all).',
    minutesToRead: 6,
    author: {
      name: 'Daniela Metz',
      avatar:
        'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixqx=vTg5tun2eF&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
    },
    date: new Date()
  }
]

const FromTheBlog = () => {
  const [section] = useFadeInBottom()
  return (
    <div className="relative px-4 pt-16 pb-20 sm:px-6 lg:py-32 lg:px-8 bg-ds-background">
      <div className="relative mx-auto max-w-container" ref={section}>
        <div className="text-center">
          <p className="mb-1 text-sm font-black leading-tight text-white uppercase sm:mb-3 sm:text-base tracking-h4">
            COPY WILL LIVE HERE
          </p>
          <h2 className="mb-2 text-3xl font-bold tracking-tight text-white sm:mb-5 sm:text-5xl">
            Deploy it your way
          </h2>
          <p className="max-w-xl mx-auto text-lg text-white sm:text-2xl font-book">
            GTM teams can’t connect the dots between productusage and sales
            opportunities.
          </p>
        </div>
        <div className="grid max-w-md gap-8 mx-auto mt-14 lg:grid-cols-3 lg:max-w-none">
          {posts.map((post) => (
            <BlogPost {...post} key={post.title} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default FromTheBlog
