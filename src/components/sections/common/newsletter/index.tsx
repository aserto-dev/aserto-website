import clsx from 'clsx'
import { useForm } from 'react-hook-form'
import MailchimpSubscribe from 'react-mailchimp-subscribe'

// Layout
import Container from 'components/layout/container'

// Hooks
import { useFadeInBottom } from 'hooks/use-gsap'

// Primitives
import Button from 'components/primitives/button'

// Styles
import s from './newsletter.module.css'
import { useState } from 'react'

const NewsletterSection = () => {
  const { register, handleSubmit } = useForm<{ email: string }>()
  const [section] = useFadeInBottom()
  const [clearErr, setClearErr] = useState('')

  return (
    <section
      className="relative z-10 mb-32 bg-aserto-black"
      id="sign-up"
      ref={section}
    >
      <Container>
        <div
          className={clsx(
            'px-6 py-6 rounded-lg md:py-16 md:px-16 flex flex-col md:flex-row lg:items-center lg:justify-between text-center md:text-left',
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
          >
            Thanks for signing up! Expect to hear from us soon.
          </h2>
          <div className="w-full md:w-6/12">
            <h2 className="tracking-normal text-aserto-grey-90 text-4.5xl">
              Request early access
            </h2>
            <p className="max-w-3xl mt-4 text-lg text-aserto-grey-60 font-roboto">
              Sign up now to get ahead of the line.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center mt-8 lg:mt-0">
            <MailchimpSubscribe
              url="https://aserto.us1.list-manage.com/subscribe/post?u=69b1ad0e50144ade95e55f9d1&amp;id=016646afa1"
              render={({ subscribe, status, message }) => (
                <form
                  className="relative flex flex-col self-center"
                  onSubmit={handleSubmit((data) => {
                    subscribe({ EMAIL: data.email })
                    setClearErr(`${status}`)
                    setTimeout(() => {
                      setClearErr('')
                    }, 5000)
                  })}
                >
                  <div className="flex flex-col items-center self-center sm:items-start sm:flex-row">
                    <label htmlFor="email" className="sr-only">
                      Email
                    </label>
                    <input
                      placeholder="Enter your email..."
                      id="email"
                      type="email"
                      {...register('email', {
                        required: 'Email is required',
                        maxLength: 50,
                        pattern: {
                          value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,6}$/,
                          message: 'Email must be valid'
                        }
                      })}
                      className="w-full min-w-[290px] mr-0 md:mr-5 sm:min-w-[300px] lg:min-w-[354px] px-5 transition-all duration-150 border rounded sm:w-6/12 h-[58px] placeholder-aserto-grey-30 border-aserto-grey-30 bg-aserto-black text-aserto-grey-90 sm:py-0 outline-none focus:ring-0 focus:border-aserto-lochivar-accent-20 focus:shadow-input"
                    />
                    <Button
                      type="submit"
                      className="mt-4 ml-0 sm:ml-4 sm:mt-0 w-[137px] whitespace-nowrap flex items-center justify-center min-h-[58px]"
                    >
                      {clearErr ? (
                        clearErr === 'sending' ? (
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
                        ) : clearErr === 'error' ? (
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
                  </div>
                  <p
                    className={clsx(
                      'mt-0 transform -translate-x-1/2 left-[50%] md:-translate-x-0 sm:mt-4 text-lg font-roboto absolute -bottom-16 md:-bottom-8 md:left-0 max-w-[310px] md:max-w-[400px] truncate',
                      {
                        'text-aserto-grey-60': clearErr === 'success',
                        'text-[#c87676]': clearErr === 'error'
                      }
                    )}
                  >
                    {clearErr === 'success'
                      ? 'Thanks for signing up! Info coming soon.'
                      : clearErr === 'error'
                      ? message
                      : ''}
                  </p>
                </form>
              )}
            />
          </div>
        </div>
      </Container>
    </section>
  )
}

export default NewsletterSection
