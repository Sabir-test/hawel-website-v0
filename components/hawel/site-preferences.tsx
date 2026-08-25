'use client'

import { Moon, Sun } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'

const translations: Record<string, string> = {
  'نظرة عامة': 'Overview',
  'المنتجات': 'Products',
  'الأسعار': 'Pricing',
  'المقارنة': 'Compare',
  'خارطة الطريق': 'Roadmap',
  'تواصل معنا': 'Contact us',
  'تسجيل الدخول': 'Sign in',
  'ابدأ الآن': 'Get started',
  'القائمة': 'Menu',
  'المنتجات والخدمات': 'Products and services',
  'بوابة الدفع API': 'Payment API gateway',
  'روابط الدفع': 'Payment links',
  'مدفوعات كود QR': 'QR payments',
  'لوحة التحكم': 'Dashboard',
  'لماذا حوِّل؟': 'Why Hawel?',
  'استفسارات المستثمرين': 'Investor inquiries',
  'منظومة دفع متكاملة — من API إلى ورقة QR': 'A complete payment ecosystem — from API to printed QR',
  'من MVP يركز على السودان إلى التوسع الإقليمي': 'From a Sudan-focused MVP to regional expansion',
  'الشركة': 'Company',
  'المطورون': 'Developers',
  'من نحن': 'About us',
  'فرصة السوق': 'Market opportunity',
  'مستندات API': 'API documentation',
  'بيئة التجربة': 'Sandbox',
  'مجاني': 'Free',
  'المبتدئ': 'Starter',
  'ما قبل الإطلاق · يونيو 2026': 'Pre-launch · June 2026',
  'اجعل أي هاتف يقبل الدفع —': 'Make any phone accept payments —',
  'ابدأ اليوم': 'Start today',
  'كن من أوائل التجار': 'Become an early merchant',
  'استكشف المنتجات': 'Explore products',
  'متوافق مع الشريعة 100%': '100% Sharia-compliant',
  'يعمل دون اتصال (USSD)': 'Works offline (USSD)',
  'تاجرة سودانية شابة تستخدم تطبيق حوِّل لتأكيد دفعة في متجرها': 'Young Sudanese merchant using Hawel to confirm a payment in her shop',
  'فلسفة الاسم والعلامة التجارية': 'Name and brand philosophy',
  'فجوة البنية التحتية للمدفوعات في السودان': 'Sudan’s payment infrastructure gap',
  'المشكلة': 'The problem',
  'الفرصة': 'The opportunity',
  'شرائح العملاء المستهدفة': 'Target customer segments',
  'بائعو الاقتصاد غير الرسمي': 'Informal economy sellers',
  'المستقلون ومقدمو الخدمات': 'Freelancers and service providers',
  'التجار الصغار والمتوسطون': 'Small and medium merchants',
  'منصات التجارة الإلكترونية': 'E-commerce platforms',
  'مستخدمو الأموال عبر الهاتف': 'Mobile money users',
  'الشركات والمؤسسات': 'Businesses and institutions',
  'حوِّل مقابل المنافسين الإقليميين': 'Hawel vs. regional competitors',
}

function translatePage(toEnglish: boolean) {
  const root = document
  root.documentElement.querySelectorAll<HTMLElement>('[aria-label], [title], img[alt]').forEach((element) => {
    const attributeNames = ['aria-label', 'title', 'alt']
    attributeNames.forEach((name) => {
      const value = element.getAttribute(name)
      if (!value) return
      const translated = translations[value]
      if (toEnglish && translated) element.setAttribute(`data-arabic-${name}`, value)
      element.setAttribute(name, toEnglish ? translated ?? value : element.getAttribute(`data-arabic-${name}`) ?? value)
    })
  })

  const walker = document.createTreeWalker(root.body, NodeFilter.SHOW_TEXT)
  const nodes: Text[] = []
  while (walker.nextNode()) nodes.push(walker.currentNode as Text)
  nodes.forEach((node) => {
    const original = node.parentElement?.getAttribute('data-arabic-text') ?? node.textContent ?? ''
    if (toEnglish) {
      const translated = translations[original.trim()]
      if (translated && node.parentElement) {
        node.parentElement.setAttribute('data-arabic-text', original)
        node.textContent = original.replace(original.trim(), translated)
      }
    } else if (node.parentElement?.hasAttribute('data-arabic-text')) {
      node.textContent = original
    }
  })
}

export function SitePreferences() {
  const [dark, setDark] = useState(false)
  const [english, setEnglish] = useState(false)

  useEffect(() => {
    const savedTheme = window.localStorage.getItem('hawel-theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const initialDark = savedTheme ? savedTheme === 'dark' : prefersDark
    const frame = window.requestAnimationFrame(() => setDark(initialDark))

    document.documentElement.classList.toggle('dark', initialDark)
    return () => window.cancelAnimationFrame(frame)
  }, [])

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
    translatePage(nextEnglish)
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
