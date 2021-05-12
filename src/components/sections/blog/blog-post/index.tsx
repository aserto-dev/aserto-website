import Link from 'components/primitives/link'
import Image from 'next/image'

type Writter = {
  name: string
  position: string
  company: string
  image: string
}

type Props = {
  author: Writter
  category: string
  date: string
  description: string
  image: string
  title: string
}

const Post = ({ author, category, date, description, image, title }: Props) => {
  return (
    <section className="relative mx-auto pt-28 mb-52">
      <div className="w-10/12 mx-auto">
        <Link
          href="/blog"
          className="inline-block mb-12 text-aserto-grey-60 font-roboto"
        >
          Back to listing
        </Link>
        <h1 className="text-5xl leading-none tracking-tighter text-white xl:text-6.5xl">
          {title}
        </h1>
        <div className="flex items-start justify-between mt-32 mb-16 pb-14">
          <div className="relative flex items-center w-4/12">
            <Image
              width="80"
              height="80"
              src={author.image}
              alt={author.name}
            />
            <div className="ml-6">
              <p className="text-aserto-grey-60 font-roboto">{author.name}</p>
              <p className="uppercase text-aserto-lochivar-100 font-roboto">
                {author.position}, {author.company}
              </p>
            </div>
            <p className="absolute left-0 w-full uppercase -bottom-14 text-aserto-grey-60 font-roboto">
              {category}
            </p>
          </div>
          <p className="uppercase text-aserto-lochivar-100 font-roboto">
            {date}
          </p>
        </div>
      </div>
      <div>
        <Image width="1216" height="600" src={image} alt={title} />
      </div>
      <div>{description}</div>
    </section>
  )
}

export default Post
