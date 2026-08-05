import { Analytics } from '@vercel/analytics/next'
import type { Metadata } from 'next'
import { Cairo, Geist_Mono } from 'next/font/google'
import { Providers } from '@/components/providers'
import './globals.css'

const cairo = Cairo({
  variable: '--font-cairo',
  subsets: ['arabic', 'latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
})
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'حوِّل | Hawel — بنية تحتية للمدفوعات في السودان',
  description:
    'حوِّل: أول بنية تحتية للمدفوعات الرقمية بمستوى مطورين في السودان. بوابة دفع API، روابط دفع، مدفوعات QR، ولوحة تحكم عربية أولاً مبنية على شبكة EBS الوطنية.',
  openGraph: {
    title: 'حوِّل | Hawel — بنية تحتية للمدفوعات في السودان',
    description:
      'أول بوابة دفع API للمطورين في السودان. مبنية على EBS. متوافقة مع الشريعة. تعمل دون اتصال.',
    url: 'https://hawel.sd',
    siteName: 'حوِّل | Hawel',
    locale: 'ar_SD',
    alternateLocale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'حوِّل | Hawel',
    description:
      "Sudan's first developer-grade payment infrastructure. API gateway · WhatsApp links · QR payments · Sharia-compliant.",
  },
  metadataBase: new URL('https://hawel.sd'),
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="ar"
      dir="rtl"
      suppressHydrationWarning
      className={`${cairo.variable} ${geistMono.variable} bg-background`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{
  var l=localStorage.getItem('hawel-lang');
  if(l!=='ar'&&l!=='en'){l='ar'}
  document.documentElement.lang=l;
  document.documentElement.dir=l==='ar'?'rtl':'ltr';
  var t=localStorage.getItem('hawel-theme');
  var dark=t==='dark'||(!t&&window.matchMedia('(prefers-color-scheme: dark)').matches);
  if(dark){document.documentElement.classList.add('dark')}
}catch(e){}})();`,
          }}
        />
      </head>
      <body className="font-sans antialiased">
        <Providers>{children}</Providers>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
