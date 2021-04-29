import Image from 'next/image'

type Props = {
  image: string
  category: string
  title: string
  description: string
  author: {
    name: string
    avatar: string
  }
  date: Date
  minutesToRead: number
}

const BlogPost = ({ image, title, description }: Props) => (
  <div className="flex flex-col overflow-hidden rounded-lg shadow-card">
    <Image
      src={image}
      alt="Blog post cover"
      width={384}
      height={298}
      objectFit="cover"
      layout="responsive"
    />
    <div className="flex flex-col justify-between flex-1 px-8 pb-8 bg-ds-blog pt-7 sm:pt-8 sm:pb-10">
      <div className="flex-1">
        <p className="text-xl font-bold text-white sm:text-2xl">{title}</p>
        <p className="mt-3 sm:mt-5 text-lg sm:text-xl !leading-normal text-ds-pewter font-book">
          {description}
        </p>
      </div>
    </div>
  </div>
)

export default BlogPost
