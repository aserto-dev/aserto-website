// Hooks
import { useFadeInBottom } from 'hooks/use-gsap'

const Hero = ({ page }: { page: { title: string; subtitle: string } }) => {
  const [ref] = useFadeInBottom()
  return (
    <section className="relative mx-auto py-10 text-center" ref={ref}>
      <h1 className="text-5xl leading-none text-aserto-grey-90 mx-auto">
        {page.title}
      </h1>
      <h2 className="mx-auto mt-3 text-base text-aserto-grey-90 text-2xl font-roboto">
        {page.subtitle}
      </h2>
    </section>
  )
}

export default Hero
