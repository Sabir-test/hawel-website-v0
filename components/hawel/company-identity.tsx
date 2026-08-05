'use client'

import Image from 'next/image'
import { useI18n } from '@/lib/i18n'
import { SectionHeading } from './section-heading'

export function CompanyIdentity() {
  const { t } = useI18n()
  const c = t.identity
  const facts = c.facts
  return (
    <section id="identity" className="bg-secondary/50 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div className="relative order-last lg:order-first">
            <div className="overflow-hidden rounded-3xl border border-border shadow-lg">
              <Image
                src="/images/developer.png"
                alt={c.imageAlt}
                width={680}
                height={760}
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          <div>
            <SectionHeading
              align="start"
              eyebrow={c.eyebrow}
              title={c.title}
              description={c.description}
            />

            <dl className="mt-8 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2">
              {facts.map((f) => (
                <div key={f.label} className="bg-card p-4">
                  <dt className="text-xs font-semibold text-muted-foreground">
                    {f.label}
                  </dt>
                  <dd className="mt-1 text-sm font-bold text-foreground">
                    {f.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  )
}
