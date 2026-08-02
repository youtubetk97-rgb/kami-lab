import Link from 'next/link'
import { Sprout } from 'lucide-react'
import { categories } from '@/lib/data'

export function SiteFooter() {
  return (
    <footer className="mt-16 border-t border-border bg-secondary/60">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-12">
        <div className="flex flex-col gap-10 md:flex-row md:justify-between">
          <div className="flex max-w-sm flex-col gap-3">
            <Link href="/" className="flex items-center gap-2">
              <span className="flex size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <Sprout className="size-4" aria-hidden="true" />
              </span>
              <span className="font-heading text-base font-bold">ハツラボ</span>
            </Link>
            <p className="text-sm leading-relaxed text-muted-foreground">
              薄毛・抜け毛の悩みに向き合う人のための総合メディアです。公開されている情報をもとに、判断の材料になる形で整理してお届けしています。
            </p>
          </div>

          <div className="flex flex-col gap-8 sm:flex-row sm:gap-14">
            <div className="flex flex-col gap-3">
              <h2 className="font-heading text-sm font-bold">コンテンツ</h2>
              <ul className="flex flex-col gap-2 text-sm text-muted-foreground">
                <li>
                  <Link href="/ranking" className="transition-colors hover:text-foreground">
                    比較ランキング
                  </Link>
                </li>
                <li>
                  <Link href="/articles" className="transition-colors hover:text-foreground">
                    記事一覧
                  </Link>
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-3">
              <h2 className="font-heading text-sm font-bold">カテゴリ</h2>
              <ul className="flex flex-col gap-2 text-sm text-muted-foreground">
                {categories.map((category) => (
                  <li key={category.slug}>
                    <Link
                      href={`/articles?category=${category.slug}`}
                      className="transition-colors hover:text-foreground"
                    >
                      {category.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-border pt-6">
          <p className="text-xs leading-relaxed text-muted-foreground">
            【免責事項】本サイトの内容は一般的な情報提供を目的としたものであり、診断・治療を目的とした医療上の助言ではありません。掲載している商品の効果は個人差があり、特定の結果を保証するものではありません。症状が気になる場合は医療機関にご相談ください。価格や仕様は変更される場合があるため、購入前に販売元の情報をご確認ください。
          </p>
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} ハツラボ All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
