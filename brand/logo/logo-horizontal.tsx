import { cn } from '@/lib/utils'
import { LogoMark } from './logo-mark'

export function LogoHorizontal({
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
    <div className={cn('flex items-center gap-3', className)} dir="rtl">
      <LogoMark size={size} animated={animated} inverted={inverted} />
      <div className="flex flex-col gap-0.5">
        <span
          className="leading-none font-extrabold tracking-tight text-foreground"
          style={{ fontSize: size >= 48 ? '1.8rem' : size >= 36 ? '1.4rem' : '1.1rem' }}
        >
          حوِّل
        </span>
        <span
          className="font-semibold tracking-[0.22em] uppercase text-muted-foreground"
          style={{ fontSize: size >= 48 ? '0.75rem' : size >= 36 ? '0.65rem' : '0.55rem' }}
        >
          HAWEL
        </span>
      </div>
    </div>
  )
}
