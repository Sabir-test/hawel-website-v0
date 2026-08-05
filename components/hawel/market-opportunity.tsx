'use client'

import {
  ShoppingBag,
  Laptop,
  Store,
  Globe,
  Smartphone,
  Building2,
  TriangleAlert,
  Sparkles,
} from 'lucide-react'
import { useI18n } from '@/lib/i18n'
import { SectionHeading } from './section-heading'

const segmentIcons = [ShoppingBag, Laptop, Store, Globe, Smartphone, Building2]

export function MarketOpportunity() {
  const { t } = useI18n()
  const m = t.market
  const problems = m.problems
  const opportunities = m.opportunities
  const segments = m.segments.map((s, i) => ({ ...s, icon: segmentIcons[i] }))
  return (
    <section id="market" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow={m.eyebrow}
          title={m.title}
          description={m.description}
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-destructive/20 bg-destructive/5 p-6">
            <div className="flex items-center gap-2 text-destructive">
              <TriangleAlert className="size-5" />
              <h3 className="text-lg font-bold">{m.problemTitle}</h3>
            </div>
            <ul className="mt-4 space-y-3">
              {problems.map((p) => (
                <li
                  key={p}
                  className="flex gap-2 text-sm leading-relaxed text-foreground/80"
                >
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-destructive" />
                  {p}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-primary/20 bg-primary/5 p-6">
            <div className="flex items-center gap-2 text-primary">
              <Sparkles className="size-5" />
              <h3 className="text-lg font-bold">{m.opportunityTitle}</h3>
            </div>
            <ul className="mt-4 space-y-3">
              {opportunities.map((o) => (
                <li
                  key={o}
                  className="flex gap-2 text-sm leading-relaxed text-foreground/80"
                >
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
                  {o}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-center text-xl font-bold text-foreground">
            {m.segmentsTitle}
          </h3>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {segments.map((s) => (
              <div
                key={s.title}
                className="group rounded-2xl border border-border bg-card p-6 transition-shadow hover:shadow-md"
              >
                <span className="inline-flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <s.icon className="size-5" />
                </span>
                <h4 className="mt-4 font-bold text-foreground">{s.title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {s.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
