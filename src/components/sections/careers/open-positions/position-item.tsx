import Image from 'next/image'

// Primitives
import Link from 'components/primitives/link'
import { JobPostingMetaFragment } from 'lib/sanity/generated'
import { BlockContent } from 'components/primitives/block-content'

type Props = {
  data: JobPostingMetaFragment
}

const PositionItem = ({ data }: Props) => (
  <div className="flex flex-col justify-between p-6 overflow-hidden border rounded border-aserto-grey-10 h-96">
    <div>
      <Image src={data.icon?.asset?.url ?? ''} width="48" height="48" />
      <p className="my-6 text-2xl font-medium text-aserto-grey-90 font-roboto">
        {data.title}
      </p>
      <BlockContent
        blocks={data.descriptionRaw}
        className="text-aserto-grey-60 font-roboto"
      />
    </div>
    <div>
      <p className="py-6 leading-relaxed text-aserto-grey-60 font-roboto">
        {data.team}
      </p>
      <div className="border-t border-aserto-grey-20">
        <Link
          href={`/careers/${data.slug?.current}`}
          className="flex items-center pt-6 font-medium uppercase font-roboto text-aserto-lochivar-accent-40"
        >
          VIEW POSITION
        </Link>
      </div>
    </div>
  </div>
)

export default PositionItem
