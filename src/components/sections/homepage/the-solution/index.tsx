import { useFadeInBottom } from 'hooks/use-gsap'
import { HomePageFragment } from 'lib/sanity/generated'
import SolutionItem from './solution-item'

const TheSolution = ({ page }: { page: HomePageFragment }) => {
  const [section] = useFadeInBottom()

  return (
    <section className="py-32 mt-32" ref={section} id="the-solution">
      <div className="px-4 mb-24 text-center sm:px-0">
        <p className="mb-2 font-bold leading-tight uppercase text-aserto-lochivar-100 sm:mb-4 sm:text-base tracking-h4">
          {page.theSolutionSectionLabel}
        </p>
        <h2 className="mb-2 text-5xl tracking-tight text-aserto-grey-90 sm:mb-10">
          {page.theSolutionSectionTitle}
        </h2>
      </div>
      {page.theSolutionSectionCards?.map((card, i) => {
        if (!card) return null
        return <SolutionItem data={card} isInverted={i % 2 !== 0} key={i} />
      })}
    </section>
  )
}

export default TheSolution
