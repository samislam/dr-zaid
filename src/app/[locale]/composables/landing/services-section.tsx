import { Sparkles, ShieldCheck, SmilePlus, Stethoscope } from 'lucide-react'
import { SectionHeading } from './section-heading'
import { LandingContent } from './types'

interface ServicesSectionProps {
  services: LandingContent['services']
}

const icons = [ShieldCheck, SmilePlus, Sparkles, Stethoscope] as const

export const ServicesSection = (props: ServicesSectionProps) => {
  const { services } = props

  return (
    <section id={services.id} className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10">
        <SectionHeading
          eyebrow={services.eyebrow}
          title={services.title}
          description={services.description}
        />

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {services.items.map((item, index) => {
            const Icon = icons[index % icons.length]
            return (
              <article
                key={item.title}
                className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm transition-transform hover:-translate-y-1 dark:border-white/10 dark:bg-white/5"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-300">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-slate-950 dark:text-white">
                  {item.title}
                </h3>
                <p className="text-muted-foreground mt-3 text-sm leading-6">{item.description}</p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
