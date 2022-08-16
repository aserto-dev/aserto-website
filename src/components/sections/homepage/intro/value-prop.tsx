import { ValuePropFragment } from 'lib/sanity/generated'
import CodeBrowser from './code-browser.tsx'
import AsertoInAction from 'components/sections/homepage/aserto-in-action'

import Glow from './glow'
import { BlockContent } from 'components/primitives/block-content'

type ValuePropType = ValuePropFragment & { direction: string }

const ValueProp = ({
  title,
  subtitleRaw,
  image,
  direction,
  element,
  glow
}: ValuePropType) => {
  const dirStyle = direction === 'left' ? 'xl:order-2' : ''
  return (
    <div className="relative flex flex-col xl:flex-row justify-evenly mb-40 xl:mb-72 text-[20px] font-semibold">
      {!!glow && <Glow direction={direction ?? 'left'} />}
      <div
        className={`text-center xl:text-left ${dirStyle} xl:translate-y-[15%] mb-8 mx-4 pr-4`}
      >
        <div className="sm:w-9/12 xl:w-[430px] mx-auto">
          <h2>{title}</h2>
          <BlockContent
            className={`text-[20px] xl:w-[500px] text-center xl:text-left mt-8`}
            blocks={subtitleRaw}
            spaced
          />
        </div>
      </div>
      <div className="relative md:flex md:flex-row md:justify-center">
        {element === 'CodeBrowser' && <CodeBrowser />}
        {element === 'Animation' && (
          <div className="w-full xl:w-[700px]">
            <AsertoInAction />
          </div>
        )}
        {image?.asset?.url && (
          <img
            className="w-[700px]"
            src={image?.asset?.url ?? '/404'}
            alt={image?.alt ?? 'value prop image'}
          />
        )}
      </div>
    </div>
  )
}

export default ValueProp
