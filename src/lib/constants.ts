// Env
const isServer = typeof window === 'undefined'
const isClient = !isServer
const isDev = process.env.NODE_ENV === 'development'
const isProd = process.env.NODE_ENV === 'production'
const originURL = process.env.ASERTO_WEBSITE_URL || 'https://aserto.com'
const asertoConsoleRootUrl =
  process.env.ASERTO_CONSOLE_ROOT_URL || 'https://console.eng.aserto.com'
const tenantServiceUrl =
  process.env.ASERTO_TENANT_SERVICE_URL || 'https://tenant.eng.aserto.com'
const recaptchaSiteKey =
  process.env.ASERTO_SIGNUP_RECAPTCHA_SITEKEY ||
  '6Ld4KRcdAAAAANy9yCpsiTSLLL6-zXgwgDBveO6N'
const asertoPlaygroundRootUrl =
  process.env.ASERTO_PLAYGROUND_ROOT_URL ||
  'https://aserto-playground.netlify.app'

export {
  asertoConsoleRootUrl,
  asertoPlaygroundRootUrl,
  isClient,
  isDev,
  isProd,
  isServer,
  originURL,
  recaptchaSiteKey,
  tenantServiceUrl
}
