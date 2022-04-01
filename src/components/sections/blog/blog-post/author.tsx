import React from 'react'
import Image from 'components/primitives/image'
import { Author } from 'lib/sanity/generated'

const Authorz = ({ author }: { author: Author }) => {
  return (
    <>
      <figure className="flex w-20 overflow-hidden rounded-full">
        <Image
          width="80"
          height="80"
          src={author?.image?.asset?.url ?? ''}
          alt={author?.name + ' avatar'}
          objectFit="cover"
        />
      </figure>
      <div className="ml-6">
        <p className="text-aserto-grey-60 font-roboto">{author?.name}</p>
        <p className="text-aserto-grey-90 font-roboto">{author?.position}</p>
      </div>
    </>
  )
}

export default Authorz