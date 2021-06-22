import { NewsBlock } from 'lib/sanity/generated'
import { formatPostDate } from 'lib/util'
import Image from 'components/primitives/image'
import { BlockContent } from 'components/primitives/block-content'

type Props = {
  data: NewsBlock
}

const NewsItem = ({ data }: Props) => {
  return (
    <a href={`${data.url}`} target='_news'>
      <div className="flex flex-col overflow-hidden border rounded border-aserto-grey-10" style={{ height: '100%' }}>
        <div className="relative flex flex-col justify-between flex-1 px-10 pt-8 bg-aserto-black">
          <Image
            src={data.logo?.asset?.url || '/404'}
            alt={data.logo?.alt || ''}
            width={384}
            height={100}
            objectFit="contain"
            layout="responsive"
          />
        </div>
        <div className="relative flex flex-col justify-between flex-1 px-10 py-8 bg-aserto-black">
          <div className="flex-1">
            {/*
            <p className="text-xl text-aserto-grey-90 sm:text-1.5xl">
              {data.publication}
            </p>
            */}
            <BlockContent
              className="pb-4 mb-8 leading-relaxed tracking-wide sm:mt-5 text-aserto-grey-60 font-roboto"
              blocks={data.titleRaw}
            />
            <p className="absolute left-10 bottom-8 text-aserto-grey-90">
              {formatPostDate(data.publishedOn)}
            </p>
          </div>
        </div>
      </div>
    </a>
  )
}

export default NewsItem
