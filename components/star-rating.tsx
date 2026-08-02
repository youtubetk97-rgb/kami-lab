import { Star } from 'lucide-react'
import { cn } from '@/lib/utils'

export function StarRating({
  score,
  className,
  showScore = true,
}: {
  score: number
  className?: string
  showScore?: boolean
}) {
  const percent = Math.max(0, Math.min(100, (score / 5) * 100))

  return (
    <div className={cn('flex items-center gap-1.5', className)}>
      <div className="relative" role="img" aria-label={`5点満点中${score}点`}>
        <div className="flex text-border">
          {Array.from({ length: 5 }).map((_, index) => (
            <Star key={index} className="size-3.5" aria-hidden="true" />
          ))}
        </div>
        <div
          className="absolute inset-y-0 left-0 flex overflow-hidden text-gold"
          style={{ width: `${percent}%` }}
        >
          {Array.from({ length: 5 }).map((_, index) => (
            <Star key={index} className="size-3.5 shrink-0 fill-current" aria-hidden="true" />
          ))}
        </div>
      </div>
      {showScore ? (
        <span className="text-xs font-semibold tabular-nums">{score.toFixed(1)}</span>
      ) : null}
    </div>
  )
}
