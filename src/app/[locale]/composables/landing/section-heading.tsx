import { cn } from '@/lib/shadcn/utils'

interface SectionHeadingProps {
  eyebrow: string
  title: string
  description: string
  align?: 'start' | 'center'
  tone?: 'default' | 'inverted'
}

export const SectionHeading = (props: SectionHeadingProps) => {
  const { eyebrow, title, description, align = 'start', tone = 'default' } = props
  const alignment = align === 'center' ? 'items-center text-center' : 'items-start text-start'
  const isInverted = tone === 'inverted'

  return (
    <div className={cn('flex max-w-2xl flex-col gap-3', alignment)}>
      <span
        className={cn(
          'text-sm font-semibold tracking-[0.24em] uppercase',
          isInverted ? 'text-emerald-300' : 'text-emerald-600 dark:text-emerald-400'
        )}
      >
        {eyebrow}
      </span>
      <h2
        className={cn(
          'text-3xl font-semibold tracking-tight text-balance sm:text-4xl',
          isInverted ? 'text-white' : 'text-slate-900 dark:text-white'
        )}
      >
        {title}
      </h2>
      <p
        className={cn(
          'text-base leading-7 text-pretty sm:text-lg',
          isInverted ? 'text-slate-300' : 'text-muted-foreground'
        )}
      >
        {description}
      </p>
    </div>
  )
}
