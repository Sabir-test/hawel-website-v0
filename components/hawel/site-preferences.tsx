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
  'الملخص التنفيذي': 'Executive summary',
  'السودان يعالج عشرات الملايين من معاملات الأموال يومياً — ولا تاجر واحد يستطيع قبول الدفع عبر الإنترنت. هذه هي الفجوة التي نبنيها لها.': 'Sudan processes tens of millions of money transactions every day — yet not a single merchant can accept payments online. This is the gap we are building to fill.',
  'تُعتبر «حوِّل» أول شركة في السودان لبناء البنية التحتية للمدفوعات الرقمية بمستوى مطورين. نحن نبني طبقة المدفوعات التي يحتاجها الـ 47 مليون نسمة في السودان واقتصاده القائم على النقد بشكل عاجل — والتي لم تكن موجودة من قبل.': 'Hawel is Sudan’s first company building developer-grade digital payments infrastructure. We are building the payment layer urgently needed by Sudan’s 47 million people and its cash-based economy — a layer that has never existed before.',
  'يعالج السودان عشرات الملايين من معاملات الأموال عبر الهاتف يومياً، ومع ذلك لا يمكن لأي تاجر قبول الدفع عبر الإنترنت، ولا لأي مستقل إرسال رابط دفع. فكّر في «حوِّل» كـ «Stripe» للسودان: واجهة API نظيفة، روابط دفع قابلة للمشاركة عبر واتساب، ورموز QR قابلة للطباعة.': 'Sudan processes tens of millions of mobile-money transactions daily, yet no merchant can accept payments online and no freelancer can send a payment link. Think of Hawel as Stripe for Sudan: a clean API, shareable WhatsApp payment links, and printable QR codes.',
  'ندرك ضوابط «أوفاك»، متوافقون تماماً مع الشريعة، قادرون على العمل دون اتصال، ومسعّرون ليناسب واقع السودان.': 'We understand OFAC controls, are fully Sharia-compliant, work offline, and are priced for Sudan’s reality.',
  'شبكة الربط الوطنية': 'National connectivity network',
  'نقطة تكامل واحدة عبر EBS تصل إلى جميع البنوك الـ 37 المرخصة من بنك السودان المركزي.': 'One integration point through EBS reaches all 37 banks licensed by the Central Bank of Sudan.',
  'هوية الشركة': 'Company identity',
  '«حوِّل» فعل أمر عربي يحمل معنيين جوهريين: التحويل — نقل الأموال بين الأطراف، والتحول — تغيير كيفية عمل اقتصاد السودان رقمياً.': 'Hawel is an Arabic imperative with two core meanings: transfer — moving money between parties, and transform — changing how Sudan’s economy works digitally.',
  'اسم الشركة': 'Company name', 'التأسيس': 'Founded', 'المقر': 'Headquarters', 'سوق العمليات': 'Operating market', 'نوع العمل': 'Business type', 'الهدف التنظيمي': 'Regulatory goal', 'شبكة الربط': 'Connectivity network', 'التوافق الشرعي': 'Sharia compliance', 'عملة التسوية': 'Settlement currency',
  'استراتيجية التسويق': 'Go-to-market strategy', 'ثلاث شرائح، ثلاث رسائل': 'Three segments, three messages', 'الشريحة أ': 'Segment A', 'الشريحة ب': 'Segment B', 'الشريحة ج': 'Segment C',
  'المطورون والشركات الناشئة': 'Developers and startups', 'التجار الصغار والمتوسطون': 'Small and medium merchants', 'البائعون غير الرسميون': 'Informal sellers',
  'مستندات المطورين، GitHub، مجتمعات التقنية في الخرطوم.': 'Developer docs, GitHub, and tech communities in Khartoum.', 'واتساب للأعمال، جمعيات التجار، الغرفة التجارية، المبيعات الميدانية.': 'WhatsApp Business, merchant associations, the chamber of commerce, and field sales.', 'تيك توك السودان، إنستغرام، تفعيل الأسواق، شراكات التمويل الأصغر.': 'Sudan TikTok, Instagram, market activations, and microfinance partnerships.',
  'حملات واتساب للأعمال': 'WhatsApp Business campaigns', 'إنستغرام وتيك توك': 'Instagram and TikTok', 'مستندات المطورين وGitHub': 'Developer docs and GitHub', 'شراكات جمعيات التجار': 'Merchant association partnerships', 'رحلات تفعيل واتساب/SMS': 'WhatsApp/SMS activation journeys', 'مدرسة حوِّل التعليمية': 'Hawel Academy',
  'الموقع': 'Website', 'شراكات التجار': 'Merchant partnerships', 'الإصدار 1.0 · يونيو 2026': 'Version 1.0 · June 2026',
  'لماذا حوِّل؟': 'Why Hawel?', 'السودان لا يحتاج محفظة هاتف أخرى — يحتاج طبقة بنية تحتية للمدفوعات': 'Sudan does not need another mobile wallet — it needs a payment infrastructure layer', 'التوقيت هو الآن.': 'The time is now.', 'حوِّل طريقة دفعك. حوِّل تجارتك. حوِّل السودان.': 'Transform how you pay. Transform your business. Transform Sudan.',
  'قناة الاتصال الاحتياطية USSD': 'USSD fallback channel', 'لا إنترنت. لا هاتف ذكي. لا مشكلة.': 'No internet. No smartphone. No problem.', 'من التسجيل إلى التسوية في 6 خطوات': 'From signup to settlement in 6 steps', 'بالعربية أولاً، محسّنة للهاتف، مبنية لانقطاع الاتصال.': 'Arabic-first, mobile-optimized, built for unreliable connectivity.',
  'موجز المعاملات الفوري': 'Real-time transaction feed', 'إدارة التسويات': 'Settlement management', 'منشئ روابط الدفع': 'Payment link builder', 'التحليلات والإيرادات': 'Analytics and revenue',   'فواتير الاشتراكات': 'Subscription billing', 'مدفوعات مجزأة/سوق': 'Split / marketplace payments', 'دخول سوق جنوب السودان': 'Enter the South Sudan market', 'تسويات عبر الحدود': 'Cross-border settlements',
  'التسعير': 'Pricing', 'نموذج التسعير': 'Pricing model', 'لا رسوم خفية. لا فائدة. لا إيرادات من الأموال العائمة. تسوية شفافة.': 'No hidden fees. No interest. No revenue from held funds. Transparent settlement.', 'الأكثر شيوعاً': 'Most popular', 'المتوسط العالمي: 2.9% + رسوم ثابتة': 'Global average: 2.9% + fixed fee', 'هيكل رسوم «أجرة» — ملاحظة التوافق الشرعي': 'Ajrah fee structure — Sharia compliance note', 'لا ربا': 'No riba', 'لا فائدة على أي معاملة أو رصيد قائم.': 'No interest on any transaction or outstanding balance.', 'لا غرامات': 'No penalties', 'لا غرامات تأخير كفائدة.': 'No late-payment interest penalties.', 'لا أموال عائمة': 'No held funds', 'معتمد من الهيئة': 'Board approved',
  'الموقع التنافسي': 'Competitive positioning', 'الخدمة': 'Service', 'التوافق مع الشريعة': 'Sharia compliance', 'احتياطي USSD': 'USSD fallback', 'تكامل شبكة محلية': 'Local network integration', 'العربية أولاً (RTL)': 'Arabic-first (RTL)', 'شبكات المحافظ المحلية': 'Local wallet networks', 'ثانوية': 'Secondary', 'افتراضية': 'Native', 'رسوم أجرة معتمدة': 'Approved Ajrah fees', 'EBS — المقسم الوطني': 'EBS — national switch', 'زين كاش / MTN Money': 'Zain Cash / MTN Money',
  'بنية تحتية آمنة الولاية القضائية': 'Jurisdiction-safe infrastructure', 'مبادئ الهندسة التقنية': 'Technical engineering principles', 'التوسع': 'Expansion', 'النمو': 'Growth', 'الإطلاق (MVP)': 'Launch (MVP)', 'الامتداد': 'Extension', 'أربع مراحل مدروسة تنمو من الأساس المحلي إلى الأسواق الواعدة المجاورة.': 'Four deliberate phases, growing from a local foundation into promising neighboring markets.', 'تعتمد الجداول الزمنية على الحصول على الموافقات التنظيمية من بنك السودان المركزي في المواعيد المتوقعة.': 'Timelines depend on receiving regulatory approvals from the Central Bank of Sudan as expected.',
  'بوابة دفع API (EBS)': 'Payment API gateway (EBS)', 'تفعيل KYC + SMS OTP': 'KYC + SMS OTP activation', 'محرك Webhook': 'Webhook engine', 'تطبيق هاتف (أندرويد أولاً)': 'Mobile app (Android first)', 'تحويل الهاتف لنقطة بيع (SoftPOS)': 'Turn phones into points of sale (SoftPOS)', 'دعم PWA أوفلاين': 'Offline PWA support', 'وصول متعدد المستخدمين': 'Multi-user access', 'إضافة WooCommerce': 'WooCommerce plugin', 'محرك احتيال متقدم (ML)': 'Advanced fraud engine (ML)', 'توسيع معدل API': 'API rate expansion', 'تقديم بيضاء (White-label)': 'White-label offering', 'دفعات B2B ضخمة': 'B2B bulk payouts', 'تغطية إثيوبيا / كينيا': 'Ethiopia / Kenya coverage', 'استكشاف العملات المستقرة': 'Explore stablecoins', 'الخدمات البنكية كخدمة (BaaS)': 'Banking as a service (BaaS)', 'اشترِ الآن وادفع لاحقاً (شرعي)': 'Buy now, pay later (Sharia-compliant)',
  'غروب الشمس فوق النيل في الخرطوم مع أفق المدينة': 'Sunset over the Nile in Khartoum with the city skyline', 'تواصل معنا': 'Contact us', 'استعاد بنك السودان المركزي EBS الإلكتروني في يناير 2026. بيئة التجربة': 'The Central Bank of Sudan restored electronic EBS in January 2026. The sandbox', '(Sandbox) متاحة للمطورين المعتمدين. البنوك تفهم الفجوة. التجار ينتظرون.': '(Sandbox) is available to approved developers. Banks understand the gap. Merchants are waiting.',
  'صفحة دفع مستضافة (Hosted Checkout) تقلّل نطاق PCI.': 'Hosted Checkout reduces PCI scope.', 'iFrame / Web Checkout مدمج لتجربة سلسة داخل الموقع.': 'Embedded iFrame / Web Checkout for a seamless on-site experience.', 'تكامل EBS — يصل لجميع البنوك التجارية المرخصة الـ 37.': 'EBS integration — reaches all 37 licensed commercial banks.', 'إشعارات Webhooks موقّعة بـ HMAC-SHA256 في الوقت الفعلي.': 'Real-time HMAC-SHA256-signed webhook notifications.', 'SMS OTP لتأكيد الخصم (بديل 3DS للبطاقات المحلية).': 'SMS OTP for debit confirmation (3DS alternative for local cards).', 'ينشئ رابطاً: اسم المنتج، السعر (SDG)، الوصف العربي.': 'Creates a link: product name, price (SDG), and description.', 'ينسخ الرابط — يُنشأ تلقائياً: pay.hawel.sd/p/{id}.': 'Copies the link — generated automatically: pay.hawel.sd/p/{id}.', 'يشاركه عبر واتساب، SMS، إنستغرام، فيسبوك.': 'Shares it via WhatsApp, SMS, Instagram, and Facebook.', 'العميل يفتح الرابط ← صفحة عربية ← OTP ← تم الدفع.': 'The customer opens the link ← Arabic page ← OTP ← payment complete.', 'التاجر يرى إشعاراً في الوقت الفعلي والتسوية.': 'The merchant sees a real-time notification and settlement.', 'مبلغ ثابت أو مفتوح · وصف ثنائي اللغة · توليد QR تلقائي لكل رابط · رسالة واتساب منسّقة.': 'Fixed or open amount · bilingual description · automatic QR generation for every link · formatted WhatsApp message.', 'مسح التطبيق (مستقبلاً)': 'App scanning (coming soon)', 'QR المعاملة الديناميكي': 'Dynamic transaction QR', 'مجموعات QR قابلة للطباعة': 'Printable QR packs', 'اطبع كودك على الورق واقبل المدفوعات الرقمية — دون POS أو إنترنت لدى التاجر.': 'Print your code and accept digital payments — without a POS or merchant internet.',
  'شريكك في الدفع الرقمي. بنية تحتية للمدفوعات في السودان بمستوى': 'Your partner in digital payments. Developer-grade payment infrastructure in Sudan,', 'مطورين، مبنية على شبكة EBS الوطنية ومتوافقة 100% مع الشريعة.': 'built on the national EBS network and 100% Sharia-compliant.', 'جميع الحقوق محفوظة.': 'All rights reserved.',
}

