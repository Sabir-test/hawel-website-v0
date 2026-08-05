'use client'

import { Check, Minus } from 'lucide-react'
import { useI18n } from '@/lib/i18n'
import { SectionHeading } from './section-heading'

type Cell = string | boolean

function renderCell(v: Cell, highlight: boolean) {
  if (v === true)
    return (
      <Check
        className={highlight ? 'mx-auto size-5 text-gold' : 'mx-auto size-5 text-primary'}
      />
    )
  if (v === false)
    return <Minus className="mx-auto size-5 text-muted-foreground/50" />
  return (
    <span className="flex items-center justify-center gap-1.5 text-sm font-medium text-foreground/80">
      <Check
        className={highlight ? 'size-3.5 shrink-0 text-gold' : 'size-3.5 shrink-0 text-primary'}
      />
      {v}
    </span>
  )
}

export function Comparison() {
  const { t } = useI18n()
  const c = t.comparison
  const columns = c.columns
  const rows = c.rows
  return (
    <section id="compare" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow={c.eyebrow}
          title={c.title}
          description={c.description}
        />

        <div className="mt-12 overflow-x-auto rounded-3xl border border-border shadow-sm">
          <table className="w-full min-w-[680px] border-collapse text-start">
            <thead>
              <tr className="bg-primary text-primary-foreground">
                <th className="px-5 py-4 text-start text-sm font-bold">
                  {c.serviceLabel}
                </th>
                {columns.map((c, i) => (
                  <th
                    key={c}
                    className={`px-5 py-4 text-center text-sm font-bold ${
                      i === 3 ? 'text-gold' : ''
                    }`}
                  >
                    {c}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, ri) => (
                <tr
                  key={row.feature}
                  className={ri % 2 === 0 ? 'bg-card' : 'bg-secondary/40'}
                >
                  <td className="px-5 py-4 text-sm font-semibold text-foreground">
                    {row.feature}
                  </td>
                  {row.values.map((v, vi) => (
                    <td
                      key={vi}
                      className={`px-5 py-4 text-center ${
                        vi === 3 ? 'bg-primary/5' : ''
                      }`}
                    >
                      {renderCell(v, vi === 3)}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {c.highlights.map((h) => (
            <div
              key={h.t}
              className="rounded-2xl border border-gold/30 bg-card p-5"
            >
              <h4 className="font-bold text-primary">{h.t}</h4>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {h.d}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
