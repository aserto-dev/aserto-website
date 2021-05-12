import { useFadeInBottom } from 'hooks/use-gsap'
import SolutionItem from './solution-item'

const solutions: React.ComponentPropsWithoutRef<typeof SolutionItem>[] = [
  {
    title: 'Built for developers',
    description:
      'Add powerful authorization capabilities that scale up with your application in a fraction of the time it would take to build it by hand.',
    imageSrc: '/images/scoring.svg',
    imageAlt: 'Real Time Illustration'
  },
  {
    title: 'Enterprise ready',
    description:
      'Sell with confidence into enterprise accounts, knowing their requirements are built into your authorization system.',
    imageSrc: '/images/scoring.svg',
    imageAlt: 'Fine Grained Illustration'
  },
  {
    imageSrc: '/images/scoring.svg',
    title: 'Policy centric',
    description:
      'Express authorization policy in one place, and evolve it through a modern GitOps workflow.',
    imageAlt: 'Cloud Native Illustration'
  }
]

const TheSolution = () => {
  const [section] = useFadeInBottom()
  return (
    <section className="py-32 mt-32" ref={section}>
      <div className="px-4 mb-24 text-center sm:px-0">
        <p className="mb-2 font-bold leading-tight uppercase text-aserto-lochivar-100 sm:mb-4 sm:text-base tracking-h4">
          THE SOLUTION
        </p>
        <h2 className="mb-2 text-3xl tracking-tight text-aserto-grey-90 sm:mb-10 sm:text-5xl">
          Introducing: Modern authorization
        </h2>
        <p className="max-w-3xl mx-auto text-lg text-aserto-grey-60 sm:text-1.5xl font-roboto px-12">
          Take advantage of the most real-time, fine-grained, cloud native
          authorization solution built for developers.
        </p>
      </div>
      {solutions.map((feature, i) => (
        <SolutionItem
          {...feature}
          isInverted={i % 2 !== 0}
          key={feature.title}
        />
      ))}
    </section>
  )
}

export default TheSolution
