'use client'

import { useI18n } from '@/lib/i18n'

export function ExecutiveSummary() {
  const { t } = useI18n()
  const sum = t.summary
  return (
    <section id="summary" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary">
              {sum.eyebrow}
            </span>

            <blockquote className="mt-6 border-r-4 border-gold pr-5">
              <p className="text-balance text-2xl font-bold leading-snug text-foreground sm:text-3xl">
                {sum.quote}
              </p>
            </blockquote>

            <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>{sum.p1}</p>
              <p>{sum.p2}</p>
              <p className="font-semibold text-foreground">{sum.p3}</p>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="grid grid-cols-2 gap-4">
              {sum.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-border bg-card p-6 shadow-sm"
                >
                  <div className="text-3xl font-extrabold text-primary sm:text-4xl">
                    {stat.value}
                  </div>
                  <div className="mt-2 text-sm font-medium leading-snug text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 rounded-2xl bg-primary p-6 text-primary-foreground">
              <div className="text-sm font-semibold text-gold">
                {sum.networkTitle}
              </div>
              <p className="mt-1 text-sm leading-relaxed text-primary-foreground/85">
                {sum.networkBody}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
