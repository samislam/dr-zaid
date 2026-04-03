import { LandingHeader } from './landing-header'
import { ContactSection } from './contact-section'
import { HeroSection } from './hero-section'
import { LandingFooter } from './landing-footer'
import { DoctorSection } from './doctor-section'
import { VisitSection } from './visit-section'
import { LandingContent } from './types'
import { ServicesSection } from './services-section'

interface LandingPageProps {
  content: LandingContent
}

export const LandingPage = (props: LandingPageProps) => {
  const { content } = props

  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,rgba(255,255,255,0.98)_0%,rgba(241,245,249,0.9)_40%,rgba(255,255,255,1)_100%)] text-slate-950 dark:bg-[linear-gradient(180deg,rgba(2,6,23,1)_0%,rgba(3,7,18,0.96)_40%,rgba(2,6,23,1)_100%)] dark:text-white">
      <LandingHeader brand={content.brand} subtitle={content.headerSubtitle} nav={content.nav} />
      <main>
        <HeroSection hero={content.hero} />
        <ServicesSection services={content.services} />
        <DoctorSection doctor={content.doctor} />
        <VisitSection visit={content.visit} />
        <ContactSection contact={content.contact} />
      </main>
      <LandingFooter brand={content.brand} note={content.footer.note} />
    </div>
  )
}
