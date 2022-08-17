import Container from 'components/layout/container'
import PageLayout from 'components/layout/page'
import s from '../components/sections/goodbye/goodbye.module.css'

const GoodbyePage = () => {
  return (
    <PageLayout
      headProps={{
        title: 'Goodbye Page',
        description:
          'This is the Goodbye page where delete account will be redirected'
      }}
    >
      <div className={`pt-20 ${s.background}`}>
        <Container>
          <img
            className="w-[400px] h-[254px] mx-auto "
            src="images/rain-lottie.png"
            alt="Lottie"
          />
          <br></br>
          <h1 className="text-3xl leading-none text-aserto-grey-90 text-center">
            Lottie and our team are sorry to see you go.
          </h1>
          <br></br>
          <h3 className="text-xl font-bold leading-none text-aserto-grey-90 text-center ">
            Your account has been deleted.
          </h3>
        </Container>
      </div>
    </PageLayout>
  )
}
export default GoodbyePage
