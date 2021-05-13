import { useFadeInBottom } from 'hooks/use-gsap'

import ValueItem from './value-item'

const values: React.ComponentPropsWithoutRef<typeof ValueItem>[] = [
  {
    title: 'Empathetic',
    icon: '/images/careers/empatheic.svg',
    description:
      'We empathize with our clients as well as each other. We truly care.'
  },
  {
    title: 'Focused',
    icon: '/images/careers/focused.svg',
    description:
      'We care about the quality of our work and solving the real problems our clients face.'
  },
  {
    title: 'Inclusive',
    icon: '/images/careers/inclusive.svg',
    description:
      "We're committed to building a diverse team that's inclusive of people of all backgrounds."
  }
]

const OurValues = () => {
  const [section] = useFadeInBottom()
  return (
    <section className="relative w-10/12 pb-0 mx-auto sm:py-20" ref={section}>
      <div className="relative z-10 px-0 text-center">
        <h2 className="mb-10 text-5xl tracking-tight text-aserto-grey-90">
          Our Values
        </h2>
        <p className="mx-auto text-aserto-grey-60 text-1.5xl font-roboto tracking-tight">
          We care about craftsmanship, making the lives of our clients better,
          and creating an atmosphere where you're empowered to do your best
          work.
        </p>
        <div className="relative grid gap-4 mx-auto mt-20 lg:gap-8 lg:grid-cols-3">
          {values.map((feature, i) => (
            <ValueItem {...feature} key={`${feature.title}-${i}`} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default OurValues
