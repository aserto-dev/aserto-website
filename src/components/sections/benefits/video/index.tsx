import Container from 'components/sections/homepage/container'

const Video = ({ embed }: { embed: string }) => {
  return (
    <Container>
      <div className="relative pb-[56.25%] md:pb-[44%] overflow-hidden">
        <iframe
          className="absolute w-full h-full overflow-hidden md:left-1/2 md:transform md:-translate-x-1/2 md:w-[810px] md:h-[457px]"
          src={embed}
          frameBorder="0"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Welcome to Modern Authorization | YouTube"
        />
      </div>
    </Container>
  )
}

export default Video
