// Env
const isServer = typeof window === 'undefined'
const isClient = !isServer
const isDev = process.env.NODE_ENV === 'development'
const isProd = process.env.NODE_ENV === 'production'
const originURL =
  process.env.NEXT_PUBLIC_ASERTO_WEBSITE_URL ||
  'https://main--aserto-console.netlify.app'
const asertoConsoleRootUrl =
  process.env.NEXT_PUBLIC_ASERTO_CONSOLE_ROOT_URL ||
  'https://console.eng.aserto.com'
const tenantServiceUrl =
  process.env.NEXT_PUBLIC_ASERTO_TENANT_SERVICE_URL ||
  'https://tenant.eng.aserto.com'
const recaptchaSiteKey =
  process.env.NEXT_PUBLIC_ASERTO_SIGNUP_RECAPTCHA_SITEKEY ||
  '6Ld4KRcdAAAAANy9yCpsiTSLLL6-zXgwgDBveO6N'
const asertoPlaygroundRootUrl =
  process.env.NEXT_PUBLIC_ASERTO_PLAYGROUND_ROOT_URL ||
  'https://aserto-playground.netlify.app'
const hubspotUrl =
  process.env.NEXT_PUBLIC_HUBSPOT_URL ||
  'https://api.hsforms.com/submissions/v3/integration/submit/8658136/5bfa769c-94f7-4483-a54e-d72bbdf2c828'

export {
  asertoConsoleRootUrl,
  asertoPlaygroundRootUrl,
  isClient,
  isDev,
  isProd,
  isServer,
  originURL,
  recaptchaSiteKey,
  tenantServiceUrl,
  hubspotUrl
}
