import Link from 'next/link'
import type { Metadata } from 'next'
import { Info } from 'lucide-react'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { ProductRankCard } from '@/components/product-rank-card'
import { SectionHeading } from '@/components/section-heading'
import { StarRating } from '@/components/star-rating'
import { PRODUCTS_PUBLISHED, publishedProducts } from '@/lib/data'

export const metadata: Metadata = {
  title: '育毛・スカルプケア比較ランキング',
  description:
    'コスパ・使いやすさ・成分の充実度・続けやすさの4項目で、育毛剤・トニック・サプリ・スカルプシャンプーを比較しました。気になる点も含めて掲載しています。',
}

const criteria = [
  {
    title: 'コスパ',
    text: '2回目以降の価格をもとに、1か月あたりの負担額で比較しています。',
  },
  {
    title: '使いやすさ',
    text: '塗布方法、香り、ベタつきなど、毎日続けるうえでの扱いやすさを見ています。',
  },
  {
    title: '成分の充実度',
    text: '公式に表示されている有効成分・その他成分の構成を確認しています。',
  },
  {
    title: '続けやすさ',
    text: '定期購入の回数縛りや返金保証など、やめたいときの条件を含めて評価します。',
  },
]

export default function RankingPage() {
  return (
    <div className="flex flex-col">
      <div className="border-b border-border bg-secondary/50">
        <div className="mx-auto flex max-w-4xl flex-col gap-5 px-4 py-10">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink render={<Link href="/" />}>ホーム</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>比較ランキング</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <h1 className="font-heading text-3xl leading-tight font-bold text-balance sm:text-4xl">
            育毛・スカルプケア比較ランキング
          </h1>
          <p className="text-sm leading-relaxed text-muted-foreground">
            編集部が4つの項目で採点し、順位をつけました。良い点だけでなく気になる点も同じ分量で掲載しています。表示価格・仕様は変更される場合があるため、購入前に販売元でご確認ください。
          </p>
        </div>
      </div>

      <section className="mx-auto w-full max-w-4xl px-4 py-10">
        <Alert>
          <Info aria-hidden="true" />
          <AlertTitle>評価についての前提</AlertTitle>
          <AlertDescription>
            本ランキングは公開情報にもとづく編集部の評価であり、医学的な効果や特定の結果を保証するものではありません。頭皮や体調に不安がある場合は医療機関にご相談ください。
          </AlertDescription>
        </Alert>

        <div className="mt-8">
          <SectionHeading eyebrow="CRITERIA" title="4つの評価項目" />
          <ul className="mt-6 grid gap-4 sm:grid-cols-2">
            {criteria.map((item) => (
              <li
                key={item.title}
                className="flex flex-col gap-1.5 rounded-xl bg-card p-4 ring-1 ring-foreground/10"
              >
                <h3 className="font-heading text-sm font-bold text-primary">{item.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{item.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {PRODUCTS_PUBLISHED ? (
        <>
          <section className="mx-auto w-full max-w-4xl px-4 pb-10">
            <SectionHeading eyebrow="COMPARISON" title="一覧で比較する" />
            <div className="mt-6 overflow-hidden rounded-xl ring-1 ring-foreground/10">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-14">順位</TableHead>
                    <TableHead>商品</TableHead>
                    <TableHead>総合</TableHead>
                    <TableHead className="text-right">価格</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {publishedProducts.map((product) => (
                    <TableRow key={product.slug}>
                      <TableCell className="font-heading font-bold">{product.rank}位</TableCell>
                      <TableCell>
                        <span className="flex flex-col">
                          <span className="font-medium">{product.name}</span>
                          <span className="text-xs text-muted-foreground">{product.type}</span>
                        </span>
                      </TableCell>
                      <TableCell>
                        <StarRating score={product.score} />
                      </TableCell>
                      <TableCell className="text-right whitespace-nowrap">
                        <span className="flex flex-col items-end">
                          <span className="font-medium">{product.monthlyPrice}</span>
                          <span className="text-xs text-muted-foreground">{product.price}</span>
                        </span>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </section>

          <section className="mx-auto w-full max-w-4xl px-4 pb-12">
            <SectionHeading eyebrow="DETAIL" title="各商品の詳しい評価" />
            <div className="mt-6 flex flex-col gap-8">
              {publishedProducts.map((product) => (
                <ProductRankCard key={product.slug} product={product} />
              ))}
            </div>
          </section>
        </>
      ) : (
        <section className="mx-auto w-full max-w-4xl px-4 pb-12">
          <Alert>
            <Info aria-hidden="true" />
            <AlertTitle>比較ランキングは準備中です</AlertTitle>
            <AlertDescription>
              提携先の審査・確認が完了した商品のみを掲載する方針のため、現在ランキングの公開を一時的に停止しています。準備が整い次第、実際に確認した商品情報を掲載します。
            </AlertDescription>
          </Alert>
        </section>
      )}
    </div>
  )
}
