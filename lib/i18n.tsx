'use client'

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'

export type Lang = 'ar' | 'en'
export type Theme = 'light' | 'dark'

export const LANG_STORAGE_KEY = 'hawel-lang'
export const THEME_STORAGE_KEY = 'hawel-theme'

/* -------------------------------------------------------------------------- */
/*  Dictionaries                                                              */
/* -------------------------------------------------------------------------- */

const ar = {
  dir: 'rtl',
  langToggleLabel: 'English',
  themeToggleToDark: 'الوضع الليلي',
  themeToggleToLight: 'الوضع النهاري',
  header: {
    nav: [
      { href: '#summary', label: 'نظرة عامة' },
      { href: '#products', label: 'المنتجات' },
      { href: '#pricing', label: 'الأسعار' },
      { href: '#compare', label: 'المقارنة' },
      { href: '#roadmap', label: 'خارطة الطريق' },
      { href: '#contact', label: 'تواصل معنا' },
    ],
    signIn: 'تسجيل الدخول',
    getStarted: 'ابدأ الآن',
    menu: 'القائمة',
  },
  hero: {
    badge: 'ما قبل الإطلاق · يونيو 2026',
    titleLead: 'اجعل أي هاتف يقبل الدفع —',
    titleHighlight: 'ابدأ اليوم',
    subtitle:
      '«Stripe» للسودان — API واحد يصل إلى ٣٧ بنكاً عبر EBS. روابط دفع عبر واتساب، رموز QR قابلة للطباعة، ولوحة تحكم تتحدث العربية أولاً. متوافق مع الشريعة. يعمل دون اتصال.',
    ctaPrimary: 'كن من أوائل التجار',
    ctaSecondary: 'استكشف المنتجات',
    trustSharia: 'متوافق مع الشريعة 100%',
    trustOffline: 'يعمل دون اتصال (USSD)',
    imageAlt: 'تاجرة سودانية شابة تستخدم تطبيق حوِّل لتأكيد دفعة في متجرها',
  },
  summary: {
    eyebrow: 'الملخص التنفيذي',
    quote:
      'السودان يعالج عشرات الملايين من معاملات الأموال يومياً — ولا تاجر واحد يستطيع قبول الدفع عبر الإنترنت. هذه هي الفجوة التي نبنيها لها.',
    p1: 'تُعتبر «حوِّل» أول شركة في السودان لبناء البنية التحتية للمدفوعات الرقمية بمستوى مطورين. نحن نبني طبقة المدفوعات التي يحتاجها الـ 47 مليون نسمة في السودان واقتصاده القائم على النقد بشكل عاجل — والتي لم تكن موجودة من قبل.',
    p2: 'يعالج السودان عشرات الملايين من معاملات الأموال عبر الهاتف يومياً، ومع ذلك لا يمكن لأي تاجر قبول الدفع عبر الإنترنت، ولا لأي مستقل إرسال رابط دفع. فكّر في «حوِّل» كـ «Stripe» للسودان: واجهة API نظيفة، روابط دفع قابلة للمشاركة عبر واتساب، ورموز QR قابلة للطباعة.',
    p3: 'ندرك ضوابط «أوفاك»، متوافقون تماماً مع الشريعة، قادرون على العمل دون اتصال، ومسعّرون ليناسب واقع السودان.',
    stats: [
      { value: '٣٧', label: 'بنكاً على شبكة EBS' },
      { value: '٤٧M+', label: 'نسمة عدد سكان السودان' },
      { value: '٣٣M', label: 'مشترك إنترنت عبر الهاتف' },
      { value: '٠', label: 'بوابة دفع API موجودة — نحن الأول' },
    ],
    networkTitle: 'شبكة الربط الوطنية',
    networkBody:
      'نقطة تكامل واحدة عبر EBS تصل إلى جميع البنوك الـ 37 المرخصة من بنك السودان المركزي.',
  },
  identity: {
    eyebrow: 'هوية الشركة',
    title: 'فلسفة الاسم والعلامة التجارية',
    description:
      '«حوِّل» فعل أمر عربي يحمل معنيين جوهريين: التحويل — نقل الأموال بين الأطراف، والتحول — تغيير كيفية عمل اقتصاد السودان رقمياً.',
    imageAlt:
      'أيدي مبرمج سوداني تكتب كوداً برمجياً على لاب توب يعكس بصمة الكود الخضراء',
    facts: [
      { label: 'اسم الشركة', value: 'حوِّل | Hawel' },
      { label: 'التأسيس', value: '2026 — ما قبل الإطلاق' },
      { label: 'المقر', value: 'الإمارات / مصر (آمن من OFAC)' },
      { label: 'سوق العمليات', value: 'جمهورية السودان (المرحلة الأولى)' },
      { label: 'نوع العمل', value: 'تقنية مالية — بنية تحتية للمدفوعات (PSP)' },
      { label: 'الهدف التنظيمي', value: 'رخصة PSP من بنك السودان المركزي' },
      { label: 'شبكة الربط', value: 'EBS — المقسم المصرفي الوطني' },
      { label: 'التوافق الشرعي', value: '100% — هيكل رسوم «أجرة» معتمد' },
      { label: 'عملة التسوية', value: 'الجنيه السوداني (SDG)' },
    ],
  },
  market: {
    eyebrow: 'فرصة السوق',
    title: 'فجوة البنية التحتية للمدفوعات في السودان',
    description:
      'أحد أعلى معدلات اعتماد المدفوعات الرقمية غير الرسمية في أفريقيا — دون أي بنية تحتية لمدفوعات التجار لالتقاط هذه المعاملات.',
    problemTitle: 'المشكلة',
    opportunityTitle: 'الفرصة',
    problems: [
      'لا توجد بوابة دفع للتكامل البرمجي (API) للتجار.',
      'تطبيق بنكك للتحويل البنكي فقط — لا توجد طبقة تجار.',
      'الدفع في التجارة الإلكترونية يدوي: العميل يرفع لقطة شاشة.',
      'المستقلون والبائعون يفتقرون تماماً لأدوات روابط الدفع.',
      'زين كاش وMTN ليس لديهما API موحد للتجار.',
    ],
    opportunities: [
      'الأسبقية في السوق: لا منافس في طبقة بنية البوابة.',
      'واجهة EBS متاحة — بيئة التجربة مفتوحة للمرخصين.',
      'جميع البنوك الـ 37 يمكن الوصول إليها عبر نقطة واحدة.',
      'نمو التقنية المالية في أفريقيا +20% سنوياً.',
      'قطاع المدفوعات عالمياً = 44% من إيرادات الفنتك.',
    ],
    segmentsTitle: 'شرائح العملاء المستهدفة',
    segments: [
      {
        title: 'بائعو الاقتصاد غير الرسمي',
        body: 'بائعو سوق أم درمان وإنستغرام وواتساب. كود QR قابل للطباعة ورابط دفع هما بوابتهم للتجارة الرقمية.',
      },
      {
        title: 'المستقلون ومقدمو الخدمات',
        body: 'المصممون والمبرمجون والمحامون. حوِّل تمنحهم رابط دفع احترافي في أقل من 60 ثانية.',
      },
      {
        title: 'التجار الصغار والمتوسطون',
        body: 'المطاعم والصيدليات ومحلات الأزياء. يحتاجون إلى API حقيقي أو رابط دفع — ليس تحويلاً بنكياً.',
      },
      {
        title: 'منصات التجارة الإلكترونية',
        body: 'أي موقع سوداني يريد قبول المدفوعات. إضافات WooCommerce وShopify تملأ الفجوة تماماً.',
      },
      {
        title: 'مستخدمو الأموال عبر الهاتف',
        body: 'زين كاش (48% سوق)، MTN (28%). حوِّل توحد هذه القنوات في واجهة تاجر واحدة.',
      },
      {
        title: 'الشركات والمؤسسات',
        body: 'شركات الاتصالات وموزعو السلع يحتاجون لتحصيل مدفوعات B2B وإدارة التسويات.',
      },
    ],
  },
  products: {
    eyebrow: 'المنتجات والخدمات',
    title: 'منظومة دفع متكاملة — من API إلى ورقة QR',
    description:
      'يتكامل المطورون مرة واحدة، ويصل التجار إلى جميع البنوك السودانية الـ 37 عبر EBS. حلول مبنية لواقع السودان.',
    gateway: {
      title: 'بوابة الدفع API',
      subtitle: 'REST API + Hosted Checkout + iFrame',
      features: [
        'REST API مع مستندات SDK شاملة (JS, PHP, Python, React Native).',
        'صفحة دفع مستضافة (Hosted Checkout) تقلّل نطاق PCI.',
        'iFrame / Web Checkout مدمج لتجربة سلسة داخل الموقع.',
        'تكامل EBS — يصل لجميع البنوك التجارية المرخصة الـ 37.',
        'قنوات زين كاش، MTN، وسوداني للأموال عبر الهاتف.',
        'إشعارات Webhooks موقّعة بـ HMAC-SHA256 في الوقت الفعلي.',
        'SMS OTP لتأكيد الخصم (بديل 3DS للبطاقات المحلية).',
      ],
    },
    links: {
      title: 'روابط الدفع',
      subtitle: 'من التسجيل إلى التسوية في 6 خطوات',
      steps: [
        'يسجل التاجر الدخول للوحة التحكم (لا يحتاج لكود).',
        'ينشئ رابطاً: اسم المنتج، السعر (SDG)، الوصف العربي.',
        'ينسخ الرابط — يُنشأ تلقائياً: pay.hawel.sd/p/{id}.',
        'يشاركه عبر واتساب، SMS، إنستغرام، فيسبوك.',
        'العميل يفتح الرابط ← صفحة عربية ← OTP ← تم الدفع.',
        'التاجر يرى إشعاراً في الوقت الفعلي والتسوية.',
      ],
      note: 'مبلغ ثابت أو مفتوح · وصف ثنائي اللغة · توليد QR تلقائي لكل رابط · رسالة واتساب منسّقة.',
    },
    qr: {
      imageAlt: 'عميل يمسح كود QR مطبوع على حامل ورقي في مقهى سوداني',
      badge: 'مدفوعات كود QR',
      caption:
        'اطبع كودك على الورق واقبل المدفوعات الرقمية — دون POS أو إنترنت لدى التاجر.',
      cards: [
        {
          title: 'QR التاجر الثابت',
          body: 'كود دائم واحد لكل تاجر. العميل يمسح، يدخل المبلغ، ويدفع. قابل للطباعة ويعمل أوفلاين لدى التاجر.',
        },
        {
          title: 'QR المعاملة الديناميكي',
          body: 'كود لكل معاملة بمبلغ محدد مسبقاً. يُنشأ من لوحة التحكم أو API. مثالي للتوصيل والخدمات.',
        },
        {
          title: 'مسح التطبيق (مستقبلاً)',
          body: 'تطبيق حوِّل للمستهلك يمسح أي QR تاجر ويكمل الدفع بالبطاقة المخزنة.',
        },
        {
          title: 'مجموعات QR قابلة للطباعة',
          body: 'حزم QR بتنسيق PDF مصممة خصيصاً لبائعي الأسواق في السودان.',
        },
      ],
    },
    dashboard: {
      title: 'لوحة تحكم التاجر',
      subtitle: 'بالعربية أولاً، محسّنة للهاتف، مبنية لانقطاع الاتصال.',
      features: [
        {
          title: 'موجز المعاملات الفوري',
          body: 'بث مباشر لكل المدفوعات: الحالة، المبلغ، العميل، طريقة الدفع.',
        },
        {
          title: 'إدارة التسويات',
          body: 'تقارير يومية/أسبوعية/شهرية، تصدير PDF وCSV، تسوية T+1.',
        },
        {
          title: 'منشئ روابط الدفع',
          body: 'إنشاء وإدارة وإيقاف الروابط مع تحليلات لكل رابط.',
        },
        {
          title: 'التحليلات والإيرادات',
          body: 'تصور الإيرادات وتوزيع طرق الدفع وقمع التحويل.',
        },
      ],
    },
    ussd: {
      title: 'قناة الاتصال الاحتياطية USSD',
      body: 'ميزة لا يقدمها المنافسون الإقليميون — لكن السودان يحتاجها. تمكّن قناة USSD من تأكيد الدفع عبر رموز اتصال بسيطة من أي هاتف.',
      footer: 'لا إنترنت. لا هاتف ذكي. لا مشكلة.',
    },
  },
  comparison: {
    eyebrow: 'الموقع التنافسي',
    title: 'حوِّل مقابل المنافسين الإقليميين',
    description:
      'درسنا SkipCash وSADAD وPaystack — المعيار الأفريقي العالمي الذي استحوذت عليه Stripe. هنا نتطابق، نتفوق، ونعالج سياق السودان المحدد بشكل فريد.',
    serviceLabel: 'الخدمة',
    columns: [
      'SkipCash (الخليج)',
      'SADAD (السعودية)',
      'Paystack (أفريقيا)',
      'Hawel (السودان)',
    ],
    rows: [
      { feature: 'بوابة دفع API', values: ['REST + plugins', 'مستضافة + iFrame', 'REST + SDK (25 دولة)', 'REST + SDK'] },
      { feature: 'روابط الدفع', values: ['إنشاء ومشاركة', 'واتساب/SMS', 'مشاركة عامة', 'واتساب — بالعربية أولاً'] },
      { feature: 'مدفوعات QR', values: ['ثابت + ديناميكي', 'أوفلاين-لأونلاين', false, 'ثابت + ديناميكي + طباعة'] },
      { feature: 'لوحة تحكم التاجر', values: ['تتبع فوري', 'تحليلات كاملة', 'تحليلات كاملة', 'ثنائية AR/EN + تسوية'] },
      { feature: 'التوافق مع الشريعة', values: [false, false, false, 'رسوم أجرة معتمدة'] },
      { feature: 'احتياطي USSD', values: [false, false, false, true] },
      { feature: 'تكامل شبكة محلية', values: ['Mastercard', 'mada (SAMA)', 'Flutterwave', 'EBS — المقسم الوطني'] },
      { feature: 'العربية أولاً (RTL)', values: ['ثانوية', true, false, 'افتراضية'] },
      { feature: 'شبكات المحافظ المحلية', values: [false, false, false, 'زين كاش / MTN Money'] },
    ] as { feature: string; values: (string | boolean)[] }[],
    highlights: [
      { t: 'EBS-Native', d: 'لا Visa/Mastercard في السودان — EBS هي الشبكة. نحن الوحيدون فوق هذه البنية.' },
      { t: 'Offline-First', d: 'USSD fallback ومدفوعات QR قابلة للطباعة — مبني لانقطاع الكهرباء وتقلب 3G.' },
      { t: 'Sharia-First', d: 'هيكل رسوم أجرة، لا عوائد من الاحتفاظ بالأموال، معتمد من هيئة شرعية.' },
      { t: 'OFAC-Safe', d: 'كل البنية خارج الولاية القضائية الأمريكية، مهيكلة لخدمة السودان قانونياً.' },
    ],
  },
  pricing: {
    eyebrow: 'نموذج التسعير',
    title: 'نموذج «أجرة» متوافق مع الشريعة',
    description: 'لا رسوم خفية. لا فائدة. لا إيرادات من الأموال العائمة. تسوية شفافة.',
    mostPopular: 'الأكثر شيوعاً',
    businessGlobalAvg: 'المتوسط العالمي: 2.9% + رسوم ثابتة',
    ctaStart: 'ابدأ الآن',
    tiers: [
      {
        name: 'Starter',
        nameLocal: 'المبتدئ',
        price: 'مجاني',
        priceSuffix: '',
        note: 'المستقلون والبائعون الصغار',
        features: [
          'روابط دفع (حتى 20/شهر)',
          'إنشاء كود QR',
          'مشاركة واتساب/SMS',
          'لوحة تحكم أساسية',
          'دعم عبر الإيميل',
          'تفعيل KYC',
        ],
      },
      {
        name: 'Business',
        nameLocal: 'الأعمال',
        price: '2.5%',
        priceSuffix: 'لكل معاملة',
        note: 'الشركات الصغيرة والمتوسطة',
        features: [
          'روابط دفع غير محدودة',
          'الوصول إلى API (REST)',
          'أكواد QR ديناميكية',
          'إشعارات (Webhooks)',
          'تقارير تسوية (PDF/CSV)',
          'دعم ذو أولوية',
          'تحليلات التاجر',
        ],
      },
      {
        name: 'Enterprise',
        nameLocal: 'المؤسسي',
        price: 'MDR مخصص',
        priceSuffix: '',
        note: 'منصات التجارة الإلكترونية والشركات',
        features: [
          'بوابة دفع بيضاء (White-label)',
          'دورات تسوية مخصصة',
          'مدير حساب مخصص',
          'SLA لوقت التشغيل 99.9%',
          'قواعد احتيال متقدمة',
          'SDK + plugins (WooCommerce)',
          'شهادة توافق شرعي',
        ],
      },
    ],
    ajraTitle: 'هيكل رسوم «أجرة» — ملاحظة التوافق الشرعي',
    ajraPoints: [
      { t: 'لا ربا', d: 'لا فائدة على أي معاملة أو رصيد قائم.' },
      { t: 'لا غرامات', d: 'لا غرامات تأخير كفائدة.' },
      { t: 'لا أموال عائمة', d: 'لا إيرادات من الاحتفاظ بأموال التجار، تسوية T+1.' },
      { t: 'معتمد من الهيئة', d: 'كل ميزة مدرّة للإيراد تتطلب موافقة شرعية قبل الإطلاق.' },
    ],
  },
  gtm: {
    eyebrow: 'استراتيجية التسويق',
    title: 'ثلاث شرائح، ثلاث رسائل',
    description:
      'نضع حوِّل في تقاطع البنية التحتية بمستوى مطورين وإمكانية الوصول للاقتصاد غير الرسمي.',
    segments: [
      {
        tag: 'الشريحة أ',
        title: 'المطورون والشركات الناشئة',
        message: '«API واحد. 37 بنكاً. ابدأ العمل في يوم.»',
        channels: 'مستندات المطورين، GitHub، مجتمعات التقنية في الخرطوم.',
      },
      {
        tag: 'الشريحة ب',
        title: 'التجار الصغار والمتوسطون',
        message: '«ابدأ تقبل مدفوعات اليوم. بدون موقع. بدون حضور.»',
        channels: 'واتساب للأعمال، جمعيات التجار، الغرفة التجارية، المبيعات الميدانية.',
      },
      {
        tag: 'الشريحة ج',
        title: 'البائعون غير الرسميون',
        message: '«رابط دفع واحد. اطبعه. علّقه. اقبل مدفوعاتك.»',
        channels: 'تيك توك السودان، إنستغرام، تفعيل الأسواق، شراكات التمويل الأصغر.',
      },
    ],
    channels: [
      { t: 'حملات واتساب للأعمال', d: 'طبقة الاتصال الرئيسية في السودان واستحواذ التجار عبر قوائم البث.' },
      { t: 'إنستغرام وتيك توك', d: 'فيديوهات قصيرة: «كيف تحصل على أموالك في 60 ثانية».' },
      { t: 'مستندات المطورين وGitHub', d: 'مستندات API عامة، SDK مفتوحة المصدر، sandbox للمطورين.' },
      { t: 'شراكات جمعيات التجار', d: 'غرفة الخرطوم التجارية وتوزيع مجموعات QR في الأسواق.' },
      { t: 'رحلات تفعيل واتساب/SMS', d: 'سلسلة عربية منسقة: ترحيب، أول رابط، أول كود QR.' },
      { t: 'مدرسة حوِّل التعليمية', d: 'دروس يوتيوب وتيك توك باللهجة السودانية للتجار.' },
    ],
  },
  architecture: {
    eyebrow: 'نظرة تقنية شاملة',
    title: 'مبادئ الهندسة التقنية',
    description:
      'مبنية لواقع البنية التحتية في السودان مع فصل واضح للولاية القضائية الأمريكية.',
    principles: [
      {
        title: 'بنية تحتية آمنة الولاية القضائية',
        body: 'كل البنية الأساسية خارج الولاية القضائية الأمريكية (AWS Frankfurt أو الإمارات). لا دولار عبر بنوك مراسلة أمريكية.',
      },
      {
        title: 'شبكة EBS الأصلية',
        body: 'الهندسة مبنية حول بروتوكول ISO 8583 الخاص بـ EBS — وليس Visa/Mastercard. طبقة موصل EBS مخصصة.',
      },
      {
        title: 'مرونة أوفلاين بالتصميم',
        body: 'Service worker + PWA للمتصفحات. استجابات API أقل من 10KB. USSD كاحتياطي أساسي.',
      },
      {
        title: 'الأمن والتوافق مع PCI',
        body: 'صفحة دفع iFrame مستضافة، تشفير AES-256-GCM، توقيع HMAC-SHA256، لا تخزين PAN على سيرفرات التجار.',
      },
      {
        title: 'ضوابط التمويل الإسلامي',
        body: 'محرك إيرادات «أجرة» فقط. لا حسابات عائمة بعوائد فائدة. التسوية T+1 كافتراضي.',
      },
      {
        title: 'ملخص التكنولوجيا',
        body: 'Node.js/Fastify + Go للتسوية، PostgreSQL + Patroni HA، Kafka، Redis، Next.js + React Native.',
      },
    ],
  },
  roadmap: {
    eyebrow: 'خارطة الطريق',
    title: 'من MVP يركز على السودان إلى التوسع الإقليمي',
    description:
      'أربع مراحل مدروسة تنمو من الأساس المحلي إلى الأسواق الواعدة المجاورة.',
    footnote:
      '* تعتمد الجداول الزمنية على الحصول على الموافقات التنظيمية من بنك السودان المركزي في المواعيد المتوقعة.',
    phases: [
      {
        title: 'الإطلاق (MVP)',
        items: [
          'بوابة دفع API (EBS)',
          'روابط الدفع',
          'مدفوعات كود QR',
          'لوحة تحكم التاجر',
          'تفعيل KYC + SMS OTP',
          'محرك Webhook',
        ],
      },
      {
        title: 'النمو',
        items: [
          'تطبيق هاتف (أندرويد أولاً)',
          'تحويل الهاتف لنقطة بيع (SoftPOS)',
          'قناة احتياطية USSD',
          'دعم PWA أوفلاين',
          'وصول متعدد المستخدمين',
          'إضافة WooCommerce',
        ],
      },
      {
        title: 'التوسع',
        items: [
          'فواتير الاشتراكات',
          'مدفوعات مجزأة/سوق',
          'محرك احتيال متقدم (ML)',
          'توسيع معدل API',
          'تقديم بيضاء (White-label)',
          'دفعات B2B ضخمة',
        ],
      },
      {
        title: 'الامتداد',
        items: [
          'دخول سوق جنوب السودان',
          'تغطية إثيوبيا / كينيا',
          'تسويات عبر الحدود',
          'استكشاف العملات المستقرة',
          'الخدمات البنكية كخدمة (BaaS)',
          'اشترِ الآن وادفع لاحقاً (شرعي)',
        ],
      },
    ],
  },
  why: {
    eyebrow: 'لماذا حوِّل؟',
    title:
      'السودان لا يحتاج محفظة هاتف أخرى — يحتاج طبقة بنية تحتية للمدفوعات',
    subtitle:
      'استعاد بنك السودان المركزي EBS الإلكتروني في يناير 2026. بيئة التجربة (Sandbox) متاحة للمطورين المعتمدين. البنوك تفهم الفجوة. التجار ينتظرون. المطورون في الشتات جاهزون للبناء. التوقيت هو الآن.',
    tagline: 'حوِّل طريقة دفعك. حوِّل تجارتك. حوِّل السودان.',
    ctaContact: 'تواصل معنا',
    ctaInvestors: 'استفسارات المستثمرين',
    imageAlt: 'غروب الشمس فوق النيل في الخرطوم مع أفق المدينة',
    contacts: [
      { label: 'الموقع', value: 'hawel.sd', href: 'https://hawel.sd' },
      { label: 'مستندات المطورين', value: 'docs.hawel.sd', href: 'https://docs.hawel.sd' },
      { label: 'استفسارات المستثمرين', value: 'investors@hawel.sd', href: 'mailto:investors@hawel.sd' },
      { label: 'شراكات التجار', value: 'merchants@hawel.sd', href: 'mailto:merchants@hawel.sd' },
    ],
  },
  footer: {
    description:
      'شريكك في الدفع الرقمي. بنية تحتية للمدفوعات في السودان بمستوى مطورين، مبنية على شبكة EBS الوطنية ومتوافقة 100% مع الشريعة.',
    groups: [
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
    ],
    copyright: '© 2026 حوِّل (Hawel). جميع الحقوق محفوظة.',
    version: 'الإصدار 1.0 · يونيو 2026',
  },
}

