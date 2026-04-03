import { LandingContent } from './types'
import { SectionHeading } from './section-heading'
import { AppointmentForm } from './appointment-form'

interface ContactSectionProps {
  contact: LandingContent['contact']
}

export const ContactSection = (props: ContactSectionProps) => {
  const { contact } = props

  return (
    <section id={contact.id} className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto grid w-full max-w-6xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="flex flex-col gap-5">
          <SectionHeading
            eyebrow={contact.eyebrow}
            title={contact.title}
            description={contact.description}
          />
          <div className="rounded-[1.75rem] border border-slate-200 bg-white/80 p-6 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5">
            <p className="text-sm leading-7 text-slate-700 dark:text-slate-200">
              {contact.helperText}
            </p>
          </div>
        </div>

        <div className="rounded-[2rem] border border-slate-200 bg-white/85 p-6 shadow-sm backdrop-blur sm:p-8 dark:border-white/10 dark:bg-white/5">
          <AppointmentForm content={contact} />
        </div>
      </div>
    </section>
  )
}
