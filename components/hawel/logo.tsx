import { cn } from '@/lib/utils'
import { LogoMark } from '@/brand/logo/logo-mark'

export function HawelLogo({
  className,
  showText = true,
  inverted = false,
  animated = false,
}: {
  className?: string
  showText?: boolean
  inverted?: boolean
  animated?: boolean
}) {
  return (
    <div className={cn('flex items-center gap-2.5', className)} dir="rtl">
      <LogoMark size={36} inverted={inverted} animated={animated} />

      {showText && (
        <span className="flex flex-col leading-none">
          <span className="text-lg font-extrabold tracking-tight text-foreground">
            حوِّل
          </span>
          <span className="text-[10px] font-semibold tracking-[0.22em] text-muted-foreground uppercase">
            HAWEL
          </span>
        </span>
      )}
    </div>
  )
}
