const withPlugins = require('next-compose-plugins')
const withSvgr = require('next-plugin-svgr')
const withTM = require('next-transpile-modules')(['gsap'])

module.exports = withPlugins([withTM, withSvgr], {})
