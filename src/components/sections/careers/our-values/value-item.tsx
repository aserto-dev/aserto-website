import Image from 'next/image'

type Props = {
  title: string
  description: React.ReactNode
  icon: string
}

const FeatureItem = ({ description, icon, title }: Props) => {
  return (
    <div className="relative h-64 text-center sm:text-left sm:h-auto">
      <Image src={icon} alt="value" width={48} height={48} />
      <h5 className="mt-8 mb-5 text-1.5xl tracking-tight text-aserto-grey-90">
        {title}
      </h5>
      <div className="mt-3 text-lg leading-relaxed text-aserto-grey-60 sm:mt-6 font-roboto">
        {description}
      </div>
    </div>
  )
}

export default FeatureItem
