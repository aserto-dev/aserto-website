import { useFadeInBottom } from 'hooks/use-gsap'
import clsx from 'clsx'
import Image from 'components/primitives/image'
import { SectionBlockFragment } from 'lib/sanity/generated'
import { BlockContent } from 'components/primitives/block-content'

type Props = {
  data: SectionBlockFragment
  isInverted?: boolean
}

const SolutionItem = ({ isInverted, data }: Props) => {
  const [section] = useFadeInBottom()

  return (
    <div className="relative mb-20 sm:mb-16">
      <div
        ref={section}
        className="flex flex-col-reverse items-center lg:mx-auto lg:max-w-container lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-8"
      >
        <div className="max-w-xl px-4 pb-0 mx-auto sm:px-6 lg:max-w-none lg:mx-0 lg:px-0 lg:pr-10 sm:pb-12">
          <h2 className="mb-2 text-aserto-grey-90 text-4.5xl sm:mb-3 leading-tight">
            {data.title}
          </h2>
          <BlockContent
            className="mt-3 text-lg leading-relaxed text-aserto-grey-60 sm:mt-6 font-roboto"
            blocks={data.subtitleRaw}
          />
        </div>

        <div
          className={clsx('mb-8 w-full sm:mt-16 lg:mb-0 lg:mt-0', {
            'col-start-1': isInverted
          })}
        >
          <div className="relative w-full">
            <div
              className="mx-auto overflow-hidden rounded"
              style={{
                maxWidth: data.image?.asset?.metadata?.dimensions?.width ?? 488,
                width: '100%'
              }}
            >
              <Image
                src={data.image?.asset?.url ?? '/404'}
                alt={data.image?.alt ?? ''}
                width={data.image?.asset?.metadata?.dimensions?.width ?? 488}
                height={data.image?.asset?.metadata?.dimensions?.height ?? 400}
                objectFit="cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SolutionItem
