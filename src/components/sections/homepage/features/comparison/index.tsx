import { useCallback, useEffect, useState } from 'react'
import clsx from 'clsx'
import gsap from 'gsap'
import { Flip } from 'gsap/dist/Flip'
import { DURATION } from 'lib/gsap'

const Comparison = () => {
  const [isToggled, setIsToggled] = useState('real-time')
  const [filters, setFilters] = useState([])
  const [items, setItems] = useState([])

  useEffect(() => {
    gsap.registerPlugin(Flip)
    setFilters(gsap.utils.toArray('.filter'))
    setItems(gsap.utils.toArray('.item'))
  }, [])

  useEffect(() => {
    if (!filters.length || !items.length) return
    //@ts-ignore
    filters.forEach((btn) => btn.addEventListener('click', updateFilters))
  }, [filters])

  const updateFilters = useCallback(() => {
    if (!items.length) return
    const state = Flip.getState(items),
      classes = filters
        //@ts-ignore
        .filter((checkbox) => checkbox.checked)
        //@ts-ignore
        .map((checkbox) => '.' + checkbox.id),
      matches = classes.length ? gsap.utils.toArray(classes.join(',')) : classes

    items.forEach(
      (item) =>
        //@ts-ignore
        (item.style.display = matches.indexOf(item) === -1 ? 'none' : 'initial')
    )

    Flip.from(state, {
      simple: true,
      fade: true,
      nested: true,
      onEnter: (elements) =>
        gsap.fromTo(
          elements,
          { autoAlpha: 0, y: 30 },
          { autoAlpha: 1, y: 0, duration: DURATION, stagger: 0.1 }
        ),
      onLeave: (elements) =>
        gsap.to(elements, {
          autoAlpha: 0,
          duration: DURATION,
          stagger: 0.2
        })
    })
  }, [items])

  return (
    <div>
      <div className="flex justify-center mx-auto space-x-10 border-b border-aserto-grey-90 border-opacity-10 max-w-container">
        <button
          className={clsx(
            'text-sm sm:text-sm font-bold uppercase border-b-2 sm:border-b-4 focus:outline-none transition-colors tracking-wide sm:tracking-widest font-roboto cursor-pointer',
            {
              'text-aserto-grey-90 border-aserto-grey-90':
                isToggled === 'real-time',
              'text-aserto-grey-60 border-transparent':
                isToggled !== 'real-time'
            }
          )}
          onClick={() => setIsToggled('real-time')}
        >
          <label
            htmlFor="realTime"
            className="inline-block w-full px-4 py-2 cursor-pointer sm:px-8 sm:py-4"
          >
            <input
              className="sr-only filter"
              id="realTime"
              name="features"
              type="radio"
            />{' '}
            Authorization as easy <br /> as an API call
          </label>
        </button>

        <button
          className={clsx(
            'text-sm sm:text-sm font-bold uppercase border-b-2 sm:border-b-4 focus:outline-none transition-colors tracking-wide sm:tracking-widest font-roboto',
            {
              'text-aserto-grey-90 border-aserto-grey-90':
                isToggled === 'fine-grained',
              'text-aserto-grey-60 border-transparent':
                isToggled !== 'fine-grained'
            }
          )}
          onClick={() => setIsToggled('fine-grained')}
        >
          <label
            htmlFor="fineGrained"
            className="inline-block w-full px-4 py-2 cursor-pointer sm:px-8 sm:py-4"
          >
            <input
              className="sr-only filter"
              id="fineGrained"
              name="features"
              type="radio"
            />{' '}
            Enterprise ready <br /> permissions and RBAC
          </label>
        </button>
        <button
          className={clsx(
            'text-sm sm:text-sm font-bold uppercase border-b-2 sm:border-b-4 focus:outline-none transition-colors tracking-wide sm:tracking-widest font-roboto',
            {
              'text-aserto-grey-90 border-aserto-grey-90':
                isToggled === 'cloud-native',
              'text-aserto-grey-60 border-transparent':
                isToggled !== 'cloud-native'
            }
          )}
          onClick={() => setIsToggled('cloud-native')}
        >
          <label
            htmlFor="cloudNative"
            className="inline-block w-full px-4 py-2 cursor-pointer sm:px-8 sm:py-4"
          >
            <input
              type="radio"
              id="cloudNative"
              className="sr-only filter"
              name="features"
            />{' '}
            Modern GitOps workflow <br /> for policy-as-code
          </label>
        </button>
      </div>
    </div>
  )
}

export default Comparison
