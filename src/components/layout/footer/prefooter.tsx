import Button from 'components/primitives/button'
import Container from '../container'

const Prefooter = () => {
  return (
    <Container>
      <div className="grid items-center grid-cols-2 gap-8 p-16 rounded-lg bg-gradient-to-br from-ds-seaform to-ds-endgame">
        <div className="space-y-2">
          <h2 className="text-4xl font-bold text-white">
            Try Endgame for free!
          </h2>
          <p className="text-2xl text-white text-opacity-80 font-book">
            Here is a valuable offer worth your time!
          </p>
        </div>
        <form className="flex items-center justify-center w-full max-w-screen-md rounded-md shadow-input">
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
      </div>
    </Container>
  )
}

export default Prefooter
