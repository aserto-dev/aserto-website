import Image from 'next/image'
import clsx from 'clsx'

// Hooks
import { useFadeInBottom } from 'hooks/use-gsap'

// Styles
import s from './main-post.module.css'

const MainPost = () => {
  const [ref] = useFadeInBottom()

  return (
    <section
      className={clsx('relative mx-auto mb-32 text-white', s.background)}
      ref={ref}
    >
      <div className="relative z-10 border bg-aserto-black rounded-2xl border-aserto-grey-10">
        <div>
          <Image
            src="/images/blog/main-blog.png"
            width="1216"
            height="381"
            layout="responsive"
          />
        </div>
        <div className="p-9">
          <h3 className="text-2xl leading-none font-roboto mb-7">
            OAuth2 Scopes are NOT Permissions
          </h3>
          <p className="max-w-2xl mb-8 text-base leading-snug tracking-wide text-aserto-grey-60">
            OAuth2 scopes were never intended to be an authorization mechanism,
            and indeed are a really bad idea when used as a substitute for a
            real authorization architecture.
          </p>
          <time className="text-base tracking-wide">May 3rd, 2021</time>
        </div>
      </div>
    </section>
  )
}

export default MainPost
