import { hubspotUrl } from 'lib/constants'

export interface HubspotRequest {
  email: string
  lifecycleStage: 'subscriber' | 'lead'
}

export interface HubspotResponse {
  status: number
  message?: string
}

export const hubspotSignup = async (
  request: HubspotRequest
): Promise<HubspotResponse> => {
  let response: Response
  let responseBody: any
  const hutk = document.cookie.replace(/(?:(?:^|.*;\s*)hubspotutk\s*\=\s*([^;]*).*$)|^.*$/, "$1")
  console.log(hutk)
  const body = JSON.stringify({
    fields: [{
        name: 'email',
        value: request.email
      }, {
        name: 'lifecyclestage',
        value: request.lifecycleStage
      }
    ],
    context: {
      pageUri: window.location.href,
      hutk
    }
  })

  try {
    console.log('hubspot')
    response = await fetch(hubspotUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body
    })

    responseBody = await response.json()
  } catch (e) {
    return {
      status: 500
    }
  }

  return {
    status: response.status,
    message: response.status === 200 ? null : responseBody.message
  }
}
