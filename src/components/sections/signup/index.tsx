import React, { useState } from 'react'
import { signupRequest, signupUser } from './SignupClient'
import SignupContainer from './SignupContainer'
import SignupDataCollector from './SignupDataCollector'
import SignupSuccessfulNotification from './SignupSuccessfulNotification'
import Error from '../common/error'
import Link from 'components/primitives/link'

interface signupState {
  emailAddress: string
  responseStatusCode: number | undefined
  errorMessage: JSX.Element | undefined
  uiState: UIState
}

enum UIState {
  ERROR,
  INPUT,
  SUCCESS
}

const Signup = () => {
  const [state, setState] = useState<signupState>({
    emailAddress: '',
    responseStatusCode: undefined,
    errorMessage: undefined,
    uiState: UIState.INPUT
  })

  const handleSignUpRequest = async (request: signupRequest) => {
    const response = await signupUser(request)
    const newState = {
      ...state,
      emailAddres: request.email,
      responseStatusCode: response.status
    }

    switch (newState.responseStatusCode) {
      case 200:
        newState.uiState = UIState.SUCCESS
        newState.errorMessage = undefined
        break
      case 400:
        newState.uiState = UIState.INPUT
        newState.errorMessage = (
          <div>Use a valid email address and try again.</div>
        )
        break
      case 409:
        newState.uiState = UIState.INPUT
        newState.errorMessage = (
          <div>
            That email is aleady in use at Aserto. Use a different email or{' '}
            {
              <Link
                className="text-aserto-grey-90 font-roboto"
                href="https://console.aserto.com/"
              >
                sign up
              </Link>
            }
          </div>
        )
        break
      case 401:
      case 500:
      default:
        newState.uiState = UIState.ERROR
    }

    setState(newState)
  }

  switch (state.uiState) {
    case UIState.INPUT:
      return (
        <SignupContainer>
          <SignupDataCollector
            errorMessage={state.errorMessage}
            onSubmit={handleSignUpRequest}
          />
        </SignupContainer>
      )
    case UIState.SUCCESS:
      return (
        <SignupContainer>
          <SignupSuccessfulNotification email={state.emailAddress} />
        </SignupContainer>
      )
    case UIState.ERROR:
      return <Error />
  }
}

export default Signup
