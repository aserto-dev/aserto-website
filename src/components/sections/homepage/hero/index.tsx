// Primitives
import Container from '../container'
import CtaButtons from 'components/sections/common/cta-buttons'

const Hero = ({ title }: { title: string }) => {
  return (
    <Container className="p-[75px] bg-hero">
      <h1 className="my-[20px] w-1/2 text-[60px] leading-[70px] text-aserto-grey-90">
        {title}
      </h1>
      <CtaButtons signup contactEngineer leftAlign />
    </Container>
  )
}

export default Hero
