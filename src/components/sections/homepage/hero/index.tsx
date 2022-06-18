// Primitives
import Container from '../container'
import CtaButtons from 'components/sections/common/cta-buttons'

const Hero = () => {
  return (
    <Container className="py-[100px] bg-hero">
      <img
        className="w-[400px] mx-auto"
        src="images/aserto-horizontal-white.svg"
        alt="Aserto Logo"
      />
      <h1 className="my-[20px] text-[30px] text-aserto-grey-90 text-center">
        The fastest path to enterprise-grade authorization.
      </h1>
      <CtaButtons signup contactEngineer />
    </Container>
  )
}

export default Hero
