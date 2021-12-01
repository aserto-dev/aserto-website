import React from 'react'

interface SignupSuccessfulNotificationProps {
  email: string
}

const SignupSuccessfulNotification = (
  props: SignupSuccessfulNotificationProps
) => (
  <div
    className="text-aserto-grey-60"
    style={{ padding: '20px', fontSize: '24px', lineHeight: '32px' }}
  >
    <p>You&apos;re almost there!</p>
    <br />
    <p>
      {`An email is on its way to ${props.email}. Once you receive it, click the confirmation link to verify your account and set your password.`}
    </p>
    <br />
    <p>See you soon!</p>
    <br />
    <p className="text-aserto-lochivar-accent-40">{'- The Aserto Team'}</p>
  </div>
)

export default SignupSuccessfulNotification
