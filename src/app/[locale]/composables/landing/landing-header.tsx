'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { LandingNavItem } from './types'
import { useScroll } from '@/hooks/use-scroll'
import { AnimatePresence } from 'framer-motion'
import { useFullPath } from '@/hooks/use-fullpath'
import { MotionDiv } from '@/components/ui/samislam/motion'
import { ScrollLink } from '@/components/ui/samislam/scroll-link'
import { ThemeSwitcher } from '@/components/common/theme-switcher'
import { LanguageSwitcher } from '@/components/common/language-switcher'

interface LandingHeaderProps {
  brand: string
  subtitle: string
  nav: LandingNavItem[]
}

export const LandingHeader = (props: LandingHeaderProps) => {
  const { brand, subtitle, nav } = props
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [, scroll] = useScroll()
  const fullPath = useFullPath()

  const closeMobileMenu = () => setIsMobileMenuOpen(false)
  const handleMobileNavClick = (hash: string) => {
    closeMobileMenu()
    const id = hash.startsWith('#') ? hash.slice(1) : hash

    window.setTimeout(() => {
      scroll(id)
      history.replaceState(null, '', `${fullPath}#${id}`)
    }, 220)
  }

  return (
    <header className="sticky top-0 z-30 border-b border-white/70 bg-white/80 backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/70">
      <div className="mx-auto flex w-full max-w-6xl flex-col px-4 py-3 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8 lg:py-4">
        <div className="flex items-center justify-between gap-4">
          <ScrollLink
            hash="#home"
            className="flex min-w-0 items-center gap-3 text-slate-950 dark:text-white"
            onClick={closeMobileMenu}
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-emerald-600 text-sm font-bold text-white shadow-lg shadow-emerald-600/20">
              ZR
            </span>
            <div className="flex min-w-0 flex-col">
              <span className="truncate text-base font-semibold tracking-tight">{brand}</span>
              <span className="text-muted-foreground truncate text-xs">{subtitle}</span>
            </div>
          </ScrollLink>

          <button
            type="button"
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen((current) => !current)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-900 shadow-sm transition-all duration-200 hover:scale-105 hover:bg-slate-50 lg:hidden dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
          >
            <span
              className={`transition-transform duration-300 ${
                isMobileMenuOpen ? 'scale-95 rotate-90' : 'scale-100 rotate-0'
              }`}
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </span>
          </button>
        </div>

        <div className="hidden items-center gap-4 lg:flex">
          <nav className="flex flex-wrap items-center gap-3 text-sm font-medium text-slate-700 dark:text-slate-200">
            {nav.map((item) => (
              <ScrollLink
                key={item.href}
                hash={item.href}
                className="rounded-full px-3 py-2 transition-colors hover:bg-slate-900/5 hover:text-slate-950 dark:hover:bg-white/10 dark:hover:text-white"
              >
                {item.label}
              </ScrollLink>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <LanguageSwitcher className="w-44" />
            <ThemeSwitcher />
          </div>
        </div>

        <AnimatePresence initial={false}>
          {isMobileMenuOpen && (
            <MotionDiv
              key="mobile-menu"
              initial={{ opacity: 0, height: 0, y: -8 }}
              animate={{ opacity: 1, height: 'auto', y: 0 }}
              exit={{ opacity: 0, height: 0, y: -8 }}
              transition={{ duration: 0.24, ease: 'easeInOut' }}
              className="overflow-hidden lg:hidden"
            >
              <div className="flex flex-col gap-4 pt-4">
                <nav className="grid gap-2">
                  {nav.map((item, index) => (
                    <MotionDiv
                      key={item.href}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.2, delay: index * 0.04 }}
                    >
                      <button
                        type="button"
                        onClick={() => handleMobileNavClick(item.href)}
                        className="block w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-left text-sm font-semibold text-slate-800 transition-all duration-200 hover:translate-x-1 hover:bg-slate-50 dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
                      >
                        {item.label}
                      </button>
                    </MotionDiv>
                  ))}
                </nav>

                <MotionDiv
                  initial={{ opacity: 0, y: -12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.22, delay: 0.12 }}
                  className="flex flex-col gap-3 rounded-[1.5rem] border border-slate-200 bg-white/85 p-4 shadow-sm dark:border-white/10 dark:bg-white/5"
                >
                  <LanguageSwitcher className="w-full" />
                  <div className="flex justify-start">
                    <ThemeSwitcher />
                  </div>
                </MotionDiv>
              </div>
            </MotionDiv>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}
