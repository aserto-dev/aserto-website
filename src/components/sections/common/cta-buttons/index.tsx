// Primitives
import ContactButton from './contact-button'
import ContactEngineerButton from './contact-engineer-button'
import SeeDemoButton from './see-demo-button'
import SignupButton from './signup-button'

type Props = {
  contact?: boolean
  contactEngineer?: boolean
  seeDemo?: boolean
  signup?: boolean
  leftAlign?: boolean
}

const CtaButtons = ({
  contact,
  contactEngineer,
  seeDemo,
  signup,
  leftAlign
}: Props) => {
  return (
    <>
      {contact ? (
        <div className="mt-[50px]">
          <ContactButton />
        </div>
      ) : (
        <div
          className={`flex flex-col sm:flex-row mt-[50px] gap-8 sm:gap-4 ${
            !leftAlign && `justify-center`
          }`}
        >
          {signup && <SignupButton />}
          {contactEngineer && <ContactEngineerButton />}
          {seeDemo && <SeeDemoButton />}
        </div>
      )}
    </>
  )
}

export default CtaButtons
