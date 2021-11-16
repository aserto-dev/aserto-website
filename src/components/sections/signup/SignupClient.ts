export interface SignupRequest {
  email: string
  recaptcha: string | null
}

export interface SignupResponse {
  status: number
  body?: signupBody
}

const tenantServiceUrl = () =>
  process.env.SANITY_READ_TOKEN || 'https://tenant.eng.aserto.com/'

interface signupBody {
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

export const SignupUser = async (
  request: SignupRequest
): Promise<SignupResponse> => {
  let response: Response
  let responseBody: any

  try {
    response = await fetch(tenantServiceUrl() + 'api/v1/account/signup', {
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
