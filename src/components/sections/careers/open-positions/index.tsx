// Hooks
import { BlockContent } from 'components/primitives/block-content'
import { useFadeInBottom } from 'hooks/use-gsap'
import {
  CareersPageFragment,
  JobPostingMetaFragment
} from 'lib/sanity/generated'

// Components
import PostionItem from './position-item'

const OpenPositions = ({
  page,
  positions
}: {
  page: CareersPageFragment
  positions: JobPostingMetaFragment[]
}) => {
  const [section] = useFadeInBottom()
  return (
    <section className="pt-0 pb-52" id="open-positions">
      <div className="mx-auto" ref={section}>
        <div className="text-center">
          <h2 className="mb-2 text-5xl tracking-tight text-aserto-grey-90 sm:mb-10">
            {page.openPositionsSectionTitle}
          </h2>
          <BlockContent
            className="max-w-5xl mx-auto text-lg text-aserto-grey-60 sm:text-1.5xl font-roboto px-12"
            blocks={page.openPositionsSectionSubtitleRaw}
          />
        </div>
        <div className="grid gap-8 mx-auto mt-20 lg:grid-cols-3">
          {positions.map((position, i) => (
            <PostionItem data={position} key={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default OpenPositions
