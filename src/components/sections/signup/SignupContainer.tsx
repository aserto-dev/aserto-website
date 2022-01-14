import React, {
  ReactChildren,
  ReactChild,
  useRef,
  useEffect,
  RefObject
} from 'react'

interface ChildrenProps {
  children: ReactChild | ReactChildren
  closeModal: () => void
}
const SignupContainer = ({ children, closeModal }: ChildrenProps) => {
  const ref = useRef<HTMLDivElement>(null)
  const useOutsideAlerter = (
    ref: RefObject<HTMLDivElement>,
    closeModal: () => void
  ) => {
    useEffect(() => {
      function handleClickOutside(e: MouseEvent) {
        if (ref.current && !ref.current.contains(e.target as HTMLDivElement)) {
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
    <div className="fixed top-0 left-0 h-full w-full z-50 bg-black/60">
      <div // bg-black bg-opacity-60 bg-[url('images/signup-modal-background.svg')]
        className="fixed top-1/2 left-1/2 border-2 border-[#46d2d7] bg-aserto-grey-10"
        ref={ref}
        style={{
          borderRadius: '11px',
          padding: '20px',
          boxShadow: '0px 2px 22px 8px rgba(70,210,215,0.6)',
          // backgroundImage: "url('/images/signup-modal-background.svg')",
          transform: 'translate(-50%,-50%)'
        }}
      >
        {children}
      </div>
    </div>
  )
}

export default SignupContainer
