// Env
const isServer = typeof window === 'undefined'
const isClient = !isServer
const isDev = process.env.NODE_ENV === 'development'
const isProd = process.env.NODE_ENV === 'production'
const originURL = 'https://aserto.com'

export { originURL, isServer, isClient, isDev, isProd }
