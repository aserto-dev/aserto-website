import Image from 'next/image'

// Hooks
import { useFadeInBottom } from 'hooks/use-gsap'

// Icons
import IconQuote from 'icons/quote.svg'

type Props = {
  companyName: string
  profileimageSrc: string
  profileName: string
  quote: string
}

const TestimonialItem = ({
  companyName,
  profileimageSrc,
  profileName,
  quote
}: Props) => {
  const [section] = useFadeInBottom()
  return (
    <div className="relative">
      <div className="absolute z-0 -top-20 left-32">
        <IconQuote />
      </div>
      <div
        className="relative z-10 w-8/12 p-10 mx-auto border bg-aserto-black border-aserto-grey-10 rounded-2xl"
        ref={section}
      >
        <p className="mb-12 text-2xl leading-relaxed text-white font-roboto">
          {quote}
        </p>
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center">
            <Image
              src={profileimageSrc}
              alt={profileName}
              width={80}
              height={80}
            />
            <p className="ml-4 font-bold text-aserto-grey-90">
              {profileName} <br />{' '}
              <span className="font-normal text-aserto-grey-60">
                {companyName}
              </span>{' '}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TestimonialItem
