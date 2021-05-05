import { useFadeInBottom } from 'hooks/use-gsap'
import Image from 'next/image'

type Props = {
  category: string
  description: string
  icon: string
}

const FeatureItem = ({ category, description, icon }: Props) => {
  const [section] = useFadeInBottom()
  return (
    <div
      className="relative p-6 overflow-hidden border border-ds-gray-3 rounded-2xl"
      ref={section}
    >
      <Image src={icon} alt="feature" width={48} height={48} />
      <p className="mt-3 text-lg leading-relaxed text-white sm:mt-6 font-book">
        {description}
      </p>
      <small className="sr-only">{category}</small>
    </div>
  )
}

export default FeatureItem
