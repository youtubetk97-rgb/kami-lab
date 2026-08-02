import Image from 'next/image'
import { ExternalLink } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { StarRating } from '@/components/star-rating'
import type { Product } from '@/lib/data'

export function ProductInlineCard({ product }: { product: Product }) {
  return (
    <aside className="my-8 flex flex-col gap-4 rounded-xl bg-secondary/60 p-4 ring-1 ring-primary/15">
      <div className="flex items-center gap-2">
        <Badge>この記事のおすすめ</Badge>
        <span className="text-[11px] text-muted-foreground">PR</span>
      </div>

      <div className="flex gap-4">
        <div className="relative size-24 shrink-0 overflow-hidden rounded-lg bg-white ring-1 ring-border">
          <Image
            src={product.image || '/placeholder.svg'}
            alt={`${product.brand} ${product.name}の商品画像`}
            fill
            sizes="96px"
            className="object-contain p-1"
          />
        </div>
        <div className="flex flex-1 flex-col gap-1.5">
          <p className="text-xs font-semibold text-primary">{product.brand}</p>
          <h3 className="font-heading text-base leading-snug font-bold">{product.name}</h3>
          <StarRating score={product.score} />
          <p className="font-heading text-base font-bold">{product.monthlyPrice}</p>
        </div>
      </div>

      <p className="text-sm leading-relaxed text-muted-foreground">{product.summary}</p>

      <Button
        size="lg"
        className="h-11 w-full text-sm"
        nativeButton={false}
        render={
          <a href={product.affiliateUrl} target="_blank" rel="noopener noreferrer sponsored" />
        }
      >
        公式サイトで詳しく見る
        <ExternalLink data-icon="inline-end" aria-hidden="true" />
      </Button>
    </aside>
  )
}
