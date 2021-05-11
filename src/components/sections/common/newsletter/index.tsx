import { useEffect, useRef } from 'react'
import clsx from 'clsx'
import gsap from 'gsap'

// Layout
import Container from 'components/layout/container'

// Hooks
import { useFadeInBottom } from 'hooks/use-gsap'

// Primitives
import Button from 'components/primitives/button'

// Constants
import { DURATION } from 'lib/gsap'

// Styles
import s from './newsletter.module.css'

const NewsletterSection = () => {
  const thanksRef = useRef<HTMLHeadingElement>(null)
  const formRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const [section] = useFadeInBottom()

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
    <section className="mb-32 bg-aserto-black" id="newsletter" ref={section}>
      <Container>
        <div
          className={clsx(
            'px-6 py-6 overflow-hidden rounded-lg md:py-16 md:px-16 lg:flex lg:items-center lg:justify-between',
            s.background
          )}
        >
          <h2
            style={{
              visibility: 'hidden',
              opacity: 0,
              position: 'absolute'
            }}
            className="text-xl sm:text-2xl font-extrabold tracking-normal text-white sm:text-2.5xl font-roboto text-center w-full"
            ref={thanksRef}
          >
            Thanks for signing up! Expect to hear from us soon.
          </h2>
          <div className="w-6/12" ref={contentRef}>
            <h2 className="text-xl tracking-normal text-aserto-grey-90 sm:text-4.5xl">
              Sign up for early access
            </h2>
            <p className="max-w-3xl mt-4 text-lg text-aserto-grey-60 font-roboto">
              Subheading (TBD)
            </p>
          </div>
          <div ref={formRef} className="flex justify-end w-6/12 mt-8 lg:mt-0">
            <form
              className="relative justify-end w-full sm:flex"
              onSubmit={() => alert('WIP FORM')}
            >
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <input
                placeholder="Enter your email..."
                id="email"
                className="w-6/12 px-5 py-2 transition-shadow rounded-sm placeholder-aserto-grey-30 border-aserto-grey-10 bg-aserto-black sm:py-0 focus:outline-none focus:border-aserto-grey-20"
              />
              <Button
                size="md"
                type="submit"
                className="mt-4 ml-0 sm:ml-4 sm:mt-0"
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
                  'Let’s go!'
                )}
              </Button>
            </form>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default NewsletterSection
