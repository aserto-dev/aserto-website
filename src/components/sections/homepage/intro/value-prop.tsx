import { ValuePropFragment } from 'lib/sanity/generated'
import CodeBrowser from './code-browser.tsx'
import AsertoInAction from 'components/sections/homepage/aserto-in-action'

import Glow from './glow'
import { BlockContent } from 'components/primitives/block-content'
import { useFadeInBottom } from 'hooks/use-gsap'

type ValuePropType = ValuePropFragment & { direction: string }

const ValueProp = ({
  title,
  subtitleRaw,
  image,
  direction,
  element,
  glow
}: ValuePropType) => {
  const [ref] = useFadeInBottom()

  const dirStyle = direction === 'left' ? 'xl:order-2' : ''
  return (
    <div ref={ref}>
      <div className="relative flex flex-col xl:flex-row justify-evenly mb-40 xl:mb-72">
        {!!glow && <Glow direction={direction ?? 'left'} />}
        <div
          className={`text-center xl:text-left text-[20px] ${dirStyle} flex items-center`}
        >
          <div className="sm:w-9/12 xl:w-[430px] mx-auto">
            <h2 className="text-[24px] lg:text-[30px] font-semibold leading-8 lg:leading-10">
              {title}
            </h2>
            <BlockContent
              className={`text-[18px] lg:text-[20px] xl:w-[430px] text-left xl:text-left mt-8`}
              blocks={subtitleRaw}
              spaced
            />
          </div>
        </div>
        <div className="relative md:flex md:flex-row md:justify-center">
          {element === 'CodeBrowser' && <CodeBrowser />}
          {element === 'Animation' && (
            <div className="hidden md:block md:w-[700px]">
              <AsertoInAction />
            </div>
          )}
          {image?.asset?.url && (
            <img
              className="object-scale-down"
              src={image?.asset?.url ?? '/404'}
              alt={image?.alt ?? 'value prop image'}
            />
          )}
        </div>
      </div>
    </div>
  )
}

export default ValueProp
