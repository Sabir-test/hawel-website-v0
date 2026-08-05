'use client'

import { Code2, Store, ShoppingBasket } from 'lucide-react'
import { useI18n } from '@/lib/i18n'
import { SectionHeading } from './section-heading'

const segmentIcons = [Code2, Store, ShoppingBasket]

export function GoToMarket() {
  const { t } = useI18n()
  const g = t.gtm
  const segments = g.segments.map((s, i) => ({ ...s, icon: segmentIcons[i] }))
  const channels = g.channels
  return (
    <section id="gtm" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow={g.eyebrow}
          title={g.title}
          description={g.description}
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {segments.map((s) => (
            <div
              key={s.title}
              className="flex flex-col rounded-3xl border border-border bg-card p-7 shadow-sm"
            >
              <span className="inline-flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <s.icon className="size-5" />
              </span>
              <span className="mt-4 text-xs font-bold text-gold-foreground">
                <span className="rounded-full bg-gold/20 px-2 py-0.5 text-primary">
                  {s.tag}
                </span>
              </span>
              <h3 className="mt-3 font-bold text-foreground">{s.title}</h3>
              <p className="mt-3 text-balance text-lg font-bold leading-snug text-primary">
                {s.message}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {s.channels}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {channels.map((ch) => (
            <div
              key={ch.t}
              className="rounded-2xl border border-border bg-secondary/40 p-5"
            >
              <h4 className="font-bold text-foreground">{ch.t}</h4>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                {ch.d}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
