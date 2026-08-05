'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { HawelLogo } from './logo'

const navLinks = [
  { href: '#summary', label: 'نظرة عامة' },
  { href: '#products', label: 'المنتجات' },
  { href: '#pricing', label: 'الأسعار' },
  { href: '#compare', label: 'المقارنة' },
  { href: '#roadmap', label: 'خارطة الطريق' },
  { href: '#contact', label: 'تواصل معنا' },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)

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

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="#contact"
            className={cn(buttonVariants({ variant: 'ghost' }), 'text-sm font-semibold')}
          >
            تسجيل الدخول
          </a>
          <a href="#contact" className={cn(buttonVariants(), 'font-semibold')}>
            ابدأ الآن
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex size-10 items-center justify-center rounded-lg border border-border text-foreground lg:hidden"
          aria-label="القائمة"
          aria-expanded={open}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
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
              className={cn(buttonVariants(), 'mt-2 font-semibold')}
            >
              ابدأ الآن
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
