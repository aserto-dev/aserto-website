import { Player } from '@lottiefiles/react-lottie-player'

const LottiePlayer = () => (
  <Player
    autoplay
    background="transparent"
    speed={1}
    loop
    src="/homepage-animation.json"
    // style={{ height: '300px', width: '300px' }}
  />
)

export default LottiePlayer
