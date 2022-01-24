import { PricingFeatureCategory, Maybe } from 'lib/sanity/generated'
import FeatureCategory from './feature-category'

type Props = {
  categories: Maybe<PricingFeatureCategory>[]
}

const FeatureCategories = ({ categories }: Props) => {

  return (
    <div className="mt-5">
    { categories && categories.map((c, i) => <FeatureCategory key={i} category={c} />) }
    </div>
  )
}

export default FeatureCategories
