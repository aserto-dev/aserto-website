import { BlockContent } from 'components/primitives/block-content'
import Container from 'components/sections/homepage/container'
import HubspotForm from 'lib/hubspot/HubspotForm'
import { ResourceFragment } from 'lib/sanity/generated'

const Hero = ({ page }: { page: ResourceFragment }) => {
  return (
    <Container className="bg-resourceHero pt-16 lg:pt-[100px] flex flex-wrap gap-8">
      <div className="flex-col align-top lg:w-1/2 lg:inline-flex pb-20 sm:px-8 lg:px-12">
        <h1
          className="mx-auto w-full text-[30px] leading-[45px]
          xl:text-[50px] xl:leading-[60px] text-aserto-grey-90"
        >
          {page.title}
        </h1>
        <BlockContent
          className="resource w-full mx-auto mt-16 text-aserto-grey-90 text-[22px] leading-8"
          blocks={page.subtitleRaw}
        />
      </div>
      {!!page.formId && (
        <div className="lg:w-1/2 lg:inline-flex align-top my-auto">
          <div
            className="md:w-[560px] mx-auto p-[20px] w-full bg-aserto-grey-10
            border border-[#717171] rounded-[11px]"
          >
            <h4 className="text-[30px] font-semibold my-4 text-aserto-grey-90 text-center">
              {page.formTitle}
            </h4>
            <HubspotForm formId={page.formId} />
          </div>
        </div>
      )}
    </Container>
  )
}

export default Hero
