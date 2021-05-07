// Hooks
import { useFadeInBottom } from 'hooks/use-gsap'

// Components
import ProblemItem from './problem-item'

const problems: React.ComponentPropsWithoutRef<typeof ProblemItem>[] = [
  {
    image: '/images/opportunity-blindness.svg',
    title: 'Authorization is hard',
    description:
      'Evaluating policy against user attributes in real-time is a distributed systems problem. Most engineering teams tale shortcuts.'
  },
  {
    image: '/images/wasted-resources.svg',
    title: 'Requirements ramp',
    description:
      "Custom roles. Custom attributes. Decision logs. ISO 27001. As products move up-market, teams that build them can't keep up."
  },
  {
    image: '/images/hesitation-&-uncertainty.svg',
    title: 'Opportunity cost',
    description:
      '"I want to rewrite RBAC!" said no engineer, ever. Your team could be working on end-user features instead of undifferentiated heavy lifting.'
  }
]

const TheProblem = () => {
  const [section] = useFadeInBottom()
  return (
    <section className="pt-16 pb-20 lg:py-32">
      <div className="mx-auto" ref={section}>
        <div className="text-center">
          <p className="mb-2 font-bold leading-tight uppercase text-aserto-mojo-accent-20 sm:mb-4 sm:text-base tracking-h4">
            The Problem
          </p>
          <h2 className="mb-2 text-3xl tracking-tight text-aserto-grey-90 sm:mb-10 sm:text-5xl">
            Every app reinvents the wheel
          </h2>
          <p className="max-w-5xl mx-auto text-lg text-aserto-grey-60 sm:text-1.5xl font-roboto px-12">
            Engineering teams have to keep building (and rebuilding) features
            that are critical to customers, but offer no differentiation or
            end-user value.
          </p>
        </div>
        <div className="grid gap-8 mx-auto mt-20 lg:grid-cols-3">
          {problems.map((post) => (
            <ProblemItem {...post} key={post.title} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default TheProblem
