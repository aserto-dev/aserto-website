import { CSSProperties } from 'react'
import * as AspectRatio from '@radix-ui/react-aspect-ratio'

export type ImageProps = JSX.IntrinsicElements['img'] & {
  objectFit?: CSSProperties['objectFit']
  layout?: 'native' | 'responsive' | 'intrinsic'
}

const Image = ({ layout, objectFit, ...imgProps }: ImageProps) => {
  switch (layout) {
    case 'native':
      return <img {...imgProps} style={{ ...imgProps.style, objectFit }} />
    case 'responsive': {
      const width =
        typeof imgProps.width === 'string'
          ? parseFloat(imgProps.width)
          : imgProps.width ?? 1
      const height =
        typeof imgProps.height === 'string'
          ? parseFloat(imgProps.height)
          : imgProps.height ?? 1
      return (
        <AspectRatio.Root ratio={width / height}>
          <picture>
            <img
              {...imgProps}
              style={{
                ...imgProps.style,
                objectFit,
                width: '100%',
                height: '100%'
              }}
            />
          </picture>
        </AspectRatio.Root>
      )
    }
    default:
    case 'intrinsic': {
      const width =
        typeof imgProps.width === 'string'
          ? parseFloat(imgProps.width)
          : imgProps.width ?? 1
      const height =
        typeof imgProps.height === 'string'
          ? parseFloat(imgProps.height)
          : imgProps.height ?? 1
      return (
        <AspectRatio.Root ratio={width / height} style={{ maxWidth: width }}>
          <picture>
            <img
              {...imgProps}
              style={{
                ...imgProps.style,
                objectFit,
                width: '100%',
                height: '100%'
              }}
            />
          </picture>
        </AspectRatio.Root>
      )
    }
  }
}

export default Image
