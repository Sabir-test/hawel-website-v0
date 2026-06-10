import { Analytics } from '@vercel/analytics/next'
import type { Metadata } from 'next'
import { Cairo, Geist_Mono } from 'next/font/google'
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
  title: 'حوِّل | Hawel — شريكك في الدفع الرقمي',
  description:
    'حوِّل: أول بنية تحتية للمدفوعات الرقمية بمستوى مطورين في السودان. بوابة دفع API، روابط دفع، مدفوعات QR، ولوحة تحكم عربية أولاً مبنية على شبكة EBS الوطنية.',
  generator: 'v0.app',
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
      className={`${cairo.variable} ${geistMono.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
