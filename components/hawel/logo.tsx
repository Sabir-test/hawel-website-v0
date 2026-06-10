import { cn } from '@/lib/utils'

export function HawelLogo({
  className,
  showText = true,
}: {
  className?: string
  showText?: boolean
}) {
  return (
    <div className={cn('flex items-center gap-2.5', className)}>
      <span className="relative inline-flex size-9 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-sm">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className="size-5"
          aria-hidden="true"
        >
          <path
            d="M5 8h9a4 4 0 0 1 0 8h-3"
            stroke="var(--gold)"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9 13l-3 3 3 3"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M19 16l3-3-3-3"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      {showText && (
        <span className="flex flex-col leading-none">
          <span className="font-extrabold tracking-tight text-foreground text-lg">
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
