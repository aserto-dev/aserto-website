import Image from 'components/primitives/image'
import { BlockContent } from 'components/primitives/block-content'
import s from './case-study.module.scss'

type Props = {
  authorName: string
  authorImageSrc: string
  authorTitle: string
  quote: React.ReactNode
}

const QuoteItem = ({
  authorName,
  authorImageSrc,
  authorTitle,
  quote
}: Props) => {
  return (
    <div
      className={`bg-aserto-grey-5 border-aserto-grey-20 flex-1 min-h-96 p-4 flex flex-col items-center rounded border text-aserto-grey-90 ${s['testimonial-card']}`}
    >
      <div className="flex">
        <div className="w-4/12 my-5">
          <div className="flex justify-center align-center">
            <Image
              className="rounded-full border-2 border-aserto-lochivar-accent-40"
              layout="native"
              width={150}
              height={150}
              src={authorImageSrc}
            />
          </div>
          <div className="text-center text-aserto-grey-90 font-bold text-lg mt-4">
            {authorName}
          </div>
          <div className="text-center">{authorTitle}</div>
        </div>

        <BlockContent className="w-8/12 my-5 px-3 text-1.5xl italic" blocks={quote} />
      </div>
    </div>
  )
}

export default QuoteItem
