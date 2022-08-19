import Container from 'components/sections/homepage/container'
import ContactEngineerButton from 'components/sections/common/cta-buttons/contact-engineering-button'

const Hero = ({ title }: { title: string }) => {
  return (
    <Container className="pt-[100px]">
      <h1
        className="my-[20px] w-full text-[30px] leading-[45px]
          sm:text-[50px] sm:leading-[60px] text-center text-aserto-grey-90"
      >
        {title}
      </h1>
      <div className="my-[50px] text-center">
        <ContactEngineerButton size="lg" />
      </div>
      <h2 className="text-center text-aserto-grey-90 text-[24px] lg:text-[30px] leading-8 lg:leading-10 mb-20">
        We make it easy for developers to secure access to their cloud apps.
      </h2>
    </Container>
  )
}

export default Hero
