import Image from 'next/image'
import { Check, Crown, ExternalLink, Minus } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { StarRating } from '@/components/star-rating'
import type { Product } from '@/lib/data'
import { cn } from '@/lib/utils'

function RankBadge({ rank }: { rank: number }) {
  const isTop = rank === 1

  return (
    <span
      className={cn(
        'flex items-center gap-1 rounded-lg px-2.5 py-1 font-heading text-sm font-bold',
        isTop
          ? 'bg-gold text-gold-foreground'
          : rank <= 3
            ? 'bg-primary text-primary-foreground'
            : 'bg-secondary text-secondary-foreground',
      )}
    >
      {isTop ? <Crown className="size-3.5" aria-hidden="true" /> : null}
      {rank}位
    </span>
  )
}

export function ProductRankCard({ product }: { product: Product }) {
  return (
    <article className="flex flex-col overflow-hidden rounded-xl bg-card ring-1 ring-foreground/10">
      <div className="flex items-center justify-between gap-3 border-b border-border bg-muted/60 px-4 py-3">
        <RankBadge rank={product.rank} />
        <span className="text-xs text-muted-foreground">{product.type}</span>
      </div>

      <div className="flex flex-col gap-5 p-4">
        <div className="flex flex-col gap-4 sm:flex-row">
          <div className="relative aspect-square w-full shrink-0 overflow-hidden rounded-lg bg-muted sm:w-40">
            <Image
              src={product.image || '/placeholder.svg'}
              alt={`${product.brand} ${product.name}の商品画像`}
              fill
              sizes="(max-width: 640px) 100vw, 160px"
              className="object-cover"
            />
          </div>

          <div className="flex flex-1 flex-col gap-2">
            <p className="text-xs font-semibold tracking-wide text-primary">{product.brand}</p>
            <h3 className="font-heading text-lg leading-snug font-bold text-pretty">
              {product.name}
            </h3>
            <StarRating score={product.score} />
            <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1 pt-1">
              <span className="font-heading text-xl font-bold">{product.monthlyPrice}</span>
              <span className="text-xs text-muted-foreground">{product.price}</span>
            </div>
            <p className="text-xs text-accent-foreground">{product.guarantee}</p>
          </div>
        </div>

        <p className="text-sm leading-relaxed text-muted-foreground">{product.summary}</p>

        <div className="flex flex-wrap gap-2">
          {product.highlights.map((highlight) => (
            <Badge key={highlight} variant="outline" className="h-auto py-1 text-[11px]">
              {highlight}
            </Badge>
          ))}
        </div>

        <div className="flex flex-col gap-2.5 rounded-lg bg-muted/60 p-3.5">
          {product.scores.map((score) => (
            <div key={score.label} className="flex items-center gap-3">
              <span className="w-24 shrink-0 text-xs text-muted-foreground">{score.label}</span>
              <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-border">
                <div
                  className="h-full rounded-full bg-primary"
                  style={{ width: `${(score.value / 5) * 100}%` }}
                />
              </div>
              <span className="w-7 shrink-0 text-right text-xs font-semibold tabular-nums">
                {score.value.toFixed(1)}
              </span>
            </div>
          ))}
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="flex flex-col gap-2">
            <h4 className="font-heading text-sm font-bold">ここが良い</h4>
            <ul className="flex flex-col gap-1.5">
              {product.pros.map((pro) => (
                <li key={pro} className="flex gap-2 text-sm leading-relaxed">
                  <Check className="mt-0.5 size-4 shrink-0 text-mint" aria-hidden="true" />
                  <span>{pro}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-2">
            <h4 className="font-heading text-sm font-bold">気になる点</h4>
            <ul className="flex flex-col gap-1.5">
              {product.cons.map((con) => (
                <li key={con} className="flex gap-2 text-sm leading-relaxed">
                  <Minus className="mt-0.5 size-4 shrink-0 text-muted-foreground" aria-hidden="true" />
                  <span className="text-muted-foreground">{con}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-2 border-t border-border pt-4">
          <p className="text-xs text-muted-foreground">
            主な特徴・メニュー：{product.ingredients.join('・')}
          </p>
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
          <p className="text-center text-[11px] text-muted-foreground">
            リンク先は販売元の公式サイトです（広告）
          </p>
        </div>
      </div>
    </article>
  )
}
