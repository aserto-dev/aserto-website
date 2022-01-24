import { PricingFeatureCategory, Maybe } from 'lib/sanity/generated'
import Rows from './rows'
import s from './feature-category.module.scss'
import clsx from 'clsx'

type Props = {
  category: Maybe<PricingFeatureCategory>
}

const FeatureCategory = ({ category }: Props) => (
  <div className={clsx('mx-auto', s.body)}>
    <div className={clsx('flex w-full items-left', s.title)}>
      <span className="text-white font-bold my-auto">
        {category && category.title}
      </span>
    </div>

    {category && category.features && category.features.rows && (
      <Rows rows={category.features.rows} />
    )}
  </div>
)

export default FeatureCategory
