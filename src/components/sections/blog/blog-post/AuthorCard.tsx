import React from 'react'
import Image from 'components/primitives/image'
import { Author } from 'lib/sanity/generated'

const AuthorCard = ({ author }: { author: Author }) => {
  return (
    <div className="relative flex-col items-enter">
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
        <div className="flex flex-col">
          <div className="mt-3">
            <p className="text-aserto-grey-90 font-roboto">{author?.name}</p>
            <p className="text-aserto-grey-90 font-roboto">
              {author?.position}
            </p>
          </div>
          <div className="flex gap-1">
            {!author?.linkedin && (
              <Image
                src="/images/about/linkedin_blog.svg"
                className="cursor-pointer"
                layout="native"
              />
            )}
            {!author?.twitter && (
              <Image
                src="/images/about/twitter.svg"
                className="cursor-pointer"
                layout="native"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AuthorCard
