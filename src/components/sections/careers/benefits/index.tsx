import { useFadeInBottom } from 'hooks/use-gsap'
import { BlockContent } from 'components/primitives/block-content'
import { CareersPageFragment } from 'lib/sanity/generated'

import BenefitItem from './benefit-item'

const Benefits = ({ page }: { page: CareersPageFragment }) => {
  const [section] = useFadeInBottom()
  return (
    <section className="relative w-10/12 mx-auto py-36">
      <div className="relative z-10 px-0 sm:text-center" ref={section}>
        <h2 className="mb-10 text-5xl tracking-tight text-center text-aserto-grey-90">
          {page.perksSectionTitle}
        </h2>
        <BlockContent
          className="mx-auto text-aserto-grey-60 text-1.5xl font-roboto tracking-tight"
          blocks={page.perksSectionSubtitleRaw}
        />
        <div className="relative grid mx-auto mt-20 gap-14 lg:grid-cols-4">
          {page.perks?.map((perk, i) => (
            <BenefitItem
              title={perk?.title ?? ''}
              icon={perk?.icon?.asset?.url ?? ''}
              key={i}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Benefits
