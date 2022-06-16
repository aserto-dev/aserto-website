import clsx from 'clsx'
import { recaptchaSiteKey } from 'lib/constants'
import React, { useEffect, useState } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'
import { SignupRequest } from './SignupClient'

export enum SignupDataCollectorVisualMode {
  Editing,
  Pending
}
interface SignupDataCollectorProps {
  errorMessage?: JSX.Element
  onSubmit: (request: SignupRequest) => void
  visualMode: SignupDataCollectorVisualMode
}

const recaptchaRef = React.createRef<ReCAPTCHA>()

const SignupDataCollector = (props: SignupDataCollectorProps) => {
  const [email, setEmail] = useState<string>('')
  const [recaptcha, setRecaptcha] = useState<string>('')

  const showError = !!props.errorMessage

  const disableEmailInput =
    props.visualMode !== SignupDataCollectorVisualMode.Editing

  const disableSubmit =
    !email ||
    !recaptcha ||
    props.visualMode !== SignupDataCollectorVisualMode.Editing

  useEffect(() => {
    switch (props.visualMode) {
      case SignupDataCollectorVisualMode.Editing:
        recaptchaRef?.current?.reset()
        setRecaptcha('')
        break
    }
  }, [props.visualMode, setRecaptcha])

  return (
    <div className="flex flex-col">
      <div
        className={`font-roboto text-aserto-grey-90 text-[20px] max-w-[500px]
                  leading-[24px] my-[20px] mx-0`}
      >
        <b>Aserto is in open beta!</b> To create an account, you&apos;ll need to
        enter a valid email address. We&apos;ll send you an email to confirm
        your account.
      </div>
      <div className="flex flex-col gap-[40px]">
        <div className="h-[60px] overflow-y-visible">
          <input
            className={clsx(
              'bg-aserto-black text-aserto-grey-60',
              { 'border-aserto-mojo-accent-30': showError },
              { 'border-aserto-grey-30': !showError },
              `rounded-[2px] focus:border-aserto-lochivar-accent-20
              focus:ring-0 focus:shadow-input text-[16px]
              w-full h-[48px] sm:h-[60px]`
            )}
            disabled={disableEmailInput}
            onChange={(event) => {
              setEmail(event?.target.value)
            }}
            placeholder="Email"
            type="text"
          />
          {showError && (
            <div className="h-[40px] flex flex-col justify-evenly">
              <p className="text-aserto-mojo-accent-30">{props.errorMessage}</p>
            </div>
          )}
        </div>
        <ReCAPTCHA
          onChange={(recaptcha) => setRecaptcha(recaptcha || '')}
          ref={recaptchaRef}
          sitekey={recaptchaSiteKey}
          theme="dark"
        />
        <button
          className={`font-roboto text-white text-[16px] rounded-[6px] w-full
                    h-[48px] sm:h-[60px] leading-[24px] bg-aserto-lochivar-60
                    hover:bg-aserto-lochivar-90 active:bg-aserto-lochivar-100
                    disabled:bg-aserto-lochivar-30 disabled:text-aserto-grey-40
                    disabled:cursor-not-allowed`}
          disabled={disableSubmit}
          onClick={() => {
            props.onSubmit({
              recaptcha,
              email
            })
          }}
        >
          Sign me up!
        </button>
      </div>
    </div>
  )
}

export default SignupDataCollector
