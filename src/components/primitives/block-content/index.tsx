// @ts-ignore
import DefaultBlockContent from '@sanity/block-content-to-react'
import clsx from 'clsx'
import s from './block-content.module.scss'

export const BlockContent = ({
  blocks,
  className,
  unstyled
}: {
  blocks: any
  className?: string
  unstyled?: boolean
}) => (
  <div className={clsx(className, { [s.markdown]: !unstyled })}>
    <DefaultBlockContent blocks={blocks} />
  </div>
)
