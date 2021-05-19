import { useFadeInBottom } from 'hooks/use-gsap'
import { motion, useMotionValue, useTransform } from 'framer-motion'
import clsx from 'clsx'
import Image from 'next/image'
import { useCallback } from 'react'
import { SectionBlockFragment } from 'lib/sanity/generated'
import { BlockContent } from 'lib/sanity'

type Props = {
  data: SectionBlockFragment
  isInverted?: boolean
}

const SolutionItem = ({ isInverted, data }: Props) => {
  const [section] = useFadeInBottom()
  const x = useMotionValue(400)
  const y = useMotionValue(400)

  const rotateX = useTransform(y, [0, 400], [3, -3])
  const rotateY = useTransform(x, [0, 400], [-3, 3])

  const moveX = useTransform(x, [-800, 800], [8, -8])
  const moveY = useTransform(y, [-800, 800], [8, -8])

  const handleMouse = useCallback(
    (event) => {
      const rect = event.currentTarget.getBoundingClientRect()

      x.set(event.clientX - rect.left)
      y.set(event.clientY - rect.top)
    },
    [x, y]
  )

  return (
    <div className="relative mb-20 sm:mb-0">
      <div
        ref={section}
        className="flex flex-col-reverse items-center lg:mx-auto lg:max-w-container lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-8"
      >
        <div className="max-w-xl px-4 pb-0 mx-auto sm:px-6 lg:max-w-none lg:mx-0 lg:px-0 lg:pr-10 sm:pb-12">
          <h2 className="mb-2 text-aserto-grey-90 text-4.5xl sm:mb-3 leading-tight">
            {data.title}
          </h2>
          <div className="mt-3 text-lg leading-relaxed text-aserto-grey-60 sm:mt-6 font-roboto">
            <BlockContent blocks={data.subtitleRaw} />
          </div>
        </div>

        <div
          className={clsx('mt-0 sm:mt-16 lg:mt-0', {
            'col-start-1': isInverted
          })}
        >
          <motion.div
            style={{ perspective: 2000 }}
            onMouseMove={handleMouse}
            className="relative w-full"
          >
            <motion.div
              style={{
                rotateX: rotateX,
                rotateY: rotateY,
                x: moveX,
                y: moveY
              }}
              className="overflow-hidden rounded"
            >
              <Image
                src={data.image?.asset?.url ?? '/404'}
                alt={data.image?.alt ?? ''}
                width={488}
                height={511}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default SolutionItem
