const withPlugins = require('next-compose-plugins')
const withSvgr = require('next-svgr')
const withTM = require('next-transpile-modules')([
  'gsap',
  'gsap/dist/CustomEase',
  'gsap/dist/Flip',
  'gsap/dist/ScrollTrigger'
])

module.exports = withPlugins([withTM, withSvgr], {
  future: {
    webpack5: true
  },
  images: {
    domains: ['cdn.sanity.io']
  }
})
