import React from 'react'
import Image from 'components/primitives/image'
import { Author } from 'lib/sanity/generated'

const SmallAuthorCardSection = ({ author }: { author: Author }) => {
  return (
    <div className="mt-3 mb-3 items-enter lg:hidden">
      <div className="flex maxsm:flex ">
        <figure className="flex w-8 h-8 overflow-hidden rounded-full">
          <Image
            width="96"
            height="96"
            src={author?.image?.asset?.url ?? ''}
            alt={author?.name + ' avatar'}
            objectFit="cover"
          />
        </figure>
        <div className="flex ml-2">
          <div className="ml-1 mt-1">
            <p className="text-aserto-grey-90 font-roboto mb-1">
              {author?.name}
            </p>
          </div>
          <div className="flex gap-0.5 ml-1">
            {!author?.linkedin && (
              <Image
                width="16"
                height="16"
                src="/images/about/linkedin_blog.svg"
                className="cursor-pointer"
                layout="native"
              />
            )}
            {!author?.twitter && (
              <Image
                width="16"
                height="16"
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

export default SmallAuthorCardSection
