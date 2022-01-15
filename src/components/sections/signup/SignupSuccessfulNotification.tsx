import React from 'react'

interface SignupSuccessfulNotificationProps {
  email: string
  closeModal: () => void
}

const SignupSuccessfulNotification = (
  props: SignupSuccessfulNotificationProps
) => (
  <div>
    <img
      className="ml-[145px] mt-[30px] mb-[45px]"
      src="/images/email-sent.svg"
      alt="Email Sent"
      height={100}
    />
    <div
      className="text-aserto-grey-90 my-[30px]"
      style={{
        width: '500px',
        fontSize: '16px',
        lineHeight: '24px'
      }}
    >
      <p>You&apos;re almost there!</p>
      <br />
      <p>
        {`An email is on its way to ${props.email}. Once you receive it, 
        click the confirmation link to verify your account and set your password.
        See you soon!`}
      </p>
      <br />
      <p className="font-bold">The Aserto Team</p>
    </div>
    <button
      className={`font-roboto w-full border border-[#4a4a4a] bg-aserto-grey-10
                text-aserto-grey-90 hover:bg-aserto-grey-20 active:bg-aserto-grey-30 
                disabled:bg-aserto-grey-5 disabled:bg-aserto-grey-30`}
      onClick={props.closeModal}
      style={{
        borderRadius: '6px',
        fontSize: '16px',
        height: '60px',
        lineHeight: '24px'
      }}
    >
      Close
    </button>
  </div>
)

export default SignupSuccessfulNotification
