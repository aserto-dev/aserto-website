import Link from 'components/primitives/link'
import React, { ReactChildren, ReactChild } from 'react'
import Image from '../../primitives/image'

interface ChildrenProps {
  children: ReactChild | ReactChildren
}
const SignupContainer = ({ children }: ChildrenProps) => {
  return (
    <div
      className="flex flex-col items-center"
      style={{ gap: '58px', paddingBottom: '225px', paddingTop: '70px' }}
    >
      <>
        <Link href="/">
          <Image
            layout="native"
            width={145}
            height={150}
            src="/images/aserto-vertical-color-white-text.svg" />
        </Link>
      </>
      <div
        className="border border-aserto-grey-20 border-opacity-100 w-full"
        style={{
          backgroundColor: '#262626',
          borderRadius: '11px',
          height: '420px',
          width: '600px'
        }}
      >
        {children}
      </div>
    </div>
  )
}

export default SignupContainer
