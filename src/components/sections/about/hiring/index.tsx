import clsx from 'clsx'
import Link from 'components/primitives/link'
import { useFadeInBottom } from 'hooks/use-gsap'

// Icons
import IconArrow from 'icons/arrow.svg'

// Styles
import s from './hiring.module.css'

const Hiring = () => {
  const [ref] = useFadeInBottom()

  return (
    <section
      className={clsx(
        'relative mx-auto h-screen flex items-center justify-center',
        s.background
      )}
    >
      <div className="relative z-10 pt-3 text-center" ref={ref}>
        <h2 className="text-5xl leading-none tracking-tight text-aserto-grey-90 md:text-6xl xl:text-5xl">
          We’re Hiring!
        </h2>
        <Link
          href="/careers#open-positions"
          className="flex items-center justify-center w-full mx-auto mt-6 text-base md:leading-tight text-aserto-grey-60 sm:text-lg md:mt-10 md:text-2xl font-roboto"
        >
          Check out our open positions.
          <IconArrow className="ml-4 -mt-1" />
        </Link>
      </div>
    </section>
  )
}

export default Hiring
