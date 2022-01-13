import React, { ReactChildren, ReactChild } from 'react'

interface ChildrenProps {
  children: ReactChild | ReactChildren
}
const SignupContainer = ({ children }: ChildrenProps) => {
  return (
    <div className="flex flex-col h-screen justify-center items-center">
      <div // bg-black bg-opacity-60 bg-[url('images/signup-modal-background.svg')]
        className="border-2 border-[#46d2d7] bg-aserto-grey-10"
        style={{
          borderRadius: '11px',
          padding: '20px',
          boxShadow: '0px 2px 22px 8px rgba(70,210,215,0.6)',
          backgroundImage: "url('/images/signup-modal-background.svg')"
        }}
      >
        {children}
      </div>
    </div>
  )
}

export default SignupContainer
