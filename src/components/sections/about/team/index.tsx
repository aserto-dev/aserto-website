// Hooks
import { useFadeInBottom } from 'hooks/use-gsap'

// Components
import ProfileItem from './profile-item'

const problems: React.ComponentPropsWithoutRef<typeof ProfileItem>[] = [
  {
    image: '/images/about/team001.png',
    name: 'Omri Gazitt',
    position: 'CEO, Aserto',
    description: 'Member description will go here in two/three lines of text.',
    linkedin: 'https://linkedin.com'
  },
  {
    image: '/images/about/team001.png',
    name: 'Omri Gazitt',
    position: 'CEO, Aserto',
    description: 'Member description will go here in two/three lines of text.',
    linkedin: 'https://linkedin.com'
  },
  {
    image: '/images/about/team001.png',
    name: 'Omri Gazitt',
    position: 'CEO, Aserto',
    description: 'Member description will go here in two/three lines of text.',
    linkedin: 'https://linkedin.com'
  },
  {
    image: '/images/about/team001.png',
    name: 'Omri Gazitt',
    position: 'CEO, Aserto',
    description: 'Member description will go here in two/three lines of text.',
    linkedin: 'https://linkedin.com'
  },
  {
    image: '/images/about/team001.png',
    name: 'Omri Gazitt',
    position: 'CEO, Aserto',
    description: 'Member description will go here in two/three lines of text.',
    linkedin: 'https://linkedin.com'
  },
  {
    image: '/images/about/team001.png',
    name: 'Omri Gazitt',
    position: 'CEO, Aserto',
    description: 'Member description will go here in two/three lines of text.',
    linkedin: 'https://linkedin.com'
  }
]

const Team = () => {
  const [section] = useFadeInBottom()
  return (
    <section className="pt-8 lg:py-52">
      <div className="mx-auto" ref={section}>
        <div className="text-center">
          <h2 className="mb-2 text-5xl tracking-tight text-aserto-grey-90 sm:mb-10">
            Team
          </h2>
          <p className="max-w-5xl mx-auto text-lg text-aserto-grey-60 sm:text-1.5xl font-roboto px-12">
            Missing copy
          </p>
        </div>
        <div className="grid gap-8 mx-auto mt-20 lg:grid-cols-3">
          {problems.map((profile) => (
            <ProfileItem {...profile} key={profile.name} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Team
