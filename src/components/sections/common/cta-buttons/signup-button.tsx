// Primitives
import Button from 'components/primitives/button'
import { asertoConsoleRootUrl } from 'lib/constants'

const SignupButton = () => {
  return (
    <>
      <Button
        variant="primary"
        size="sm"
        as="a"
        href={asertoConsoleRootUrl + '/#signup'}
        className="inline-flex w-[221px] h-[48px] px-[20px] justify-center items-center cursor-pointer text-[16px] self-center"
      >
        Get started free
      </Button>
    </>
  )
}

export default SignupButton
