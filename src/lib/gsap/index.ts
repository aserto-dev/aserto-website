import gsap from 'gsap'
import { CustomEase } from 'gsap/dist/CustomEase'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger, CustomEase)

const GOLDEN_RATIO = (1 + Math.sqrt(5)) / 2
const RECIPROCAL_GR = 1 / GOLDEN_RATIO
const DURATION = RECIPROCAL_GR

export type RegisteredEffects = 'fadeIn' | 'fadeInBottom'

const initGsap = () => {
  gsap.defaults({
    // ease: 'power3',
    ease: CustomEase.create(
      'custom',
      'M0,0 C0.126,0.382 0.142,0.652 0.3,0.8 0.492,0.98 0.818,1.001 1,1 '
    ),
    duration: DURATION
  })

  gsap.registerEffect({
    name: 'fadeIn',
    extendTimeline: true,
    defaults: {
      delay: 0,
      duration: DURATION,
      stagger: 0.1
    },
    effect: (targets: any, config: any) => {
      const tl = gsap.timeline()
      tl.from(targets, {
        autoAlpha: 0,
        delay: config.delay,
        duration: config.duration,
        ease: config.ease,
        stagger: config.stagger
      })
      return tl
    }
  })

  gsap.registerEffect({
    name: 'fadeInBottom',
    extendTimeline: true,
    defaults: {
      delay: 0,
      duration: DURATION,
      stagger: 0.05,
      y: 30
    },
    effect: (targets: any, config: any) => {
      const tl = gsap.timeline()
      tl.from(targets, {
        autoAlpha: 0,
        delay: config.delay,
        duration: config.duration,
        ease: config.ease,
        stagger: config.stagger,
        y: config.y
      })
      return tl
    }
  })
}

export default initGsap
export { DURATION }
