import Image from 'components/primitives/image'

type Props = {
  title: string
  description: React.ReactNode
  icon: string
}

const FeatureItem = ({ description, icon, title }: Props) => {
  return (
    <div className="relative text-center lg:text-left">
      <div className="w-12 mx-auto lg:mx-0">
        <Image src={icon} alt="value" width={48} height={48} />
      </div>
      <h5 className="mt-2 mb-5 text-1.5xl tracking-tight text-aserto-grey-90">
        {title}
      </h5>
      <div className="mt-3 text-lg leading-relaxed text-left text-aserto-grey-60 sm:mt-6 font-roboto">
        {description}
      </div>
    </div>
  )
}

export default FeatureItem
