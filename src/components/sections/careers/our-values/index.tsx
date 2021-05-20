import { useFadeInBottom } from 'hooks/use-gsap'
import { BlockContent } from 'components/primitives/block-content'
import { CareersPageFragment } from 'lib/sanity/generated'

import ValueItem from './value-item'

const OurValues = ({ page }: { page: CareersPageFragment }) => {
  const [section] = useFadeInBottom()
  return (
    <section className="relative w-10/12 pb-0 mx-auto sm:py-20">
      <div className="relative z-10 px-0 text-center" ref={section}>
        <h2 className="mb-10 text-5xl tracking-tight text-aserto-grey-90">
          {page.cultureSectionTitle}
        </h2>
        <BlockContent
          className="mx-auto text-aserto-grey-60 text-1.5xl font-roboto tracking-tight"
          blocks={page.cultureSectionSubtitleRaw}
        />
        <div className="relative grid gap-4 mx-auto mt-20 lg:gap-8 lg:grid-cols-3">
          {page.culture?.map((value, i) => (
            <ValueItem
              title={value?.title ?? ''}
              description={<BlockContent blocks={value?.subtitleRaw} />}
              icon={value?.image?.asset?.url ?? ''}
              key={i}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default OurValues
