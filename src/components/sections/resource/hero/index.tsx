import { BlockContent } from 'components/primitives/block-content'
import Container from 'components/sections/homepage/container'
import HubspotForm from 'lib/hubspot/HubspotForm'
import { NameToFormId } from 'lib/hubspot/HubspotIds'
import { ResourceFragment } from 'lib/sanity/generated'

const Hero = ({ page }: { page: ResourceFragment }) => {
  return (
    <Container className="bg-resourceHero pt-8 lg:pt-[100px] flex flex-wrap gap-8">
      <div className="flex-col align-middle lg:w-1/2 lg:inline-flex pb-20 sm:px-8 lg:px-12">
        <h1
          className="my-[20px] mx-auto w-full text-[30px] leading-[45px]
          xl:text-[50px] xl:leading-[60px] text-aserto-grey-90"
        >
          {page.title}
        </h1>
        <BlockContent
          className="resource w-full mx-auto mt-16 text-aserto-grey-90 text-[22px] leading-8"
          blocks={page.subtitleRaw}
        />
      </div>
      <div className="lg:w-1/2 lg:inline-flex align-middle my-auto">
        <div
          className="md:w-[560px] mx-auto p-[20px] w-full bg-aserto-grey-10
            border border-[#717171] rounded-[11px]"
        >
          <h4 className="text-[30px] font-semibold my-4 text-aserto-grey-90 text-center">
            Get the report
          </h4>
          <HubspotForm formId={NameToFormId.kuppingercoleReport} />
        </div>
      </div>
    </Container>
  )
}

export default Hero
