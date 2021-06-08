import { useEffect } from 'react'

// Primitives
import CustomHead from 'components/primitives/custom-head'

// Layout
import PageLayout from 'components/layout/page'

const TermsOfService = () => {
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
      headProps={{
        title: 'Aserto Faq',
        description: '',
        image: 'images/og.png'
      }}
    >
      <CustomHead />
      <section className="py-14">
        <div
          className="mt-12"
          //@ts-ignore
          name="termly-embed"
          data-id="e47eb710-2081-416f-bc68-d2a10759a1c0"
          data-type="iframe"
        />
      </section>
    </PageLayout>
  )
}

export default TermsOfService
