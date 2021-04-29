// import { Transition } from '@headlessui/react'
import { useFadeInBottom } from 'hooks/use-gsap'
import Logo from 'components/primitives/logo'
import { useCallback, useEffect, useState } from 'react'
import Comparison from '../../comparison'
import Button from 'components/primitives/button'

import styles from './hero.module.css'
import clsx from 'clsx'

const TailwindHero = () => {
  const [ref] = useFadeInBottom()
  const [menuIsOpen, setMenuIsOpen] = useState(false)

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      const { target } = e
      if (target instanceof HTMLElement) {
        const closest = target.closest('[data-mobile-menu="true"]')
        if (closest) return // Do nothing
        setMenuIsOpen(false)
      }
    }
    if (menuIsOpen) {
      document.addEventListener('click', handleClick)
      return () => {
        document.removeEventListener('click', handleClick)
      }
    }
  }, [menuIsOpen])

  const handleClick = useCallback(() => {
    const elem = document.querySelector('#newsletter')
    window.scrollTo({
      top: elem?.getBoundingClientRect().top,
      behavior: 'smooth'
    })
  }, [])

  return (
    <div className={clsx('relative', styles.section)}>
      <main className="px-4 mx-auto pt-28 max-w-container">
        <div className="text-center" ref={ref}>
          <h1
            className="text-5xl font-extrabold leading-none tracking-tighter text-white md:text-6xl xl:text-7xl"
            style={{ lineHeight: '1.1' }}
          >
            Welcome to modern <br className="hidden sm:inline" /> authorization
          </h1>
          <p className="mx-auto mt-5 text-base leading-normal text-white sm:text-lg md:mt-10 md:text-2xl md:max-w-3xl font-book">
            Aserto is a cloud-native authorization service that provides
            fine-grained, real-time access control for your SaaS application.
          </p>

          <div className="px-0 mx-auto mt-4 mb-10 sm:mt-14 sm:mb-20 sm:max-w-4xl sm:px-10 sm:mx-auto sm:text-center">
            <Button
              className="w-full mt-4 ml-0 sm:w-auto sm:mt-0"
              onClick={handleClick}
            >
              Sign up for our beta
            </Button>
          </div>
          <Comparison />
        </div>
      </main>
    </div>
  )
}

export default TailwindHero
