import Link from 'components/primitives/link'
import Image from 'components/primitives/image'
import { IntegrationFragment } from 'lib/sanity/generated'
import s from './integration.module.scss'
import clsx from 'clsx'

// Layout
import Container from 'components/layout/container'
import { BlockContent } from 'components/primitives/block-content'

// Sections
import CtaButtons from 'components/sections/common/cta-buttons'

type Props = {
  integration: IntegrationFragment
}

const Integration = ({ integration }: Props) => {
  return (
    <section className="relative mx-auto pt-12 mb-20 lg:pt-24 md:pt-24">
      <div className="w-full mx-auto lg:w-10/12">
        <Container>
          <Link
            href="/integrations"
            className="inline-block mb-12 font-roboto text-aserto-lochivar-accent-40 hover:underline"
          >
            Back to all integrations
          </Link>
        </Container>
      </div>

      {/* title */}
      <h1 className="mt-5 mb-5 text-center text-5xl lg:text-5xl sm:leading-none text-aserto-grey-90 lg:px-20 px-5">
        {integration.title}
      </h1>

      {/* banner */}
      <div className="bg-aserto-grey-10 rounded-[6px]">
        <div className="flex items-center justify-center py-12">
          <Image
            src={integration.logo?.asset?.url || '/404'}
            alt="Technology logo"
            width={795}
            height={154}
            layout="native"
          />
        </div>
      </div>

      {/* subtitle */}
      <h2 className="mt-10 mb-10 text-center text-4xl lg:text-4xl sm:leading-none text-aserto-grey-90 lg:px-20 px-5">
        {integration.subtitle}
      </h2>

      <CtaButtons signup contactEngineerDark />

      {integration.bodyRaw && (
        <div className="w-full sm:w-8/12 mx-auto">
          <Container className="px-5 mt-20">
            <BlockContent
              blocks={integration.bodyRaw}
              className={clsx('mt-5 sm:mt-5', s.body)}
            />
          </Container>
        </div>
      )}
    </section>
  )
}

export default Integration
