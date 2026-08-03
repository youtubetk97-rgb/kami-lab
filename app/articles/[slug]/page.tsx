import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Clock, Info, RefreshCw } from 'lucide-react'
import { AgaTreatmentTimelineDiagram } from '@/components/aga-treatment-timeline-diagram'
import { ArticleCard } from '@/components/article-card'
import { HairCycleDiagram } from '@/components/hair-cycle-diagram'
import { HairPatternDiagram } from '@/components/hair-pattern-diagram'
import { ProductInlineCard } from '@/components/product-inline-card'
import { ScalpMassageDiagram } from '@/components/scalp-massage-diagram'
import { ShampooStepsDiagram } from '@/components/shampoo-steps-diagram'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import {
  articles,
  formatDate,
  getArticle,
  getCategory,
  getProduct,
  getRelatedArticles,
} from '@/lib/data'

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const article = getArticle(slug)
  if (!article) return { title: '記事が見つかりません' }
  return {
    title: article.title,
    description: article.excerpt,
  }
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const article = getArticle(slug)
  if (!article) notFound()

  const category = getCategory(article.category)
  const related = getRelatedArticles(article.slug)
  const headings = article.body.filter((block) => block.type === 'h2')

  const baseUrl = 'https://www.hatsu-labo.com'
  const absoluteImage = article.image.startsWith('http') ? article.image : `${baseUrl}${article.image}`
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.excerpt,
    image: [absoluteImage],
    datePublished: article.publishedAt,
    dateModified: article.updatedAt,
    author: { '@type': 'Organization', name: 'ハツラボ', url: baseUrl },
    publisher: { '@type': 'Organization', name: 'ハツラボ', url: baseUrl },
    mainEntityOfPage: { '@type': 'WebPage', '@id': `${baseUrl}/articles/${article.slug}` },
  }

  return (
    <article className="mx-auto w-full max-w-3xl px-4 py-8 sm:px-6 lg:py-12">
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <nav aria-label="パンくずリスト" className="mb-6 text-xs text-muted-foreground">
        <ol className="flex flex-wrap items-center gap-1.5">
          <li>
            <Link href="/" className="hover:text-primary">
              ホーム
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li>
            <Link href="/articles" className="hover:text-primary">
              記事一覧
            </Link>
          </li>
          {category ? (
            <>
              <li aria-hidden="true">/</li>
              <li>
                <Link href={`/articles?category=${category.slug}`} className="hover:text-primary">
                  {category.name}
                </Link>
              </li>
            </>
          ) : null}
        </ol>
      </nav>

      <header className="flex flex-col gap-4">
        <div className="flex flex-wrap items-center gap-2">
          {category ? <Badge>{category.name}</Badge> : null}
          {article.tags.map((tag) => (
            <Badge key={tag} variant="secondary">
              #{tag}
            </Badge>
          ))}
        </div>

        <h1 className="font-heading text-2xl leading-snug font-bold text-balance sm:text-3xl">
          {article.title}
        </h1>

        <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <RefreshCw className="size-3.5" aria-hidden="true" />
            更新：{formatDate(article.updatedAt)}
          </span>
          <span>公開：{formatDate(article.publishedAt)}</span>
          <span className="flex items-center gap-1.5">
            <Clock className="size-3.5" aria-hidden="true" />約{article.readingTime}分で読めます
          </span>
        </div>

        <div className="relative aspect-[16/9] overflow-hidden rounded-xl bg-muted">
          <Image
            src={article.image || '/placeholder.svg'}
            alt={article.imageAlt}
            fill
            priority
            sizes="(max-width: 768px) 100vw, 768px"
            className="object-cover"
          />
        </div>
      </header>

      {headings.length > 1 ? (
        <nav
          aria-label="目次"
          className="mt-8 rounded-xl bg-secondary/60 p-4 ring-1 ring-primary/15"
        >
          <p className="font-heading text-sm font-bold">この記事の内容</p>
          <ol className="mt-3 flex flex-col gap-2">
            {headings.map((block, index) => (
              <li key={block.text} className="flex gap-2 text-sm text-muted-foreground">
                <span className="font-heading font-bold text-primary">{index + 1}.</span>
                <span>{block.text}</span>
              </li>
            ))}
          </ol>
        </nav>
      ) : null}

      <div className="mt-8 flex flex-col">
        {article.body.map((block, index) => {
          switch (block.type) {
            case 'lead':
              return (
                <p
                  key={index}
                  className="mb-6 border-l-4 border-primary pl-4 text-base leading-relaxed font-medium text-pretty"
                >
                  {block.text}
                </p>
              )
            case 'h2':
              return (
                <h2
                  key={index}
                  className="mt-10 mb-4 border-b border-border pb-2 font-heading text-xl leading-snug font-bold text-balance"
                >
                  {block.text}
                </h2>
              )
            case 'h3':
              return (
                <h3 key={index} className="mt-7 mb-3 font-heading text-base font-bold">
                  {block.text}
                </h3>
              )
            case 'p':
              return (
                <p key={index} className="mb-4 text-sm leading-relaxed sm:text-base">
                  {block.text}
                </p>
              )
            case 'list':
              return (
                <ul key={index} className="mb-5 flex flex-col gap-2">
                  {block.items.map((item) => (
                    <li key={item} className="flex gap-2.5 text-sm leading-relaxed sm:text-base">
                      <span
                        className="mt-2 size-1.5 shrink-0 rounded-full bg-primary"
                        aria-hidden="true"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )
            case 'note':
              return (
                <div
                  key={index}
                  className="my-6 flex gap-3 rounded-xl bg-accent p-4 text-accent-foreground"
                >
                  <Info className="mt-0.5 size-5 shrink-0" aria-hidden="true" />
                  <div className="flex flex-col gap-1">
                    <p className="font-heading text-sm font-bold">{block.title}</p>
                    <p className="text-sm leading-relaxed">{block.text}</p>
                  </div>
                </div>
              )
            case 'product': {
              const product = getProduct(block.slug)
              if (!product || !product.published) return null
              return <ProductInlineCard key={index} product={product} />
            }
            case 'hairPatternDiagram':
              return <HairPatternDiagram key={index} />
            case 'scalpMassageDiagram':
              return <ScalpMassageDiagram key={index} />
            case 'shampooStepsDiagram':
              return <ShampooStepsDiagram key={index} />
            case 'hairCycleDiagram':
              return <HairCycleDiagram key={index} />
            case 'agaTreatmentTimelineDiagram':
              return <AgaTreatmentTimelineDiagram key={index} />
            default:
              return null
          }
        })}
      </div>

      <div className="mt-10 rounded-xl bg-muted p-4">
        <p className="text-xs leading-relaxed text-muted-foreground">
          本記事は一般的な情報提供を目的としたものであり、診断・治療を目的とした医療上の助言では
          ありません。症状や治療については医師などの専門家にご相談ください。また、本記事には広告
          （アフィリエイトリンク）を含みます。
        </p>
      </div>

      <Separator className="my-10" />

      <section aria-labelledby="related-heading" className="flex flex-col gap-5">
        <h2 id="related-heading" className="font-heading text-xl font-bold">
          あわせて読みたい
        </h2>
        <div className="flex flex-col gap-4">
          {related.map((item) => (
            <ArticleCard key={item.slug} article={item} variant="horizontal" />
          ))}
        </div>
      </section>
    </article>
  )
}
