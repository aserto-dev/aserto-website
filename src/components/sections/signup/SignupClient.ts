import { funnelServiceUrl } from 'lib/constants'

export interface SignupRequest {
  name: string
  args: [
    {
      params: {
        email: string
        recaptcha: string
      }
      options: {
        runType: string
      }
    }
  ]
}

export interface SignupResponse {
  status: number
  body?: SignupBody
}

interface SignupBody {
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

export const signupUser = async (
  request: SignupRequest
): Promise<SignupResponse> => {
  let response: Response
  let responseBody: any

  try {
    response = await fetch(funnelServiceUrl + '/api/v1/funnel/run', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(request)
    })
    responseBody = await response.json()
  } catch (e) {
    return {
      status: 500
    }
  }

  return {
    status: response.status,
    body: responseBody
  }
}
