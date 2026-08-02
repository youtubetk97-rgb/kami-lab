import Image from 'next/image'
import Link from 'next/link'
import { Crown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { StarRating } from '@/components/star-rating'
import type { Product } from '@/lib/data'
import { cn } from '@/lib/utils'

export function ProductMiniCard({ product }: { product: Product }) {
  const isTop = product.rank === 1

  return (
    <article
      className={cn(
        'relative flex flex-col gap-3 rounded-xl bg-card p-4 ring-1 ring-foreground/10',
        isTop && 'ring-2 ring-gold',
      )}
    >
      <span
        className={cn(
          'absolute -top-3 left-4 flex items-center gap-1 rounded-lg px-2.5 py-1 font-heading text-xs font-bold',
          isTop ? 'bg-gold text-gold-foreground' : 'bg-primary text-primary-foreground',
        )}
      >
        {isTop ? <Crown className="size-3" aria-hidden="true" /> : null}
        {product.rank}位
      </span>

      <div className="relative mt-2 aspect-[4/3] w-full overflow-hidden rounded-lg bg-muted">
        <Image
          src={product.image || '/placeholder.svg'}
          alt={`${product.brand} ${product.name}の商品画像`}
          fill
          sizes="(max-width: 640px) 100vw, 320px"
          className="object-cover"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <p className="text-[11px] font-semibold text-primary">{product.brand}</p>
        <h3 className="font-heading text-base leading-snug font-bold text-pretty">
          {product.name}
        </h3>
        <StarRating score={product.score} />
        <p className="font-heading text-lg font-bold">{product.monthlyPrice}</p>
      </div>

      <p className="line-clamp-3 text-sm leading-relaxed text-muted-foreground">
        {product.summary}
      </p>

      <Button
        variant="outline"
        size="lg"
        className="mt-auto h-10 w-full text-sm"
        nativeButton={false} render={<Link href="/ranking" />}
      >
        評価の詳細を見る
      </Button>
    </article>
  )
}