const en: typeof ar = {
  dir: 'ltr',
  langToggleLabel: 'عربي',
  themeToggleToDark: 'Dark mode',
  themeToggleToLight: 'Light mode',
  header: {
    nav: [
      { href: '#summary', label: 'Overview' },
      { href: '#products', label: 'Products' },
      { href: '#pricing', label: 'Pricing' },
      { href: '#compare', label: 'Compare' },
      { href: '#roadmap', label: 'Roadmap' },
      { href: '#contact', label: 'Contact' },
    ],
    signIn: 'Sign in',
    getStarted: 'Get started',
    menu: 'Menu',
  },
  hero: {
    badge: 'Pre-launch · June 2026',
    titleLead: 'Turn any phone into a payment terminal —',
    titleHighlight: 'start today',
    subtitle:
      'The "Stripe" for Sudan — one API reaching 37 banks over EBS. WhatsApp payment links, printable QR codes, and an Arabic-first dashboard. Sharia-compliant. Works offline.',
    ctaPrimary: 'Become an early merchant',
    ctaSecondary: 'Explore products',
    trustSharia: '100% Sharia-compliant',
    trustOffline: 'Works offline (USSD)',
    imageAlt:
      'A young Sudanese merchant using the Hawel app to confirm a payment in her shop',
  },
  summary: {
    eyebrow: 'Executive summary',
    quote:
      'Sudan processes tens of millions of money transactions every day — yet not a single merchant can accept payments online. This is the gap we are building for.',
    p1: 'Hawel is the first company in Sudan to build developer-grade digital payment infrastructure. We are building the payments layer that Sudan\'s 47 million people and its cash-based economy urgently need — one that never existed before.',
    p2: 'Sudan processes tens of millions of mobile money transactions daily, yet no merchant can accept payments online, and no freelancer can send a payment link. Think of Hawel as the "Stripe" for Sudan: a clean API, payment links shareable over WhatsApp, and printable QR codes.',
    p3: 'We are aware of OFAC controls, fully Sharia-compliant, able to operate offline, and priced to fit the reality of Sudan.',
    stats: [
      { value: '37', label: 'banks on the EBS network' },
      { value: '47M+', label: 'population of Sudan' },
      { value: '33M', label: 'mobile internet subscribers' },
      { value: '0', label: 'existing API payment gateways — we are the first' },
    ],
    networkTitle: 'National switching network',
    networkBody:
      'A single integration point over EBS reaching all 37 banks licensed by the Central Bank of Sudan.',
  },
  identity: {
    eyebrow: 'Company identity',
    title: 'The philosophy behind the name and brand',
    description:
      '"Hawel" is an Arabic imperative verb carrying two core meanings: to transfer — moving money between parties, and to transform — changing how Sudan\'s economy works digitally.',
    imageAlt:
      "A Sudanese developer's hands typing code on a laptop reflecting a green code signature",
    facts: [
      { label: 'Company name', value: 'حوِّل | Hawel' },
      { label: 'Founded', value: '2026 — pre-launch' },
      { label: 'Headquarters', value: 'UAE / Egypt (OFAC-safe)' },
      { label: 'Operating market', value: 'Republic of Sudan (Phase 1)' },
      { label: 'Business type', value: 'Fintech — payment infrastructure (PSP)' },
      { label: 'Regulatory goal', value: 'PSP license from the Central Bank of Sudan' },
      { label: 'Switching network', value: 'EBS — the national banking switch' },
      { label: 'Sharia compliance', value: '100% — approved "Ujra" fee structure' },
      { label: 'Settlement currency', value: 'Sudanese Pound (SDG)' },
    ],
  },
  market: {
    eyebrow: 'Market opportunity',
    title: "Sudan's payment infrastructure gap",
    description:
      'One of the highest rates of informal digital payment adoption in Africa — with no merchant payment infrastructure to capture these transactions.',
    problemTitle: 'The problem',
    opportunityTitle: 'The opportunity',
    problems: [
      'There is no API payment gateway for merchant integration.',
      'Your bank app is for bank transfers only — no merchant layer.',
      'E-commerce payment is manual: the customer uploads a screenshot.',
      'Freelancers and vendors completely lack payment-link tools.',
      'Zain Cash and MTN have no unified merchant API.',
    ],
    opportunities: [
      'First-mover advantage: no competitor in the gateway infrastructure layer.',
      'EBS interface available — the sandbox is open to licensees.',
      'All 37 banks reachable through a single point.',
      'Fintech growth in Africa is +20% per year.',
      'Payments globally = 44% of fintech revenue.',
    ],
    segmentsTitle: 'Target customer segments',
    segments: [
      {
        title: 'Informal-economy vendors',
        body: 'Omdurman market, Instagram, and WhatsApp sellers. A printable QR code and a payment link are their gateway to digital commerce.',
      },
      {
        title: 'Freelancers and service providers',
        body: 'Designers, developers, and lawyers. Hawel gives them a professional payment link in under 60 seconds.',
      },
      {
        title: 'Small and medium merchants',
        body: 'Restaurants, pharmacies, and fashion shops. They need a real API or a payment link — not a bank transfer.',
      },
      {
        title: 'E-commerce platforms',
        body: 'Any Sudanese site that wants to accept payments. WooCommerce and Shopify plugins fill the gap completely.',
      },
      {
        title: 'Mobile money users',
        body: 'Zain Cash (48% market), MTN (28%). Hawel unifies these channels into one merchant interface.',
      },
      {
        title: 'Companies and enterprises',
        body: 'Telecoms and goods distributors need to collect B2B payments and manage settlements.',
      },
    ],
  },
  products: {
    eyebrow: 'Products and services',
    title: 'A complete payment ecosystem — from API to QR sheet',
    description:
      'Developers integrate once, and merchants reach all 37 Sudanese banks over EBS. Solutions built for the reality of Sudan.',
    gateway: {
      title: 'API payment gateway',
      subtitle: 'REST API + Hosted Checkout + iFrame',
      features: [
        'REST API with comprehensive SDK docs (JS, PHP, Python, React Native).',
        'Hosted Checkout page that reduces PCI scope.',
        'Embedded iFrame / Web Checkout for a seamless on-site experience.',
        'EBS integration — reaching all 37 licensed commercial banks.',
        'Zain Cash, MTN, and Sudani mobile money channels.',
        'HMAC-SHA256 signed webhook notifications in real time.',
        'SMS OTP for debit confirmation (a 3DS alternative for local cards).',
      ],
    },
    links: {
      title: 'Payment links',
      subtitle: 'From sign-up to settlement in 6 steps',
      steps: [
        'The merchant signs in to the dashboard (no code required).',
        'Creates a link: product name, price (SDG), Arabic description.',
        'Copies the link — auto-generated: pay.hawel.sd/p/{id}.',
        'Shares it over WhatsApp, SMS, Instagram, Facebook.',
        'The customer opens the link → Arabic page → OTP → payment done.',
        'The merchant sees a real-time notification and the settlement.',
      ],
      note: 'Fixed or open amount · bilingual description · automatic QR generation for every link · a formatted WhatsApp message.',
    },
    qr: {
      imageAlt: 'A customer scanning a QR code printed on a paper stand in a Sudanese café',
      badge: 'QR code payments',
      caption:
        'Print your code on paper and accept digital payments — no POS or internet needed on the merchant side.',
      cards: [
        {
          title: 'Static merchant QR',
          body: 'One permanent code per merchant. The customer scans, enters the amount, and pays. Printable and works offline for the merchant.',
        },
        {
          title: 'Dynamic transaction QR',
          body: 'A code per transaction with a preset amount. Generated from the dashboard or API. Ideal for delivery and services.',
        },
        {
          title: 'In-app scan (coming soon)',
          body: 'The Hawel consumer app scans any merchant QR and completes payment with a stored card.',
        },
        {
          title: 'Printable QR packs',
          body: 'PDF-format QR bundles designed specifically for market vendors in Sudan.',
        },
      ],
    },
    dashboard: {
      title: 'Merchant dashboard',
      subtitle: 'Arabic-first, mobile-optimized, built for connectivity outages.',
      features: [
        {
          title: 'Real-time transaction feed',
          body: 'A live stream of every payment: status, amount, customer, payment method.',
        },
        {
          title: 'Settlement management',
          body: 'Daily/weekly/monthly reports, PDF and CSV export, T+1 settlement.',
        },
        {
          title: 'Payment link builder',
          body: 'Create, manage, and pause links with per-link analytics.',
        },
        {
          title: 'Analytics and revenue',
          body: 'Visualize revenue, payment-method mix, and the conversion funnel.',
        },
      ],
    },
    ussd: {
      title: 'USSD fallback channel',
      body: 'A feature regional competitors do not offer — but Sudan needs it. The USSD channel enables payment confirmation via simple dial codes from any phone.',
      footer: 'No internet. No smartphone. No problem.',
    },
  },
  comparison: {
    eyebrow: 'Competitive positioning',
    title: 'Hawel vs. regional competitors',
    description:
      'We studied SkipCash, SADAD, and Paystack — the global African benchmark acquired by Stripe. Here is where we match, exceed, and uniquely address Sudan\'s specific context.',
    serviceLabel: 'Service',
    columns: [
      'SkipCash (Gulf)',
      'SADAD (Saudi Arabia)',
      'Paystack (Africa)',
      'Hawel (Sudan)',
    ],
    rows: [
      { feature: 'API payment gateway', values: ['REST + plugins', 'Hosted + iFrame', 'REST + SDK (25 countries)', 'REST + SDK'] },
      { feature: 'Payment links', values: ['Create and share', 'WhatsApp/SMS', 'Public sharing', 'WhatsApp — Arabic-first'] },
      { feature: 'QR payments', values: ['Static + dynamic', 'Offline-to-online', false, 'Static + dynamic + print'] },
      { feature: 'Merchant dashboard', values: ['Real-time tracking', 'Full analytics', 'Full analytics', 'Bilingual AR/EN + settlement'] },
      { feature: 'Sharia compliance', values: [false, false, false, 'Approved Ujra fees'] },
      { feature: 'USSD fallback', values: [false, false, false, true] },
      { feature: 'Local network integration', values: ['Mastercard', 'mada (SAMA)', 'Flutterwave', 'EBS — the national switch'] },
      { feature: 'Arabic-first (RTL)', values: ['Secondary', true, false, 'Default'] },
      { feature: 'Local wallet networks', values: [false, false, false, 'Zain Cash / MTN Money'] },
    ],
    highlights: [
      { t: 'EBS-Native', d: 'No Visa/Mastercard in Sudan — EBS is the network. We are the only ones on top of this infrastructure.' },
      { t: 'Offline-First', d: 'USSD fallback and printable QR payments — built for power cuts and volatile 3G.' },
      { t: 'Sharia-First', d: 'An Ujra fee structure, no returns from holding funds, approved by a Sharia board.' },
      { t: 'OFAC-Safe', d: 'The entire infrastructure sits outside U.S. jurisdiction, structured to serve Sudan legally.' },
    ],
  },
  pricing: {
    eyebrow: 'Pricing model',
    title: 'A Sharia-compliant "Ujra" model',
    description: 'No hidden fees. No interest. No revenue from float. Transparent settlement.',
    mostPopular: 'Most popular',
    businessGlobalAvg: 'Global average: 2.9% + a fixed fee',
    ctaStart: 'Get started',
    tiers: [
      {
        name: 'Starter',
        nameLocal: 'Starter',
        price: 'Free',
        priceSuffix: '',
        note: 'Freelancers and small vendors',
        features: [
          'Payment links (up to 20/month)',
          'QR code creation',
          'WhatsApp/SMS sharing',
          'Basic dashboard',
          'Email support',
          'KYC onboarding',
        ],
      },
      {
        name: 'Business',
        nameLocal: 'Business',
        price: '2.5%',
        priceSuffix: 'per transaction',
        note: 'Small and medium businesses',
        features: [
          'Unlimited payment links',
          'API access (REST)',
          'Dynamic QR codes',
          'Webhooks',
          'Settlement reports (PDF/CSV)',
          'Priority support',
          'Merchant analytics',
        ],
      },
      {
        name: 'Enterprise',
        nameLocal: 'Enterprise',
        price: 'Custom MDR',
        priceSuffix: '',
        note: 'E-commerce platforms and enterprises',
        features: [
          'White-label payment gateway',
          'Custom settlement cycles',
          'Dedicated account manager',
          '99.9% uptime SLA',
          'Advanced fraud rules',
          'SDK + plugins (WooCommerce)',
          'Sharia-compliance certificate',
        ],
      },
    ],
    ajraTitle: '"Ujra" fee structure — a note on Sharia compliance',
    ajraPoints: [
      { t: 'No riba', d: 'No interest on any transaction or outstanding balance.' },
      { t: 'No penalties', d: 'No late penalties charged as interest.' },
      { t: 'No float', d: 'No revenue from holding merchant funds, T+1 settlement.' },
      { t: 'Board-approved', d: 'Every revenue-generating feature requires Sharia approval before launch.' },
    ],
  },
  gtm: {
    eyebrow: 'Marketing strategy',
    title: 'Three segments, three messages',
    description:
      'We position Hawel at the intersection of developer-grade infrastructure and accessibility for the informal economy.',
    segments: [
      {
        tag: 'Segment A',
        title: 'Developers and startups',
        message: '"One API. 37 banks. Go live in a day."',
        channels: 'Developer docs, GitHub, and Khartoum tech communities.',
      },
      {
        tag: 'Segment B',
        title: 'Small and medium merchants',
        message: '"Start accepting payments today. No website. No storefront."',
        channels: 'WhatsApp for Business, merchant associations, the chamber of commerce, field sales.',
      },
      {
        tag: 'Segment C',
        title: 'Informal vendors',
        message: '"One payment link. Print it. Hang it. Get paid."',
        channels: 'Sudan TikTok, Instagram, market activations, microfinance partnerships.',
      },
    ],
    channels: [
      { t: 'WhatsApp for Business campaigns', d: 'The primary communication layer in Sudan and merchant acquisition via broadcast lists.' },
      { t: 'Instagram and TikTok', d: 'Short videos: "How to get paid in 60 seconds".' },
      { t: 'Developer docs and GitHub', d: 'Public API docs, open-source SDKs, a developer sandbox.' },
      { t: 'Merchant-association partnerships', d: 'The Khartoum chamber of commerce and QR-pack distribution in markets.' },
      { t: 'WhatsApp/SMS onboarding journeys', d: 'A curated Arabic series: welcome, first link, first QR code.' },
      { t: 'Hawel Academy', d: 'YouTube and TikTok tutorials in Sudanese dialect for merchants.' },
    ],
  },
  architecture: {
    eyebrow: 'Technical overview',
    title: 'Technical architecture principles',
    description:
      'Built for the reality of infrastructure in Sudan with a clear separation from U.S. jurisdiction.',
    principles: [
      {
        title: 'Jurisdiction-safe infrastructure',
        body: 'All core infrastructure sits outside U.S. jurisdiction (AWS Frankfurt or the UAE). No dollars via U.S. correspondent banks.',
      },
      {
        title: 'EBS-native network',
        body: 'The architecture is built around EBS\'s ISO 8583 protocol — not Visa/Mastercard. A dedicated EBS connector layer.',
      },
      {
        title: 'Offline resilience by design',
        body: 'Service worker + PWA for browsers. API responses under 10KB. USSD as a primary fallback.',
      },
      {
        title: 'Security and PCI compliance',
        body: 'Hosted iFrame checkout page, AES-256-GCM encryption, HMAC-SHA256 signing, no PAN storage on merchant servers.',
      },
      {
        title: 'Islamic finance controls',
        body: 'An "Ujra"-only revenue engine. No interest-bearing float accounts. T+1 settlement by default.',
      },
      {
        title: 'Technology summary',
        body: 'Node.js/Fastify + Go for settlement, PostgreSQL + Patroni HA, Kafka, Redis, Next.js + React Native.',
      },
    ],
  },
  roadmap: {
    eyebrow: 'Roadmap',
    title: 'From a Sudan-focused MVP to regional expansion',
    description:
      'Four deliberate phases growing from a local foundation into promising neighboring markets.',
    footnote:
      '* Timelines depend on obtaining regulatory approvals from the Central Bank of Sudan on the expected dates.',
    phases: [
      {
        title: 'Launch (MVP)',
        items: [
          'API payment gateway (EBS)',
          'Payment links',
          'QR code payments',
          'Merchant dashboard',
          'KYC onboarding + SMS OTP',
          'Webhook engine',
        ],
      },
      {
        title: 'Growth',
        items: [
          'Mobile app (Android first)',
          'Turn a phone into a POS (SoftPOS)',
          'USSD fallback channel',
          'Offline PWA support',
          'Multi-user access',
          'WooCommerce plugin',
        ],
      },
      {
        title: 'Expansion',
        items: [
          'Subscription invoicing',
          'Split/marketplace payments',
          'Advanced fraud engine (ML)',
          'API rate scaling',
          'White-label offering',
          'Large B2B payouts',
        ],
      },
      {
        title: 'Reach',
        items: [
          'Entering the South Sudan market',
          'Ethiopia / Kenya coverage',
          'Cross-border settlements',
          'Stablecoin exploration',
          'Banking-as-a-Service (BaaS)',
          'Buy now, pay later (Sharia-compliant)',
        ],
      },
    ],
  },
  why: {
    eyebrow: 'Why Hawel?',
    title:
      "Sudan doesn't need another mobile wallet — it needs a payment infrastructure layer",
    subtitle:
      'The Central Bank of Sudan restored the electronic EBS in January 2026. The sandbox is available to certified developers. Banks understand the gap. Merchants are waiting. Diaspora developers are ready to build. The time is now.',
    tagline: 'Transform how you pay. Transform your business. Transform Sudan.',
    ctaContact: 'Contact us',
    ctaInvestors: 'Investor inquiries',
    imageAlt: 'Sunset over the Nile in Khartoum with the city skyline',
    contacts: [
      { label: 'Website', value: 'hawel.sd', href: 'https://hawel.sd' },
      { label: 'Developer docs', value: 'docs.hawel.sd', href: 'https://docs.hawel.sd' },
      { label: 'Investor inquiries', value: 'investors@hawel.sd', href: 'mailto:investors@hawel.sd' },
      { label: 'Merchant partnerships', value: 'merchants@hawel.sd', href: 'mailto:merchants@hawel.sd' },
    ],
  },
  footer: {
    description:
      'Your digital payments partner. Developer-grade payment infrastructure for Sudan, built on the national EBS network and 100% Sharia-compliant.',
    groups: [
      {
        title: 'Products',
        links: [
          { label: 'API payment gateway', href: '#products' },
          { label: 'Payment links', href: '#products' },
          { label: 'QR payments', href: '#products' },
          { label: 'Dashboard', href: '#products' },
        ],
      },
      {
        title: 'Company',
        links: [
          { label: 'About us', href: '#summary' },
          { label: 'Market opportunity', href: '#market' },
          { label: 'Roadmap', href: '#roadmap' },
          { label: 'Contact us', href: '#contact' },
        ],
      },
      {
        title: 'Developers',
        links: [
          { label: 'API docs', href: 'https://docs.hawel.sd' },
          { label: 'Sandbox', href: 'https://docs.hawel.sd/sandbox' },
          { label: 'GitHub', href: 'https://github.com/hawel-sd' },
          { label: 'SDK', href: 'https://docs.hawel.sd/sdk' },
        ],
      },
    ],
    copyright: '© 2026 Hawel. All rights reserved.',
    version: 'Version 1.0 · June 2026',
  },
}

