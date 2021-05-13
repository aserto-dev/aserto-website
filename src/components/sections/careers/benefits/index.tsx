import { useFadeInBottom } from 'hooks/use-gsap'

import BenefitItem from './benefit-item'

const benefits: React.ComponentPropsWithoutRef<typeof BenefitItem>[] = [
  {
    title: 'Competitive salary and equity',
    icon: '/images/careers/dolar.svg'
  },
  {
    title: 'Premium health, dental, and vision',
    icon: '/images/careers/smile.svg'
  },
  {
    title: 'Flexible PTO',
    icon: '/images/careers/inclusive.svg'
  },
  {
    title: 'Work remotely',
    icon: '/images/careers/inclusive.svg'
  }
]

const Benefits = () => {
  const [section] = useFadeInBottom()
  return (
    <section className="relative w-10/12 mx-auto pb-36 sm:pb-96 py-36" ref={section}>
      <div className="relative z-10 px-0 text-center">
        <h2 className="mb-10 text-5xl tracking-tight text-aserto-grey-90">
          Perks and Benefits
        </h2>
        <p className="mx-auto text-aserto-grey-60 text-1.5xl font-roboto tracking-tight">
          We treat people the way we want to be treated. We provide what you
          need to help you thrive and develop.
        </p>
        <div className="relative grid gap-4 mx-auto mt-20 lg:gap-8 lg:grid-cols-4">
          {benefits.map((feature, i) => (
            <BenefitItem {...feature} key={`${feature.title}-${i}`} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Benefits
