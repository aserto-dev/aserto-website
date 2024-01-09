import Button from 'components/primitives/button'
import Link from 'components/primitives/link'

const StayInformed = () => {
  return (
    <>
      <div className="mt-24">
        <p className="text-aserto-grey-90 text-lg font-medium">Stay informed</p>
        <div className="flex flex-col mt-5  gap-6 mb-4 maxsm:ml-0 maxsm:flex maxsm:flex-col maxsm:w-full maxlg:mt-6 maxlg:flex maxlg:flex-row maxlg:gap-4">
          <Button
            className="maxlg:hidden maxsm:w-full  leading-5"
            size="sm"
            onClick={() => {
              const element = document.getElementById('sign-up')
              element?.scrollIntoView({ behavior: 'smooth', block: 'end' })
            }}
          >
            <img
              src="/images/about/envelope.svg"
              className="cursor-pointer inline mr-2 mb-0.5"
            />
            Subscribe
          </Button>
          <Link
            className="w-full"
            href="https://join.slack.com/t/asertocommunity/shared_invite/zt-yjvq8kwy-M_wtwFO35I9ToJiHg1Tutg"
          >
            <Button size="sm" className="w-full">
              <img
                src="/images/about/slack.svg"
                className="cursor-pointer inline mr-2"
              />
              Join the discussion
            </Button>
          </Link>
          <Link className="w-full" href="/contact-engineer">
            <Button className="w-full" size="sm">
              <img
                src="/images/about/call.svg"
                className="cursor-pointer inline mr-2"
              />
              Talk to an engineer
            </Button>
          </Link>
        </div>
      </div>
    </>
  )
}
export default StayInformed
