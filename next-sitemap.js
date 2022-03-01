module.exports = {
  siteUrl: process.env.SITE_URL || 'https://www.aserto.com',
  generateRobotsTxt: true,
  outDir: 'out',
  robotsTxtOptions: {
    additionalSitemaps: ['https://docs.aserto.com/sitemap.xml']
  }
}
