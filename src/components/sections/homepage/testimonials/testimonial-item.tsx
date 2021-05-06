import { useFadeInBottom } from 'hooks/use-gsap'
import Image from 'next/image'

type Props = {
  companyImageSrc: string
  companyName: string
  profileimageSrc: string
  profileName: string
  quote: string
}

const TestimonialItem = ({
  companyImageSrc,
  companyName,
  profileimageSrc,
  profileName,
  quote
}: Props) => {
  const [section] = useFadeInBottom()
  return (
    <div
      className="relative w-4/12 p-10 mx-auto overflow-hidden border border-ds-gray-3 rounded-2xl"
      ref={section}
    >
      <p className="mb-12 text-2xl leading-relaxed text-white font-book">
        {quote}
      </p>
      <div className="flex items-center justify-between w-full">
        <div className="flex">
          <Image
            src={profileimageSrc}
            alt={profileName}
            width={48}
            height={48}
          />
          <p className="ml-4 text-white">
            {profileName} <br /> <span>{companyName}</span>{' '}
          </p>
        </div>
        <Image src={companyImageSrc} alt={companyName} width={24} height={24} />
      </div>
    </div>
  )
}

export default TestimonialItem
