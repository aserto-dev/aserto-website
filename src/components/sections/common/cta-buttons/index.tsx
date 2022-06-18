// Primitives
import ContactButton from './contact-button'
import ContactEngineerButton from './contact-engineer-button'
import SignupButton from './signup-button'

type Props = {
  contact?: boolean
  contactEngineer?: boolean
  signup?: boolean
}

const CtaButtons = ({ contact, contactEngineer, signup }: Props) => {
  return (
    <>
      <div className="flex flex-col sm:flex-row mt-[50px] justify-center text-center gap-8 sm:gap-4">
        {signup && <SignupButton />}
        {contactEngineer && <ContactEngineerButton />}
        {contact && <ContactButton />}
      </div>
    </>
  )
}

export default CtaButtons
