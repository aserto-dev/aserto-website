import { hubspotUrl } from 'lib/constants'

export interface HubspotRequest {
  email: string
  lifecycleStage: 'subscriber' | 'lead'
  firstname?: string
  lastname?: string
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
  const hutk = document.cookie.replace(
    /(?:(?:^|.*;\s*)hubspotutk\s*=\s*([^;]*).*$)|^.*$/,
    '$1'
  )
  const fields = [
    {
      name: 'email',
      value: request.email
    },
    {
      name: 'lifecyclestage',
      value: request.lifecycleStage
    }
  ]
  if (request.firstname) {
    fields.push({ name: 'firstname', value: request.firstname })
  }
  if (request.lastname) {
    fields.push({ name: 'lastname', value: request.lastname })
  }
  const body = JSON.stringify({
    fields,
    context: {
      pageUri: window.location.href,
      hutk
    }
  })

  try {
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
