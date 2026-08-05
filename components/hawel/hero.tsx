'use client'

import Image from 'next/image'
import { ArrowLeft, ArrowRight, ShieldCheck, Wifi } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import { useI18n } from '@/lib/i18n'

export function Hero() {
  const { t, lang } = useI18n()
  const Arrow = lang === 'ar' ? ArrowLeft : ArrowRight
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-primary text-primary-foreground"
    >
      {/* geometric gold linework */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage:
            'linear-gradient(115deg, transparent 0%, transparent 48%, var(--gold) 48.3%, var(--gold) 48.7%, transparent 49%), linear-gradient(65deg, transparent 0%, transparent 70%, var(--gold) 70.3%, var(--gold) 70.6%, transparent 71%)',
          backgroundSize: '180px 180px, 260px 260px',
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-1/2 size-[480px] -translate-y-1/2 rounded-full border border-gold/20"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-10 top-1/2 size-[300px] -translate-y-1/2 rounded-full border border-gold/15"
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 lg:grid-cols-2 lg:gap-8 lg:px-8 lg:py-28">
        <div className="flex flex-col items-start gap-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 text-xs font-semibold text-gold">
            <span className="size-1.5 rounded-full bg-gold" />
            {t.hero.badge}
          </span>

          <h1 className="text-balance text-4xl font-extrabold leading-[1.15] tracking-tight sm:text-5xl lg:text-6xl">
            {t.hero.titleLead}{' '}
            <span className="text-gold">{t.hero.titleHighlight}</span>
          </h1>

          <p className="max-w-xl text-pretty text-base leading-relaxed text-primary-foreground/80 sm:text-lg">
            {t.hero.subtitle}
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="#contact"
              className={buttonVariants({
                size: 'lg',
                className:
                  'flex items-center gap-2 bg-gold font-bold text-gold-foreground hover:bg-gold/90',
              })}
            >
              {t.hero.ctaPrimary}
              <Arrow className="size-4" />
            </a>
            <a
              href="#products"
              className={buttonVariants({
                size: 'lg',
                variant: 'outline',
                className:
                  'border-primary-foreground/30 bg-transparent font-semibold text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground',
              })}
            >
              {t.hero.ctaSecondary}
            </a>
          </div>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-2 text-sm text-primary-foreground/70">
            <span className="flex items-center gap-2">
              <ShieldCheck className="size-4 text-gold" />
              {t.hero.trustSharia}
            </span>
            <span className="flex items-center gap-2">
              <Wifi className="size-4 text-gold" />
              {t.hero.trustOffline}
            </span>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 rounded-[2rem] bg-gold/10 blur-2xl" />
          <div className="relative overflow-hidden rounded-3xl border border-gold/20 shadow-2xl">
            <Image
              src="/images/hero-merchant.png"
              alt={t.hero.imageAlt}
              width={720}
              height={820}
              priority
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
