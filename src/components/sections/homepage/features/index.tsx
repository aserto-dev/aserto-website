import { useFadeInBottom } from 'hooks/use-gsap'
import Comparison from './comparison'
import FeatureItem from './feature-item'

const features: React.ComponentPropsWithoutRef<typeof FeatureItem>[] = [
  {
    category: 'realTime',
    icon: '/images/features/001.svg',
    description:
      'Works with (and normalizes attributes from) any identity provider.'
  },
  {
    category: 'realTime',
    icon: '/images/features/001.svg',
    description: 'Applies zero-trust security principles, secure by default.'
  },
  {
    category: 'realTime',
    icon: '/images/features/001.svg',
    description:
      'Opinionated authorization framework that covers 80% of what you need, out of the box.'
  },
  {
    category: 'realTime',
    icon: '/images/features/001.svg',
    description:
      'Enterprise admins can customize to their needs without involving your dev team.'
  },
  {
    category: 'realTime',
    icon: '/images/features/001.svg',
    description:
      'Eliminates the risk of unauthorized access to protected resources due to stale permissions encoded in auth tokens.'
  },
  {
    category: 'realTime',
    icon: '/images/features/001.svg',
    description:
      'REST/gRPC API’s with native support for popular languages and frameworks - e.g. React, node.js.'
  },
  {
    category: 'fineGrained',
    icon: '/images/features/002.svg',
    description:
      'Works with (and normalizes attributes from) any identity provider.'
  },
  {
    category: 'fineGrained',
    icon: '/images/features/002.svg',
    description: 'Applies zero-trust security principles, secure by default.'
  },
  {
    category: 'fineGrained',
    icon: '/images/features/002.svg',
    description:
      'Opinionated authorization framework that covers 80% of what you need, out of the box.'
  },
  {
    category: 'fineGrained',
    icon: '/images/features/002.svg',
    description:
      'Enterprise admins can customize to their needs without involving your dev team.'
  },
  {
    category: 'fineGrained',
    icon: '/images/features/002.svg',
    description:
      'Eliminates the risk of unauthorized access to protected resources due to stale permissions encoded in auth tokens.'
  },
  {
    category: 'fineGrained',
    icon: '/images/features/002.svg',
    description:
      'REST/gRPC API’s with native support for popular languages and frameworks - e.g. React, node.js.'
  },
  {
    category: 'cloudNative',
    icon: '/images/features/003.svg',
    description:
      'Works with (and normalizes attributes from) any identity provider.'
  },
  {
    category: 'cloudNative',
    icon: '/images/features/003.svg',
    description: 'Applies zero-trust security principles, secure by default.'
  },
  {
    category: 'cloudNative',
    icon: '/images/features/003.svg',
    description:
      'Opinionated authorization framework that covers 80% of what you need, out of the box.'
  },
  {
    category: 'cloudNative',
    icon: '/images/features/003.svg',
    description:
      'Enterprise admins can customize to their needs without involving your dev team.'
  },
  {
    category: 'cloudNative',
    icon: '/images/features/003.svg',
    description:
      'Eliminates the risk of unauthorized access to protected resources due to stale permissions encoded in auth tokens.'
  },
  {
    category: 'cloudNative',
    icon: '/images/features/003.svg',
    description:
      'REST/gRPC API’s with native support for popular languages and frameworks - e.g. React, node.js.'
  }
]

const Features = () => {
  const [section] = useFadeInBottom()
  return (
    <section className="py-32" ref={section}>
      <div className="px-4 mb-24 text-center sm:px-0">
        <p className="mb-2 font-bold leading-tight uppercase text-aserto-lochivar-100 sm:mb-4 sm:text-base tracking-h4">
          SUBTITLE GOES HERE
        </p>
        <h2 className="mb-2 text-3xl tracking-tight text-aserto-grey-90 sm:mb-10 sm:text-5xl">
          Features
        </h2>
      </div>
      <Comparison />
      <div className="relative grid gap-8 mx-auto mt-20 lg:grid-cols-3">
        {features.map((feature, i) => (
          <FeatureItem
            {...feature}
            key={`${feature.category}-${i}`}
            display={feature.category !== 'realTime' ? false : true}
          />
        ))}
      </div>
    </section>
  )
}

export default Features
