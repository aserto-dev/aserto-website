import { useFadeInBottom } from 'hooks/use-gsap'
import Image from 'next/image'

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
            href="https://www.costanoavc.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src="/images/about/costanoa.svg" width="509" height="49" />
          </a>
          <a
            href="https://www.heavybit.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src="/images/about/heavy.svg" width="291" height="48" />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Investors
