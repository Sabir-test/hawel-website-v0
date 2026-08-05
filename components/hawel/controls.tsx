'use client'

import { Languages, Moon, Sun } from 'lucide-react'
import { useI18n, useTheme } from '@/lib/i18n'
import { cn } from '@/lib/utils'

export function LanguageToggle({ className }: { className?: string }) {
  const { lang, t, toggleLang } = useI18n()

  return (
    <button
      type="button"
      onClick={toggleLang}
      className={cn(
        'inline-flex h-10 items-center gap-1.5 rounded-lg border border-border px-3 text-sm font-semibold text-foreground transition-colors hover:bg-muted',
        className,
      )}
      aria-label={lang === 'ar' ? 'Switch to English' : 'التبديل إلى العربية'}
    >
      <Languages className="size-4" />
      <span>{t.langToggleLabel}</span>
    </button>
  )
}

export function ThemeToggle({ className }: { className?: string }) {
  const { theme, toggleTheme } = useTheme()
  const { t } = useI18n()
  const isDark = theme === 'dark'

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={cn(
        'inline-flex size-10 items-center justify-center rounded-lg border border-border text-foreground transition-colors hover:bg-muted',
        className,
      )}
      aria-label={isDark ? t.themeToggleToLight : t.themeToggleToDark}
    >
      {isDark ? <Sun className="size-4" /> : <Moon className="size-4" />}
    </button>
  )
}
