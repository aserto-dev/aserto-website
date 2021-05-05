import { useFadeInBottom } from 'hooks/use-gsap'
import clsx from 'clsx'
import Image from 'next/image'

type Props = {
  tag: string
  title: string
  description: string
  imageSrc?: string
  imageAlt?: string
  isInverted?: boolean
}

const SolutionItem = ({
  description,
  imageAlt,
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
        className="flex flex-col-reverse items-center lg:mx-auto lg:max-w-container lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-8"
      >
        <div className="max-w-xl px-4 pb-0 mx-auto sm:px-6 lg:max-w-none lg:mx-0 lg:px-0 lg:pr-10 sm:pb-12">
          <h2 className="mb-2 text-3xl text-white sm:text-4.5xl sm:mb-3 leading-none">
            {title}
          </h2>
          <p className="text-sm leading-none text-ds-gray font-book sm:text-1.5xl">
            {tag}
          </p>
          <p className="mt-3 text-lg leading-relaxed text-white sm:mt-6 font-book">
            {description}
          </p>
        </div>

        <div
          className={clsx('mt-0 sm:mt-16 lg:mt-0', {
            'col-start-1': isInverted
          })}
        >
          <div className="relative w-full">
            <div className="overflow-hidden rounded-xl">
              {imageSrc && (
                <Image src={imageSrc} alt={imageAlt} width={488} height={511} />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SolutionItem
