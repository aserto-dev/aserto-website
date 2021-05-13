import { useFadeInBottom } from 'hooks/use-gsap'
import Image from 'next/image'

const Hero = () => {
  const [ref] = useFadeInBottom()

  return (
    <section className="w-10/12 pt-24 pb-12 mx-auto sm:pb-44">
      <div className="relative z-10 pt-3 text-center" ref={ref}>
        <h1 className="text-5xl leading-none tracking-tight text-aserto-grey-90 md:text-6xl xl:text-7.5xl">
          Aserto is hiring.
        </h1>
        <div className="relative grid items-center gap-4 mx-auto mt-24 lg:gap-8 lg:grid-cols-2">
          <div>
            <Image
              src="/images/careers/hero/001.svg"
              width="278"
              height="220"
            />
          </div>
          <div>
            <Image
              src="/images/careers/hero/002.svg"
              width="278"
              height="197"
            />
          </div>
        </div>
        <p className="w-full mx-auto text-1.5xl text-left mt-10 md:leading-tight text-aserto-grey-60 sm: md:mt-10 sm:text-2xl font-roboto">
          If you love building developer-centric software, enjoy solving hard
          distributed system problems, have a passion for open source, and are
          excited to create a strong developer community, then come join us in
          building the next big developer API company. We offer competitive
          salaries, early-stage equity, and comprehensive benefits.
          <br />
          <br />
          We’re early stage and well funded. Although we’re headquatered in
          Seattle, our team is global.
        </p>
      </div>
    </section>
  )
}

export default Hero
