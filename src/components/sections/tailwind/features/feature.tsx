import clsx from 'clsx'
import { useFadeInBottom } from 'hooks/use-gsap'
import Image from 'next/image'

type Props = {
  animation?: React.ReactNode
  tag: string
  title: string
  description: string
  imageSrc?: string
  imageAlt?: string
  imageCaption: React.ReactNode
  isInverted?: boolean
}

const Feature = ({
  animation,
  description,
  imageAlt,
  imageCaption,
  imageSrc,
  isInverted,
  tag,
  title
}: Props) => {
  const [section] = useFadeInBottom()
  return (
    <div className="relative">
      <div
        ref={section}
        className="flex flex-col-reverse items-center lg:mx-auto lg:max-w-container lg:px-10 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24"
      >
        <div className="max-w-xl px-4 pb-0 mx-auto sm:px-6 lg:max-w-none lg:mx-0 lg:px-0 lg:pr-10 sm:pb-12">
          <p className="text-sm font-black leading-tight uppercase tracking-h4 text-ds-endgame">
            {tag}
          </p>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-white sm:text-4xl sm:mt-3">
            {title}
          </h2>
          <p className="mt-3 text-lg leading-normal text-white sm:text-xl sm:mt-6 font-book">
            {description}
          </p>
        </div>

        <div
          className={clsx('mt-0 sm:mt-16 lg:mt-0', {
            'col-start-1': isInverted
          })}
        >
          <div className="relative lg:h-full">
            <div className="flex flex-col items-center mb-12 sm:px-0 sm:mb-0">
              {animation ? (
                <div className="w-full rounded-xl sm:w-auto">{animation}</div>
              ) : (
                <div className="flex overflow-hidden rounded-xl">
                  {imageSrc && (
                    <Image
                      src={imageSrc}
                      alt={imageAlt}
                      width={511}
                      height={425}
                    />
                  )}
                </div>
              )}
              {imageCaption && (
                <div className="text-white sm:mt-8">{imageCaption}</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Feature
