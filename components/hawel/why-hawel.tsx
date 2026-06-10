import Image from 'next/image'
import { Globe, FileCode2, TrendingUp, Store, ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'

const contacts = [
  { icon: Globe, label: 'الموقع', value: 'hawel.sd' },
  { icon: FileCode2, label: 'مستندات المطورين', value: 'docs.hawel.sd' },
  { icon: TrendingUp, label: 'استفسارات المستثمرين', value: 'investors@hawel.sd' },
  { icon: Store, label: 'شراكات التجار', value: 'merchants@hawel.sd' },
]

export function WhyHawel() {
  return (
    <section id="contact" className="relative isolate overflow-hidden">
      <Image
        src="/images/nile-sunset.png"
        alt="غروب الشمس فوق النيل في الخرطوم مع أفق المدينة"
        fill
        className="-z-10 object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-primary/90" />

      <div className="mx-auto max-w-5xl px-5 py-24 text-center text-primary-foreground lg:px-8 lg:py-32">
        <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 text-xs font-bold text-gold">
          لماذا حوِّل؟
        </span>
        <h2 className="mt-6 text-balance text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
          السودان لا يحتاج محفظة هاتف أخرى — يحتاج طبقة بنية تحتية للمدفوعات
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-relaxed text-primary-foreground/85 sm:text-lg">
          استعاد بنك السودان المركزي EBS الإلكتروني في يناير 2026. الـ Sandbox
          مفتوح. البنوك تفهم الفجوة. التجار ينتظرون. المطورون في الشتات جاهزون
          للبناء. التوقيت هو الآن.
        </p>

        <p className="mt-8 text-balance text-xl font-extrabold text-gold sm:text-2xl">
          حوِّل طريقة دفعك. حوِّل تجارتك. حوِّل السودان.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Button
            asChild
            size="lg"
            className="bg-gold font-bold text-gold-foreground hover:bg-gold/90"
          >
            <a href="mailto:merchants@hawel.sd" className="flex items-center gap-2">
              تواصل معنا
              <ArrowLeft className="size-4" />
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-primary-foreground/30 bg-transparent font-semibold text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
          >
            <a href="mailto:investors@hawel.sd">استفسارات المستثمرين</a>
          </Button>
        </div>

        <div className="mx-auto mt-14 grid max-w-3xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {contacts.map((c) => (
            <div
              key={c.label}
              className="rounded-2xl border border-primary-foreground/15 bg-primary-foreground/5 p-5 text-start backdrop-blur-sm"
            >
              <c.icon className="size-5 text-gold" />
              <div className="mt-3 text-xs text-primary-foreground/70">
                {c.label}
              </div>
              <div className="mt-0.5 text-sm font-bold" dir="ltr">
                {c.value}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
