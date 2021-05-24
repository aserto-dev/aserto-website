import { forwardRef, useEffect, useMemo, useState, useRef } from 'react'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import Link from 'next/link'
import clsx from 'clsx'
import { useRouter } from 'next/dist/client/router'

export type HeaderLink = {
  label: string | React.ReactNode
  href?: string
  items?: {
    label: string | React.ReactNode
    href: string
    isExternal: boolean
  }[]
}

type HeaderDropdownLinkProps = {
  link: HeaderLink
  id: string | number
}

const useDropdown = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const open = () => setIsOpen(true)
  const close = () => setIsOpen(false)
  const toggle = () => setIsOpen((state) => !state)

  return { isOpen, open, close, toggle }
}

const CustomLink = forwardRef<
  HTMLAnchorElement,
  {
    children: React.ReactNode
    href: string
    isExternal: boolean
  }
>(({ children, href, isExternal, ...rest }, ref) => {
  return (
    <Link href={href}>
      <a
        className="text-aserto-grey-60 text-base font-roboto transition-colors duration-150 px-6 inline-flex w-full justify-center text-center  hover:text-aserto-grey-90 hover:outline-none cursor-pointer"
        {...rest}
        ref={ref}
        {...(isExternal ? { rel: 'noopener noreferrer', target: '_blank' } : undefined)}
      >
        {children}
      </a>
    </Link>
  )
})

export const HeaderDropdownLink = ({ link, id }: HeaderDropdownLinkProps) => {
  const { isOpen, open, close, toggle } = useDropdown()
  const [focusOnClose, setFocusOnClose] = useState(true)
  const triggerRef = useRef(null)
  const { pathname } = useRouter()

  const trigger = useMemo(() => {
    if (link.items?.length) {
      return (
        <DropdownMenu.Trigger
          onMouseEnter={open}
          ref={triggerRef}
          data-id={id}
          tabIndex={0}
          className="text-base font-roboto pb-6 pt-8 border-b border-solid border-transparent transition-all duration-150 text-aserto-grey-60 hover:text-aserto-grey-90 cursor-pointer"
          as={link.href ? 'a' : 'span'}
        >
          {link.label}
        </DropdownMenu.Trigger>
      )
    } else if (link.href) {
      return (
        <a
          className={clsx(
            'text-base font-roboto pb-6 pt-8 border-b border-solid transition-all duration-150 hover:text-aserto-grey-90',
            {
              'border-aserto-lochivar-accent-30 text-aserto-grey-90':
                pathname.includes(`${link.href}`),
              'border-transparent text-aserto-grey-60': !pathname.includes(
                `${link.href}`
              )
            }
          )}
        >
          {link.label}
        </a>
      )
    } else {
      return (
        <span
          className={clsx(
            'text-base font-roboto pb-6 pt-8 border-b border-solid transition-all duration-150 hover:text-aserto-grey-90',
            {
              'border-aserto-lochivar-accent-30 text-aserto-grey-90':
                pathname.includes(`${link.href}`),
              'border-transparent text-aserto-grey-60': !pathname.includes(
                `${link.href}`
              )
            }
          )}
        >
          {link.label}
        </span>
      )
    }
  }, [link, open, id])

  useEffect(() => {
    function handleMouseMove(e: MouseEvent) {
      const { clientX, clientY } = e
      const elementMouseIsOver = document.elementFromPoint(clientX, clientY)
      if (!elementMouseIsOver) {
        setFocusOnClose(false)
        return close()
      }
      const isHoveringDropdown =
        elementMouseIsOver.closest(`[data-radix-popper-content-wrapper]`) !==
        null
      const isHoveringContainer =
        elementMouseIsOver === triggerRef.current ||
        elementMouseIsOver.closest(`[data-id="${id}"]`) !== null

      if (!isHoveringContainer && !isHoveringDropdown) {
        setFocusOnClose(false)
        return close()
      }
    }

    if (isOpen) {
      document.addEventListener('mousemove', handleMouseMove)
      return () => {
        document.removeEventListener('mousemove', handleMouseMove)
      }
    } else {
      setFocusOnClose(true)
    }
  }, [isOpen, close, id])

  return (
    <DropdownMenu.Root
      open={link?.items?.length ? isOpen : false}
      onOpenChange={toggle}
    >
      {link.href ? (
        <Link href={link.href} passHref>
          {trigger}
        </Link>
      ) : (
        trigger
      )}

      <DropdownMenu.Content
        onCloseAutoFocus={(e: any) => {
          if (!focusOnClose) {
            e.preventDefault()
          }
        }}
        sideOffset={-8}
        disableOutsidePointerEvents={false}
        className="bg-aserto-grey-5 border border-aserto-grey-20 rounded-[4px] shadow-dropdown pt-5 pb-[-4px] mt-3"
        as="ul"
      >
        {link?.items?.map((l, i) => (
          <li key={i} className="mb-6 text-center flex justify-center">
            <DropdownMenu.Item
              href={l.href}
              isExternal={l.isExternal}
              as={CustomLink}
            >
              {l.label}
            </DropdownMenu.Item>
          </li>
        ))}
        <DropdownMenu.Arrow
          as={() => (
            <svg
              width="28"
              height="8"
              viewBox="0 0 28 8"
              fill="#414141"
              xmlns="http://www.w3.org/2000/svg"
              className="transform rotate-180 translate-y-[-11px]"
            >
              <path d="M13.0858 2.41519L10.249 5.25194C8.86542 6.63556 8.17361 7.32736 7.36628 7.8221C6.6505 8.26073 5.87015 8.58396 5.05386 8.77994C4.13316 9.00098 3.15479 9.00098 1.19807 9.00098H27.8019C25.8452 9.00098 24.8668 9.00098 23.9461 8.77994C23.1299 8.58396 22.3495 8.26073 21.6337 7.8221C20.8264 7.32736 20.1346 6.63556 18.751 5.25194L15.9142 2.41519C15.1332 1.63414 13.8668 1.63414 13.0858 2.41519Z" />
              <path d="M27.8019 8.00098C25.7976 8.00098 24.9584 7.99455 24.1796 7.80757C23.4653 7.63609 22.7825 7.35326 22.1562 6.96946C21.4733 6.55095 20.8753 5.96211 19.4581 4.54483L16.6213 1.70808C15.4497 0.536509 13.5503 0.536512 12.3787 1.70808L9.54193 4.54484C8.12466 5.96211 7.52672 6.55095 6.84378 6.96946C6.21748 7.35326 5.53466 7.63609 4.82041 7.80757C4.04157 7.99455 3.20239 8.00098 1.19807 8.00098H0.5V9.00098H1.19807C3.15479 9.00098 4.13315 9.00098 5.05386 8.77994C5.87015 8.58396 6.6505 8.26073 7.36628 7.8221C8.17361 7.32736 8.86542 6.63556 10.249 5.25194L13.0858 2.41519C13.8668 1.63414 15.1332 1.63414 15.9142 2.41519L18.751 5.25194C20.1346 6.63556 20.8264 7.32736 21.6337 7.8221C22.3495 8.26073 23.1299 8.58396 23.9461 8.77994C24.8668 9.00098 25.8452 9.00098 27.8019 9.00098H28.5V8.00098H27.8019Z" />
            </svg>
          )}
        />
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  )
}
