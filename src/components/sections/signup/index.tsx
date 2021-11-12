// Hooks
import React, { useState } from 'react'
import SignupContainer from './SignupContainer'
import SignupDataCollector, { signupRequest } from './SignupDataCollector'
import SignupSuccessfulNotification from './SignupSuccessfulNotification'

interface signupResponse {
  code: number
  message: string
  details: [
    {
      '@type': string
      reason: string
      domain: string
      metadata: {
        'aserto-http-statuscode': string
        email: string
      }
    }
  ]
}

interface signupAttempt {
  request: signupRequest | undefined
  response: signupResponse | undefined
}

const Signup = () => {
  const [signupAttempt, setSignupAttempt] = useState<signupAttempt>({
    request: undefined,
    response: undefined
  })

  const handleSignUpRequest = (request: signupRequest) => {
    fetch('https://tenant.mitza.eng.aserto.com/api/v1/account/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(request)
    })
      .then((res) => res.json())
      .then((response) => {
        setSignupAttempt({
          ...signupAttempt,
          request,
          response
        })
      })
  }

  return (
    <SignupContainer>
      {!signupAttempt.request
        ? <SignupDataCollector onSubmit={handleSignUpRequest} />
        : <SignupSuccessfulNotification email={signupAttempt.request.email} />
      }
    </SignupContainer>
  )
}

export default Signup
