import { Code2, Store, ShoppingBasket } from 'lucide-react'
import { SectionHeading } from './section-heading'

const segments = [
  {
    icon: Code2,
    tag: 'الشريحة أ',
    title: 'المطورون والشركات الناشئة',
    message: '«API واحد. 37 بنكاً. ابدأ العمل في يوم.»',
    channels: 'مستندات المطورين، GitHub، مجتمعات التقنية في الخرطوم.',
  },
  {
    icon: Store,
    tag: 'الشريحة ب',
    title: 'التجار الصغار والمتوسطون',
    message: '«ابدأ تقبل مدفوعات اليوم. بدون موقع. بدون حضور.»',
    channels: 'واتساب للأعمال، جمعيات التجار، الغرفة التجارية، المبيعات الميدانية.',
  },
  {
    icon: ShoppingBasket,
    tag: 'الشريحة ج',
    title: 'البائعون غير الرسميون',
    message: '«رابط دفع واحد. اطبعه. علّقه. اقبل مدفوعاتك.»',
    channels: 'تيك توك السودان، إنستغرام، تفعيل الأسواق، شراكات التمويل الأصغر.',
  },
]

const channels = [
  ['حملات واتساب للأعمال', 'طبقة الاتصال الرئيسية في السودان واستحواذ التجار عبر قوائم البث.'],
  ['إنستغرام وتيك توك', 'فيديوهات قصيرة: «كيف تحصل على أموالك في 60 ثانية».'],
  ['مستندات المطورين وGitHub', 'مستندات API عامة، SDK مفتوحة المصدر، sandbox للمطورين.'],
  ['شراكات جمعيات التجار', 'غرفة الخرطوم التجارية وتوزيع مجموعات QR في الأسواق.'],
  ['رحلات تفعيل واتساب/SMS', 'سلسلة عربية منسقة: ترحيب، أول رابط، أول كود QR.'],
  ['مدرسة حوِّل التعليمية', 'دروس يوتيوب وتيك توك باللهجة السودانية للتجار.'],
]

export function GoToMarket() {
  return (
    <section id="gtm" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="استراتيجية التسويق"
          title="ثلاث شرائح، ثلاث رسائل"
          description="نضع حوِّل في تقاطع البنية التحتية بمستوى مطورين وإمكانية الوصول للاقتصاد غير الرسمي."
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
          {channels.map(([t, d]) => (
            <div
              key={t}
              className="rounded-2xl border border-border bg-secondary/40 p-5"
            >
              <h4 className="font-bold text-foreground">{t}</h4>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                {d}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
