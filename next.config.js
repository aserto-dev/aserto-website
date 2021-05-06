const withPlugins = require('next-compose-plugins')
const withTM = require('next-transpile-modules')([
  'gsap',
  'gsap/dist/ScrollTrigger',
  'gsap/dist/Flip'
])

module.exports = withPlugins([withTM], {
  images: {
    domains: ['images.unsplash.com']
  }
})
