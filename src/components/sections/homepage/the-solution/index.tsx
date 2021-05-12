import { useFadeInBottom } from 'hooks/use-gsap'
import SolutionItem from './solution-item'

const solutions: React.ComponentPropsWithoutRef<typeof SolutionItem>[] = [
  {
    title: 'Authorization as easy as an API call',
    description:
      'Add powerful authorization capabilities that scale up with your application in a fraction of the time it would take to build it by hand.',
    imageSrc: '/images/scoring.svg',
    imageAlt: 'Real Time Illustration'
  },
  {
    title: 'Enterprise ready permissions and RBAC',
    description:
      'Sell with confidence into enterprise accounts, knowing their requirements are built into your authorization system.',
    imageSrc: '/images/scoring.svg',
    imageAlt: 'Fine Grained Illustration'
  },
  {
    imageSrc: '/images/scoring.svg',
    title: 'Modern GitOps workflow for policy-as-code',
    description:
      'Express authorization policy in one place, and evolve it through a modern GitOps workflow.',
    imageAlt: 'Cloud Native Illustration'
  }
]

const TheSolution = () => {
  const [section] = useFadeInBottom()
  return (
    <section className="py-32 mt-32" ref={section} id='the-solution'>
      <div className="px-4 mb-24 text-center sm:px-0">
        <p className="mb-2 font-bold leading-tight uppercase text-aserto-lochivar-100 sm:mb-4 sm:text-base tracking-h4">
          THE SOLUTION
        </p>
        <h2 className="mb-2 text-3xl tracking-tight text-aserto-grey-90 sm:mb-10 sm:text-5xl">
          Introducing: Modern authorization
        </h2>
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
