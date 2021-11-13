export interface signupRequest {
  email: string
  recaptcha: string | null
}

export interface signupResponse {
  status: number
  body: signupBody | undefined
}

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

export const signupUser = async (
  request: signupRequest
): Promise<signupResponse> => {
  let response: Response
  let responseBody: any

  try {
    response = await fetch(
      'http://tenant.eng.aserto.com/api/v1/account/signup',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(request)
      }
    )

    responseBody = await response.json()
  } catch (e) {
    return {
      status: 500,
      body: undefined
    }
  }

  return {
    status: response.status,
    body: responseBody
  }
}
