// Hooks
import Link from 'components/primitives/link'
import { useFadeInBottom } from 'hooks/use-gsap'
import { CareersPageFragment } from 'lib/sanity/generated'

// Components
import PostionItem from './position-item'

const problems: React.ComponentPropsWithoutRef<typeof PostionItem>[] = [
  {
    name: 'Head of Dev Relations',
    icon: '/images/careers/positions/001.svg',
    description:
      'Create a world-class developer community and partner with existing ecosystems.',
    position: 'DEVELOPMENT',
    linkedin:
      'https://jobs.lever.co/aserto/d9634514-1691-4e06-914b-1f866852abbc'
  },
  {
    name: 'Principal backend engineer',
    icon: '/images/careers/positions/002.svg',
    description:
      'Build out our policy engine, language, API, SDK, language bindings.',
    position: 'DEVELOPMENT',
    linkedin:
      'https://jobs.lever.co/aserto/c6c0215a-59d6-4b7c-b894-f0450740962a'
  },
  {
    name: 'Senior frontend engineer',
    icon: '/images/careers/positions/003.svg',
    description:
      'Design and build our single-page app and management experience.',
    position: 'DEVELOPMENT',
    linkedin:
      'https://jobs.lever.co/aserto/c92c6644-c7dd-44a1-8eec-83b4c7b5ebe3'
  },
  {
    name: 'Senior SRE',
    icon: '/images/careers/positions/004.svg',
    description:
      'Own our deployment pipeline, and operate planet-scale services.',
    position: 'DEVELOPMENT',
    linkedin:
      'https://jobs.lever.co/aserto/cdcfd3f2-ca34-4280-b69d-71ef90f0c400'
  },
  {
    name: 'Senior content engineer',
    icon: '/images/careers/positions/005.svg',
    description:
      'Define and tell the story around how authorization should be built in modern applications.',
    position: 'DEVELOPMENT',
    linkedin:
      'https://jobs.lever.co/aserto/080c280a-8b6f-4d3d-a886-5a8f277032b9'
  },
  {
    name: 'Senior recruiter',
    icon: '/images/careers/positions/006.svg',
    description: 'Help grow our team, in Seattle and around the world!',
    position: 'HUMAN RESOURCES',
    linkedin:
      'https://jobs.lever.co/aserto/080c280a-8b6f-4d3d-a886-5a8f277032b9'
  }
]

const OpenPositions = ({ page }: { page: CareersPageFragment }) => {
  const [section] = useFadeInBottom()
  return (
    <section className="pt-0 pb-52" id="open-positions">
      <div className="mx-auto" ref={section}>
        <div className="text-center">
          <h2 className="mb-2 text-5xl tracking-tight text-aserto-grey-90 sm:mb-10">
            Open Positions
          </h2>
          <p className="max-w-5xl mx-auto text-lg text-aserto-grey-60 sm:text-1.5xl font-roboto px-12">
            We’re always looking for talented people to join the team. View open
            positions below or if you don’t see something, drop us a line at{' '}
            <Link variant="color" href="mailto:careers@aserto.com">
              careers@aserto.com
            </Link>
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
