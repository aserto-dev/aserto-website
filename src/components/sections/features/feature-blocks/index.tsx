import { FeatureBlockFragment } from 'lib/sanity/generated'
import FeatureBlockItem from '../feature-block-item'

const FeatureBlocks = ({ features }: { features: FeatureBlockFragment[] }) => {
  return (
    <div className="mb-32">
      {features.map((f, i) => (
        <FeatureBlockItem direction={i & 1 ? 'left' : 'right'} key={i} {...f} />
      ))}
    </div>
  )
}

export default FeatureBlocks
