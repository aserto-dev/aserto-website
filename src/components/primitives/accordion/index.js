import clsx from 'clsx'
import gsap from 'gsap'
import { DURATION } from 'lib/gsap'
import { useEffect, useRef, useState } from 'react'

import styles from './accordion.module.scss'

const Item = ({ children, isOpen, label, onClick }) => {
  const innerRef = useRef()
  const tl = useRef()
  const wrapperRef = useRef()

  const _onClick = () => {
    onClick(label)
  }

  useEffect(() => {
    tl.current = gsap.timeline({})

    if (isOpen) {
      tl.current.to(innerRef.current, {
        height: 'auto',
        marginBottom: '3vw'
      })
    } else {
      tl.current.to(innerRef.current, {
        duration: DURATION / 2,
        height: 0,
        marginBottom: 0
      })
    }
  }, [isOpen])

  return (
    <div ref={wrapperRef} className={styles.wrapper}>
      <div
        onClick={_onClick}
        className={clsx(
          'flex items-center justify-between pt-8 mb-8 cursor-pointer',
          styles.item
        )}
      >
        <span className="pr-8 text-base md:leading-tight text-aserto-grey-90 sm:text-lg md:text-2xl font-roboto">
          {label}
        </span>
        <svg
          style={{ '--rotation': isOpen ? 'rotate(45deg)' : 'rotate(0)' }}
          className={clsx(
            'w-8 h-8 transition-transform duration-200',
            styles.icon
          )}
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className="text-aserto-grey-90"
            stroke="currentColor"
            d="M0 14.5h30M15.5 0v30"
          />
        </svg>
      </div>
      <span ref={innerRef} className={styles.inner}>
        {children}
      </span>
    </div>
  )
}

const Accordion = ({ children, allowMultipleOpen = false }) => {
  const [openSections, setOpensections] = useState([])

  useEffect(() => {
    children?.forEach((child) => {
      if (child.props.isOpen) {
        openSections[child.props.label] = true
      }
    })
  }, [children, openSections])

  const _onClick = (label) => {
    const isOpen = !!openSections[label]

    if (allowMultipleOpen) {
      setOpensections({
        ...openSections,
        [label]: !isOpen
      })
    } else {
      setOpensections({
        [label]: !isOpen
      })
    }
  }

  return (
    <>
      {children?.map((child, i) => (
        <Item
          key={i}
          isOpen={!!openSections[child.props.label]}
          label={child.props.label}
          onClick={_onClick}
        >
          {child.props.children}
        </Item>
      ))}
    </>
  )
}

export default Accordion
