import clsx from 'clsx'
import { useFadeInBottom } from 'hooks/use-gsap'
import Comparison from './comparison'
import FeatureItem from './feature-item'

import s from './features.module.css'

const features: React.ComponentPropsWithoutRef<typeof FeatureItem>[] = [
  {
    category: 'realTime',
    icon: '/images/features/key.svg',
    description:
      'Opinionated authorization framework that covers 80% of what it takes to build RBAC.'
  },
  {
    category: 'realTime',
    icon: '/images/features/shield.svg',
    description:
      'REST/gRPC API’s with native support for popular languages and frameworks - e.g. React, node.js'
  },
  {
    category: 'realTime',
    icon: '/images/features/maximize.svg',
    description:
      'Flexible deployment model - a hosted service, a local service, or a sidecar.'
  },
  {
    category: 'realTime',
    icon: '/images/features/layers.svg',
    description: 'Open source authorizer based on CNCF OPA project.'
  },
  {
    category: 'realTime',
    icon: '/images/features/check-circle.svg',
    description:
      'Hosted solution offers rate-limited free tier for small scale apps, transparent pricing that grows along with your business.'
  },
  {
    category: 'realTime',
    icon: '/images/features/star.svg',
    description: '-'
  },
  {
    category: 'cloudNative',
    icon: '/images/features/refresh-cw.svg',
    description:
      'Policy is stored and versioned in a repository, just like application and infrastructure code.'
  },
  {
    category: 'cloudNative',
    icon: '/images/features/layout.svg',
    description:
      'Policy is built into a versioned image, just like a container.'
  },
  {
    category: 'cloudNative',
    icon: '/images/features/grid.svg',
    description:
      'Policy changes are built, tested, and deployed in an automated GitOps workflow, and don’t require redeploying the app.'
  },
  {
    category: 'cloudNative',
    icon: '/images/features/user-plus.svg',
    description:
      'Customers can adapt roles and permissions to their needs in a self-service manner.'
  },
  {
    category: 'cloudNative',
    icon: '/images/features/git-commit.svg',
    description:
      'Policy changes can be traced back to a git commit, meeting auditing requirements out of the box.'
  },
  {
    category: 'fineGrained',
    icon: '/images/features/unlock.svg',
    description:
      'Supports fine-grained role- and attribute-based access control.'
  },
  {
    category: 'fineGrained',
    icon: '/images/features/check-circle-blue.svg',
    description: 'Applies zero-trust security principles, secure by default.'
  },
  {
    category: 'fineGrained',
    icon: '/images/features/shield-blue.svg',
    description:
      'Eliminates the risk of stale permissions in auth tokens resulting in unauthorized access to protected resources.'
  },
  {
    category: 'fineGrained',
    icon: '/images/features/maximize-blue.svg',
    description:
      'Centralized management of decision logs, audit trails, alerting.'
  },
  {
    category: 'fineGrained',
    icon: '/images/features/user-check.svg',
    description:
      'Works with (and normalizes attributes from) any identity provider.'
  },
  {
    category: 'fineGrained',
    icon: '/images/features/loader.svg',
    description:
      'Simplifies SOC 2 and ISO 27001 certifications through comprehensive authorization logs.'
  }
]

const Features = () => {
  const [section] = useFadeInBottom()
  return (
    <section
      className={clsx('pt-0 sm:py-32 relative', s.background)}
      ref={section}
      id="features"
    >
      <div className="relative z-10 px-0 text-center">
        <h2 className="mb-10 text-5xl tracking-tight text-aserto-grey-90">
          Features
        </h2>
        <Comparison />
        <div className="relative grid gap-4 mx-auto mt-20 lg:gap-8 lg:grid-cols-3">
          {features.map((feature, i) => (
            <FeatureItem
              {...feature}
              key={`${feature.category}-${i}`}
              display={feature.category !== 'realTime' ? false : true}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
