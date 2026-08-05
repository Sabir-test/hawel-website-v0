import Image from 'next/image'
import {
  Zap,
  Link2,
  QrCode,
  LayoutDashboard,
  Hash,
  Check,
  BarChart3,
  Wallet,
  LineChart,
} from 'lucide-react'
import { SectionHeading } from './section-heading'

const gatewayFeatures = [
  'REST API مع مستندات SDK شاملة (JS, PHP, Python, React Native).',
  'صفحة دفع مستضافة (Hosted Checkout) تقلّل نطاق PCI.',
  'iFrame / Web Checkout مدمج لتجربة سلسة داخل الموقع.',
  'تكامل EBS — يصل لجميع البنوك التجارية المرخصة الـ 37.',
  'قنوات زين كاش، MTN، وسوداني للأموال عبر الهاتف.',
  'إشعارات Webhooks موقّعة بـ HMAC-SHA256 في الوقت الفعلي.',
  'SMS OTP لتأكيد الخصم (بديل 3DS للبطاقات المحلية).',
]

const linkSteps = [
  'يسجل التاجر الدخول للوحة التحكم (لا يحتاج لكود).',
  'ينشئ رابطاً: اسم المنتج، السعر (SDG)، الوصف العربي.',
  'ينسخ الرابط — يُنشأ تلقائياً: pay.hawel.sd/p/{id}.',
  'يشاركه عبر واتساب، SMS، إنستغرام، فيسبوك.',
  'العميل يفتح الرابط ← صفحة عربية ← OTP ← تم الدفع.',
  'التاجر يرى إشعاراً في الوقت الفعلي والتسوية.',
]

const qrCards = [
  {
    title: 'QR التاجر الثابت',
    body: 'كود دائم واحد لكل تاجر. العميل يمسح، يدخل المبلغ، ويدفع. قابل للطباعة ويعمل أوفلاين لدى التاجر.',
  },
  {
    title: 'QR المعاملة الديناميكي',
    body: 'كود لكل معاملة بمبلغ محدد مسبقاً. يُنشأ من لوحة التحكم أو API. مثالي للتوصيل والخدمات.',
  },
  {
    title: 'مسح التطبيق (مستقبلاً)',
    body: 'تطبيق حوِّل للمستهلك يمسح أي QR تاجر ويكمل الدفع بالبطاقة المخزنة.',
  },
  {
    title: 'مجموعات QR قابلة للطباعة',
    body: 'حزم QR بتنسيق PDF مصممة خصيصاً لبائعي الأسواق في السودان.',
  },
]

const dashboardFeatures = [
  { icon: BarChart3, title: 'موجز المعاملات الفوري', body: 'بث مباشر لكل المدفوعات: الحالة، المبلغ، العميل، طريقة الدفع.' },
  { icon: Wallet, title: 'إدارة التسويات', body: 'تقارير يومية/أسبوعية/شهرية، تصدير PDF وCSV، تسوية T+1.' },
  { icon: Link2, title: 'منشئ روابط الدفع', body: 'إنشاء وإدارة وإيقاف الروابط مع تحليلات لكل رابط.' },
  { icon: LineChart, title: 'التحليلات والإيرادات', body: 'تصور الإيرادات وتوزيع طرق الدفع وقمع التحويل.' },
]