export const dictionaries = { ar, en }
export type Dict = typeof ar

/* -------------------------------------------------------------------------- */
/*  Language context                                                          */
/* -------------------------------------------------------------------------- */

type I18nContextValue = {
  lang: Lang
  t: Dict
  setLang: (lang: Lang) => void
  toggleLang: () => void
}

const I18nContext = createContext<I18nContextValue | null>(null)

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>('ar')

  useEffect(() => {
    const stored = (typeof window !== 'undefined' &&
      window.localStorage.getItem(LANG_STORAGE_KEY)) as Lang | null
    if (stored === 'ar' || stored === 'en') setLangState(stored)
  }, [])

  const setLang = useCallback((next: Lang) => {
    setLangState(next)
    try {
      window.localStorage.setItem(LANG_STORAGE_KEY, next)
    } catch {}
    const root = document.documentElement
    root.lang = next
    root.dir = next === 'ar' ? 'rtl' : 'ltr'
  }, [])

  const toggleLang = useCallback(
    () => setLang(lang === 'ar' ? 'en' : 'ar'),
    [lang, setLang],
  )

  const value = useMemo<I18nContextValue>(
    () => ({ lang, t: dictionaries[lang], setLang, toggleLang }),
    [lang, setLang, toggleLang],
  )

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

