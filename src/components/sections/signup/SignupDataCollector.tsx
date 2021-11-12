import React, { useState } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'

export interface signupRequest {
  email: string
  recaptcha: string | null
}

interface signupDataCollectorProps {
  onSubmit: (request: signupRequest) => void
}

const SignupDataCollector = (props: signupDataCollectorProps) => {
  const [signupRequest, setSignupRequest] = useState<signupRequest>({
    email: '',
    recaptcha: ''
  })

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
      <input
        className="bg-aserto-black border-aserto-lochivar-accent-20 shadow-input text-aserto-grey-60 w-full"
        onChange={(event) => {
          setSignupRequest({
            ...signupRequest,
            email: event?.target.value
          })
        }}
        placeholder="Email"
        style={{ fontSize: '16px', height: '60px' }}
        type="text"
      />
      <div className="bg-aserto-grey-20 w-full" style={{ padding: '9px' }}>
        <ReCAPTCHA
          onChange={(recaptcha) => {
            setSignupRequest({
              ...signupRequest,
              recaptcha
            })
          }}
          sitekey="6Ld4KRcdAAAAANy9yCpsiTSLLL6-zXgwgDBveO6N"
          theme="dark"
        />
      </div>
      <button
        className="bg-aserto-lochivar-60 font-roboto w-full text-white"
        onClick={() => props.onSubmit(signupRequest)}
        style={{
          borderRadius: '6px',
          fontSize: '16px',
          height: '60px',
          lineHeight: '24px',
          marginTop: '37px'
        }}
      >
        {'Sign me up!'}
      </button>
    </div>
  )
}

export default SignupDataCollector
