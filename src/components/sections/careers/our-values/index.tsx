import { useFadeInBottom } from 'hooks/use-gsap'
import { BlockContent } from 'components/primitives/block-content'
import { SectionBlockFragment } from 'lib/sanity/generated'

import ValueItem from './value-item'
import clsx from 'clsx'

const OurValues = ({
  title,
  subtitleRaw,
  features,
  cols,
  taglineRaw
}: {
  title: string
  subtitleRaw: any
  features?: (SectionBlockFragment | null | undefined)[]
  cols?: 3 | 4
  taglineRaw?: any
}) => {
  const [section] = useFadeInBottom()
  return (
    <section className="relative py-20 mx-auto lg:w-10/12">
      <div className="relative z-10 px-0 sm:text-center" ref={section}>
        <h2 className="mb-10 text-5xl tracking-tight text-center text-aserto-grey-90">
          {title}
        </h2>
        <BlockContent
          className="mx-auto text-aserto-grey-60 text-1.5xl font-roboto tracking-tight"
          blocks={subtitleRaw}
        />
        {features && (
          <div
            className={clsx('relative grid gap-10 mx-auto mt-20 lg:gap-8', {
              'lg:grid-cols-3': cols === 3 || !cols,
              'lg:grid-cols-4': cols === 4
            })}
          >
            {features.map((value, i) => (
              <ValueItem
                title={value?.title ?? ''}
                description={<BlockContent blocks={value?.subtitleRaw} />}
                icon={value?.image?.asset?.url ?? '/404'}
                key={i}
              />
            ))}
          </div>
        )}
        {taglineRaw && (
          <BlockContent
            className="mx-auto max-w-[800px] text-1.5xl mt-16 text-aserto-grey-60 font-roboto"
            blocks={taglineRaw}
          />
        )}
      </div>
    </section>
  )
}

export default OurValues
