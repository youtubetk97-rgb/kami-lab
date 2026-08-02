import { cn } from '@/lib/utils'

export function SectionHeading({
  eyebrow,
  title,
  description,
  className,
}: {
  eyebrow?: string
  title: string
  description?: string
  className?: string
}) {
  return (
    <div className={cn('flex flex-col gap-2', className)}>
      {eyebrow ? (
        <p className="flex items-center gap-2 text-xs font-bold tracking-widest text-primary">
          <span className="h-px w-6 bg-primary" aria-hidden="true" />
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-heading text-2xl leading-tight font-bold text-balance sm:text-3xl">
        {title}
      </h2>
      {description ? (
        <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">{description}</p>
      ) : null}
    </div>
  )
}
