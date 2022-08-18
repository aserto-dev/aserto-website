// Primitives
import Link from 'components/primitives/link'

const SeeDemoButton = () => {
  return (
    <>
      <Link
        href="/see-demo"
        className="inline-flex w-[221px] sm:mt-0 h-[48px] leading-[48px] px-[20px] text-[16px] 
        text-aserto-lochivar-accent-40 border-2 border-aserto-lochivar-100 rounded-[4px] justify-center items-center self-center
        bg-aserto-black hover:border-aserto-lochivar-accent-10 hover:underline focus:text-aserto-lochivar-accent-20"
      >
        See a demo
      </Link>
    </>
  )
}

export default SeeDemoButton
