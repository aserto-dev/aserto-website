import React, {
  ReactChildren,
  ReactChild,
  useRef,
  useEffect,
  RefObject
} from 'react'

interface ChildrenProps {
  children: ReactChild | ReactChildren
  closeModal?: () => void
  background?: boolean
}
const SignupContainer = ({
  children,
  closeModal,
  background = true
}: ChildrenProps) => {
  const ref = useRef<HTMLDivElement>(null)
  const useOutsideAlerter = (
    ref: RefObject<HTMLDivElement>,
    closeModal?: () => void
  ) => {
    useEffect(() => {
      function handleClickOutside(e: MouseEvent) {
        if (
          ref.current &&
          !ref.current.contains(e.target as HTMLDivElement) &&
          closeModal
        ) {
          closeModal()
        }
      }
      document.addEventListener('mousedown', handleClickOutside)
      return () => {
        document.removeEventListener('mousedown', handleClickOutside)
      }
    }, [ref, closeModal])
  }

  useOutsideAlerter(ref, closeModal)

  return (
    <div
      className={`fixed top-0 left-0 h-full w-full z-50 ${
        background && 'sm:bg-modal'
      }`}
    >
      <div
        className="fixed top-1/2 left-1/2 bg-aserto-grey-10 shadow-modal
                  p-[20px] border-2 border-[#46d2d7] rounded-[11px]
                  transform -translate-x-1/2 -translate-y-1/2"
        ref={ref}
      >
        {children}
      </div>
    </div>
  )
}

export default SignupContainer
