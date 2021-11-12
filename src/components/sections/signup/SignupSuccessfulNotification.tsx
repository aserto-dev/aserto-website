import React from 'react'

const SignupSuccessfulNotification = () => {
  return (
    <div
      id="didSignup"
      className="text-aserto-grey-60"
      style={{ padding: '20px', fontSize: '24px', lineHeight: '32px' }}
    >
      <p>{"You're almost there!"}</p>
      <br />
      <p>
        {
          "An email is on its way to 'email address'.Once you receive it, click the confirmation link  to get things started."
        }
      </p>
      <br />
      <p>{'See you soon!'}</p>
      <br />
      <text className="text-aserto-lochivar-accent-40">
        {'- The Aserto Team'}
      </text>
    </div>
  )
}

export default SignupSuccessfulNotification
