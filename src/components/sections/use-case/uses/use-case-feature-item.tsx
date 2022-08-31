import { BlockContent } from 'components/primitives/block-content'
import { UseCaseFeatureFragment } from 'lib/sanity/generated'

const UseCaseFeatureItem = ({
  icon,
  titleRaw,
  subTitleRaw
}: UseCaseFeatureFragment) => {
  return (
    <div className="flex flex-row my-20 md:mx-20">
      <img
        className="inline-flex mb-auto self-center w-[74px]"
        src={icon?.asset?.url ?? '/images/homepage/bubble.svg'}
        alt={icon?.alt ?? 'Bubble'}
      />
      <div className="inline-flex flex-col gap-4 px-4 md:px-8">
        <BlockContent
          className="text-aserto-grey-90 text-[24px] lg:text-[30px] leading-8 lg:leading-10"
          blocks={titleRaw}
        />
        <BlockContent
          className="text-aserto-grey-60 text-[20px]"
          blocks={subTitleRaw}
        />
      </div>
    </div>
  )
}

export default UseCaseFeatureItem
