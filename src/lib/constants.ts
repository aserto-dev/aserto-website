// Env
const isServer = typeof window === 'undefined'
const isClient = !isServer
const isDev = process.env.NODE_ENV === 'development'
const isProd = process.env.NODE_ENV === 'production'
const workflowTypeRun = '1'
const originURL =
  process.env.NEXT_PUBLIC_ASERTO_WEBSITE_URL ||
  'https://eng--aserto-console.netlify.app'
const asertoConsoleRootUrl =
  process.env.NEXT_PUBLIC_ASERTO_CONSOLE_ROOT_URL ||
  'https://console.eng.aserto.com'
const funnelServiceUrl =
  process.env.NEXT_PUBLIC_ASERTO_FUNNEL_SERVICE_URL ||
  'https://funnel.eng.aserto.com'
const recaptchaSiteKey =
  process.env.NEXT_PUBLIC_ASERTO_SIGNUP_RECAPTCHA_SITEKEY ||
  '6Ld4KRcdAAAAANy9yCpsiTSLLL6-zXgwgDBveO6N'
const asertoPlaygroundRootUrl =
  process.env.NEXT_PUBLIC_ASERTO_PLAYGROUND_ROOT_URL ||
  'https://aserto-playground.netlify.app'
const hubspotUrl =
  process.env.NEXT_PUBLIC_HUBSPOT_URL ||
  'https://api.hsforms.com/submissions/v3/integration/submit/21300286/8ab7a6d3-c090-45db-8a0c-780d4ea53581'

export {
  asertoConsoleRootUrl,
  asertoPlaygroundRootUrl,
  isClient,
  isDev,
  isProd,
  isServer,
  workflowTypeRun,
  originURL,
  recaptchaSiteKey,
  funnelServiceUrl,
  hubspotUrl
}
