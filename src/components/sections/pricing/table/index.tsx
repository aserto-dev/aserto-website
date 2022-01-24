// Hooks
import { useFadeInBottom } from 'hooks/use-gsap'
import { Pricing, Edition } from 'lib/sanity/generated'
import FeatureCategories from './feature-categories'
import TableHeader from './header'

type Props = {
  page: Pricing
  editions: Edition[]
}

const PricingTable = ({ page, editions }: Props) => {
  const [ref] = useFadeInBottom()
  const pricingTable = page.pricingTable ?? []
  return (
    <section className="relative mx-auto mb-20 text-center mt-0" ref={ref}>
      <h1 className="text-5xl leading-none text-aserto-grey-90 mx-auto">
        {page.subtitle}
      </h1>
      <div className="mx-auto flex">
        <div className="w-4/12"></div>
        <div className="w-8/12">
          <TableHeader editions={editions} />
        </div>
      </div>
      {page.pricingTable && <FeatureCategories categories={pricingTable} />}
    </section>
  )
}

export default PricingTable
