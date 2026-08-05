'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import { useI18n } from '@/lib/i18n'
import { HawelLogo } from './logo'
import { LanguageToggle, ThemeToggle } from './controls'

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const { t } = useI18n()
  const navLinks = t.header.nav

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-5 lg:px-8">
        <a href="#top" className="shrink-0">
          <HawelLogo />
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <ThemeToggle />
          <LanguageToggle />
          <a
            href="#contact"
            className={buttonVariants({ variant: 'ghost', className: 'text-sm font-semibold' })}
          >
            {t.header.signIn}
          </a>
          <a href="#contact" className={buttonVariants({ className: 'font-semibold' })}>
            {t.header.getStarted}
          </a>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <LanguageToggle />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex size-10 items-center justify-center rounded-lg border border-border text-foreground"
            aria-label={t.header.menu}
            aria-expanded={open}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col px-5 py-3">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className={buttonVariants({ className: 'mt-2 font-semibold' })}
            >
              {t.header.getStarted}
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
