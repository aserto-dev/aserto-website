import Container from 'components/sections/homepage/container'
import { FeatureBlockFragment } from 'lib/sanity/generated'
import FeatureBlockItem from '../feature-block-item'

const FeatureBlocks = ({ features }: { features: FeatureBlockFragment[] }) => {
  return (
    <Container className="mb-32">
      {features.map((f, i) => (
        <FeatureBlockItem key={i} {...f} />
      ))}
    </Container>
  )
}

export default FeatureBlocks