export function Products() {
  return (
    <section id="products" className="bg-secondary/50 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="المنتجات والخدمات"
          title="منظومة دفع متكاملة — من API إلى ورقة QR"
          description="يتكامل المطورون مرة واحدة، ويصل التجار إلى جميع البنوك السودانية الـ 37 عبر EBS. حلول مبنية لواقع السودان."
        />

        {/* Gateway + Payment Links */}
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <div className="flex flex-col rounded-3xl border border-border bg-card p-7 shadow-sm">
            <div className="flex items-center gap-3">
              <span className="inline-flex size-11 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                <Zap className="size-5" />
              </span>
              <div>
                <h3 className="text-lg font-bold text-foreground">بوابة الدفع API</h3>
                <p className="text-xs text-muted-foreground">
                  REST API + Hosted Checkout + iFrame
                </p>
              </div>
            </div>

            <div className="mt-5 overflow-hidden rounded-xl border border-border bg-primary/95 p-4 font-mono text-[13px] leading-relaxed text-primary-foreground" dir="ltr">
              <pre className="whitespace-pre-wrap">
                <span className="text-gold">const</span> payment ={' '}
                <span className="text-gold">await</span> hawel.charges.create({'{'}
                {'\n'}  amount: <span className="text-gold">5000</span>,
                {'\n'}  currency: <span className="text-gold">{'"SDG"'}</span>,
                {'\n'}  channel: <span className="text-gold">{'"ebs"'}</span>,
                {'\n'}{'}'})
              </pre>
            </div>

            <ul className="mt-5 space-y-2.5">
              {gatewayFeatures.map((f) => (
                <li key={f} className="flex gap-2 text-sm leading-relaxed text-foreground/80">
                  <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                  {f}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col rounded-3xl border border-border bg-card p-7 shadow-sm">
            <div className="flex items-center gap-3">
              <span className="inline-flex size-11 items-center justify-center rounded-xl bg-gold text-gold-foreground">
                <Link2 className="size-5" />
              </span>
              <div>
                <h3 className="text-lg font-bold text-foreground">روابط الدفع</h3>
                <p className="text-xs text-muted-foreground">
                  من التسجيل إلى التسوية في 6 خطوات
                </p>
              </div>
            </div>

            <ol className="mt-5 space-y-3">
              {linkSteps.map((step, i) => (
                <li key={step} className="flex items-start gap-3">
                  <span className="inline-flex size-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                    {i + 1}
                  </span>
                  <span className="text-sm leading-relaxed text-foreground/80">
                    {step}
                  </span>
                </li>
              ))}
            </ol>

            <div className="mt-5 rounded-xl bg-secondary p-4 text-sm text-muted-foreground">
              مبلغ ثابت أو مفتوح · وصف ثنائي اللغة · توليد QR تلقائي لكل رابط ·
              رسالة واتساب منسّقة.
            </div>
          </div>
        </div>

        {/* QR Payments with image */}
        <div className="mt-6 grid gap-6 lg:grid-cols-5">
          <div className="relative overflow-hidden rounded-3xl border border-border shadow-sm lg:col-span-2">
            <Image
              src="/images/qr-payment.png"
              alt="عميل يمسح كود QR مطبوع على حامل ورقي في مقهى سوداني"
              width={520}
              height={620}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-primary/90 to-transparent p-6">
              <div className="flex items-center gap-2 text-primary-foreground">
                <QrCode className="size-5 text-gold" />
                <span className="font-bold">مدفوعات كود QR</span>
              </div>
              <p className="mt-1 text-sm text-primary-foreground/85">
                اطبع كودك على الورق واقبل المدفوعات الرقمية — دون POS أو إنترنت
                لدى التاجر.
              </p>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-3">
            {qrCards.map((c) => (
              <div
                key={c.title}
                className="rounded-2xl border border-border bg-card p-5"
              >
                <h4 className="font-bold text-foreground">{c.title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {c.body}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Dashboard */}
        <div className="mt-6 rounded-3xl border border-border bg-card p-7 shadow-sm">
          <div className="flex items-center gap-3">
            <span className="inline-flex size-11 items-center justify-center rounded-xl bg-primary text-primary-foreground">
              <LayoutDashboard className="size-5" />
            </span>
            <div>
              <h3 className="text-lg font-bold text-foreground">
                لوحة تحكم التاجر
              </h3>
              <p className="text-xs text-muted-foreground">
                بالعربية أولاً، محسّنة للهاتف، مبنية لانقطاع الاتصال.
              </p>
            </div>
          </div>
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {dashboardFeatures.map((d) => (
              <div key={d.title} className="rounded-2xl bg-secondary/60 p-5">
                <d.icon className="size-5 text-primary" />
                <h4 className="mt-3 text-sm font-bold text-foreground">
                  {d.title}
                </h4>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                  {d.body}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* USSD fallback */}
        <div className="mt-6 overflow-hidden rounded-3xl bg-primary p-7 text-primary-foreground lg:p-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-xl">
              <div className="flex items-center gap-3">
                <span className="inline-flex size-11 items-center justify-center rounded-xl bg-gold text-gold-foreground">
                  <Hash className="size-5" />
                </span>
                <h3 className="text-lg font-bold">قناة الاتصال الاحتياطية USSD</h3>
              </div>
              <p className="mt-4 leading-relaxed text-primary-foreground/85">
                ميزة لا يقدمها المنافسون الإقليميون — لكن السودان يحتاجها. تمكّن
                قناة USSD من تأكيد الدفع عبر رموز اتصال بسيطة من أي هاتف.
              </p>
            </div>
            <div className="rounded-2xl border border-gold/30 bg-primary-foreground/5 p-6 font-mono text-sm text-gold" dir="ltr">
              <div>*34*amount*ref#</div>
              <div className="mt-2 text-primary-foreground/70">
                → confirm PIN → payment done
              </div>
              <div className="mt-2 text-primary-foreground/70">
                → SMS receipt
              </div>
              <div className="mt-3 font-sans font-bold text-primary-foreground">
                لا إنترنت. لا هاتف ذكي. لا مشكلة.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
