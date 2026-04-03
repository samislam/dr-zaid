interface LandingFooterProps {
  brand: string
  note: string
}

export const LandingFooter = (props: LandingFooterProps) => {
  const { brand, note } = props

  return (
    <footer className="px-4 pb-10 sm:px-6 lg:px-8">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 border-t border-slate-200 pt-6 text-sm text-slate-600 sm:flex-row sm:items-center sm:justify-between dark:border-white/10 dark:text-slate-300">
        <p className="font-semibold text-slate-900 dark:text-white">{brand}</p>
        <p>{note}</p>
      </div>
    </footer>
  )
}
