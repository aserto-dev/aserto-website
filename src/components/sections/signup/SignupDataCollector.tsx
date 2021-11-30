import clsx from 'clsx'
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

interface SignupDataCollectorState {
  request: SignupRequest
}

const recaptchaRef = React.createRef<ReCAPTCHA>()
const recaptchaSiteKey =
  process.env.ASERTO_SIGNUP_RECAPTCHA_SITEKEY ||
  '6Ld4KRcdAAAAANy9yCpsiTSLLL6-zXgwgDBveO6N'

const SignupDataCollector = (props: SignupDataCollectorProps) => {
  const [state, setState] = useState<SignupDataCollectorState>({
    request: {
      email: '',
      recaptcha: ''
    }
  })

  const showError = !!props.errorMessage

  const enableEmailInput =
    props.visualMode === SignupDataCollectorVisualMode.Editing

  const enableSubmit =
    !!state.request.email &&
    !!state.request.recaptcha &&
    props.visualMode === SignupDataCollectorVisualMode.Editing

  useEffect(() => {
    switch (props.visualMode) {
      case SignupDataCollectorVisualMode.Editing:
        recaptchaRef?.current?.reset()
        break
    }
  }, [props.visualMode])

  return (
    <div
      className="flex flex-col items-center"
      style={{
        paddingTop: '19px',
        paddingBottom: '19px',
        paddingLeft: '50px',
        paddingRight: '50px',
        gap: '14px'
      }}
    >
      <div
        className="font-roboto items-center text-aserto-grey-90 text-center w-full"
        style={{ fontSize: '32px', height: '48px', lineHeight: '38px' }}
      >
        Sign up for our beta!
      </div>
      <div
        className="flex flex-col items-center w-full"
        style={{
          gap: '40px'
        }}
      >
        <div
          className="w-full"
          style={{ height: '60px', overflowY: 'visible' }}
        >
          <input
            className={clsx(
              'bg-aserto-black',
              { 'border-aserto-mojo-accent-30': showError },
              { 'border-aserto-grey-30': !showError },
              'focus:border-aserto-lochivar-accent-20 shadow-input text-aserto-grey-60 w-full'
            )}
            disabled={!enableEmailInput}
            onChange={(event) => {
              setState({
                ...state,
                request: { ...state.request, email: event?.target.value }
              })
            }}
            placeholder="Email"
            style={{ fontSize: '16px', height: '60px' }}
            type="text"
          />
          {showError && (
            <div className="h-[40px] flex flex-col justify-evenly">
              <p className=" text-aserto-mojo-accent-30">
                {props.errorMessage}
              </p>
            </div>
          )}
        </div>
        <div className="bg-aserto-grey-20 w-full" style={{ padding: '9px' }}>
          <ReCAPTCHA
            onChange={(recaptcha) => {
              setState({
                ...state,
                request: { ...state.request, recaptcha }
              })
            }}
            ref={recaptchaRef}
            sitekey={recaptchaSiteKey}
            theme="dark"
          />
        </div>
        <button
          className={`font-roboto w-full  bg-aserto-lochivar-60 text-white 
                    hover:bg-aserto-lochivar-90 active:bg-aserto-lochivar-100 
                    disabled:bg-aserto-lochivar-30 disabled:text-aserto-grey-40
                    disabled:cursor-not-allowed`}
          disabled={!enableSubmit}
          onClick={() => {
            props.onSubmit(state.request)
          }}
          style={{
            borderRadius: '6px',
            fontSize: '16px',
            height: '60px',
            lineHeight: '24px'
          }}
        >
          Sign me up!
        </button>
      </div>
    </div>
  )
}

export default SignupDataCollector
