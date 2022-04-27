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
      // className={`bg-aserto-grey-5 border-aserto-grey-20 flex-1 min-h-96 p-4 flex flex-col items-center rounded border text-aserto-grey-90 overflow-hidden`}
      className={`bg-aserto-grey-10 text-aserto-grey-90 border-2 border-aserto-grey-30 rounded-[6px] sm:w-4/12 h-full sm:h-auto`}
    >
      <div>
        <Image
          className="w-1/2 inline-block"
          layout="native"
          height={200}
          src={profileImageSrc ?? ''}
        />
        <Image
          className="w-1/2 inline-block"
          layout="native"
          height={200}
          src={companyImageSrc ?? ''}
        />
      </div>
      <div className="p-[30px] text-[18px]">
        <h4 className="font-bold text-[22px]">{profileName}</h4>
        <p>{companyInfo}</p>
        <p className="my-[30px]">{quote}</p>
        {/* <BlockContent
          className="mt-10 px-2"
          blocks={quote}
        /> */}
      </div>
    </div>
  )
}

export default TestimonialItem
