import clsx from 'clsx'
import Image from 'next/image'

type Props = {
  category: string
  description: string
  icon: string
  display?: boolean
}

const FeatureItem = ({
  category,
  description,
  icon,
  display = true
}: Props) => {
  return (
    <div
      className={clsx(
        'relative p-6 overflow-hidden border border-ds-gray-3 rounded-2xl item',
        category
      )}
      style={{ display: `${!display && 'none'}` }}
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
