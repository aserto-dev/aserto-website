import clsx from 'clsx'
import { CSSProperties } from 'react'

type Props = {
  style?: CSSProperties
  className?: string
}

const DotsGrid = ({ style, className }: Props) => (
  <svg
    width="299"
    height="299"
    viewBox="0 0 299 299"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={clsx(
      'text-ds-pewter pointer-events-none select-none',
      className
    )}
    style={style}
  >
    <g opacity="0.08">
      <circle cx="6" cy="47" r="6" fill="#81839F" />
      <circle cx="6" cy="6" r="6" fill="#81839F" />
      <circle cx="6" cy="88" r="6" fill="#81839F" />
      <circle cx="6" cy="129" r="6" fill="#81839F" />
      <circle cx="6" cy="170" r="6" fill="#81839F" />
      <circle cx="6" cy="252" r="6" fill="#81839F" />
      <circle cx="6" cy="211" r="6" fill="#81839F" />
      <circle cx="6" cy="293" r="6" fill="#81839F" />
      <circle cx="47" cy="47" r="6" fill="#81839F" />
      <circle cx="47" cy="6" r="6" fill="#81839F" />
      <circle cx="47" cy="88" r="6" fill="#81839F" />
      <circle cx="47" cy="129" r="6" fill="#81839F" />
      <circle cx="47" cy="170" r="6" fill="#81839F" />
      <circle cx="47" cy="252" r="6" fill="#81839F" />
      <circle cx="47" cy="211" r="6" fill="#81839F" />
      <circle cx="47" cy="293" r="6" fill="#81839F" />
      <circle cx="88" cy="47" r="6" fill="#81839F" />
      <circle cx="88" cy="6" r="6" fill="#81839F" />
      <circle cx="88" cy="88" r="6" fill="#81839F" />
      <circle cx="88" cy="129" r="6" fill="#81839F" />
      <circle cx="88" cy="170" r="6" fill="#81839F" />
      <circle cx="88" cy="252" r="6" fill="#81839F" />
      <circle cx="88" cy="211" r="6" fill="#81839F" />
      <circle cx="88" cy="293" r="6" fill="#81839F" />
      <circle cx="129" cy="47" r="6" fill="#81839F" />
      <circle cx="129" cy="6" r="6" fill="#81839F" />
      <circle cx="129" cy="88" r="6" fill="#81839F" />
      <circle cx="129" cy="129" r="6" fill="#81839F" />
      <circle cx="129" cy="170" r="6" fill="#81839F" />
      <circle cx="129" cy="252" r="6" fill="#81839F" />
      <circle cx="129" cy="211" r="6" fill="#81839F" />
      <circle cx="129" cy="293" r="6" fill="#81839F" />
      <circle cx="170" cy="47" r="6" fill="#81839F" />
      <circle cx="252" cy="47" r="6" fill="#81839F" />
      <circle cx="170" cy="6" r="6" fill="#81839F" />
      <circle cx="252" cy="6" r="6" fill="#81839F" />
      <circle cx="170" cy="88" r="6" fill="#81839F" />
      <circle cx="252" cy="88" r="6" fill="#81839F" />
      <circle cx="170" cy="129" r="6" fill="#81839F" />
      <circle cx="252" cy="129" r="6" fill="#81839F" />
      <circle cx="170" cy="170" r="6" fill="#81839F" />
      <circle cx="170" cy="252" r="6" fill="#81839F" />
      <circle cx="252" cy="170" r="6" fill="#81839F" />
      <circle cx="252" cy="252" r="6" fill="#81839F" />
      <circle cx="170" cy="211" r="6" fill="#81839F" />
      <circle cx="170" cy="293" r="6" fill="#81839F" />
      <circle cx="252" cy="211" r="6" fill="#81839F" />
      <circle cx="252" cy="293" r="6" fill="#81839F" />
      <circle cx="211" cy="47" r="6" fill="#81839F" />
      <circle cx="293" cy="47" r="6" fill="#81839F" />
      <circle cx="211" cy="6" r="6" fill="#81839F" />
      <circle cx="293" cy="6" r="6" fill="#81839F" />
      <circle cx="211" cy="88" r="6" fill="#81839F" />
      <circle cx="293" cy="88" r="6" fill="#81839F" />
      <circle cx="211" cy="129" r="6" fill="#81839F" />
      <circle cx="293" cy="129" r="6" fill="#81839F" />
      <circle cx="211" cy="170" r="6" fill="#81839F" />
      <circle cx="211" cy="252" r="6" fill="#81839F" />
      <circle cx="293" cy="170" r="6" fill="#81839F" />
      <circle cx="293" cy="252" r="6" fill="#81839F" />
      <circle cx="211" cy="211" r="6" fill="#81839F" />
      <circle cx="211" cy="293" r="6" fill="#81839F" />
      <circle cx="293" cy="211" r="6" fill="#81839F" />
      <circle cx="293" cy="293" r="6" fill="#81839F" />
    </g>
  </svg>
)

export default DotsGrid
