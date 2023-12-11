import Container from 'components/layout/container'
import CtaButtons from '../cta-buttons'
import { CtaBlock } from 'lib/sanity/generated'

type CtaOptions = {
  caption?: string
  contact?: boolean
  contactEngineer?: boolean
  contactEngineerDark?: boolean
  signup?: boolean
}

export const ctaOptions = (cta: CtaBlock): CtaOptions => {
  return {
    caption: cta.caption ?? 'Authorization as easy as an API call',
    signup: !!cta.signup,
    contact: !!cta.contact,
    contactEngineer: !!cta.contactEngineer,
    contactEngineerDark: !!cta.contactEngineerDark
  }
}

const Lottie = ({ caption, ...ctaButtons }: CtaOptions) => {
  caption = caption ?? `Let's talk about your authorization challenges`
  return (
    <Container className="py-[180px] text-aserto-grey-90 text-center">
      <div>
        <picture>
          <img
            className="w-[480px] h-[350px] object-cover mx-auto"
            src="/images/lottie.png"
            alt="Lottie"
          />
        </picture>
        <h2 className="text-[36px] font-medium">{caption}</h2>
      </div>
      <CtaButtons {...ctaButtons} />
    </Container>
  )
}

export default Lottie
