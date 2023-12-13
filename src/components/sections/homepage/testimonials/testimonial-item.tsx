import { BlockContent } from 'components/primitives/block-content'
import Image from 'components/primitives/image'
type Props = {
  companyInfo: string
  companyImageSrc: string
  profileImageSrc: string
  profileName: string
  quote: React.ReactNode
}

const TestimonialItem = ({
  companyInfo,
  companyImageSrc,
  profileImageSrc,
  profileName,
  quote
}: Props) => {
  return (
    <div
      key={profileName}
      className={`bg-aserto-grey-10 text-aserto-grey-90 border-2 border-aserto-grey-30 rounded-[6px] h-full`}
    >
      <div className="relative w-full pb-[50%]">
        <div className="absolute w-full">
          <Image
            className="w-1/2 innline-block object-cover"
            layout="native"
            src={profileImageSrc ?? ''}
          />
          <Image
            className="w-1/2 inline-block object-cover"
            layout="native"
            src={companyImageSrc ?? ''}
          />
        </div>
      </div>
      <div className="p-[15px] text-[18px]">
        <h4 className="font-bold text-[22px]">{profileName}</h4>
        <p>{companyInfo}</p>
        <BlockContent className="mt-10" blocks={quote} />
      </div>
    </div>
  )
}

export default TestimonialItem
