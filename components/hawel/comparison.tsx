import { Check, Minus } from 'lucide-react'
import { SectionHeading } from './section-heading'

type Cell = string | boolean

const columns = ['SkipCash (الخليج)', 'SADAD (السعودية)', 'Paystack (أفريقيا)', 'Hawel (السودان)']

const rows: { feature: string; values: Cell[] }[] = [
  { feature: 'بوابة دفع API', values: ['REST + plugins', 'مستضافة + iFrame', 'REST + SDK (25 دولة)', 'REST + SDK'] },
  { feature: 'روابط الدفع', values: ['إنشاء ومشاركة', 'واتساب/SMS', 'مشاركة عامة', 'واتساب — بالعربية أولاً'] },
  { feature: 'مدفوعات QR', values: ['ثابت + ديناميكي', 'أوفلاين-لأونلاين', false, 'ثابت + ديناميكي + طباعة'] },
  { feature: 'لوحة تحكم التاجر', values: ['تتبع فوري', 'تحليلات كاملة', 'تحليلات كاملة', 'ثنائية AR/EN + تسوية'] },
  { feature: 'التوافق مع الشريعة', values: [false, false, false, 'رسوم أجرة معتمدة'] },
  { feature: 'احتياطي USSD', values: [false, false, false, true] },
  { feature: 'تكامل شبكة محلية', values: ['Mastercard', 'mada (SAMA)', 'Flutterwave', 'EBS — المقسم الوطني'] },
  { feature: 'العربية أولاً (RTL)', values: ['ثانوية', true, false, 'افتراضية'] },
  { feature: 'شبكات المحافظ المحلية', values: [false, false, false, 'زين كاش / MTN Money'] },
]

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
  return (
    <section id="compare" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="الموقع التنافسي"
          title="حوِّل مقابل المنافسين الإقليميين"
          description="درسنا SkipCash وSADAD وPaystack — المعيار الأفريقي العالمي الذي استحوذت عليه Stripe. هنا نتطابق، نتفوق، ونعالج سياق السودان المحدد بشكل فريد."
        />

        <div className="mt-12 overflow-x-auto rounded-3xl border border-border shadow-sm">
          <table className="w-full min-w-[680px] border-collapse text-right">
            <thead>
              <tr className="bg-primary text-primary-foreground">
                <th className="px-5 py-4 text-right text-sm font-bold">الخدمة</th>
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
          {[
            { t: 'EBS-Native', d: 'لا Visa/Mastercard في السودان — EBS هي الشبكة. نحن الوحيدون فوق هذه البنية.' },
            { t: 'Offline-First', d: 'USSD fallback ومدفوعات QR قابلة للطباعة — مبني لانقطاع الكهرباء وتقلب 3G.' },
            { t: 'Sharia-First', d: 'هيكل رسوم أجرة، لا عوائد من الاحتفاظ بالأموال، معتمد من هيئة شرعية.' },
            { t: 'OFAC-Safe', d: 'كل البنية خارج الولاية القضائية الأمريكية، مهيكلة لخدمة السودان قانونياً.' },
          ].map((c) => (
            <div
              key={c.t}
              className="rounded-2xl border border-gold/30 bg-card p-5"
            >
              <h4 className="font-bold text-primary">{c.t}</h4>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {c.d}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
