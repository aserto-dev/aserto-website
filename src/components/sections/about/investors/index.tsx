import Image from 'components/primitives/image'

// Hooks
import { useFadeInBottom } from 'hooks/use-gsap'
import { AboutPageFragment } from 'lib/sanity/generated'
import clsx from 'clsx'

const Investors = ({ page }: { page: AboutPageFragment }) => {
  const [ref] = useFadeInBottom()

  return (
    <section className="relative mx-auto mb-36 sm:mb-56">
      <span id="investors" className="absolute -top-16" />
      <div
        className="relative z-10 w-10/12 py-16 mx-auto text-center border-t border-b border-aserto-grey-20"
        ref={ref}
      >
        <h2
          className={clsx(
            page.investorsSectionSubtitle
              ? 'mb-2 text-5xl tracking-tight text-aserto-grey-90 sm:mb-10'
              : 'mb-2 text-base font-bold leading-loose tracking-widest uppercase sm:leading-none text-aserto-grey-60 sm:mb-4'
          )}
        >
          {page.investorsSectionTitle}
        </h2>
        {page.investorsSectionSubtitle && (
          <p className="max-w-5xl mx-auto text-lg text-aserto-grey-60 sm:text-1.5xl font-roboto px-12">
            {page.investorsSectionSubtitle}
          </p>
        )}
        <div className="flex flex-wrap items-center justify-center mt-16 space-y-8 sm:space-x-8 sm:space-y-0 sm:justify-between sm:flex-nowrap">
          {page.investors?.map((investor, i) => {
            return (
              <a
                href={investor?.href ?? ''}
                rel="noopener noreferrer"
                target="_blank"
                key={i}
                title={investor?.name ?? ''}
                className="block"
                style={{
                  width:
                    investor?.image?.asset?.metadata?.dimensions?.width ?? 0
                }}
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
