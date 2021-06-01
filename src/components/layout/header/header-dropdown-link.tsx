import { forwardRef, useEffect, useMemo, useState, useRef } from 'react'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import Link from 'next/link'
import clsx from 'clsx'
import { useRouter } from 'next/dist/client/router'
import { FiChevronDown } from 'react-icons/fi'

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
        className="inline-flex w-full px-6 text-base transition-colors duration-150 cursor-pointer text-aserto-grey-60 font-roboto hover:text-aserto-grey-90 hover:outline-none"
        {...rest}
        ref={ref}
        {...(isExternal
          ? { rel: 'noopener noreferrer', target: '_blank' }
          : undefined)}
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
  const router = useRouter()
  const { pathname } = useRouter()

  const trigger = useMemo(() => {
    if (link.items?.length) {
      return (
        <DropdownMenu.Trigger
          onMouseEnter={open}
          ref={triggerRef}
          data-id={id}
          tabIndex={0}
          className="focus:outline-none focus:border-transparent focus:shadow-none"
          as={link.href ? 'a' : 'span'}
        >
          <p className="pt-8 pb-6 text-base transition-colors duration-150 border-b border-transparent border-solid cursor-pointer bg-aserto-grey-5 font-roboto text-aserto-grey-60 hover:text-aserto-grey-90 focus:outline-none focus:border-transparent focus:shadow-none">
            {link.label}
          </p>
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
  }, [link.items?.length, link.href, link.label, open, id, pathname])

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
        sideOffset={-20}
        disableOutsidePointerEvents={false}
        className="bg-aserto-grey-5 border border-aserto-grey-20 rounded-[4px] pt-5 pb-[-4px] mt-3"
        as="ul"
      >
        {link?.items?.map((l, i) => (
          <li key={i} className="flex mb-6">
            <DropdownMenu.Item
              href={l.href}
              isExternal={l.isExternal}
              as={CustomLink}
              onSelect={() => {
                if (l.isExternal) {
                  window.open(l.href, '_blank')
                } else {
                  router.push(l.href, l.href)
                }
              }}
            >
              {l.label}
            </DropdownMenu.Item>
          </li>
        ))}
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  )
}

const MobileTrigger = forwardRef<
  HTMLAnchorElement,
  {
    href?: string
    children: React.ReactNode
    onClick: (() => void) | undefined
  }
>(({ href, children, onClick }, ref) => {
  const TriggerComponent = href ? 'a' : 'span'
  return (
    <TriggerComponent
      className="block px-2 text-3xl leading-none tracking-tight text-aserto-grey-90"
      onClick={onClick}
      href={href}
      ref={ref}
    >
      {children}
    </TriggerComponent>
  )
})

export const HeaderDropdownLinkMobile = ({
  link,
  onSelect
}: HeaderDropdownLinkProps & { onSelect?: () => void }) => {
  const { isOpen, toggle } = useDropdown()

  return (
    <div>
      <span className="inline-flex items-center">
        {link.href ? (
          <Link href={link.href} passHref>
            <MobileTrigger
              onClick={link.items?.length && !link.href ? toggle : onSelect}
            >
              {link.label}
            </MobileTrigger>
          </Link>
        ) : (
          <MobileTrigger
            onClick={link.items?.length && !link.href ? toggle : onSelect}
          >
            {link.label}
          </MobileTrigger>
        )}

        {link?.items?.length ? (
          <button
            className={clsx('ml-3 text-4.5xl text-aserto-grey-90', {
              'transform rotate-180': isOpen
            })}
            onClick={toggle}
          >
            <FiChevronDown size="24" />
          </button>
        ) : null}
      </span>
      {isOpen && (
        <div className="mt-10 space-y-10">
          {link?.items?.map((l, i) => {
            return (
              <div className="text-center" key={i}>
                <Link href={l.href}>
                  <a
                    onClick={onSelect}
                    className="inline-flex items-center text-xl transition-colors text-aserto-grey-90 xs:text-2xl"
                  >
                    {l.label}
                  </a>
                </Link>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}
