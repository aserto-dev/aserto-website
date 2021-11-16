import React, { useState } from 'react'
import { SignupRequest, SignupUser } from './SignupClient'
import SignupContainer from './SignupContainer'
import SignupDataCollector from './SignupDataCollector'
import SignupSuccessfulNotification from './SignupSuccessfulNotification'
import Error from '../common/error'
import Link from 'components/primitives/link'

type SignupState =
  | { type: 'SERVICE_ERROR' }
  | { type: 'INPUT'; errorMessage?: JSX.Element }
  | { type: 'SUCCESS'; emailAddress: string }

const Signup = () => {
  const [state, setState] = useState<SignupState>({
    errorMessage: undefined,
    type: 'INPUT'
  })

  const handleSignUpRequest = async (request: SignupRequest) => {
    const response = await SignupUser(request)

    let newState: SignupState

    switch (response.status) {
      case 200:
        newState = {
          type: 'SUCCESS',
          emailAddress: request.email
        }
        break
      case 400:
        newState = {
          type: 'INPUT',
          errorMessage: <>Use a valid email address and try again.</>
        }
        break
      case 409:
        newState = {
          type: 'INPUT',
          errorMessage: (
            <>
              That email is aleady in use at Aserto. Use a different email or{' '}
              {
                <Link
                  className="text-aserto-grey-90 font-roboto"
                  href="https://console.aserto.com/"
                >
                  sign up
                </Link>
              }
            </>
          )
        }
        break
      case 401:
      case 500:
      default:
        newState = { type: 'SERVICE_ERROR' }
    }

    setState(newState)
  }

  switch (state.type) {
    case 'INPUT':
      return (
        <SignupContainer>
          <SignupDataCollector
            errorMessage={state.errorMessage}
            onSubmit={handleSignUpRequest}
          />
        </SignupContainer>
      )
    case 'SUCCESS':
      return (
        <SignupContainer>
          <SignupSuccessfulNotification email={state.emailAddress} />
        </SignupContainer>
      )
    case 'SERVICE_ERROR':
      return <Error />
  }
}

export default Signup
