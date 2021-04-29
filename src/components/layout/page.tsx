import Container from './container'
import Footer from './footer'
import Header from './header'
import CustomHead from 'components/primitives/custom-head'

interface Props {
  children?: React.ReactNode
  contain?: boolean
  headProps: React.ComponentPropsWithoutRef<typeof CustomHead>
}

const PageLayout = ({ children, contain, headProps }: Props) => {
  return (
    <>
      <CustomHead {...headProps} />
      <Header />
      <main>{contain ? <Container>{children}</Container> : children}</main>
      <Footer />
    </>
  )
}

export default PageLayout
