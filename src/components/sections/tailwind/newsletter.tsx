import { useEffect, useRef } from 'react'
import useSubscribe from 'hooks/use-subscribe'
import gsap from 'gsap/all'
import { useFadeInBottom } from 'hooks/use-gsap'
import Button from 'components/primitives/button'
import { DURATION } from 'lib/gsap'

const NewsletterSection = () => {
  const thanksRef = useRef<HTMLHeadingElement>(null)
  const formRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const [section] = useFadeInBottom()
  const { inputProps, onSubmit, status } = useSubscribe('email-prefooter')

  useEffect(() => {
    if (!status || status !== 'success') return
    const timeline = gsap.timeline({
      paused: true,
      smoothChildTiming: true
    })

    timeline.to([formRef.current, contentRef.current], {
      delay: DURATION / 2,
      autoAlpha: 0,
      stagger: 0.2
    })
    timeline.set([formRef.current, contentRef.current], {
      position: 'absolute'
    })
    timeline.set(thanksRef.current, { position: 'relative', y: 30 })
    timeline.to(thanksRef.current, {
      y: 0,
      autoAlpha: 1
    })

    timeline.play()
  }, [status])

  return (
    <section className="bg-ds-background" id="newsletter">
      <div
        ref={section}
        className="px-4 mx-auto sm:py-8 max-w-container sm:px-6 lg:pt-8 lg:pb-2 lg:px-8"
      >
        <div className="px-6 py-6 overflow-hidden rounded-lg bg-gradient-to-r from-ds-endgame to-ds-saphire md:py-12 md:px-10 lg:flex lg:items-center lg:justify-between">
          <h2
            style={{
              visibility: 'hidden',
              opacity: 0,
              position: 'absolute'
            }}
            className="text-xl sm:text-2xl font-extrabold tracking-normal text-white sm:text-2.5xl font-book text-center w-full"
            ref={thanksRef}
          >
            Thanks for signing up! Expect to hear from us soon.
          </h2>
          <div className="w-full lg:w-0 lg:flex-1" ref={contentRef}>
            <h2 className="text-xl sm:text-2xl font-extrabold tracking-normal text-white sm:text-2.5xl font-book">
              Join the Endgame beta!
            </h2>
            <p className="max-w-3xl mt-1 text-lg text-white sm:text-2xl font-book opacity-80">
              Sign up now to get ahead of the line.
            </p>
          </div>
          <div ref={formRef} className="mt-8 sm:w-full lg:max-w-md lg:mt-0">
            <form
              className="relative pb-12 sm:pb-6 sm:flex"
              onSubmit={onSubmit}
            >
              <label htmlFor={inputProps.id} className="sr-only">
                Email
              </label>
              <p className="absolute w-full text-sm text-white -bottom-1 font-book text-opacity-80">
                By signing up, you agree to receive periodic updates from
                Endgame
              </p>
              <input
                {...inputProps}
                className="w-full px-5 py-2 placeholder-gray-400 transition-shadow border-white rounded-md sm:py-0 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-700 focus:ring-white"
              />
              <Button
                size="md"
                type="submit"
                className="w-full mt-4 ml-0 sm:w-2/4 sm:ml-4 sm:mt-0"
              >
                {status ? (
                  status === 'loading' ? (
                    <svg
                      className="w-5 h-5 animate-spin"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      />
                    </svg>
                  ) : status === 'failure' ? (
                    <svg
                      className="w-5 h-5"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="w-5 h-5"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  )
                ) : (
                  'Let’s go'
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default NewsletterSection
