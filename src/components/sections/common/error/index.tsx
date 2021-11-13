import React, { Fragment } from 'react'
import Image from '../../../primitives/image'

const ServiceError = () => {
  return (
    <div
      className="flex flex-col h-screen items-center"
      style={{ minHeight: '800px' }}
    >
      <div
        className="bg-aserto-lochivar-50 flex flex-col items-center w-full"
        style={{ minHeight: '400px' }}
      >
        <Image
          layout="native"
          width={287}
          height={160}
          src="/images/sad-lottie.svg"
          style={{ paddingTop: '80px' }}
        />
        <div
          className="font-roboto text-aserto-grey-90"
          style={{ fontSize: '92px' }}
        >
          <Fragment>{'500'}</Fragment>
        </div>
      </div>
      <div
        className="flex flex-col items-center w-full h-full"
        style={{ padding: '50px' }}
      >
        <div className="flex flex-col font-roboto items-center text-aserto-grey-90 w-full">
          <div style={{ fontSize: '32px', minHeight: '56px' }}>
            <Fragment>{'Looks like something went wrong!'}</Fragment>
          </div>
          <div style={{ fontSize: '20px', minHeight: '56px' }}>
            <Fragment>
              {
                "We're sorry about this. Please refresh the page and try again. If problem persists, contact us."
              }
            </Fragment>
          </div>
        </div>
        <div style={{ flexGrow: 1, position: 'absolute', bottom: '62px' }}>
          <Image
            layout="native"
            width={78}
            height={80}
            src="/images/aserto-vertical-color-white-text.svg"
          />
        </div>
      </div>
    </div>
  )
}

export default ServiceError
