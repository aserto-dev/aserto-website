// Primitives
import Button from 'components/primitives/button'

const ContactEngineerButton = ({ size }: { size: 'md' | 'lg' | 'sm' }) => {
  return (
    <>
      <Button
        variant="primary"
        size={size}
        as="a"
        className="inline-flex items-center justify-center self-center cursor-pointer"
        href="/contact-engineer"
      >
        Speak with an engineer
      </Button>
    </>
  )
}

export default ContactEngineerButton
