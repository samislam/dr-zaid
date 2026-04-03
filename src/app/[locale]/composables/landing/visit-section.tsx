import { Button } from '@/components/ui/shadcnui/button'
import { ScrollLink } from '@/components/ui/samislam/scroll-link'
import { SectionHeading } from './section-heading'
import { LandingContent } from './types'

interface VisitSectionProps {
  visit: LandingContent['visit']
}

export const VisitSection = (props: VisitSectionProps) => {
  const { visit } = props

  return (
    <section id={visit.id} className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 rounded-[2rem] bg-slate-950 px-6 py-8 text-white sm:px-8 sm:py-10 lg:px-10 dark:bg-white/5">
        <SectionHeading
          eyebrow={visit.eyebrow}
          title={visit.title}
          description={visit.description}
          tone="inverted"
        />

        <div className="grid gap-4 md:grid-cols-3">
          {visit.steps.map((step, index) => (
            <article
              key={step.title}
              className="rounded-[1.5rem] border border-white/10 bg-white/5 p-6"
            >
              <span className="text-sm font-semibold tracking-[0.2em] text-emerald-300 uppercase">
                0{index + 1}
              </span>
              <h3 className="mt-3 text-xl font-semibold">{step.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-300 dark:text-slate-200">
                {step.description}
              </p>
            </article>
          ))}
        </div>

        <div>
          <Button asChild size="lg" className="bg-emerald-600 text-white hover:bg-emerald-700">
            <ScrollLink hash="#home">{visit.cta}</ScrollLink>
          </Button>
        </div>
      </div>
    </section>
  )
}
