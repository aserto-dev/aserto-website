import Image from 'next/image'
import { useFadeInBottom } from 'hooks/use-gsap'

const TestimonialsSection = () => {
  const [section] = useFadeInBottom()
  return (
    <section className="py-12 overflow-hidden bg-ds-background md:py-20 lg:py-24">
      <div
        ref={section}
        className="relative max-w-3xl px-4 mx-auto sm:px-6 lg:px-8"
      >
        <div className="relative">
          <svg width="38" height="57" viewBox="0 0 38 57" className="mx-auto">
            <path
              fill="#1abcfe"
              d="M19 28.5a9.5 9.5 0 1119 0 9.5 9.5 0 01-19 0z"
            />
            <path
              fill="#0acf83"
              d="M0 47.5A9.5 9.5 0 019.5 38H19v9.5a9.5 9.5 0 11-19 0z"
            />
            <path fill="#ff7262" d="M19 0v19h9.5a9.5 9.5 0 100-19H19z" />
            <path
              fill="#f24e1e"
              d="M0 9.5A9.5 9.5 0 009.5 19H19V0H9.5A9.5 9.5 0 000 9.5z"
            />
            <path
              fill="#a259ff"
              d="M0 28.5A9.5 9.5 0 009.5 38H19V19H9.5A9.5 9.5 0 000 28.5z"
            />
          </svg>
          <blockquote className="mt-10">
            <div className="px-4 sm:px-0 mx-auto text-xl sm:text-2.5xl leading-normal sm:leading-9 text-white font-book text-center">
              <p>
                “Traditional software sales is dying. The modern sales motion
                looks at what users are doing in a free plan or trial and then
                applies sales pressure to the highest value accounts that are
                most likely to convert.”
              </p>
            </div>
            <footer className="mt-8">
              <div className="text-center md:flex md:items-center md:justify-center">
                <div className="inline-flex border-4 border-white rounded-full md:flex-shrink-0 shadow-author">
                  <Image
                    className="block w-10 h-10 mx-auto rounded-full"
                    src="/images/kyle-parrish.jpg"
                    alt="Kyle Parrish"
                    width={40}
                    height={40}
                  />
                </div>
                <div className="mt-3 text-center md:mt-0 md:ml-4 md:flex md:items-center">
                  <div className="text-base font-medium text-gray-900">
                    Kyle Parrish
                  </div>
                  <svg
                    className="hidden w-5 h-5 mx-1 text-ds-endgame md:block"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M11 0h3L9 20H6l5-20z" />
                  </svg>

                  <div className="text-base font-medium text-ds-pewter">
                    Head of Sales at Figma
                  </div>
                </div>
              </div>
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection
