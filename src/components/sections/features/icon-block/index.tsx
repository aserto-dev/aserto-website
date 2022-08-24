import { BlockContent } from 'components/primitives/block-content'
import Container from 'components/sections/homepage/container'
import { FeatureItemFragment, FeaturesPageFragment } from 'lib/sanity/generated'

type IconBlockProp = {
  featureIcons: FeatureItemFragment[]
  iconBlockTitle: FeaturesPageFragment['iconBlockTitleRaw']
}

const IconBlock = ({ featureIcons, iconBlockTitle }: IconBlockProp) => {
  return (
    <Container className="bg-aserto-grey-10 text-aserto-grey-90 py-20 px-8">
      {!!iconBlockTitle && (
        <BlockContent
          className="text-center w-full sm:w-3/4 mx-auto text-[24px] mb-16 lg:mt-12 lg:mb-24 lg:text-[30px] leading-8 lg:leading-10"
          blocks={iconBlockTitle}
        />
      )}
      <div className="grid sm:grid-cols-2 gap-20">
        {featureIcons.map((f, i) => (
          <div key={i}>
            <img
              className="h-[70px] my-4 mx-auto"
              src={f.icon?.asset?.url ?? '/404'}
              alt={f.icon?.alt ?? 'icon'}
            />
            <p className="text-center w-full lg:w-3/4 mx-auto text-[18px] lg:text-[20px]">
              {f.title}
            </p>
          </div>
        ))}
      </div>
    </Container>
  )
}

export default IconBlock
