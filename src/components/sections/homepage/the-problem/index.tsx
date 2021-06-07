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
          <h1
            className="mb-2 tracking-tight text-aserto-grey-90 font-roboto"
            style={{
              fontSize: 32
            }}
          >
            {page.theProblemSectionLabel}
          </h1>
          <h2 className="mx-auto mt-1 text-base md:leading-tight text-aserto-grey-60 text-xl md:mt-3 font-roboto">
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
