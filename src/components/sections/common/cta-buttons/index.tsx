// Primitives
import ContactButton from './contact-button'
import ContactEngineerButtonDark from './contact-engineer-button-dark'
import ContactEngineerButton from './contact-engineering-button'
import SeeDemoButton from './see-demo-button'
import SignupButton from './signup-button'

type Props = {
  contact?: boolean
  contactEngineer?: boolean
  contactEngineerDark?: boolean
  seeDemo?: boolean
  signup?: boolean
  leftAlign?: boolean
}

const CtaButtons = ({
  contact,
  contactEngineer,
  contactEngineerDark,
  seeDemo,
  signup,
  leftAlign
}: Props) => {
  return (
    <div
      className={`flex flex-col sm:flex-row mt-[50px] gap-8 sm:gap-4 ${
        !leftAlign && `justify-center`
      }`}
    >
      {signup && <SignupButton />}
      {contact && <ContactButton />}
      {contactEngineer && <ContactEngineerButton size="sm" />}
      {contactEngineerDark && <ContactEngineerButtonDark />}
      {seeDemo && <SeeDemoButton />}
    </div>
  )
}

export default CtaButtons
