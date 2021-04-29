const withPlugins = require('next-compose-plugins')
const withTM = require('next-transpile-modules')([
  'gsap',
  'gsap/dist/ScrollTrigger'
])

module.exports = withPlugins([withTM], {
  images: {
    domains: ['images.unsplash.com']
  }
})
