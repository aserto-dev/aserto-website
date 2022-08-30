import { SectionBlockFragment } from 'lib/sanity/generated'
import Container from 'components/sections/homepage/container'
import SectionBlockItem from './section-block-item'

const SectionBlocks = ({
  sectionBlocks
}: {
  sectionBlocks: SectionBlockFragment[]
}) => {
  return (
    <Container className="text-aserto-grey-90">
      {sectionBlocks.map((b, i) => (
        <SectionBlockItem
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

export default SectionBlocks
