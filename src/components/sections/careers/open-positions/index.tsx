// Hooks
import Link from 'components/primitives/link'
import { useFadeInBottom } from 'hooks/use-gsap'

// Components
import PostionItem from './position-item'

const problems: React.ComponentPropsWithoutRef<typeof PostionItem>[] = [
  {
    name: 'Head of Dev Relations',
    description:
      'Create a world-class developer community and partner with existing ecosystems.',
    position: 'DEVELOPMENT',
    linkedin: 'https://linkedin.com'
  },
  {
    name: 'Principal backend engineer',
    description:
      'Build out our policy engine, language, API, SDK, language bindings.',
    position: 'DEVELOPMENT',
    linkedin: 'https://linkedin.com'
  },
  {
    name: 'Senior frontend engineer',
    description:
      'Design and build our single-page app and management experience.',
    position: 'DEVELOPMENT',
    linkedin: 'https://linkedin.com'
  },
  {
    name: 'Senior SRE',
    description:
      'Own our deployment pipeline, and operate planet-scale services.',
    position: 'DEVELOPMENT',
    linkedin: 'https://linkedin.com'
  },
  {
    name: 'Omri Gazitt',
    description:
      'Define and tell the story around how authorization should be built in modern applications.',
    position: 'DEVELOPMENT',
    linkedin: 'https://linkedin.com'
  }
]

const OpenPositions = () => {
  const [section] = useFadeInBottom()
  return (
    <section className="pt-0 pb-52">
      <div className="mx-auto" ref={section}>
        <div className="text-center">
          <h2 className="mb-2 text-3xl tracking-tight text-aserto-grey-90 sm:mb-10 sm:text-5xl">
            Open Positions
          </h2>
          <p className="max-w-5xl mx-auto text-lg text-aserto-grey-60 sm:text-1.5xl font-roboto px-12">
            We’re always looking for talented people to join the team. View open
            positions below or if you don’t see something, drop us a line at{' '}
            <Link href="mailto:careers@aserto.com">careers@aserto.com</Link>
          </p>
        </div>
        <div className="grid gap-8 mx-auto mt-20 lg:grid-cols-3">
          {problems.map((profile) => (
            <PostionItem {...profile} key={profile.name} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default OpenPositions
