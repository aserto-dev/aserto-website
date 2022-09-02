import { forwardRef, useEffect, useMemo, useState, useRef } from 'react'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import Link from 'next/link'
import clsx from 'clsx'
import { useRouter } from 'next/dist/client/router'
import { FiChevronDown } from 'react-icons/fi'
import HeaderDropdownMenu from './header-dropdown-menu'

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

export const HeaderDropdownLink = ({ link, id }: HeaderDropdownLinkProps) => {
  const { isOpen, close, toggle } = useDropdown()
  const triggerRef = useRef(null)
  const { pathname } = useRouter()

  const trigger = useMemo(() => {
    if (link.items?.length) {
      return <HeaderDropdownMenu link={link} />
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
  }, [link, pathname])

  useEffect(() => {
    function handleMouseMove(e: MouseEvent) {
      const { clientX, clientY } = e
      const elementMouseIsOver = document.elementFromPoint(clientX, clientY)
      if (!elementMouseIsOver) {
        return close()
      }
      const isHoveringDropdown =
        elementMouseIsOver.closest(`[data-radix-popper-content-wrapper]`) !==
        null
      const isHoveringContainer =
        elementMouseIsOver === triggerRef.current ||
        elementMouseIsOver.closest(`[data-id="${id}"]`) !== null

      if (!isHoveringContainer && !isHoveringDropdown) {
        return close()
      }
    }

    if (isOpen) {
      document.addEventListener('mousemove', handleMouseMove)
      return () => {
        document.removeEventListener('mousemove', handleMouseMove)
      }
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
      className="block px-2 text-xl font-semibold leading-none tracking-tight text-aserto-grey-90"
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
      <span className="inline-flex px-4 h-16 border-t border-aserto-grey-20 items-center w-full">
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
        <div className="py-8 px-6 space-y-8 bg-aserto-grey-10 border-t border-aserto-grey-20">
          {link?.items?.map((l, i) => {
            return (
              <div key={i}>
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
