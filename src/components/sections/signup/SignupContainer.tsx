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
}
const SignupContainer = ({ children, closeModal }: ChildrenProps) => {
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
      className="fixed top-0 left-0 h-full w-full z-50 bg-black/20"
      style={{
        background:
          'radial-gradient(circle at center, #3ecacf -100%, rgba(18, 18, 18, 0) 100% )'
      }}
    >
      <div
        className="fixed top-1/2 left-1/2 bg-aserto-grey-10
                  p-[20px] border-2 border-[#46d2d7] rounded-[11px]"
        ref={ref}
        style={{
          boxShadow: '0px 2px 22px 8px rgba(70,210,215,0.6)',
          transform: 'translate(-50%,-50%)'
        }}
      >
        {children}
      </div>
    </div>
  )
}

export default SignupContainer
