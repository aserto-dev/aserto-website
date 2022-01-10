import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript
} from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="en" className="h-full">
        <Head>
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link
            rel="preload"
            as="style"
            href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400&display=swap"
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400&display=swap"
            media="print"
            //@ts-ignore
            onLoad="this.media='all'"
          />
          <noscript>
            <link
              rel="stylesheet"
              href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400&display=swap"
            />
          </noscript>
          <link
            rel="preload"
            as="style"
            href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap"
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap"
            media="print"
            //@ts-ignore
            onLoad="this.media='all'"
          />
          <noscript>
            <link
              rel="stylesheet"
              href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap"
            />
          </noscript>
          <script type="text/javascript" src="/ieChecking.js" />
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_CODE}`}
          />
          {/* termly consent manager banner */}
          <script
            type="text/javascript"
            src="https://app.termly.io/embed.min.js"
            data-auto-block="on"
            data-website-uuid="8437675d-2ac7-4fbd-8e03-ad2b3b9e974a"
            async
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GA_CODE}', {
              page_path: window.location.pathname,
            });
          `
            }}
          />
          {/* hubspot cookie */}
          <script 
            type="text/javascript" 
            id="hs-script-loader" 
            async 
            defer
            src="//js.hs-scripts.com/8658136.js"
          />
        </Head>
        <body className="h-full bg-aserto-black">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
