import Link from 'components/primitives/link'
import Image from 'components/primitives/image'
import { BlockContent } from 'components/primitives/block-content'
import { IntegrationFragment } from 'lib/sanity/generated'
import s from './integration.module.scss'
import clsx from 'clsx'

type Props = {
  integration: IntegrationFragment
}

const CaseStudy = ({ integration }: Props) => {
  return (
    <section className="relative w-full mx-auto lg:w-10/12 pt-12 mb-52 lg:pt-24  md:pt-24">
      <div>
        <Link
          href="/integrations"
          className="inline-block mb-12 font-roboto text-aserto-lochivar-accent-40 hover:underline"
        >
          Back to all integrations
        </Link>
      </div>

      {/* logo and impact */}
      <div className="bg-aserto-grey-5 rounded-[6px]">
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

      {/* title */}
      <BlockContent
        blocks={integration.titleRaw}
        className="mt-5 mb-10 text-center text-5xl lg:text-5xl sm:leading-none text-aserto-grey-90 lg:px-20"
      />

      <div className="px-5">
        <BlockContent
          blocks={integration.bodyRaw}
          className={clsx('mt-5 sm:mt-5', s.body)}
        />
      </div>
    </section>
  )
}

export default CaseStudy
