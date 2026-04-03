import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/shadcnui/button'
import personalPicture from '@/media/personal-picture.jpeg'
import { LandingContent } from './types'

interface HeroSectionProps {
  hero: LandingContent['hero']
}

export const HeroSection = (props: HeroSectionProps) => {
  const { hero } = props

  return (
    <section id="home" className="relative overflow-hidden px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(16,185,129,0.16),_transparent_32%),radial-gradient(circle_at_bottom_right,_rgba(15,23,42,0.08),_transparent_30%)] dark:bg-[radial-gradient(circle_at_top_left,_rgba(52,211,153,0.18),_transparent_26%),radial-gradient(circle_at_bottom_right,_rgba(255,255,255,0.08),_transparent_22%)]" />
      <div className="mx-auto grid w-full max-w-6xl items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="flex flex-col gap-6">
          <span className="w-fit rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-700 dark:border-emerald-500/30 dark:bg-emerald-500/10 dark:text-emerald-300">
            {hero.eyebrow}
          </span>
          <h1 className="text-4xl font-semibold tracking-tight text-balance text-slate-950 sm:text-5xl lg:text-6xl dark:text-white">
            {hero.title}
          </h1>
          <p className="text-muted-foreground max-w-2xl text-lg leading-8 text-pretty">
            {hero.description}
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" className="bg-emerald-600 text-white hover:bg-emerald-700">
              <Link href="#contact">{hero.primaryCta}</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-slate-300 bg-white/70 dark:border-white/15 dark:bg-white/5"
            >
              <Link href="#services">{hero.secondaryCta}</Link>
            </Button>
          </div>
          <div className="grid gap-3 sm:grid-cols-3">
            {hero.highlights.map((item) => (
              <article
                key={item.title}
                className="rounded-3xl border border-slate-200/80 bg-white/75 p-5 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5"
              >
                <h2 className="text-base font-semibold text-slate-950 dark:text-white">
                  {item.title}
                </h2>
                <p className="text-muted-foreground mt-2 text-sm leading-6">{item.description}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md">
          <div className="absolute inset-x-6 -top-6 h-24 rounded-full bg-emerald-300/35 blur-3xl dark:bg-emerald-500/20" />
          <div className="relative overflow-hidden rounded-[2rem] border border-white/60 bg-white/70 p-3 shadow-2xl shadow-slate-900/10 backdrop-blur dark:border-white/10 dark:bg-slate-900/70 dark:shadow-black/30">
            <div className="aspect-[4/5] overflow-hidden rounded-[1.5rem] bg-slate-100 dark:bg-slate-800">
              <Image
                src={personalPicture}
                alt="Dr. Zaid Rayan"
                className="h-full w-full object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
