import React from 'react'
import Image from 'components/primitives/image'
import { Author } from 'lib/sanity/generated'
import Link from 'components/primitives/link'

const AuthorCard = ({ author }: { author: Author }) => {
  return (
    <div className="relative flex-col items-enter">
      <h5 className="text-white text-md mb-3 font-roboto ">Author</h5>
      <figure className="flex w-20 overflow-hidden rounded-full">
        <Image
          width="96"
          height="96"
          src={author?.image?.asset?.url ?? ''}
          alt={author?.name + ' avatar'}
          objectFit="cover"
        />
      </figure>

      <Link
        href=""
        className="text-aserto-lochivar-accent-40 hover:underline font-roboto"
      >
        {author?.name}
      </Link>
      <p className="text-aserto-grey-90 font-roboto">{author?.position}</p>
      <Image
        src="/images/about/linkedin_blog.svg"
        className="cursor-pointer"
        layout="native"
      />
    </div>
  )
}

export default AuthorCard
