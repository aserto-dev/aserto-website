import Head from 'next/head'
import { useMemo } from 'react'
import { useRouter } from 'next/router'

const defaultMeta = {
  title: 'Aserto - Welcome to modern authorization.',
  description: `Authorization for All`,
  image: 'https://www.aserto.com/images/og.png',
  twitterTag: 'aserto_com',
  baseUrl: `https://www.aserto.com`
}

export type CustomHeadProps = {
  title?: string
  description?: string
  image?: string
}

const decodeHTMLEntities = (text: string) => {
  const entities = [
    ['amp', '&'],
    ['apos', "'"],
    ['#x27', "'"],
    ['#x2F', '/'],
    ['#39', "'"],
    ['#47', '/'],
    ['lt', '<'],
    ['gt', '>'],
    ['nbsp', ' '],
    ['quot', '"']
  ]
  let res = ''

  for (let i = 0, max = entities.length; i < max; ++i) {
    res = text.replace(
      new RegExp('&' + entities[i][0] + ';', 'g'),
      entities[i][1]
    )
  }

  return res
}

const CustomHead = ({ title, description, image }: CustomHeadProps) => {
  const router = useRouter()
  const canonicalUrl = (
    defaultMeta.baseUrl + (router.asPath === '/' ? '' : router.asPath)
  ).split('?')[0]
  const resolvedMeta = useMemo(() => {
    return {
      title: title ?? defaultMeta.title,
      description: description ?? defaultMeta.description,
      image: image ?? defaultMeta.image,
      url: image ?? defaultMeta.image,
      twitterTag: defaultMeta.twitterTag
    }
  }, [description, image, title])

  return (
    <Head>
      <title>{resolvedMeta.title}</title>
      <link rel="canonical" href={canonicalUrl} />
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
      <meta property="og:image" content={resolvedMeta.image} />
      <meta property="og:url" content={resolvedMeta.image} />
      <meta property="og:site_name" content={resolvedMeta.title} />
      <meta
        property="og:title"
        content={decodeHTMLEntities(resolvedMeta.title)}
      />
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
      <link
        rel="mask-icon"
        href="/images/favicons/safari-pinned-tab.svg"
        color="#5bbad5"
      />
      <meta name="msapplication-TileColor" content="#e7e7e7" />
      <meta name="theme-color" content="#e7e7e7" />

      {/* TODO get twitter account */}
      <meta name="twitter:site" content={`@${resolvedMeta.twitterTag}`} />
    </Head>
  )
}

export default CustomHead
