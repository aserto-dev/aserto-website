import Image from 'components/primitives/image'

type Props = {
  text: string
  image: string
}

const IntroItem = ({ text, image }: Props) => (
  <div className="flex items-center p-4 border-b border-aserto-grey-20 flex-wrap justify-center md:flex-nowrap lg:flex-nowrap lg:justify-start md:justify-start">
    <Image
      layout="native"
      src={image ?? '/404'}
      alt={text}
      width={40}
      height={40}
    />
    <span className="text-lg mt-2 font-roboto text-aserto-grey-60 lg:ml-4 md:ml-4 lg:mt-0 md:mt-0">
      {text}
    </span>
  </div>
)

export default IntroItem
