// Layout
import PageLayout from 'components/layout/page'

const ContactConfirmation = () => {
  return (
    <PageLayout
      headProps={{
        title: 'Thank you',
        description: 'Thank you for contacting us',
        image: 'images/og.png'
      }}
    >
      <div className="relative bg-gradient-to-t from-aserto-black to-aserto-lochivar-50">
        {/* to-aserto-lochivar-accent-10 to-aserto-lochivar-50 */}
        <div className="relative mx-auto mb-40 px-[20px] h-full w-full items-center text-center text-aserto-grey-90">
          <img
            className="w-[450px] mx-auto"
            src="images/lottie.png"
            alt="Lottie"
          />
          <h1 className="text-[32px] leading-[36px] sm:h-[60px] h-[90px]">
            {`Your message is on it's way to us!`}
          </h1>
          <h2 className="text-[20px] leading-[28px] sm:h-[36px] h-[60px]">
            {`Lottie is swimming as fast as she can, and we'll contact you soon.`}
          </h2>
        </div>
      </div>
    </PageLayout>
  )
}

export default ContactConfirmation
