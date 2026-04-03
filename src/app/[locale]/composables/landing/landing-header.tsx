import Link from 'next/link'
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

  return (
    <header className="sticky top-0 z-30 border-b border-white/70 bg-white/80 backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/70">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-4 py-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <Link href="#home" className="flex items-center gap-3 text-slate-950 dark:text-white">
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-emerald-600 text-sm font-bold text-white shadow-lg shadow-emerald-600/20">
            ZR
          </span>
          <div className="flex flex-col">
            <span className="text-base font-semibold tracking-tight">{brand}</span>
            <span className="text-muted-foreground text-xs">{subtitle}</span>
          </div>
        </Link>

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

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-end">
          <LanguageSwitcher className="w-full sm:w-44" />
          <ThemeSwitcher />
        </div>
      </div>
    </header>
  )
}
