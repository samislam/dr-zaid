export interface LandingNavItem {
  href: string
  label: string
}

export interface LandingFeature {
  title: string
  description: string
}

export interface LandingStep {
  title: string
  description: string
}

export interface LandingContent {
  brand: string
  headerSubtitle: string
  nav: LandingNavItem[]
  hero: {
    eyebrow: string
    title: string
    description: string
    primaryCta: string
    secondaryCta: string
    highlights: LandingFeature[]
  }
  services: {
    id: string
    eyebrow: string
    title: string
    description: string
    items: LandingFeature[]
  }
  doctor: {
    id: string
    eyebrow: string
    title: string
    description: string
    points: string[]
  }
  visit: {
    id: string
    eyebrow: string
    title: string
    description: string
    steps: LandingStep[]
    cta: string
  }
  contact: {
    id: string
    eyebrow: string
    title: string
    description: string
    helperText: string
    fullNameLabel: string
    fullNamePlaceholder: string
    phoneLabel: string
    phonePlaceholder: string
    emailLabel: string
    emailPlaceholder: string
    messageLabel: string
    messagePlaceholder: string
    submitLabel: string
    submittingText: string
    successMessage: string
    errorMessage: string
  }
  footer: {
    note: string
  }
}
