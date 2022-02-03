// Hooks
import { useFadeInBottom } from 'hooks/use-gsap'
import { Edition, Pricing } from 'lib/sanity/generated'

// Components
import EditionItem from './edition-item'

type Props = {
  page: Pricing
  editions: Edition[]
}

const Editions = ({ page, editions }: Props) => {
  const [section] = useFadeInBottom()
  const editionNameToHighlight = page?.editionNameToHighlight ?? ''

  return (
    <section className="mt-10 sm:mt-10 mb-32">
      <div className="mx-auto" ref={section}>
        <div className="grid w-full grid-cols-1 gap-4 mx-auto mt-20 gap-y-12 sm:gap-4 sm:gap-y-20 md:grid-cols-2 lg:grid-cols-4">
          {editions.map((e, i) => {
            if (!e) return null
            return (
              <EditionItem
                data={e}
                editionNameToHighlight={editionNameToHighlight}
                key={i}
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Editions
