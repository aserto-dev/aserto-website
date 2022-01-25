import React from 'react'

interface SignupSuccessfulNotificationProps {
  email: string
  closeModal?: () => void
}

const SignupSuccessfulNotification = (
  props: SignupSuccessfulNotificationProps
) => (
  <div className="text-[16px] leading=[24px]">
    <img // get centered image?
      className="mx-[auto] mt-[15px] mb-[25px] sm:mt-[30px] sm:mb-[45px]
                pr-[20px] sm:pr-[27px] w-[104px] sm:w-[174px]"
      src="/images/email-sent.svg"
      alt="Email Sent"
    />
    <div className="text-aserto-grey-90 my-[30px] w-[80vw] sm:w-[500px]">
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
    {props.closeModal && (
      <button
        className={`font-roboto w-full h-[48px] sm:h-[60px] rounded-[6px]
                  border border-[#4a4a4a] text-aserto-grey-90
                  bg-aserto-grey-10 hover:bg-aserto-grey-20
                  active:bg-aserto-grey-30 disabled:bg-aserto-grey-5
                  disabled:bg-aserto-grey-30`}
        onClick={props.closeModal}
      >
        Close
      </button>
    )}
  </div>
)

export default SignupSuccessfulNotification
