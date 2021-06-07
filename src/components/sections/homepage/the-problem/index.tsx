// Hooks
import { useFadeInBottom } from 'hooks/use-gsap'
import { HomePageFragment } from 'lib/sanity/generated'

// Components
import ProblemItem from './problem-item'

const TheProblem = ({ page }: { page: HomePageFragment }) => {
  const [section] = useFadeInBottom()

  return (
    <section className="pt-8 mt-16 lg:py-12">
      <div className="mx-auto" ref={section}>
        <div className="text-center">
          <p className="mb-2 font-bold leading-tight uppercase text-aserto-mojo-accent-20 sm:mb-4 sm:text-base tracking-h4">
            {page.theProblemSectionLabel}
          </p>
          <h2 className="mb-2 text-4xl tracking-tight text-aserto-grey-90 sm:mb-10">
            {page.theProblemSectionTitle}
          </h2>
        </div>
        <div className="grid gap-8 mx-auto mt-10 lg:grid-cols-3">
          {page.theProblemSectionCards?.map((card, i) => {
            if (!card) return null
            return <ProblemItem data={card} key={i} />
          })}
        </div>
      </div>
    </section>
  )
}

export default TheProblem
