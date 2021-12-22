import { CaseStudyMetaFragment } from 'lib/sanity/generated'
import { formatPostDate } from 'lib/util'
import Image from 'components/primitives/image'
import Link from 'next/link'
import { BlockContent } from 'components/primitives/block-content'

type Props = {
  data: CaseStudyMetaFragment
}

const CaseStudyItem = ({ data }: Props) => {
  return (
    <Link href={`/casestudies/${data.slug?.current}`}>
      <a className="flex flex-col overflow-hidden border rounded border-aserto-grey-10">
        <div style={{ background: "white", paddingLeft: 20, paddingRight: 20 }}>
          <Image
            src={data.logo?.asset?.url || '/404'}
            alt="Company logo"
            width={384}
            height={150}
            objectFit="contain"
            layout="responsive"
          />
        </div>
        <div className="relative flex flex-col justify-between flex-1 px-10 py-8 bg-aserto-black">
          <div className="flex-1">
            <p className="text-xl text-aserto-grey-90 sm:text-1.5xl">
              {data.company}
            </p>
            <BlockContent
              className="pb-4 mt-3 mb-8 leading-relaxed tracking-wide sm:mt-5 text-aserto-grey-60 font-roboto"
              blocks={data.titleRaw}
            />
            <p className="absolute left-10 bottom-8 text-aserto-grey-90">
              {formatPostDate(data._createdAt)}
            </p>
          </div>
        </div>
      </a>
    </Link>
  )
}

export default CaseStudyItem
