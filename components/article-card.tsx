import Image from 'next/image'
import Link from 'next/link'
import { Clock } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { formatDate, getCategory, type Article } from '@/lib/data'
import { cn } from '@/lib/utils'

export function ArticleCard({
  article,
  variant = 'default',
}: {
  article: Article
  variant?: 'default' | 'horizontal'
}) {
  const category = getCategory(article.category)

  return (
    <article
      className={cn(
        'group flex flex-col overflow-hidden rounded-xl bg-card ring-1 ring-foreground/10 transition-shadow hover:shadow-lg',
        variant === 'horizontal' && 'sm:flex-row',
      )}
    >
      <Link
        href={`/articles/${article.slug}`}
        className={cn(
          'relative aspect-[16/10] shrink-0 overflow-hidden bg-muted',
          variant === 'horizontal' && 'sm:aspect-square sm:w-44',
        )}
      >
        <Image
          src={article.image || '/placeholder.svg'}
          alt={article.imageAlt}
          fill
          sizes="(max-width: 640px) 100vw, 400px"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </Link>

      <div className="flex flex-1 flex-col gap-2.5 p-4">
        <div className="flex flex-wrap items-center gap-2">
          {category ? <Badge variant="secondary">{category.name}</Badge> : null}
          <span className="flex items-center gap-1 text-xs text-muted-foreground">
            <Clock className="size-3" aria-hidden="true" />約{article.readingTime}分
          </span>
        </div>

        <h3 className="font-heading text-base leading-snug font-bold text-pretty">
          <Link href={`/articles/${article.slug}`} className="hover:text-primary">
            {article.title}
          </Link>
        </h3>

        <p className="line-clamp-3 text-sm leading-relaxed text-muted-foreground">
          {article.excerpt}
        </p>

        <p className="mt-auto pt-1 text-xs text-muted-foreground">
          更新：{formatDate(article.updatedAt)}
        </p>
      </div>
    </article>
  )
}
