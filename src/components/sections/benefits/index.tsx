import { SectionBlockFragment } from 'lib/sanity/generated'
import Container from 'components/sections/homepage/container'
import BenefitItem from './benefit-item'

const Benefits = ({ benefits }: { benefits: SectionBlockFragment[] }) => {
  return (
    <Container className="text-aserto-grey-90">
      {benefits.map((b, i) => (
        <BenefitItem
          key={i}
          title={b.title ?? ''}
          subtitleRaw={b.subtitleRaw}
          image={b.image}
          element={b.element}
          direction={i & 1 ? 'left' : 'right'}
        />
      ))}
    </Container>
  )
}

export default Benefits
