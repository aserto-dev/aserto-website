import { useFadeInBottom } from 'hooks/use-gsap'
import Feature from './feature'

const features: React.ComponentPropsWithoutRef<typeof Feature>[] = [
  {
    tag: 'VISIBILITY',
    title: 'Real-time journeys',
    description:
      'See what top accounts and users are doing in your product, how far along their journey they’ve come, and whether or not they need your team’s help.',
    imageSrc: '/images/scoring.svg',
    imageAlt: 'Scoring illustration',
    imageCaption: 'Score based on engagement + customer fit'
  },
  {
    tag: 'SCORING',
    title: 'Prioritized account lists',
    description:
      'Improve the performance of your reps by showing them the prospects and opportunities with the strongest signals.',
    imageSrc: '/images/scoring.svg',
    imageAlt: 'Scoring illustration',
    imageCaption: 'Score based on engagement + customer fit'
  },
  {
    imageSrc: '/images/scoring.svg',
    tag: 'INTEGRATIONS',
    title: 'Next best action',
    description:
      'Increase conversion likelihood by taking the right action directly from Endgame’s UI or trigger the engagement tools you and your team already use.',
    imageAlt: 'Integrations illustration',
    imageCaption: 'Starting with sales engagement tools'
  }
]

const FeaturesSection = () => {
  const [section] = useFadeInBottom()
  return (
    <div
      className="relative py-32 space-y-20 overflow-hidden sm:space-y-24 bg-ds-background"
      ref={section}
    >
      <div className="px-4 text-center sm:px-0">
        <p className="mb-1 text-base font-black leading-tight text-white uppercase sm:mb-3 tracking-h4">
          COPY WILL LIVE HERE
        </p>
        <h2 className="mb-2 text-3xl font-extrabold tracking-tight text-white sm:mb-5 sm:text-5xl">
          Self-hosted authorizer side-car
        </h2>
        <p className="mx-auto text-lg text-white sm:max-w-xl max-w-none sm:text-2xl font-book">
          Take immediate action on prospective and current customers based on
          real-time data signals
        </p>
      </div>
      {features.map((feature, i) => (
        <Feature {...feature} isInverted={i % 2 !== 0} key={feature.title} />
      ))}
    </div>
  )
}

export default FeaturesSection
