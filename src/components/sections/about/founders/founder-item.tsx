import clsx from 'clsx'
import Image from 'components/primitives/image'

// Primitives
import Link from 'components/primitives/link'

// Icons
import LinkedinIcon from 'icons/linkedin-bio.svg'

// Styles
import s from './founder.module.css'

type Props = {
  image: string
  linkedin: string
  name: string
  position: string
}

const FounderItem = ({ image, linkedin, name, position }: Props) => {
  return (
    <div>
      <Link href={linkedin}>
        <div
          className={clsx(
            'overflow-hidden border rounded border-aserto-grey-10 bg-aserto-black py-8 sm:pt-24 sm:pb-20',
            s.background
          )}
        >
          <div className="relative z-10 flex flex-col justify-between flex-1 px-8 my-2 sm:px-28">
            <div className="w-16 h-16 mb-10 sm:w-32 sm:h-32">
              <Image
                alt={name}
                height={128}
                objectFit="cover"
                src={image}
                width={128}
              />
            </div>
            <h3 className="mb-4 text-5xl tracking-tight text-aserto-grey-90 sm:text-6xl">
              {name}
            </h3>
            <p className="text-xl text-aserto-grey-90 sm:text-1.5xl">
              {position}
            </p>
            <p className="flex items-center mt-10 font-medium text-white uppercase">
              <LinkedinIcon className="mr-4" />
              Linkedin
            </p>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default FounderItem
