import BenefitItem from 'components/sections/benefits/benefit-item'
import Container from 'components/sections/homepage/container'
import { SectionBlockFragment } from 'lib/sanity/generated'

const Benefits = ({ benefits }: { benefits: SectionBlockFragment[] }) => {
  return (
    <Container className="text-aserto-grey-90 pt-40">
      <picture>
        <img
          className="object-cover h-[100px] absolute -top-20 -ml-4
      lg:pt-[10px] xl:pt-0 lg:-top-32 2xl:-top-44 lg:object-fill lg:h-auto"
          src="/images/use-cases/seafloor-top.svg"
          alt="Dark Sea Floor"
        />
      </picture>
      <picture>
        <img
          className="w-[350px] absolute -top-40 left-1/2 transform -translate-x-1/2
      lg:w-[450px] lg:-top-52"
          src="/images/use-cases/lottie-with-shadow.svg"
          alt="Lottie"
        />
      </picture>
      {benefits.map((b, i) => (
        <BenefitItem
          key={i}
          title={b.title ?? ''}
          subtitleRaw={b.subtitleRaw}
          image={b.image}
          element={b.element}
          glow={b.glow}
          direction={i & 1 ? 'right' : 'left'}
        />
      ))}
    </Container>
  )
}

export default Benefits
