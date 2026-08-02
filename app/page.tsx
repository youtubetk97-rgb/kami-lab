import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowRight,
  ClipboardCheck,
  FlaskConical,
  HeartPulse,
  Leaf,
  Mars,
  ScrollText,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  Venus,
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
    color: 'bg-sky-500',
  },
  {
    icon: ShieldCheck,
    title: '弱点も隠さず記載',
    text: '良い点だけでなく、気になる点や向かない人も併せて掲載しています。',
    color: 'bg-violet-500',
  },
  {
    icon: Stethoscope,
    title: '医療は医療へ',
    text: '受診が必要な状態の目安も示し、セルフケアの範囲を明確にしています。',
    color: 'bg-orange-500',
  },
]

const categoryIcons = {
  aga: Stethoscope,
  ikumo: FlaskConical,
  scalp: Sparkles,
  lifestyle: Leaf,
  women: Venus,
  'young-men': Mars,
} as const

const categoryColors = {
  aga: 'bg-sky-500',
  ikumo: 'bg-violet-500',
  scalp: 'bg-teal-500',
  lifestyle: 'bg-amber-500',
  women: 'bg-rose-500',
  'young-men': 'bg-indigo-500',
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
      <section className="relative overflow-hidden bg-gradient-to-br from-teal-600 via-emerald-600 to-cyan-500">
        <div
          className="pointer-events-none absolute -top-24 -left-16 size-80 rounded-full bg-fuchsia-400/30 blur-3xl"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -right-20 top-10 size-96 rounded-full bg-amber-300/30 blur-3xl"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute bottom-[-6rem] left-1/3 size-72 rounded-full bg-sky-300/25 blur-3xl"
          aria-hidden="true"
        />

        <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-4 py-14 lg:flex-row lg:items-center lg:gap-12 lg:py-24">
          <div className="flex flex-1 flex-col gap-5">
            <p className="flex w-fit items-center gap-1.5 rounded-4xl bg-white/15 px-3 py-1 text-xs font-semibold text-white ring-1 ring-white/30 backdrop-blur-sm">
              <HeartPulse className="size-3.5" aria-hidden="true" />
              薄毛・抜け毛対策の総合メディア
            </p>
            <h1 className="font-heading text-3xl leading-tight font-bold text-balance text-white sm:text-4xl lg:text-5xl">
              その抜け毛、
              <br className="hidden sm:block" />
              今から始めませんか。
            </h1>
            <p className="max-w-xl text-sm leading-relaxed text-white/90 sm:text-base">
              薄毛・抜け毛の悩みは世代や性別を問わず、多くの方が抱えている非常にデリケートで深刻な問題です。適切な対処を行うためには、原因を知り、自分に合ったアプローチを選ぶことが大切です。自力でのケアには限界がある場合も多いため、進行性の場合は専門医に相談するのが最も確実です。
            </p>
          </div>

          <div className="relative aspect-[4/3] w-full flex-1 overflow-hidden rounded-2xl shadow-2xl ring-4 ring-white/30 lg:aspect-[5/4]">
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
              className="flex flex-col gap-2 rounded-xl bg-card p-4 shadow-sm ring-1 ring-foreground/10 transition-shadow hover:shadow-md"
            >
              <span
                className={`flex size-9 items-center justify-center rounded-lg text-white ${point.color}`}
              >
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
            description="気になっているところから読み進められるよう、カテゴリごとに分けています。"
          />
          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {categories.map((category) => {
              const Icon = categoryIcons[category.slug as keyof typeof categoryIcons]
              const color = categoryColors[category.slug as keyof typeof categoryColors]
              return (
                <li key={category.slug}>
                  <Link
                    href={`/articles?category=${category.slug}`}
                    className="group flex h-full items-start gap-4 rounded-xl bg-card p-4 shadow-sm ring-1 ring-foreground/10 transition-all hover:-translate-y-0.5 hover:shadow-lg"
                  >
                    <span
                      className={`flex size-10 shrink-0 items-center justify-center rounded-lg text-white ${color}`}
                    >
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
                className="flex flex-col gap-3 rounded-xl bg-card p-5 shadow-sm ring-1 ring-foreground/10"
              >
                <span className="flex size-10 items-center justify-center rounded-full bg-gradient-to-br from-teal-500 to-cyan-500 font-heading text-sm font-bold text-white">
                  {item.step}
                </span>
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
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-teal-600 via-emerald-600 to-cyan-500 p-6 text-white shadow-xl sm:p-10">
          <div
            className="pointer-events-none absolute -right-10 -top-10 size-56 rounded-full bg-white/10 blur-2xl"
            aria-hidden="true"
          />
          <span className="relative flex size-10 items-center justify-center rounded-lg bg-white/15">
            <ClipboardCheck className="size-5" aria-hidden="true" />
          </span>
          <h2 className="relative mt-4 font-heading text-2xl leading-tight font-bold text-balance">
            自分に合うケアを、同じ基準で比べる
          </h2>
          <p className="relative mt-2 max-w-xl text-sm leading-relaxed text-white/85">
            価格・成分・続けやすさを並べて比較できるランキングページを用意しました。気になる点も含めて確認してから選んでください。
          </p>
          <Button
            size="lg"
            className="relative mt-4 h-11 bg-white text-sm text-teal-700 hover:bg-white/90"
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
