import Image from 'next/image'

type Props = {
  title: string
  icon: string
}

const BenefitItem = ({ icon, title }: Props) => {
  return (
    <div className="relative text-center h-72 sm:h-auto">
      <Image src={icon} alt="benefit" width={48} height={48} />
      <h5 className="mt-8 mb-5 text-1.5xl tracking-tight text-aserto-grey-90">
        {title}
      </h5>
    </div>
  )
}

export default BenefitItem
