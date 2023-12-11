import { SectionBlockFragment } from 'lib/sanity/generated'
import Glow from 'components/sections/common/glow'
import { BlockContent } from 'components/primitives/block-content'
import CodeBrowser from 'components/sections/common/code-browser'
import AsertoInAction from 'components/sections/homepage/aserto-in-action'
import PolicyBrowser from 'components/sections/common/policy-browser'

type Props = SectionBlockFragment & { direction: string }

const BenefitItem = ({
  title,
  subtitleRaw,
  image,
  direction,
  element,
  glow
}: Props) => {
  const dirStyle = direction === 'right' ? 'xl:order-2' : ''
  return (
    <div className="relative flex flex-col xl:flex-row justify-evenly mb-40 xl:mb-72">
      {!!glow && <Glow direction={direction ?? 'left'} />}
      <div
        className={`text-center xl:text-left text-[20px] ${dirStyle} flex items-center`}
      >
        <div className="sm:w-9/12 xl:w-[430px] mx-auto">
          <h2 className="text-[24px] lg:text-[30px] leading-8 lg:leading-10">
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
        {element === 'PolicyBrowser' && <PolicyBrowser />}
        {element === 'Animation' && (
          <div className="hidden md:block md:w-[700px]">
            <AsertoInAction />
          </div>
        )}
        {image?.asset?.url && (
          <picture>
            <img
              className="object-scale-down mx-auto"
              src={image?.asset?.url ?? '/404'}
              alt={image?.alt ?? 'value prop image'}
            />
          </picture>
        )}
      </div>
    </div>
  )
}

export default BenefitItem
