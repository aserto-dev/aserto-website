import { RefObject, useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

export const useTween = <El extends Element = HTMLElement>(
  action: 'from' | 'to',
  vars: gsap.TweenVars
) => {
  const targetRef = useRef<El>(null)
  const [tween, setTween] = useState<gsap.core.Tween>()

  useEffect(() => {
    if (!targetRef.current) return
    const tween = gsap[action](targetRef.current, vars)
    setTween(tween)

    return () => {
      tween.kill()
    }
  }, [action, vars])

  return [targetRef, tween]
}

export const useFadeIn = <El extends Element = HTMLDivElement>(
  callback?: () => void
): [RefObject<El>, gsap.plugins.ScrollTriggerInstance | undefined] => {
  const targetRef = useRef<El>(null)
  const [
    scrollTriggerInstance,
    setScrollTriggerInstance
  ] = useState<gsap.plugins.ScrollTriggerInstance>()

  useEffect(() => {
    if (!targetRef.current) return
    const tl = gsap.timeline({
      onComplete: callback
    })

    tl.fadeIn(targetRef.current.children)

    const scrollTriggerInstance = ScrollTrigger.create({
      trigger: targetRef.current,
      once: true,
      animation: tl
    })

    setScrollTriggerInstance(scrollTriggerInstance)

    return () => {
      scrollTriggerInstance.kill()
    }
  }, [callback])

  return [targetRef, scrollTriggerInstance]
}

export const useFadeInBottom = <El extends Element = HTMLDivElement>(): [
  RefObject<El>,
  gsap.plugins.ScrollTriggerInstance | undefined
] => {
  const targetRef = useRef<El>(null)
  const [
    scrollTriggerInstance,
    setScrollTriggerInstance
  ] = useState<gsap.plugins.ScrollTriggerInstance>()

  useEffect(() => {
    if (!targetRef.current) return
    const tween = gsap.effects.fadeInBottom(targetRef.current.children)
    const scrollTriggerInstance = ScrollTrigger.create({
      trigger: targetRef.current,
      once: true,
      animation: tween
    })
    setScrollTriggerInstance(scrollTriggerInstance)

    return () => {
      scrollTriggerInstance.kill()
    }
  }, [])

  return [targetRef, scrollTriggerInstance]
}
