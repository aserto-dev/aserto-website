export interface signupRequest {
  email: string
  recaptcha: string | null
}

export interface signupResponse {
  status: number
  body: signupBody
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

export const signupUser = async (request: signupRequest): Promise<signupResponse> =>
  fetch('https://tenant.mitza.eng.aserto.com/api/v1/account/signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(request)
  }).then(async (res) => {
    const data = await res.json()
    return {
      status: res.status,
      body: data
    }
  })
