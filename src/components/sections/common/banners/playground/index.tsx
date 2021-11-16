import Link from 'components/primitives/link'
import React from 'react'

const isClient = typeof window !== 'undefined'

const storageKey = 'aserto-playground-seen'

export const PlaygroundSeen = () => {
  isClient && localStorage.setItem(storageKey, 'true')
}

const PlaygroundBanner = () => {
  if (isClient && !localStorage.getItem(storageKey)) {
    return (
      <div
        className="bg-aserto-lochivar-80 flex flex-col justify-center text-center text-white"
        style={{ height: '36px' }}
      >
        <span className="align-middle">
          Want a free taste of how Aserto works?{' '}
          <Link className="font-bold underline" href="/playground">
            Give our Playground a spin.
          </Link>
        </span>
      </div>
    )
  }

  return null
}

export default PlaygroundBanner
