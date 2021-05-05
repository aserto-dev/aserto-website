import { useFadeInBottom } from 'hooks/use-gsap'
import SolutionItem from './solution-item'

const solutions: React.ComponentPropsWithoutRef<typeof SolutionItem>[] = [
  {
    tag: 'Authorization done the right way',
    title: 'Real Time',
    description:
      'See what top accounts and users are doing in your product, how far along their journey they’ve come, and whether or not they need your team’s help.',
    imageSrc: '/images/scoring.svg',
    imageAlt: 'Real Time Illustration'
  },
  {
    tag: 'Enterprise ready',
    title: 'Fine Grained',
    description:
      'Sell with confidence, knowing their requirements are built into your authorizaton system.',
    imageSrc: '/images/scoring.svg',
    imageAlt: 'Fine Grained Illustration'
  },
  {
    imageSrc: '/images/scoring.svg',
    tag: 'A framework developers love',
    title: 'Cloud Native',
    description:
      'Your developers can add powerful authorization capabilities without having to become experts.',
    imageAlt: 'Cloud Native Illustration'
  }
]

const TheSolution = () => {
  const [section] = useFadeInBottom()
  return (
    <section className="py-32" ref={section}>
      <div className="px-4 mb-24 text-center sm:px-0">
        <p className="mb-2 font-bold leading-tight uppercase text-ds-accent sm:mb-4 sm:text-base tracking-h4">
          THE SOLUTION
        </p>
        <h2 className="mb-2 text-3xl tracking-tight text-white sm:mb-10 sm:text-5xl">
          Modern authorization
        </h2>
        <p className="max-w-3xl mx-auto text-lg text-ds-gray sm:text-1.5xl font-book px-12">
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
