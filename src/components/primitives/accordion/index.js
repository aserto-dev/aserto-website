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
        width: '100%',
        marginBottom: '1vw'
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
        className={clsx('flex items-center justify-between mb-8', styles.item)}
      >
        <span className="pr-8 w-full text-2xl md:leading-tight text-aserto-grey-90 font-roboto">
          {label}
        </span>
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
          isOpen={true}
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
