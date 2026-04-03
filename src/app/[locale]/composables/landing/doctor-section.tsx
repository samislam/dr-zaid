import { CheckCircle2 } from 'lucide-react'
import { SectionHeading } from './section-heading'
import { LandingContent } from './types'

interface DoctorSectionProps {
  doctor: LandingContent['doctor']
}

export const DoctorSection = (props: DoctorSectionProps) => {
  const { doctor } = props

  return (
    <section id={doctor.id} className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto grid w-full max-w-6xl gap-8 rounded-[2rem] border border-slate-200 bg-white/80 p-8 shadow-sm backdrop-blur lg:grid-cols-[0.9fr_1.1fr] lg:p-10 dark:border-white/10 dark:bg-white/5">
        <div className="rounded-[1.5rem] bg-slate-950 p-8 text-white dark:bg-emerald-500/10 dark:text-emerald-50">
          <p className="text-sm font-semibold tracking-[0.24em] text-emerald-300 uppercase">
            {doctor.eyebrow}
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight">{doctor.title}</h2>
        </div>

        <div className="flex flex-col gap-6">
          <SectionHeading
            eyebrow={doctor.eyebrow}
            title={doctor.title}
            description={doctor.description}
          />
          <div className="grid gap-3">
            {doctor.points.map((point) => (
              <div
                key={point}
                className="flex items-start gap-3 rounded-2xl bg-slate-50 p-4 dark:bg-white/5"
              >
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600 dark:text-emerald-400" />
                <p className="text-sm leading-6 text-slate-700 dark:text-slate-200">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
