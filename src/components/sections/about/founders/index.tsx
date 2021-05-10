// Hooks
import { useFadeInBottom } from 'hooks/use-gsap'

// Components
import FounderItem from './founder-item'

const problems: React.ComponentPropsWithoutRef<typeof FounderItem>[] = [
  {
    image: '/images/about/profile001.png',
    name: 'Gert Drapers',
    position: 'CTO',
    bio: 'Short bio will go here',
    linkedin: 'https://linkedin.com'
  },
  {
    image: '/images/about/profile002.png',
    name: 'Omri Gazitt',
    position: 'CEO',
    bio: 'Short bio will go here',
    linkedin: 'https://linkedin.com'
  }
]

const Founders = () => {
  const [section] = useFadeInBottom()
  return (
    <section className="pt-8 lg:py-12">
      <div className="mx-auto" ref={section}>
        <div className="text-center">
          <h2 className="mb-2 text-3xl tracking-tight text-aserto-grey-90 sm:mb-10 sm:text-5xl">
            Founders
          </h2>
          <p className="max-w-5xl mx-auto text-lg text-aserto-grey-60 sm:text-1.5xl font-roboto px-12">
            Industry veterans at the intersection of Dev &amp; Enterprise.
          </p>
        </div>
        <div className="grid gap-8 mx-auto mt-20 lg:grid-cols-2">
          {problems.map((post) => (
            <FounderItem {...post} key={post.position} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Founders
