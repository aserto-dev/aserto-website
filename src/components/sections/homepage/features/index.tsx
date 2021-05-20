import clsx from 'clsx'
import Container from 'components/layout/container'
import { useFadeInBottom } from 'hooks/use-gsap'
import { HomePageFragment } from 'lib/sanity/generated'
import { useMemo, useState } from 'react'
import Comparison from './comparison'
import FeatureItem from './feature-item'

import s from './features.module.css'

const Features = ({ page }: { page: HomePageFragment }) => {
  const [section] = useFadeInBottom()
  const [activeFeatureIndex, setActiveFeatureIndex] = useState(0)

  const activeCategory = useMemo(() => {
    return page.features?.[activeFeatureIndex]
  }, [activeFeatureIndex, page.features])

  return (
    <section
      className={clsx('pt-0 sm:py-32 relative', s.background)}
      ref={section}
      id="features"
    >
      <Container>
        <div className="relative z-10 px-0 text-center">
          <h2 className="mb-10 text-5xl tracking-tight text-aserto-grey-90">
            {page.featuresSectionTitle}
          </h2>
          <Comparison
            page={page}
            activeFeatureIndex={activeFeatureIndex}
            setActiveFeatureIndex={setActiveFeatureIndex}
          />
          <div className="relative grid gap-4 mx-auto mt-20 lg:gap-8 lg:grid-cols-3">
            {activeCategory?.blocks?.map((feature) => {
              return (
                <FeatureItem
                  icon={feature?.icon?.asset?.url ?? ''}
                  description={feature?.title}
                  key={feature?.title}
                />
              )
            })}
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Features
