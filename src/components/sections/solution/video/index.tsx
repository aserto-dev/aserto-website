import Container from 'components/sections/homepage/container'
import { SolutionFragment } from 'lib/sanity/generated'

const Video = ({ page }: { page: SolutionFragment }) => {
  return page.videoItem?.embedUrl ? (
    <Container className="pb-48 flex flex-wrap gap-8">
      <h2 className="text-2xl pb-5 text-aserto-grey-90 text-center">
        {page.videoItem.title}
      </h2>
      <iframe
        className="w-full h-full overflow-hidden md:w-[810px] md:h-[457px]"
        width="810"
        height="457"
        src={page.videoItem.embedUrl}
        title={
          page.videoItem.embedTitle ||
          'Welcome to Modern Authorization | Aserto Overview'
        }
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </Container>
  ) : (
    <></>
  )
}

export default Video
