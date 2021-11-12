import React, { ReactChildren, ReactChild } from 'react'
import Image from '../../primitives/image'

interface ChildrenProps {
  children: ReactChild | ReactChildren
}
const SignupContainer = ({ children }: ChildrenProps) => {
  return (
    <div
      className="flex flex-col items-center"
      style={{ gap: '58px', paddingBottom: '225px' }}
    >
      <div>
        <Image
          layout="native"
          width={106}
          height={108}
          src="/images/aserto-logo.png"
        />
      </div>
      <div
        className="border border-aserto-grey-20 border-opacity-100 w-full"
        style={{
          backgroundColor: '#262626',
          borderRadius: '11px',
          height: '397px',
          width: '600px'
        }}
      >
        {children}
      </div>
    </div>
  )
}

export default SignupContainer
