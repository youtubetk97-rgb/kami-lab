import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowRight,
  ClipboardCheck,
  FlaskConical,
  HeartPulse,
  Leaf,
  ScrollText,
  ShieldCheck,
  Sparkles,
  Stethoscope,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { ArticleCard } from '@/components/article-card'
import { ProductMiniCard } from '@/components/product-mini-card'
import { SectionHeading } from '@/components/section-heading'
import { PRODUCTS_PUBLISHED, articles, categories, faqs, publishedProducts } from '@/lib/data'

const trustPoints = [
  {
    icon: ScrollText,
    title: '公開情報にもとづく整理',
    text: '販売元の公式情報や成分表示を確認し、比較しやすい形でまとめています。',
  },
  {
    icon: ShieldCheck,
    title: '弱点も隠さず記載',
    text: '良い点だけでなく、気になる点や向かない人も併せて掲載しています。',
  },
  {
    icon: Stethoscope,
    title: '医療は医療へ',
    text: '受診が必要な状態の目安も示し、セルフケアの範囲を明確にしています。',
  },
]

const categoryIcons = {
  aga: Stethoscope,
  ikumo: FlaskConical,
  scalp: Sparkles,
  lifestyle: Leaf,
} as const

const steps = [
  {
    step: '01',
    title: '今の状態を記録する',
    text: '同じ場所・同じ明るさで月1回の写真を残します。判断の基準になるのは記憶ではなく記録です。',
  },
  {
    step: '02',
    title: 'ケアの種類を絞る',
    text: '乾燥・ベタつき・地肌の透けなど、悩みの中心に合わせて育毛剤・シャンプー・内側のケアを選びます。',
  },
  {
    step: '03',
    title: '3か月続けて見直す',
    text: '価格と解約条件を確認し、続けられる範囲で。変化が見えない場合は受診も検討します。',
  },
]

