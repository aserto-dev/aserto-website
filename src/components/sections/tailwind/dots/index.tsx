import Dots from './dots'

const DotsContainer = () => (
  <div
    className="hidden sm:block sm:absolute sm:inset-y-0 sm:h-full sm:w-full"
    aria-hidden="true"
  >
    <div className="relative h-full mx-auto max-w-container">
      <Dots
        className="absolute transform right-full translate-y-1/4 translate-x-1/4 lg:translate-x-1/2"
        opacity="0.12"
        color="text-ds-pewter"
      />
      <Dots
        className="absolute transform left-full -translate-y-3/4 -translate-x-1/4 md:-translate-y-1/2 lg:-translate-x-1/2"
        opacity="0.12"
        color="text-ds-pewter"
      />
    </div>
  </div>
)

export default DotsContainer
