import React, { ReactChild, useState } from 'react'
import { signupRequest, signupResponse, signupUser } from './SignupClient'
import SignupContainer from './SignupContainer'
import SignupDataCollector from './SignupDataCollector'
import SignupSuccessfulNotification from './SignupSuccessfulNotification'
import Error from '../common/error'

interface signupState {
  request: signupRequest | undefined
  response: signupResponse | undefined
  invalidEmailAddresses: Array<string>
}

const Signup = () => {
  const [state, setState] = useState<signupState>({
    request: undefined,
    response: undefined,
    invalidEmailAddresses: []
  })

  const handleSignUpRequest = async (request: signupRequest) => {
    const response = await signupUser(request)
    const newState = {
      ...state,
      request,
      response
    }

    if (response.status == 400) {
      newState.invalidEmailAddresses.push(request.email)
    }

    setState(newState)
  }

  let uiState: ReactChild = (
    <SignupContainer>
      <SignupDataCollector
        invalidEmailAddresses={state.invalidEmailAddresses}
        onSubmit={handleSignUpRequest}
      />
    </SignupContainer>
  )

  if (state.request && state.response) {
    switch (state.response.status) {
      case 200:
        uiState = (
          <SignupContainer>
            <SignupSuccessfulNotification email={state.request.email} />
          </SignupContainer>
        )
        break
      case 500:
        uiState = <Error />
        break
      case 400:
      default:
        break
    }
  }

  return uiState
}

export default Signup
