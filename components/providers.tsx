'use client'

import { I18nProvider, ThemeProvider } from '@/lib/i18n'

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <I18nProvider>{children}</I18nProvider>
    </ThemeProvider>
  )
}
