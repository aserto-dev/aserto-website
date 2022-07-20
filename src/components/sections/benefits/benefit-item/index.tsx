import { SectionBlockFragment } from 'lib/sanity/generated'
import Glow from 'components/sections/common/glow'
import { BlockContent } from 'components/primitives/block-content'

type Props = SectionBlockFragment & { direction: string }

const BenefitItem = ({ title, subtitleRaw, image, direction }: Props) => {
  const divStyle = direction === 'left' ? 'xl:order-2' : ''
  const blockStyle = direction === 'left' ? 'xl:ml-auto' : ''
  const imageStyle = direction === 'left' ? 'xl:order-1' : ''
  return (
    <>
      <h2 className="text-[30px] leading-[38px] font-semibold text-center mt-16 mb-24">
        {title}
      </h2>
      <div className="xl:relative flex flex-col xl:flex-row justify-evenly mb-40 xl:mb-72">
        <Glow direction={direction ?? 'left'} />
        <div
          className={`sm:w-9/12 mx-auto ${divStyle} xl:translate-y-1/3 mb-8`}
        >
          <BlockContent
            className={`text-[20px] xl:w-[500px] text-center xl:text-left mx-4 ${blockStyle}`}
            blocks={subtitleRaw}
            spaced
          />
        </div>
        <div
          className={`xl:relative ${imageStyle} flex flex-row justify-center`}
        >
          <img
            className="w-[700px]"
            src={image?.asset?.url ?? '/404'}
            alt={image?.alt ?? 'value prop image'}
          />
        </div>
      </div>
    </>
  )
}

export default BenefitItem
