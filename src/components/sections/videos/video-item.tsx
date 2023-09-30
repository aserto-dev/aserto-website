import { VideoBlock } from 'lib/sanity/generated'
import Image from 'components/primitives/image'

type Props = {
  data: VideoBlock
}

const VideoItem = ({ data }: Props) => {
  return (
    <a target="_blank" href={data.url || ''} rel="noopener noreferrer">
      <div className="flex flex-col overflow-hidden border rounded border-aserto-grey-10 cursor-pointer">
        <div className="bg-aserto-grey-5 rounded h-[200px]">
          {data.videoType === 'youtube' ? (
            <iframe
              className="w-full h-full overflow-hidden"
              src={data.embedUrl ?? ''}
              title={data.title ?? ''}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          ) : (
            <Image
              src={data.defaultPreview?.asset?.url || ''}
              alt={data.defaultPreview?.alt || ''}
              className="h-[200px]"
              objectFit="cover"
              layout="responsive"
            />
          )}
        </div>
        <div className="relative flex flex-col h-1/4 justify-between px-8 py-8 bg-aserto-grey-20">
          <div className="flex-1">
            <h4 className="text-xl text-aserto-grey-90 sm:text-xl">
              {data.description}
            </h4>
          </div>
          <div className="text-aserto-lochivar-accent-40 mt-10 text-xl">
            <a className="hover:underline">Watch video</a>
          </div>
        </div>
      </div>
    </a>
  )
}

export default VideoItem
