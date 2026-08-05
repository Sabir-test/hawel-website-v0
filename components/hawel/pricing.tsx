'use client'

import { Check, Feather, Sprout, Building2 } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import { useI18n } from '@/lib/i18n'
import { SectionHeading } from './section-heading'
import { cn } from '@/lib/utils'

const tierIcons = [Feather, Sprout, Building2]
const tierFeatured = [false, true, false]

export function Pricing() {
  const { t } = useI18n()
  const p = t.pricing
  const tiers = p.tiers.map((tier, i) => ({
    ...tier,
    icon: tierIcons[i],
    featured: tierFeatured[i],
  }))
  return (
    <section id="pricing" className="bg-secondary/50 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow={p.eyebrow}
          title={p.title}
          description={p.description}
        />

        <div className="mt-12 grid items-start gap-6 lg:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={cn(
                'relative flex flex-col rounded-3xl border p-7 shadow-sm',
                tier.featured
                  ? 'border-gold bg-primary text-primary-foreground shadow-xl lg:-mt-4 lg:mb-4'
                  : 'border-border bg-card',
              )}
            >
              {tier.featured && (
                <span className="absolute -top-3 end-7 rounded-full bg-gold px-3 py-1 text-xs font-bold text-gold-foreground">
                  {p.mostPopular}
                </span>
              )}
              <div className="flex items-center gap-3">
                <span
                  className={cn(
                    'inline-flex size-10 items-center justify-center rounded-xl',
                    tier.featured
                      ? 'bg-gold text-gold-foreground'
                      : 'bg-primary/10 text-primary',
                  )}
                >
                  <tier.icon className="size-5" />
                </span>
                <div>
                  <div className="text-sm font-bold">{tier.nameLocal}</div>
                  <div
                    className={cn(
                      'text-xs',
                      tier.featured
                        ? 'text-primary-foreground/70'
                        : 'text-muted-foreground',
                    )}
                  >
                    {tier.name}
                  </div>
                </div>
              </div>

              <div className="mt-6 flex items-baseline gap-2">
                <span className="text-3xl font-extrabold">{tier.price}</span>
                {tier.priceSuffix && (
                  <span
                    className={cn(
                      'text-sm',
                      tier.featured
                        ? 'text-primary-foreground/70'
                        : 'text-muted-foreground',
                    )}
                  >
                    {tier.priceSuffix}
                  </span>
                )}
              </div>
              {tier.name === 'Business' && (
                <p className="mt-1 text-xs text-primary-foreground/55">
                  {p.businessGlobalAvg}
                </p>
              )}
              <p
                className={cn(
                  'mt-1 text-sm',
                  tier.featured
                    ? 'text-primary-foreground/70'
                    : 'text-muted-foreground',
                )}
              >
                {tier.note}
              </p>

              <ul className="mt-6 flex-1 space-y-3">
                {tier.features.map((f) => (
                  <li key={f} className="flex gap-2 text-sm leading-relaxed">
                    <Check
                      className={cn(
                        'mt-0.5 size-4 shrink-0',
                        tier.featured ? 'text-gold' : 'text-primary',
                      )}
                    />
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={buttonVariants({
                  variant: tier.featured ? 'default' : 'outline',
                  className: cn(
                    'mt-7 w-full font-bold',
                    tier.featured
                      ? 'bg-gold text-gold-foreground hover:bg-gold/90'
                      : '',
                  ),
                })}
              >
                {p.ctaStart}
              </a>
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-2xl border border-border bg-card p-6">
          <h3 className="font-bold text-foreground">{p.ajraTitle}</h3>
          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {p.ajraPoints.map((point) => (
              <div key={point.t}>
                <div className="text-sm font-bold text-primary">{point.t}</div>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  {point.d}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
