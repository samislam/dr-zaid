'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { ThemeSwitcher } from '@/components/common/theme-switcher'
import { LanguageSwitcher } from '@/components/common/language-switcher'
import { LandingNavItem } from './types'

interface LandingHeaderProps {
  brand: string
  subtitle: string
  nav: LandingNavItem[]
}

export const LandingHeader = (props: LandingHeaderProps) => {
  const { brand, subtitle, nav } = props
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const closeMobileMenu = () => setIsMobileMenuOpen(false)

  return (
    <header className="sticky top-0 z-30 border-b border-white/70 bg-white/80 backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/70">
      <div className="mx-auto flex w-full max-w-6xl flex-col px-4 py-3 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8 lg:py-4">
        <div className="flex items-center justify-between gap-4">
          <Link
            href="#home"
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
          </Link>

          <button
            type="button"
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen((current) => !current)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-900 shadow-sm transition-colors hover:bg-slate-50 lg:hidden dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        <div className="hidden items-center gap-4 lg:flex">
          <nav className="flex flex-wrap items-center gap-3 text-sm font-medium text-slate-700 dark:text-slate-200">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-full px-3 py-2 transition-colors hover:bg-slate-900/5 hover:text-slate-950 dark:hover:bg-white/10 dark:hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <LanguageSwitcher className="w-44" />
            <ThemeSwitcher />
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="flex flex-col gap-4 pt-4 lg:hidden">
            <nav className="grid gap-2">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMobileMenu}
                  className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-800 transition-colors hover:bg-slate-50 dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="flex flex-col gap-3 rounded-[1.5rem] border border-slate-200 bg-white/85 p-4 shadow-sm dark:border-white/10 dark:bg-white/5">
              <LanguageSwitcher className="w-full" />
              <div className="flex justify-start">
                <ThemeSwitcher />
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
