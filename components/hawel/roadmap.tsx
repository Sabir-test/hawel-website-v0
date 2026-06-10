import { Rocket, TrendingUp, Expand, Globe2 } from 'lucide-react'
import { SectionHeading } from './section-heading'

const phases = [
  {
    icon: Rocket,
    phase: 'Phase 1',
    title: 'الإطلاق (MVP)',
    date: 'Q3 2026',
    items: [
      'بوابة دفع API (EBS)',
      'روابط الدفع',
      'مدفوعات كود QR',
      'لوحة تحكم التاجر',
      'تفعيل KYC + SMS OTP',
      'محرك Webhook',
    ],
  },
  {
    icon: TrendingUp,
    phase: 'Phase 2',
    title: 'النمو',
    date: 'Q4 2026',
    items: [
      'تطبيق هاتف (أندرويد أولاً)',
      'تحويل الهاتف لنقطة بيع (SoftPOS)',
      'قناة احتياطية USSD',
      'دعم PWA أوفلاين',
      'وصول متعدد المستخدمين',
      'إضافة WooCommerce',
    ],
  },
  {
    icon: Expand,
    phase: 'Phase 3',
    title: 'التوسع',
    date: 'H1 2027',
    items: [
      'فواتير الاشتراكات',
      'مدفوعات مجزأة/سوق',
      'محرك احتيال متقدم (ML)',
      'توسيع معدل API',
      'تقديم بيضاء (White-label)',
      'دفعات B2B ضخمة',
    ],
  },
  {
    icon: Globe2,
    phase: 'Phase 4+',
    title: 'الامتداد',
    date: '2027+',
    items: [
      'دخول سوق جنوب السودان',
      'تغطية إثيوبيا / كينيا',
      'تسويات عبر الحدود',
      'استكشاف العملات المستقرة',
      'الخدمات البنكية كخدمة (BaaS)',
      'اشترِ الآن وادفع لاحقاً (شرعي)',
    ],
  },
]

export function Roadmap() {
  return (
    <section id="roadmap" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="خارطة الطريق"
          title="من MVP يركز على السودان إلى التوسع الإقليمي"
          description="أربع مراحل مدروسة تنمو من الأساس المحلي إلى الأسواق الواعدة المجاورة."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {phases.map((p, i) => (
            <div
              key={p.phase}
              className="relative flex flex-col rounded-3xl border border-border bg-card p-6 shadow-sm"
            >
              <div className="flex items-center justify-between">
                <span className="inline-flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <p.icon className="size-5" />
                </span>
                <span className="font-mono text-sm font-bold text-gold-foreground">
                  <span className="rounded-md bg-gold/15 px-2 py-1 text-primary">
                    {p.date}
                  </span>
                </span>
              </div>
              <div className="mt-4">
                <div className="font-mono text-xs font-semibold text-muted-foreground" dir="ltr">
                  {p.phase}
                </div>
                <h3 className="text-lg font-bold text-foreground">{p.title}</h3>
              </div>
              <ul className="mt-4 space-y-2">
                {p.items.map((item) => (
                  <li
                    key={item}
                    className="flex gap-2 text-sm leading-relaxed text-muted-foreground"
                  >
                    <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" />
                    {item}
                  </li>
                ))}
              </ul>
              {i < phases.length - 1 && (
                <div
                  aria-hidden="true"
                  className="absolute -left-3 top-1/2 hidden size-6 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-card text-muted-foreground lg:flex"
                >
                  ‹
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
