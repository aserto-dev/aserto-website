import React from 'react'
import Image from 'components/primitives/image'
import { Author } from 'lib/sanity/generated'

const AuthorCard = ({ author }: { author: Author }) => {
  return (
    <div className="relative flex-col items-enter">
      <h5 className="text-white text-md mb-3 font-roboto ">Author</h5>
      <div className="maxsm:flex ">
        <figure className="flex w-24 h-24 overflow-hidden rounded-full">
          <Image
            width="96"
            height="96"
            src={author?.image?.asset?.url ?? ''}
            alt={author?.name + ' avatar'}
            objectFit="cover"
          />
        </figure>
        <div className="flex flex-col ml-2">
          <div className="ml-1 mt-3">
            <p className="text-aserto-grey-90 font-roboto">{author?.name}</p>
            <p className="text-aserto-grey-90 font-roboto">
              {author?.position}
            </p>
          </div>
          <div className="flex gap-0.5 maxsm: ml-1">
            <Image
              src="/images/about/linkedin_blog.svg"
              className="cursor-pointer"
              layout="native"
            />
            <Image
              src="/images/about/twitter.svg"
              className="cursor-pointer"
              layout="native"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AuthorCard
