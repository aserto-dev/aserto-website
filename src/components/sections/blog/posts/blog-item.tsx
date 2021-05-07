import Image from 'next/image'

type Props = {
  date: string
  image: string
  title: string
  description: string
}

const BlogPost = ({ date, image, title, description }: Props) => (
  <div className="flex flex-col overflow-hidden border rounded border-aserto-grey-10">
    <Image
      src={image}
      alt="Blog post cover"
      width={384}
      height={298}
      objectFit="cover"
      layout="responsive"
    />
    <div className="relative flex flex-col justify-between flex-1 px-10 py-8 bg-aserto-black">
      <div className="flex-1">
        <p className="text-xl text-aserto-grey-90 sm:text-1.5xl">{title}</p>
        <p className="pb-4 mt-3 mb-8 leading-relaxed tracking-wide sm:mt-5 text-aserto-grey-60 font-roboto">
          {description}
        </p>
        <p className="absolute left-10 bottom-8 text-aserto-grey-90">{date}</p>
      </div>
    </div>
  </div>
)

export default BlogPost
