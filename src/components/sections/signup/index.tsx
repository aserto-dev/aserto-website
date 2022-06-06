import React, { useState } from 'react'
import { SignupRequest, signupUser } from './SignupClient'
import SignupContainer from './SignupContainer'
import SignupDataCollector, {
  SignupDataCollectorVisualMode
} from './SignupDataCollector'
import SignupSuccessfulNotification from './SignupSuccessfulNotification'
import Error from '../common/error'
import Link from 'components/primitives/link'
import Image from '../../primitives/image'
import { asertoConsoleRootUrl } from 'lib/constants'
import {
  HubspotRequest,
  HubspotResponse,
  hubspotSignup
} from 'lib/hubspot/HubSpotClient'
import { dataLayerPush } from 'lib/ga'

type SignupState =
  | { type: 'SERVICE_ERROR' }
  | {
      type: 'INPUT'
      errorMessage?: JSX.Element
      visualState: SignupDataCollectorVisualMode
    }
  | { type: 'SUCCESS'; emailAddress: string }

const Signup = ({ closeModal }: { closeModal?: () => void }) => {
  const [state, setState] = useState<SignupState>({
    errorMessage: undefined,
    type: 'INPUT',
    visualState: SignupDataCollectorVisualMode.Editing
  })

  const handleSignUpRequest = async (request: SignupRequest) => {
    if (state.type === 'INPUT') {
      setState({
        ...state,
        visualState: SignupDataCollectorVisualMode.Pending
      })
    }

    const response = await signupUser(request)

    let newState: SignupState
    let hubspotRequest: HubspotRequest
    let hubspotResponse: HubspotResponse

    switch (response.status) {
      case 200:
        newState = {
          type: 'SUCCESS',
          emailAddress: request.email
        }

        // add new user's email to hubspot
        hubspotRequest = {
          email: request.email,
          lifecycleStage: 'lead'
        }
        hubspotResponse = await hubspotSignup(hubspotRequest)
        if (hubspotResponse.status !== 200) {
          // for now just log an error in the console
          // when we have central error reporting, should report this
          console.error(`Hubspot error: ${hubspotResponse.message}`)
        }

        dataLayerPush({
          event: 'signup'
        })
        break
      case 400:
        newState = {
          type: 'INPUT',
          errorMessage: <>Use a valid email address and try again.</>,
          visualState: SignupDataCollectorVisualMode.Editing
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
                  href={asertoConsoleRootUrl}
                >
                  sign in
                </Link>
              }
            </>
          ),
          visualState: SignupDataCollectorVisualMode.Editing
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
        <SignupContainer closeModal={closeModal}>
          <>
            <Image
              className="mx-auto mt=[10px] w-[58px] sm:w-[97px]"
              layout="native"
              src="/images/aserto-vertical-color-white-text.svg"
            />
            <SignupDataCollector
              errorMessage={state.errorMessage}
              onSubmit={handleSignUpRequest}
              visualMode={state.visualState}
            />
          </>
        </SignupContainer>
      )
    case 'SUCCESS':
      return (
        <SignupContainer closeModal={closeModal}>
          <SignupSuccessfulNotification
            email={state.emailAddress}
            closeModal={closeModal}
          />
        </SignupContainer>
      )
    case 'SERVICE_ERROR':
      return <Error />
  }
}

export default Signup
