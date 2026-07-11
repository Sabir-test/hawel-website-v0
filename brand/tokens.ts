export const colors = {
  nile: '#0D3B2E' as const,
  nileMid: '#1A5C45' as const,
  emerald: '#1A7A52' as const,
  emeraldLight: '#2AAB74' as const,
  gold: '#C9963A' as const,
  goldLight: '#E5B860' as const,
  goldPale: '#F5E6C8' as const,
  sand: '#F5F0E8' as const,
  sandDark: '#EDE5D4' as const,
  ink: '#1C2B2A' as const,
  inkMid: '#3D5450' as const,
  inkLight: '#6B8B85' as const,
  white: '#FFFFFF' as const,
  destructive: '#C0392B' as const,
} as const

export type ColorKey = keyof typeof colors

export const typography = {
  display: 'Plus Jakarta Sans',
  arabic: 'Cairo',
  mono: 'JetBrains Mono',
} as const

export const logoConcept = {
  name: 'The Flow Loop',
  description:
    'The Arabic letter ح (Ha) — first letter of حوِّل — is stylized into a continuous loop that doubles as a currency transfer arrow circuit. The loop is open on one side, suggesting flow outward (money moving), never closed (Sharia-compliant).',
} as const

export const brandValues = {
  name: 'حوِّل | Hawel',
  tagline: 'Sudan\'s first developer-grade payments infrastructure',
  audiences: ['Merchants', 'Local partners', 'CBOS regulators', 'International investors', 'Diaspora developers'],
} as const