export default function HomePage() {
  const topProducts = publishedProducts.slice(0, 3)
  const latestArticles = articles.slice(0, 4)

  return (
    <div className="flex flex-col">
      <section className="border-b border-border bg-secondary/50">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-12 lg:flex-row lg:items-center lg:gap-12 lg:py-20">
          <div className="flex flex-1 flex-col gap-5">
            <p className="flex w-fit items-center gap-1.5 rounded-4xl bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground">
              <HeartPulse className="size-3.5" aria-hidden="true" />
              薄毛・抜け毛の比較メディア
            </p>
            <h1 className="font-heading text-3xl leading-tight font-bold text-balance sm:text-4xl lg:text-5xl">
              その抜け毛、
              <br className="hidden sm:block" />
              何から始めるかで変わる。
            </h1>
            <p className="max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
              育毛剤、スカルプケア、AGA治療。選択肢が多いからこそ迷います。ハツラボは公開情報をもとに、価格・成分・続けやすさを同じ基準で比べられるように整理しました。
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button size="lg" className="h-11 text-sm" nativeButton={false} render={<Link href="/ranking" />}>
                比較ランキングを見る
                <ArrowRight data-icon="inline-end" aria-hidden="true" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="h-11 text-sm"
                nativeButton={false} render={<Link href="/articles" />}
              >
                まず基礎から知る
              </Button>
            </div>
            <dl className="mt-2 flex flex-wrap gap-x-8 gap-y-3">
              <div className="flex flex-col">
                <dt className="text-xs text-muted-foreground">掲載記事</dt>
                <dd className="font-heading text-xl font-bold">{articles.length}本</dd>
              </div>
              <div className="flex flex-col">
                <dt className="text-xs text-muted-foreground">比較アイテム</dt>
                <dd className="font-heading text-xl font-bold">
                  {PRODUCTS_PUBLISHED ? `${publishedProducts.length}商品` : '準備中'}
                </dd>
              </div>
              <div className="flex flex-col">
                <dt className="text-xs text-muted-foreground">評価項目</dt>
                <dd className="font-heading text-xl font-bold">4項目</dd>
              </div>
            </dl>
          </div>

          <div className="relative aspect-[4/3] w-full flex-1 overflow-hidden rounded-2xl bg-muted ring-1 ring-foreground/10 lg:aspect-[5/4]">
            <Image
              src="/images/hero-clinic.png"
              alt="明るいクリニックで医師にカウンセリングを受けている男性"
              fill
              sizes="(max-width: 1024px) 100vw, 560px"
              priority
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 py-12">
        <ul className="grid gap-4 sm:grid-cols-3">
          {trustPoints.map((point) => (
            <li
              key={point.title}
              className="flex flex-col gap-2 rounded-xl bg-card p-4 ring-1 ring-foreground/10"
            >
              <span className="flex size-9 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                <point.icon className="size-4" aria-hidden="true" />
              </span>
              <h2 className="font-heading text-sm font-bold">{point.title}</h2>
              <p className="text-sm leading-relaxed text-muted-foreground">{point.text}</p>
            </li>
          ))}
        </ul>
      </section>

      {PRODUCTS_PUBLISHED ? (
        <section className="mx-auto w-full max-w-6xl px-4 py-12">
          <SectionHeading
            eyebrow="RANKING"
            title="編集部の比較ランキング TOP3"
            description="コスパ・使いやすさ・成分の充実度・続けやすさの4項目で評価しました。順位は編集部の基準によるもので、効果を保証するものではありません。"
          />
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {topProducts.map((product) => (
              <ProductMiniCard key={product.slug} product={product} />
            ))}
          </div>
          <div className="mt-8 flex justify-center">
            <Button
              variant="outline"
              size="lg"
              className="h-11 text-sm"
              nativeButton={false} render={<Link href="/ranking" />}
            >
              {publishedProducts.length}商品すべての比較を見る
              <ArrowRight data-icon="inline-end" aria-hidden="true" />
            </Button>
          </div>
        </section>
      ) : null}

      <section className="border-y border-border bg-secondary/40">
        <div className="mx-auto w-full max-w-6xl px-4 py-12">
          <SectionHeading
            eyebrow="CATEGORY"
            title="悩みから記事を探す"
            description="気になっているところから読み進められるよう、4つのカテゴリに分けています。"
          />
          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {categories.map((category) => {
              const Icon = categoryIcons[category.slug as keyof typeof categoryIcons]
              return (
                <li key={category.slug}>
                  <Link
                    href={`/articles?category=${category.slug}`}
                    className="group flex h-full items-start gap-4 rounded-xl bg-card p-4 ring-1 ring-foreground/10 transition-shadow hover:shadow-md"
                  >
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                      <Icon className="size-5" aria-hidden="true" />
                    </span>
                    <span className="flex flex-col gap-1">
                      <span className="flex items-center gap-1.5 font-heading text-base font-bold group-hover:text-primary">
                        {category.name}
                        <ArrowRight
                          className="size-4 transition-transform group-hover:translate-x-0.5"
                          aria-hidden="true"
                        />
                      </span>
                      <span className="text-sm leading-relaxed text-muted-foreground">
                        {category.description}
                      </span>
                    </span>
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 py-12">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeading eyebrow="ARTICLES" title="新着記事" />
          <Button variant="ghost" size="lg" className="text-sm" nativeButton={false} render={<Link href="/articles" />}>
            すべて見る
            <ArrowRight data-icon="inline-end" aria-hidden="true" />
          </Button>
        </div>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {latestArticles.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-secondary/40">
        <div className="mx-auto w-full max-w-6xl px-4 py-12">
          <SectionHeading
            eyebrow="HOW TO START"
            title="迷ったときの3ステップ"
            description="いきなり商品を選ぶ前に、この順番で考えると失敗しにくくなります。"
          />
          <ol className="mt-8 grid gap-4 sm:grid-cols-3">
            {steps.map((item) => (
              <li
                key={item.step}
                className="flex flex-col gap-2 rounded-xl bg-card p-5 ring-1 ring-foreground/10"
              >
                <span className="font-heading text-2xl font-bold text-primary">{item.step}</span>
                <h3 className="font-heading text-base font-bold">{item.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{item.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="mx-auto w-full max-w-3xl px-4 py-12">
        <SectionHeading eyebrow="FAQ" title="よくある質問" />
        <Accordion className="mt-6">
          {faqs.map((faq) => (
            <AccordionItem key={faq.question}>
              <AccordionTrigger className="font-heading text-base">{faq.question}</AccordionTrigger>
              <AccordionContent className="leading-relaxed text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 pb-4">
        <div className="flex flex-col items-start gap-4 rounded-2xl bg-primary p-6 text-primary-foreground sm:p-10">
          <span className="flex size-10 items-center justify-center rounded-lg bg-primary-foreground/15">
            <ClipboardCheck className="size-5" aria-hidden="true" />
          </span>
          <h2 className="font-heading text-2xl leading-tight font-bold text-balance">
            自分に合うケアを、同じ基準で比べる
          </h2>
          <p className="max-w-xl text-sm leading-relaxed text-primary-foreground/85">
            価格・成分・続けやすさを並べて比較できるランキングページを用意しました。気になる点も含めて確認してから選んでください。
          </p>
          <Button
            variant="secondary"
            size="lg"
            className="h-11 text-sm"
            nativeButton={false} render={<Link href="/ranking" />}
          >
            比較ランキングを見る
            <ArrowRight data-icon="inline-end" aria-hidden="true" />
          </Button>
        </div>
      </section>
    </div>
  )
}
