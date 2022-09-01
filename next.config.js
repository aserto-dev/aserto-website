const withPlugins = require('next-compose-plugins')
const withSvgr = require('next-plugin-svgr')
const withTM = require('next-transpile-modules')(['gsap'])

module.exports = withPlugins([withTM, withSvgr], {
  webpack: (config) => {
    config.module.rules.push({
      test: require.resolve('./src/lib/menu-items.js'),
      use: [{ loader: 'val-loader' }]
    })
    return config
  }
})
