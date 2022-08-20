// Primitives
import Button from 'components/primitives/button'

const ContactButton = () => {
  return (
    <>
      <Button
        variant="primary"
        size="sm"
        as="a"
        className="inline-flex items-center justify-center self-center cursor-pointer"
        href="/contact"
      >
        Contact us
      </Button>
    </>
  )
}

export default ContactButton
