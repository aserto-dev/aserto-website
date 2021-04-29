import Container from 'components/layout/container'
import Button from 'components/primitives/button'

const Hero = () => {
  return (
    <Container className="py-24">
      <h1 className="font-bold text-center text-white text-7xl">
        Welcome to product-led sales
      </h1>
      <p className="max-w-screen-md mx-auto mt-8 text-3xl text-center text-ds-pewter font-book">
        Endgame lets you connect the dots between user behavior and sales
        opportunities, without expensive data scientists or engineers.
      </p>
      <form className="flex items-center justify-center w-full max-w-screen-md mx-auto mt-12 rounded-md shadow-input">
        <label className="sr-only" htmlFor="hero-email">
          Email
        </label>
        <input
          id="hero-email"
          name="email"
          type="email"
          placeholder="Enter your email to get on the list..."
          className="w-full px-8 text-xl font-medium border border-gray-400 rounded-l-md h-14 text-ds-pewter font-book"
          required
        />
        <Button className="rounded-l-none">Go</Button>
      </form>
    </Container>
  )
}

export default Hero