export function useI18n() {
  const ctx = useContext(I18nContext)
  if (!ctx) throw new Error('useI18n must be used within an I18nProvider')
  return ctx
}

/* -------------------------------------------------------------------------- */
/*  Theme context                                                             */
/* -------------------------------------------------------------------------- */

type ThemeContextValue = {
  theme: Theme
  setTheme: (theme: Theme) => void
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextValue | null>(null)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>('light')

  useEffect(() => {
    const stored = (typeof window !== 'undefined' &&
      window.localStorage.getItem(THEME_STORAGE_KEY)) as Theme | null
    if (stored === 'light' || stored === 'dark') {
      setThemeState(stored)
    } else if (
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
    ) {
      setThemeState('dark')
    }
  }, [])

  const setTheme = useCallback((next: Theme) => {
    setThemeState(next)
    try {
      window.localStorage.setItem(THEME_STORAGE_KEY, next)
    } catch {}
    document.documentElement.classList.toggle('dark', next === 'dark')
  }, [])

  const toggleTheme = useCallback(
    () => setTheme(theme === 'dark' ? 'light' : 'dark'),
    [theme, setTheme],
  )

  const value = useMemo<ThemeContextValue>(
    () => ({ theme, setTheme, toggleTheme }),
    [theme, setTheme, toggleTheme],
  )

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export function useTheme() {
  const ctx = useContext(ThemeContext)
  if (!ctx) throw new Error('useTheme must be used within a ThemeProvider')
  return ctx
}
