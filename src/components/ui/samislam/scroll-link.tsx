'use client'

import { useScroll } from '@/hooks/use-scroll'
import { Link } from '@/lib/next-intl/navigation'
import { useFullPath } from '@/hooks/use-fullpath'
import { ComponentPropsWithoutRef, MouseEvent } from 'react'

/** Props for the {@link ScrollLink} component. */
export interface ScrollLinkProps extends Omit<ComponentPropsWithoutRef<typeof Link>, 'href'> {
  /** The ID or hash of the section to scroll to. Example: `"contact"` or `"#contact"`. */
  hash: string
}

/**
 * A client-side link component that scrolls smoothly to a target section on the page.
 *
 * - It overrides the default `<Link>` behavior to scroll smoothly to a section instead of reloading.
 * - It updates the browser URL using `history.replaceState`.
 * - It strips the leading `#` from the hash if present to ensure correct DOM element targeting.
 *
 * @example
 *   ;```tsx
 *   <ScrollLink hash="#contact">Contact</ScrollLink>
 *   ```
 */
export const ScrollLink = (props: ScrollLinkProps) => {
  const { hash, children, onClick, ...rest } = props
  const [, scroll] = useScroll()
  const fullPath = useFullPath()
  const id = hash.startsWith('#') ? hash.slice(1) : hash

  return (
    <Link
      {...rest}
      href={`${fullPath}#${id}`}
      scroll={false}
      onClick={(e) => {
        onClick?.(e as MouseEvent<HTMLAnchorElement>)
        if (e.defaultPrevented) return
        e.preventDefault()
        scroll(id)
        history.replaceState(null, '', `${fullPath}#${id}`)
      }}
    >
      {children}
    </Link>
  )
}
