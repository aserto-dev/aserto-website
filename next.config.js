const withPlugins = require('next-compose-plugins')
const withSvgr = require('next-svgr')
const withTM = require('next-transpile-modules')([
  'gsap',
  'gsap/dist/ScrollTrigger',
  'gsap/dist/Flip'
])

module.exports = withPlugins([withTM, withSvgr], {
  future: {
    webpack5: true
  }
})
