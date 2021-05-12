import Head from 'next/head'
import { useMemo } from 'react'

const defaultMeta = {
  title: 'Aserto - Authorization for All',
  description: `Authorization for All`,
  image: 'https://aserto.basement.studio/images/OG.png',
  twitterTag: 'aserto_com'
}

export type CustomHeadProps = {
  title?: string
  description?: string
  image?: string
}

const CustomHead = ({ title, description, image }: CustomHeadProps) => {
  const ogURL = `https://aserto.basement.studio/images/OG.png`

  const resolvedMeta = useMemo(() => {
    return {
      title: title ?? defaultMeta.title,
      description: description ?? defaultMeta.description,
      image: image ?? defaultMeta.image,
      url: ogURL,
      twitterTag: defaultMeta.twitterTag
    }
  }, [description, image, ogURL, title])

  return (
    <Head>
      <title>{resolvedMeta.title}</title>
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="minimum-scale=1, initial-scale=1, width=device-width"
      />
      <meta name="description" content={resolvedMeta.description} />

      {/* OG & Facebook */}
      <meta property="og:description" content={resolvedMeta.description} />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image" content={resolvedMeta.url} />
      <meta property="og:site_name" content={resolvedMeta.title} />
      <meta property="og:title" content={resolvedMeta.title} />
      <meta property="og:type" content="website" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={resolvedMeta.title} />
      <meta name="twitter:description" content={resolvedMeta.description} />
      <meta name="twitter:image" content={resolvedMeta.image} />

      {/* Favicons */}
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/images/favicons/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/images/favicons/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/images/favicons/favicon-16x16.png"
      />
      <link rel="manifest" href="/images/favicons/site.webmanifest" />
      <link rel="mask-icon" href="/images/favicons/safari-pinned-tab.svg" color="#5bbad5" />
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="theme-color" content="#ffffff" />

      {/* TODO get twitter account */}
      <meta name="twitter:site" content={`@${resolvedMeta.twitterTag}`} />
    </Head>
  )
}

export default CustomHead
