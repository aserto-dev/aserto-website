import { useEffect } from 'react'

// Layout
import PageLayout from 'components/layout/page'

const PrivacyPolicy = () => {
  useEffect(() => {
    ;(function (d, s, id) {
      var js,
        tjs = d.getElementsByTagName(s)[0]
      // react vdom will overwrite - so need to recreate
      // this upon page entry
      //if (d.getElementById(id)) return
      js = d.createElement(s)
      js.id = id
      //@ts-ignore
      js.src = 'https://app.termly.io/embed-policy.min.js'
      //@ts-ignore
      tjs.parentNode.insertBefore(js, tjs)
    })(document, 'script', 'termly-jssdk')
  }, [])
  return (
    <PageLayout
      contain
      footer="regular"
      headProps={{
        title: 'Aserto Privacy Policy',
        description: 'Aserto privacy policy',
        image: 'images/og.png'
      }}
    >
      <section className="py-14">
        <div
          className="mt-12"
          //@ts-ignore
          name="termly-embed"
          data-id="ba083967-5289-4f38-9eb2-a3fb00796b73"
          data-type="iframe"
        ></div>
      </section>
    </PageLayout>
  )
}

export default PrivacyPolicy
