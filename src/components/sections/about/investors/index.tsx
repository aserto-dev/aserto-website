import Image from 'next/image'

// Hooks
import { useFadeInBottom } from 'hooks/use-gsap'

const Investors = () => {
  const [ref] = useFadeInBottom()

  return (
    <section className="relative mx-auto mb-56">
      <div
        className="relative z-10 w-10/12 py-16 mx-auto text-center border-t border-b border-aserto-grey-20"
        ref={ref}
      >
        <p className="mb-2 text-base font-bold leading-none tracking-widest uppercase text-aserto-grey-60 sm:mb-4">
          Supported by the best seed investors in the industry.
        </p>
        <div className="flex items-center justify-between mt-16">
          <a
            className="transition-opacity duration-200 hover:opacity-60"
            href="https://www.costanoavc.com/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <Image src="/images/about/costanoa.svg" width="509" height="49" />
          </a>
          <a
            className="transition-opacity duration-200 hover:opacity-60"
            href="https://www.heavybit.com/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <Image src="/images/about/heavy.svg" width="291" height="48" />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Investors
