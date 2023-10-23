import ProblemItem from './problem-item'
import { SectionBlockFragment } from 'lib/sanity/generated'
import Container from '../container'

type Props = {
  title?: string
  problems?: SectionBlockFragment[]
}

const Problem = ({ title, problems }: Props) => {
  return title && problems ? (
    <Container className="py-[100px] bg-aserto-grey-10 text-aserto-grey-90">
      <h2 className="text-[36px] font-medium text-center">{title}</h2>
      <img
        className="w-[512px] my-[45px] mx-auto"
        src="images/homepage/wheel-man.svg"
        alt="Reinventing the wheel"
      />
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-4">
        {problems.map((p, i) => (
          <ProblemItem
            title={p.title ?? ''}
            subtitleRaw={p.subtitleRaw}
            key={i}
          />
        ))}
      </div>
      <hr className="p-[2px] my-8 bg-hrGradient border-t-0" />
    </Container>
  ) : (
    <div />
  )
}

export default Problem
