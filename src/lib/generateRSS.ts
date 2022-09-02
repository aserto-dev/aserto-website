import RSS from 'rss'
import { writeFileSync } from 'fs'
import { Post } from './sanity/generated'

const siteUrl = process.env.SITE_URL || 'https://www.aserto.com'

export default async function getRSS(posts: Post[]) {
  const feed = new RSS({
    title: 'Aserto Blog',
    // eslint-disable-next-line @typescript-eslint/naming-convention
    site_url: siteUrl,
    // eslint-disable-next-line @typescript-eslint/naming-convention
    feed_url: `${siteUrl}/rss.xml`
  })

  for (const post of posts) {
    if (post.title) {
      feed.item({
        title: post.title,
        description: post.metadata?.description
          ? post.metadata.description
          : '',
        date: post.publishedAt,
        url: post.slug?.current
          ? `${siteUrl}/blog/${post.slug.current}`
          : `${siteUrl}/blog`
      })
    }
  }

  writeFileSync('./public/rss.xml', feed.xml({ indent: true }))
}
