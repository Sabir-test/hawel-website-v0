import Image from 'next/image'
import { ArrowLeft, ShieldCheck, Wifi } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-primary text-primary-foreground"
    >
      {/* geometric gold linework */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage:
            'linear-gradient(115deg, transparent 0%, transparent 48%, var(--gold) 48.3%, var(--gold) 48.7%, transparent 49%), linear-gradient(65deg, transparent 0%, transparent 70%, var(--gold) 70.3%, var(--gold) 70.6%, transparent 71%)',
          backgroundSize: '180px 180px, 260px 260px',
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-1/2 size-[480px] -translate-y-1/2 rounded-full border border-gold/20"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-10 top-1/2 size-[300px] -translate-y-1/2 rounded-full border border-gold/15"
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 lg:grid-cols-2 lg:gap-8 lg:px-8 lg:py-28">
        <div className="flex flex-col items-start gap-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 text-xs font-semibold text-gold">
            <span className="size-1.5 rounded-full bg-gold" />
            ما قبل الإطلاق · يونيو 2026
          </span>

          <h1 className="text-balance text-4xl font-extrabold leading-[1.15] tracking-tight sm:text-5xl lg:text-6xl">
            بنية تحتية للمدفوعات في السودان{' '}
            <span className="text-gold">بمستوى مطورين</span>
          </h1>

          <p className="max-w-xl text-pretty text-base leading-relaxed text-primary-foreground/80 sm:text-lg">
            «حوِّل» — للتحويل، وللتحول. واجهة برمجة تطبيقات نظيفة، روابط دفع عبر
            واتساب، رموز QR قابلة للطباعة، ولوحة تحكم تتحدث العربية أولاً. مبنية
            على شبكة EBS — المقسم المصرفي الوطني الذي يربط بنوك السودان الـ 37.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <Button
              asChild
              size="lg"
              className="bg-gold font-bold text-gold-foreground hover:bg-gold/90"
            >
              <a href="#contact" className="flex items-center gap-2">
                كن من أوائل التجار
                <ArrowLeft className="size-4" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary-foreground/30 bg-transparent font-semibold text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
            >
              <a href="#products">استكشف المنتجات</a>
            </Button>
          </div>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-2 text-sm text-primary-foreground/70">
            <span className="flex items-center gap-2">
              <ShieldCheck className="size-4 text-gold" />
              متوافق مع الشريعة 100%
            </span>
            <span className="flex items-center gap-2">
              <Wifi className="size-4 text-gold" />
              يعمل دون اتصال (USSD)
            </span>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 rounded-[2rem] bg-gold/10 blur-2xl" />
          <div className="relative overflow-hidden rounded-3xl border border-gold/20 shadow-2xl">
            <Image
              src="/images/hero-merchant.png"
              alt="تاجرة سودانية شابة تستخدم تطبيق حوِّل لتأكيد دفعة في متجرها"
              width={720}
              height={820}
              priority
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
