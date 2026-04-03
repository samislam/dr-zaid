import { getTranslate } from '@/lib/tolgee/tolgee-server'
import { LandingPage } from '../composables/landing/landing-page'
import { LandingContent } from '../composables/landing/types'

const Page = async () => {
  const t = await getTranslate()

  const content: LandingContent = {
    brand: t('@t<landing.brand>'),
    headerSubtitle: t('@t<landing.header_subtitle>'),
    nav: [
      { href: '#services', label: t('@t<landing.nav.services>') },
      { href: '#doctor', label: t('@t<landing.nav.doctor>') },
      { href: '#visit', label: t('@t<landing.nav.visit>') },
    ],
    hero: {
      eyebrow: t('@t<landing.hero.eyebrow>'),
      title: t('@t<landing.hero.title>'),
      description: t('@t<landing.hero.description>'),
      primaryCta: t('@t<landing.hero.primary_cta>'),
      secondaryCta: t('@t<landing.hero.secondary_cta>'),
      highlights: [
        {
          title: t('@t<landing.hero.highlight_1.title>'),
          description: t('@t<landing.hero.highlight_1.description>'),
        },
        {
          title: t('@t<landing.hero.highlight_2.title>'),
          description: t('@t<landing.hero.highlight_2.description>'),
        },
        {
          title: t('@t<landing.hero.highlight_3.title>'),
          description: t('@t<landing.hero.highlight_3.description>'),
        },
      ],
    },
    services: {
      id: 'services',
      eyebrow: t('@t<landing.services.eyebrow>'),
      title: t('@t<landing.services.title>'),
      description: t('@t<landing.services.description>'),
      items: [
        {
          title: t('@t<landing.services.item_1.title>'),
          description: t('@t<landing.services.item_1.description>'),
        },
        {
          title: t('@t<landing.services.item_2.title>'),
          description: t('@t<landing.services.item_2.description>'),
        },
        {
          title: t('@t<landing.services.item_3.title>'),
          description: t('@t<landing.services.item_3.description>'),
        },
        {
          title: t('@t<landing.services.item_4.title>'),
          description: t('@t<landing.services.item_4.description>'),
        },
      ],
    },
    doctor: {
      id: 'doctor',
      eyebrow: t('@t<landing.doctor.eyebrow>'),
      title: t('@t<landing.doctor.title>'),
      description: t('@t<landing.doctor.description>'),
      points: [
        t('@t<landing.doctor.point_1>'),
        t('@t<landing.doctor.point_2>'),
        t('@t<landing.doctor.point_3>'),
      ],
    },
    visit: {
      id: 'visit',
      eyebrow: t('@t<landing.visit.eyebrow>'),
      title: t('@t<landing.visit.title>'),
      description: t('@t<landing.visit.description>'),
      steps: [
        {
          title: t('@t<landing.visit.step_1.title>'),
          description: t('@t<landing.visit.step_1.description>'),
        },
        {
          title: t('@t<landing.visit.step_2.title>'),
          description: t('@t<landing.visit.step_2.description>'),
        },
        {
          title: t('@t<landing.visit.step_3.title>'),
          description: t('@t<landing.visit.step_3.description>'),
        },
      ],
      cta: t('@t<landing.visit.cta>'),
    },
    footer: {
      note: t('@t<landing.footer.note>'),
    },
  }

  return <LandingPage content={content} />
}

export default Page
