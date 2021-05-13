import clsx from 'clsx'
import { useFadeInBottom } from 'hooks/use-gsap'

// Styles
import s from './hero.module.css'

const Hero = () => {
  const [ref] = useFadeInBottom()

  return (
    <section className={clsx('pt-80 mx-auto pb-12 sm:pb-44', s.background)}>
      <div className="relative z-10 pt-3 text-center" ref={ref}>
        <h1 className="text-5xl leading-none tracking-tight text-aserto-grey-90 md:text-6xl xl:text-7.5xl">
          Aserto is hiring.
        </h1>
        <p className="w-full mx-auto text-1.5xl text-left mt-14 md:leading-tight text-aserto-grey-60 sm: md:mt-10 sm:text-2xl sm:w-10/12 font-roboto">
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
