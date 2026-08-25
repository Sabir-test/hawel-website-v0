'use client'

import { Moon, Sun } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'

export function SitePreferences() {
  const [dark, setDark] = useState(() =>
    typeof document !== 'undefined' && document.documentElement.classList.contains('dark'),
  )
  const [english, setEnglish] = useState(false)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
  }, [dark])

  function toggleTheme() {
    const next = !dark
    setDark(next)
    document.documentElement.classList.toggle('dark', next)
    window.localStorage.setItem('hawel-theme', next ? 'dark' : 'light')
  }

  function toggleLanguage() {
    const nextEnglish = !english
    setEnglish(nextEnglish)
    document.documentElement.lang = nextEnglish ? 'en' : 'ar'
    document.documentElement.dir = nextEnglish ? 'ltr' : 'rtl'
  }

  return (
    <div className="flex items-center gap-1" aria-label="إعدادات العرض واللغة">
      <Button
        type="button"
        variant="ghost"
        size="sm"
        onClick={toggleLanguage}
        aria-label={english ? 'التبديل إلى العربية' : 'Switch to English'}
        title={english ? 'العربية' : 'English'}
      >
        <span className="font-mono text-xs" aria-hidden="true">
          {english ? 'ع' : 'EN'}
        </span>
        <span className="sr-only">{english ? 'العربية' : 'English'}</span>
      </Button>
      <Button
        type="button"
        variant="ghost"
        size="icon"
        onClick={toggleTheme}
        aria-label={dark ? 'تفعيل الوضع الفاتح' : 'تفعيل الوضع الداكن'}
        title={dark ? 'الوضع الفاتح' : 'الوضع الداكن'}
      >
        {dark ? <Sun aria-hidden="true" /> : <Moon aria-hidden="true" />}
      </Button>
    </div>
  )
}
