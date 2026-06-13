import { cn } from '@/lib/utils'

export function HawelLogo({
  className,
  showText = true,
}: {
  className?: string
  showText?: boolean
}) {
  return (
    <div className={cn('flex items-center gap-2.5', className)} dir="rtl">
      {/* ح Flow Loop mark */}
      <span className="relative inline-flex size-9 items-center justify-center rounded-xl bg-primary shadow-sm">
        <svg
          viewBox="0 0 48 48"
          fill="none"
          className="size-6"
          aria-hidden="true"
        >
          {/* Outer arc — top sweep of ح */}
          <path
            d="M10 30 C10 18 18 11 26 11 C34 11 40 18 40 26"
            stroke="var(--gold)"
            strokeWidth="3.5"
            strokeLinecap="round"
          />
          {/* Return path — the transfer circuit */}
          <path
            d="M40 26 C40 32 36 35 30 35 L20 35"
            stroke="var(--gold)"
            strokeWidth="3.5"
            strokeLinecap="round"
          />
          {/* Arrow head — money arriving (RTL) */}
          <path
            d="M24 30 L20 35 L24 40"
            stroke="var(--gold)"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Live transaction pulse dot */}
          <circle
            cx="10"
            cy="30"
            r="3"
            fill="var(--color-emerald, #2AAB74)"
            className="hawel-pulse-node"
          />
        </svg>
      </span>

      {showText && (
        <span className="flex flex-col leading-none">
          <span className="text-lg font-extrabold tracking-tight text-foreground">
            حوِّل
          </span>
          <span className="text-[10px] font-semibold tracking-[0.25em] text-muted-foreground">
            HAWEL
          </span>
        </span>
      )}
    </div>
  )
}
