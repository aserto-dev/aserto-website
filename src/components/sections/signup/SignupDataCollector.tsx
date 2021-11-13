import React, { useState } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'
import { signupRequest } from './SignupClient'

interface signupDataCollectorProps {
  invalidEmailAddresses: Array<string>
  onSubmit: (request: signupRequest) => void
}

interface signupDataCollectorState {
  request: signupRequest
  invalidEmailAddresses: Array<string>
}

const SignupDataCollector = (props: signupDataCollectorProps) => {
  const [state, setState] = useState<signupDataCollectorState>({
    request: {
      email: '',
      recaptcha: ''
    },
    invalidEmailAddresses: props.invalidEmailAddresses
  })

  const isEmailValid = () =>
    state.invalidEmailAddresses.indexOf(state.request.email) > -1

  return (
    <div
      id="doSignup"
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
            className={`bg-aserto-black border-aserto-${
              isEmailValid() ? 'mojo-accent-30' : 'lochivar-accent-20'
            } shadow-input text-aserto-grey-60 w-full`}
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
          {isEmailValid() && (
            <text className="text-aserto-mojo-accent-30">
              {'Use a valid email address and try again.'}
            </text>
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
            sitekey="6Ld4KRcdAAAAANy9yCpsiTSLLL6-zXgwgDBveO6N"
            theme="dark"
          />
        </div>
        <button
          className="bg-aserto-lochivar-60 font-roboto w-full text-white"
          onClick={() => props.onSubmit(state.request)}
          style={{
            borderRadius: '6px',
            fontSize: '16px',
            height: '60px',
            lineHeight: '24px'
          }}
        >
          {'Sign me up!'}
        </button>
      </div>
    </div>
  )
}

export default SignupDataCollector
