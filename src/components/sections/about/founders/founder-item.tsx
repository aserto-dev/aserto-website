import { motion, useMotionValue, useTransform } from 'framer-motion'
import { useCallback } from 'react'
import clsx from 'clsx'
import Image from 'next/image'

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
  const x = useMotionValue(600)
  const y = useMotionValue(600)

  const rotateX = useTransform(y, [0, 600], [3, -3])
  const rotateY = useTransform(x, [0, 600], [-3, 3])

  const moveX = useTransform(x, [-800, 800], [8, -8])
  const moveY = useTransform(y, [-800, 800], [8, -8])

  const handleMouse = useCallback((event) => {
    const rect = event.currentTarget.getBoundingClientRect()

    x.set(event.clientX - rect.left)
    y.set(event.clientY - rect.top)
  }, [])

  return (
    <motion.div style={{ perspective: 2000 }} onMouseMove={handleMouse}>
      <Link href={linkedin}>
        <motion.div
          style={{
            rotateX: rotateX,
            rotateY: rotateY,
            x: moveX,
            y: moveY
          }}
          className={clsx(
            'overflow-hidden border rounded border-aserto-grey-10 bg-aserto-black py-8 sm:pt-24 sm:pb-20',
            s.background
          )}
        >
          <motion.div className="relative z-10 flex flex-col justify-between flex-1 px-8 my-2 sm:px-28">
            <div className="w-16 h-16 mb-10 sm:w-32 sm:h-32">
              <Image
                alt={name}
                height={128}
                layout="responsive"
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
            <Link
              href={linkedin}
              className="flex items-center mt-10 font-medium text-white uppercase"
            >
              <LinkedinIcon className="mr-4" />
              Linkedin
            </Link>
          </motion.div>
        </motion.div>
      </Link>
    </motion.div>
  )
}

export default FounderItem
