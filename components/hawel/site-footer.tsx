import { HawelLogo } from './logo'

const linkGroups = [
  {
    title: 'المنتجات',
    links: [
      { label: 'بوابة الدفع API', href: '#products' },
      { label: 'روابط الدفع', href: '#products' },
      { label: 'مدفوعات QR', href: '#products' },
      { label: 'لوحة التحكم', href: '#products' },
    ],
  },
  {
    title: 'الشركة',
    links: [
      { label: 'من نحن', href: '#summary' },
      { label: 'فرصة السوق', href: '#market' },
      { label: 'خارطة الطريق', href: '#roadmap' },
      { label: 'تواصل معنا', href: '#contact' },
    ],
  },
  {
    title: 'المطورون',
    links: [
      { label: 'مستندات API', href: 'https://docs.hawel.sd' },
      { label: 'بيئة التجربة', href: 'https://docs.hawel.sd/sandbox' },
      { label: 'GitHub', href: 'https://github.com/hawel-sd' },
      { label: 'SDK', href: 'https://docs.hawel.sd/sdk' },
    ],
  },
]

export function SiteFooter() {
  return (
    <footer className="bg-background">
      <div className="mx-auto max-w-7xl px-5 py-14 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <HawelLogo />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              شريكك في الدفع الرقمي. بنية تحتية للمدفوعات في السودان بمستوى
              مطورين، مبنية على شبكة EBS الوطنية ومتوافقة 100% مع الشريعة.
            </p>
          </div>

          {linkGroups.map((group) => (
            <div key={group.title} className="lg:col-span-2">
              <h3 className="text-sm font-bold text-foreground">
                {group.title}
              </h3>
              <ul className="mt-4 space-y-3">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 حوِّل (Hawel). جميع الحقوق محفوظة.</p>
          <p>الإصدار 1.0 · يونيو 2026</p>
        </div>
      </div>
    </footer>
  )
}
