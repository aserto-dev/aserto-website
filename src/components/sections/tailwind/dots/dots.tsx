type Props = {
  className?: string
  opacity?: string
  color?: string
}

const Dots = ({ className, opacity = '0.3', color }: Props) => (
  <svg
    className={className}
    fill="none"
    height="784"
    opacity={opacity}
    viewBox="0 0 404 784"
    width="404"
  >
    <defs>
      <pattern
        id="dots-pattern"
        x="0"
        y="0"
        width="20"
        height="20"
        patternUnits="userSpaceOnUse"
      >
        <rect
          x="0"
          y="0"
          width="4"
          height="4"
          fill="currentColor"
          className={color}
        />
      </pattern>
    </defs>
    <rect width="404" height="784" fill="url(#dots-pattern)" />
  </svg>
)

export default Dots
