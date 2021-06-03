import { isMobileOnly } from 'react-device-detect'
import Image from 'components/primitives/image'
import clsx from 'clsx'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { PostMetaFragment } from 'lib/sanity/generated'
import { formatPostDate } from 'lib/util'
import { BlockContent } from 'components/primitives/block-content'

// Hooks
import { useFadeInBottom } from 'hooks/use-gsap'

// Styles
import s from './main-post.module.css'

const MainPost = ({ post }: { post: PostMetaFragment }) => {
  const [ref] = useFadeInBottom()
  const [mobile, setMobile] = useState<boolean>()

  useEffect(() => {
    setMobile(isMobileOnly)
  }, [setMobile])

  return (
    <section
      className={clsx('relative mx-auto mb-32 text-white', s.background)}
      ref={ref}
    >
      <Link href={`/blog/${post.slug?.current}`}>
        <a>
          <div className="relative z-10 overflow-hidden border rounded bg-aserto-black border-aserto-grey-10">
            <div>
              <Image
                src={post.mainImage?.asset?.url ?? '/404'}
                width={mobile ? '375' : '1216'}
                height={mobile ? '265' : '381'}
                objectFit="cover"
                layout="responsive"
              />
            </div>
            <div className="p-9">
              <h3 className="text-2xl leading-none font-roboto mb-7">
                {post.title}
              </h3>
              <BlockContent
                className="max-w-2xl mb-8 text-base leading-snug tracking-wide text-aserto-grey-60"
                blocks={post.excerptRaw}
              />
              <time className="text-base tracking-wide">
                {formatPostDate(post.publishedAt)}
              </time>
            </div>
          </div>
        </a>
      </Link>
    </section>
  )
}

export default MainPost
