const stats = [
  { value: '٣٧', label: 'بنكاً على شبكة EBS' },
  { value: '٤٧M+', label: 'نسمة عدد سكان السودان' },
  { value: '٣٣M', label: 'مشترك إنترنت عبر الهاتف' },
  { value: '٠', label: 'بوابة دفع API موجودة — نحن الأول' },
]

export function ExecutiveSummary() {
  return (
    <section id="summary" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary">
              الملخص التنفيذي
            </span>

            <blockquote className="mt-6 border-r-4 border-gold pr-5">
              <p className="text-balance text-2xl font-bold leading-snug text-foreground sm:text-3xl">
                السودان يعالج عشرات الملايين من معاملات الأموال يومياً — ولا تاجر واحد يستطيع قبول الدفع عبر الإنترنت. هذه هي الفجوة التي نبنيها لها.
              </p>
            </blockquote>

            <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>
                تُعتبر «حوِّل» أول شركة في السودان لبناء البنية التحتية للمدفوعات
                الرقمية بمستوى مطورين. نحن نبني طبقة المدفوعات التي يحتاجها الـ 47
                مليون نسمة في السودان واقتصاده القائم على النقد بشكل عاجل — والتي
                لم تكن موجودة من قبل.
              </p>
              <p>
                يعالج السودان عشرات الملايين من معاملات الأموال عبر الهاتف يومياً،
                ومع ذلك لا يمكن لأي تاجر قبول الدفع عبر الإنترنت، ولا لأي مستقل
                إرسال رابط دفع. فكّر في «حوِّل» كـ «Stripe» للسودان: واجهة API
                نظيفة، روابط دفع قابلة للمشاركة عبر واتساب، ورموز QR قابلة
                للطباعة.
              </p>
              <p className="font-semibold text-foreground">
                ندرك ضوابط «أوفاك»، متوافقون تماماً مع الشريعة، قادرون على العمل
                دون اتصال، ومسعّرون ليناسب واقع السودان.
              </p>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="grid grid-cols-2 gap-4">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="rounded-2xl border border-border bg-card p-6 shadow-sm"
                >
                  <div className="text-3xl font-extrabold text-primary sm:text-4xl">
                    {s.value}
                  </div>
                  <div className="mt-2 text-sm font-medium leading-snug text-muted-foreground">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 rounded-2xl bg-primary p-6 text-primary-foreground">
              <div className="text-sm font-semibold text-gold">
                شبكة الربط الوطنية
              </div>
              <p className="mt-1 text-sm leading-relaxed text-primary-foreground/85">
                نقطة تكامل واحدة عبر EBS تصل إلى جميع البنوك الـ 37 المرخصة من بنك
                السودان المركزي.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
