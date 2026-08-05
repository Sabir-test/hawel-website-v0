import Image from 'next/image'
import { SectionHeading } from './section-heading'

const facts = [
  { label: 'اسم الشركة', value: 'حوِّل | Hawel' },
  { label: 'التأسيس', value: '2026 — ما قبل الإطلاق' },
  { label: 'المقر', value: 'الإمارات / مصر (آمن من OFAC)' },
  { label: 'سوق العمليات', value: 'جمهورية السودان (المرحلة الأولى)' },
  { label: 'نوع العمل', value: 'تقنية مالية — بنية تحتية للمدفوعات (PSP)' },
  { label: 'الهدف التنظيمي', value: 'رخصة PSP من بنك السودان المركزي' },
  { label: 'شبكة الربط', value: 'EBS — المقسم المصرفي الوطني' },
  { label: 'التوافق الشرعي', value: '100% — هيكل رسوم «أجرة» معتمد' },
  { label: 'عملة التسوية', value: 'الجنيه السوداني (SDG)' },
]

export function CompanyIdentity() {
  return (
    <section id="identity" className="bg-secondary/50 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div className="relative order-last lg:order-first">
            <div className="overflow-hidden rounded-3xl border border-border shadow-lg">
              <Image
                src="/images/developer.png"
                alt="أيدي مبرمج سوداني تكتب كوداً برمجياً على لاب توب يعكس بصمة الكود الخضراء"
                width={680}
                height={760}
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          <div>
            <SectionHeading
              align="start"
              eyebrow="هوية الشركة"
              title="فلسفة الاسم والعلامة التجارية"
              description="«حوِّل» فعل أمر عربي يحمل معنيين جوهريين: التحويل — نقل الأموال بين الأطراف، والتحول — تغيير كيفية عمل اقتصاد السودان رقمياً."
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
