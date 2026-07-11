import { cn } from '@/lib/utils'

export function LogoMark({
  size = 48,
  animated = false,
  inverted = false,
  className,
}: {
  size?: number
  animated?: boolean
  inverted?: boolean
  className?: string
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('shrink-0', className)}
      aria-hidden="true"
    >
      <rect
        width="48"
        height="48"
        rx="14"
        fill={inverted ? 'var(--gold)' : 'var(--color-primary)'}
      />
      <path
        d="M10 28 C10 18 18 12 26 12 C34 12 40 18 40 26"
        stroke="var(--gold)"
        strokeWidth="3.2"
        strokeLinecap="round"
        fill="none"
        className={animated ? 'animate-[drawLoop_1.2s_ease-out_forwards]' : ''}
      />
      <path
        d="M40 26 C40 31 36 34 30 34 L20 34"
        stroke="var(--gold)"
        strokeWidth="3.2"
        strokeLinecap="round"
        fill="none"
        style={animated ? { animation: 'drawLoop 1.2s 0.3s ease-out forwards' } : undefined}
      />
      <path
        d="M24 29 L20 34 L24 39"
        stroke="var(--gold)"
        strokeWidth="3.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <circle
        cx="10"
        cy="28"
        r="3"
        fill="var(--color-emerald, #2AAB74)"
        className={animated ? 'animate-[pulse_2s_ease-in-out_infinite]' : ''}
      />
    </svg>
  )
}
