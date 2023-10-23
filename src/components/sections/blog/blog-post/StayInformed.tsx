import Button from 'components/primitives/button'
import Link from 'components/primitives/link'
const StayInformed = ({ showBlogModal }: { showBlogModal?: () => void }) => {
  return (
    <>
      <div className="mt-24">
        <p className="text-aserto-grey-90 text-lg font-medium">Stay informed</p>
        <div className="flex flex-col mt-5  gap-6 mb-4 maxsm:ml-0 maxsm:flex maxsm:flex-col maxsm:w-full maxlg:mt-6 maxlg:flex maxlg:flex-row maxlg:gap-4">
          <Button
            className="maxlg:hidden maxsm:w-full  leading-5"
            size="sm"
            onClick={showBlogModal}
          >
            <img
              src="/images/about/envelope.svg"
              className="cursor-pointer inline mr-2 mb-0.5"
            />
            Subscribe
          </Button>

          <Button className=" w-full" size="sm">
            <img
              src="/images/about/slack.svg"
              className="cursor-pointer inline mr-2"
            />
            <Link href="https://join.slack.com/t/asertocommunity/shared_invite/zt-yjvq8kwy-M_wtwFO35I9ToJiHg1Tutg">
              Join the discussion
            </Link>
          </Button>

          <Button className=" w-full" size="sm">
            <img
              src="/images/about/call.svg"
              className="cursor-pointer inline mr-2"
            />
            <Link href="/contact-engineer">Talk to an engineer</Link>
          </Button>
        </div>
      </div>
    </>
  )
}
export default StayInformed
