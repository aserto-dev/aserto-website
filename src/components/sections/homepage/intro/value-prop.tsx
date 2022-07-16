import Link from 'components/primitives/link'
import { ValuePropFragment } from 'lib/sanity/generated'
import CodeBrowser from './code-browser.tsx'
import Glow from './glow'

const ValueProp = ({ title, image, direction }: ValuePropFragment) => {
  const dirStyle = direction === 'left' ? 'xl:order-2' : ''
  return (
    <div className="relative flex flex-col xl:flex-row justify-evenly mb-40 xl:mb-72 text-[20px] font-semibold">
      <Glow direction={direction ?? 'left'} />
      <div
        className={`text-center xl:text-left ${dirStyle} xl:translate-y-1/3 mb-8 mx-4`}
      >
        <div className="sm:w-9/12 xl:w-[430px] mx-auto">
          <h2>{title}</h2>
          <Link
            className="text-aserto-lochivar-accent-40 hover:underline"
            href="/benefits"
          >
            {`Learn more >`}
          </Link>
        </div>
      </div>
      <div className="relative md:flex md:flex-row md:justify-center">
        {image?.asset?.url ? (
          <img
            className="w-[700px]"
            src={image?.asset?.url ?? '/404'}
            alt={image?.alt ?? 'value prop image'}
          />
        ) : (
          <CodeBrowser />
        )}
      </div>
    </div>
  )
}

export default ValueProp
