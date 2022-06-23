// Primitives
import Link from 'components/primitives/link'

const ContactEngineerButton = () => {
  return (
    <>
      <Link
        href="/contact-engineer"
        className="inline-flex w-[221px] sm:mt-0 h-[48px] leading-[48px] px-[20px] text-[16px] font-semibold
        text-aserto-lochivar-accent-40 border-2 border-aserto-lochivar-100 rounded-[4px] self-center
        hover:border-aserto-lochivar-accent-10 hover:underline focus:text-aserto-lochivar-accent-20"
      >
        Speak with an engineer
      </Link>
    </>
  )
}

export default ContactEngineerButton
