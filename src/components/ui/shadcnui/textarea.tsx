import * as React from 'react'
import { cn } from '@/lib/shadcn/utils'

export type TextareaProps = React.ComponentProps<'textarea'>

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>((props, ref) => {
  const { className, ...rest } = props

  return (
    <textarea
      ref={ref}
      data-slot="textarea"
      className={cn(
        'border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 flex min-h-32 w-full rounded-md border bg-white/80 px-3 py-3 text-base font-medium shadow-sm transition-colors focus-visible:ring-2 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 dark:bg-white/10',
        className
      )}
      {...rest}
    />
  )
})

Textarea.displayName = 'Textarea'

export { Textarea }
