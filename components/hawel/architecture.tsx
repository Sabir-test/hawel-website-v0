import { Globe, Landmark, WifiOff, Lock, Moon, Cpu } from 'lucide-react'
import { SectionHeading } from './section-heading'

const principles = [
  {
    icon: Globe,
    title: 'بنية تحتية آمنة الولاية القضائية',
    body: 'كل البنية الأساسية خارج الولاية القضائية الأمريكية (AWS Frankfurt أو الإمارات). لا دولار عبر بنوك مراسلة أمريكية.',
  },
  {
    icon: Landmark,
    title: 'شبكة EBS الأصلية',
    body: 'الهندسة مبنية حول بروتوكول ISO 8583 الخاص بـ EBS — وليس Visa/Mastercard. طبقة موصل EBS مخصصة.',
  },
  {
    icon: WifiOff,
    title: 'مرونة أوفلاين بالتصميم',
    body: 'Service worker + PWA للمتصفحات. استجابات API أقل من 10KB. USSD كاحتياطي أساسي.',
  },
  {
    icon: Lock,
    title: 'الأمن والتوافق مع PCI',
    body: 'صفحة دفع iFrame مستضافة، تشفير AES-256-GCM، توقيع HMAC-SHA256، لا تخزين PAN على سيرفرات التجار.',
  },
  {
    icon: Moon,
    title: 'ضوابط التمويل الإسلامي',
    body: 'محرك إيرادات «أجرة» فقط. لا حسابات عائمة بعوائد فائدة. التسوية T+1 كافتراضي.',
  },
  {
    icon: Cpu,
    title: 'ملخص التكنولوجيا',
    body: 'Node.js/Fastify + Go للتسوية، PostgreSQL + Patroni HA، Kafka، Redis، Next.js + React Native.',
  },
]

const stack = ['Node.js', 'Go', 'PostgreSQL', 'Apache Kafka', 'Redis', 'Next.js', 'React Native', 'ISO 8583']

export function Architecture() {
  return (
    <section
      id="architecture"
      className="relative overflow-hidden bg-primary py-20 text-primary-foreground lg:py-28"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            'linear-gradient(var(--gold) 1px, transparent 1px), linear-gradient(90deg, var(--gold) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          inverted
          eyebrow="نظرة تقنية شاملة"
          title="مبادئ الهندسة التقنية"
          description="مبنية لواقع البنية التحتية في السودان مع فصل واضح للولاية القضائية الأمريكية."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {principles.map((p) => (
            <div
              key={p.title}
              className="rounded-2xl border border-gold/20 bg-primary-foreground/5 p-6 backdrop-blur-sm"
            >
              <span className="inline-flex size-10 items-center justify-center rounded-xl bg-gold/15 text-gold">
                <p.icon className="size-5" />
              </span>
              <h3 className="mt-4 font-bold">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-primary-foreground/75">
                {p.body}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-2.5">
          {stack.map((s) => (
            <span
              key={s}
              className="rounded-full border border-gold/30 bg-primary-foreground/5 px-4 py-1.5 font-mono text-sm text-gold"
              dir="ltr"
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
