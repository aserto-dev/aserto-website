// @ts-ignore
import DefaultBlockContent from '@sanity/block-content-to-react'
import clsx from 'clsx'
import s from './block-content.module.scss'
import getYouTubeId from 'get-youtube-id'
import YouTube from 'react-youtube'

const serializers = {
  types: {
    code: (props: any) => (
      <pre data-language={props.node.language}>
        <code>{props.node.code}</code>
      </pre>
    ),
    mainImage: (props: any) => {
      const [, id, measures, extension] = props.node.asset._ref.split('-')
      const src = `https://cdn.sanity.io/images/${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}/${process.env.NEXT_PUBLIC_SANITY_DATASET}/${id}-${measures}.${extension}`
      return (
        <figure>
          <img src={src} />
          <figcaption>{props.node.caption}</figcaption>
        </figure>
      )
    },
    blogBodyImage: (props: any) => {
      const [, id, measures, extension] = props.node.asset._ref.split('-')
      const src = `https://cdn.sanity.io/images/${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}/${process.env.NEXT_PUBLIC_SANITY_DATASET}/${id}-${measures}.${extension}`
      return (
        <figure>
          <img src={src} alt={props.node.alt} />
          <figcaption>
            <DefaultBlockContent blocks={props.node.caption || []} />
          </figcaption>
        </figure>
      )
    },
    youtube: (props: any) => {
      const { node } = props
      const { url } = node
      const id = getYouTubeId(url)
      const opts = {
        height: '480',
        width: '100%'
      }
      return id ? <YouTube videoId={id} opts={opts} /> : <></>
    }
  }
}

export const BlockContent = ({
  blocks,
  className,
  unstyled,
  spaced,
  spacedParagraph
}: {
  blocks: any
  className?: string
  unstyled?: boolean
  spaced?: boolean
  spacedParagraph?: boolean
}) => {
  return (
    <div
      className={clsx(
        className,
        { [s.markdown]: !unstyled },
        { [s.spaced]: spaced },
        { [s.spaced_paragraph]: spacedParagraph }
      )}
    >
      <DefaultBlockContent blocks={blocks || []} serializers={serializers} />
    </div>
  )
}
