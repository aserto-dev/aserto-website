import Image from 'next/image'

// Hooks
import { useFadeInBottom } from 'hooks/use-gsap'
import { AboutPageFragment } from 'lib/sanity/generated'

const Investors = ({ page }: { page: AboutPageFragment }) => {
  const [ref] = useFadeInBottom()

  return (
    <section className="relative mx-auto mb-36 sm:mb-56">
      <div
        className="relative z-10 w-10/12 py-16 mx-auto text-center border-t border-b border-aserto-grey-20"
        ref={ref}
      >
        <p className="mb-2 text-base font-bold leading-loose tracking-widest uppercase sm:leading-none text-aserto-grey-60 sm:mb-4">
          {page.investorsSectionTitle}
        </p>
        <div className="flex flex-wrap items-center justify-center mt-16 space-y-8 sm:space-y-0 sm:justify-between sm:flex-nowrap">
          {page.investors?.map((investor, i) => {
            return (
              <a
                href={investor?.href ?? ''}
                rel="noopener noreferrer"
                target="_blank"
                key={i}
                title={investor?.name ?? ''}
              >
                <Image
                  src={investor?.image?.asset?.url ?? ''}
                  width={
                    investor?.image?.asset?.metadata?.dimensions?.width ?? 0
                  }
                  height={
                    investor?.image?.asset?.metadata?.dimensions?.height ?? 0
                  }
                  alt={investor?.image?.alt ?? ''}
                />
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Investors