function translateValue(value: string) {
  const trimmed = value.trim()
  const normalized = trimmed.replace(/\\s+/g, ' ')
  if (translations[trimmed]) return value.replace(trimmed, translations[trimmed])
  if (translations[normalized]) return value.replace(trimmed, translations[normalized])

  let translated = value
  Object.entries(translations)
    .sort(([a], [b]) => b.length - a.length)
    .forEach(([arabic, english]) => {
      translated = translated.replaceAll(arabic, english)
    })
  return translated
}

function translatePage(toEnglish: boolean) {
  const root = document
  root.documentElement.querySelectorAll<HTMLElement>('[aria-label], [title], img[alt]').forEach((element) => {
    const attributeNames = ['aria-label', 'title', 'alt']
    attributeNames.forEach((name) => {
      const value = element.getAttribute(name)
      if (!value) return
      if (toEnglish) {
        const translated = translateValue(value)
        if (translated !== value) element.setAttribute(`data-arabic-${name}`, value)
        element.setAttribute(name, translated)
      } else {
        element.setAttribute(name, element.getAttribute(`data-arabic-${name}`) ?? value)
      }
    })
  })

  const walker = document.createTreeWalker(root.body, NodeFilter.SHOW_TEXT)
  const nodes: Text[] = []
  while (walker.nextNode()) nodes.push(walker.currentNode as Text)
  nodes.forEach((node) => {
    const parent = node.parentElement
    if (!parent || parent.closest('script, style, pre')) return
    const original = parent.getAttribute('data-arabic-text') ?? node.textContent ?? ''
    if (toEnglish) {
      const translated = translateValue(original)
      if (translated !== original) {
        parent.setAttribute('data-arabic-text', original)
        node.textContent = translated
      }
    } else if (parent.hasAttribute('data-arabic-text')) {
      node.textContent = original
      parent.removeAttribute('data-arabic-text')
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
