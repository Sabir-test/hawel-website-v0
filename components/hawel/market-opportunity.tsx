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
import { SectionHeading } from './section-heading'

const problems = [
  'لا توجد بوابة دفع للتكامل البرمجي (API) للتجار.',
  'تطبيق بنكك للتحويل البنكي فقط — لا توجد طبقة تجار.',
  'الدفع في التجارة الإلكترونية يدوي: العميل يرفع لقطة شاشة.',
  'المستقلون والبائعون يفتقرون تماماً لأدوات روابط الدفع.',
  'زين كاش وMTN ليس لديهما API موحد للتجار.',
]

const opportunities = [
  'الأسبقية في السوق: لا منافس في طبقة بنية البوابة.',
  'واجهة EBS متاحة — بيئة التجربة مفتوحة للمرخصين.',
  'جميع البنوك الـ 37 يمكن الوصول إليها عبر نقطة واحدة.',
  'نمو التقنية المالية في أفريقيا +20% سنوياً.',
  'قطاع المدفوعات عالمياً = 44% من إيرادات الفنتك.',
]

const segments = [
  {
    icon: ShoppingBag,
    title: 'بائعو الاقتصاد غير الرسمي',
    body: 'بائعو سوق أم درمان وإنستغرام وواتساب. كود QR قابل للطباعة ورابط دفع هما بوابتهم للتجارة الرقمية.',
  },
  {
    icon: Laptop,
    title: 'المستقلون ومقدمو الخدمات',
    body: 'المصممون والمبرمجون والمحامون. حوِّل تمنحهم رابط دفع احترافي في أقل من 60 ثانية.',
  },
  {
    icon: Store,
    title: 'التجار الصغار والمتوسطون',
    body: 'المطاعم والصيدليات ومحلات الأزياء. يحتاجون إلى API حقيقي أو رابط دفع — ليس تحويلاً بنكياً.',
  },
  {
    icon: Globe,
    title: 'منصات التجارة الإلكترونية',
    body: 'أي موقع سوداني يريد قبول المدفوعات. إضافات WooCommerce وShopify تملأ الفجوة تماماً.',
  },
  {
    icon: Smartphone,
    title: 'مستخدمو الأموال عبر الهاتف',
    body: 'زين كاش (48% سوق)، MTN (28%). حوِّل توحد هذه القنوات في واجهة تاجر واحدة.',
  },
  {
    icon: Building2,
    title: 'الشركات والمؤسسات',
    body: 'شركات الاتصالات وموزعو السلع يحتاجون لتحصيل مدفوعات B2B وإدارة التسويات.',
  },
]

export function MarketOpportunity() {
  return (
    <section id="market" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="فرصة السوق"
          title="فجوة البنية التحتية للمدفوعات في السودان"
          description="أحد أعلى معدلات اعتماد المدفوعات الرقمية غير الرسمية في أفريقيا — دون أي بنية تحتية لمدفوعات التجار لالتقاط هذه المعاملات."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-destructive/20 bg-destructive/5 p-6">
            <div className="flex items-center gap-2 text-destructive">
              <TriangleAlert className="size-5" />
              <h3 className="text-lg font-bold">المشكلة</h3>
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
              <h3 className="text-lg font-bold">الفرصة</h3>
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
            شرائح العملاء المستهدفة
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
