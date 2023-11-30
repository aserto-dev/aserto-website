import { FeatureBlockFragment } from 'lib/sanity/generated'
import FeatureBlockItem from '../feature-block-item'
import Container from 'components/sections/homepage/container'

const FeatureBlocks = ({ features }: { features: FeatureBlockFragment[] }) => {
  return (
    <Container className="mb-32">
      {features.map((f, i) => (
        <FeatureBlockItem key={i} direction={i & 1 ? 'left' : 'right'} {...f} />
      ))}
    </Container>
  )
}

export default FeatureBlocks
