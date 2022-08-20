import { SectionBlockFragment } from 'lib/sanity/generated'
import Container from 'components/sections/homepage/container'
import BenefitItem from './benefit-item'

const Benefits = ({ benefits }: { benefits: SectionBlockFragment[] }) => {
  return (
    <Container className="text-aserto-grey-90 mt-72 sm:mt-96 sm:pt-20">
      {benefits.map((b, i) => (
        <BenefitItem
          key={i}
          title={b.title ?? ''}
          subtitleRaw={b.subtitleRaw}
          image={b.image}
          element={b.element}
          glow={b.glow}
          direction={i & 1 ? 'left' : 'right'}
        />
      ))}
    </Container>
  )
}

export default Benefits
