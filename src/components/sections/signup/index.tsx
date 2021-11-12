import React, { useState } from 'react'
import { signupRequest, signupResponse, signupUser } from './SignupClient'
import SignupContainer from './SignupContainer'
import SignupDataCollector from './SignupDataCollector'
import SignupSuccessfulNotification from './SignupSuccessfulNotification'

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
    signupUser(request).then((response) => {
      setSignupAttempt({
        ...signupAttempt,
        request,
        response
      })
    })
  }

  const toRender = () => {
    if (!signupAttempt.request || !signupAttempt.response) {
      return <SignupDataCollector onSubmit={handleSignUpRequest} />
    } else {
      switch (signupAttempt.response.status) {
        case 200:
          return (
            <SignupSuccessfulNotification email={signupAttempt.request.email} />
          )
        default:
          return <SignupDataCollector onSubmit={handleSignUpRequest} />
      }
    }
  }

  return <SignupContainer>{toRender()}</SignupContainer>
}

export default Signup
