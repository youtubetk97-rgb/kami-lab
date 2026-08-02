import type { Metadata } from 'next'
import Link from 'next/link'
import { ArticleCard } from '@/components/article-card'
import { ProductMiniCard } from '@/components/product-mini-card'
import { SectionHeading } from '@/components/section-heading'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { articles, categories, getCategory, products } from '@/lib/data'
import { cn } from '@/lib/utils'

export const metadata: Metadata = {
  title: '記事一覧',
  description:
    'AGA・育毛剤・スカルプケア・生活習慣の4カテゴリで、薄毛対策の基礎知識と選び方をまとめた記事一覧です。',
}

export default async function ArticlesPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>
}) {
  const { category } = await searchParams
  const activeCategory = category ? getCategory(category) : undefined
  const list = activeCategory
    ? articles.filter((article) => article.category === activeCategory.slug)
    : articles

  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 lg:py-14">
      <nav aria-label="パンくずリスト" className="mb-6 text-xs text-muted-foreground">
        <ol className="flex flex-wrap items-center gap-1.5">
          <li>
            <Link href="/" className="hover:text-primary">
              ホーム
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li className="font-semibold text-foreground">記事一覧</li>
        </ol>
      </nav>

      <SectionHeading
        eyebrow="ARTICLES"
        title={activeCategory ? activeCategory.name : '記事一覧'}
        description={
          activeCategory
            ? activeCategory.description
            : '「まず何から始めるか」を判断できるように、基礎知識から具体的なケアの手順までを整理しています。'
        }
      />

      <div className="mt-6 flex flex-wrap gap-2">
        <Link
          href="/articles"
          className={cn(
            'rounded-full px-3.5 py-1.5 text-xs font-bold ring-1 transition-colors',
            !activeCategory
              ? 'bg-primary text-primary-foreground ring-primary'
              : 'bg-card text-muted-foreground ring-border hover:text-primary',
          )}
        >
          すべて（{articles.length}）
        </Link>
        {categories.map((item) => {
          const count = articles.filter((article) => article.category === item.slug).length
          const active = activeCategory?.slug === item.slug
          return (
            <Link
              key={item.slug}
              href={`/articles?category=${item.slug}`}
              className={cn(
                'rounded-full px-3.5 py-1.5 text-xs font-bold ring-1 transition-colors',
                active
                  ? 'bg-primary text-primary-foreground ring-primary'
                  : 'bg-card text-muted-foreground ring-border hover:text-primary',
              )}
            >
              {item.name}（{count}）
            </Link>
          )
        })}
      </div>

      <Separator className="my-8" />

      <div className="flex flex-col gap-10 lg:flex-row">
        <div className="flex-1">
          <div className="grid gap-5 sm:grid-cols-2">
            {list.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        </div>

        <aside className="flex w-full shrink-0 flex-col gap-6 lg:w-72">
          <div className="rounded-xl bg-card p-4 ring-1 ring-foreground/10">
            <h2 className="font-heading text-sm font-bold">人気ランキング</h2>
            <p className="mt-1 text-xs text-muted-foreground">編集部の比較スコア順</p>
            <div className="mt-4 flex flex-col gap-3">
              {products.slice(0, 3).map((product) => (
                <ProductMiniCard key={product.slug} product={product} />
              ))}
            </div>
            <Link
              href="/ranking"
              className="mt-4 inline-block text-xs font-bold text-primary hover:underline"
            >
              ランキングをすべて見る →
            </Link>
          </div>

          <div className="rounded-xl bg-secondary/60 p-4 ring-1 ring-primary/15">
            <h2 className="font-heading text-sm font-bold">カテゴリ</h2>
            <ul className="mt-3 flex flex-col gap-2">
              {categories.map((item) => (
                <li key={item.slug}>
                  <Link
                    href={`/articles?category=${item.slug}`}
                    className="flex items-center justify-between text-xs text-muted-foreground hover:text-primary"
                  >
                    {item.name}
                    <Badge variant="secondary">
                      {articles.filter((article) => article.category === item.slug).length}
                    </Badge>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </div>
  )
}
