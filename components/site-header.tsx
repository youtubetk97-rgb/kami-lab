'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X, Sprout } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { categories } from '@/lib/data'

const navLinks = [
  { href: '/', label: 'ホーム' },
  { href: '/ranking', label: '比較ランキング' },
  { href: '/articles', label: '記事一覧' },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-3 px-4">
        <Link href="/" className="flex items-center gap-2">
          <span className="flex size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <Sprout className="size-4" aria-hidden="true" />
          </span>
          <span className="flex flex-col leading-tight">
            <span className="font-heading text-base font-bold tracking-tight">ハツラボ</span>
            <span className="text-[10px] text-muted-foreground">薄毛・抜け毛対策の総合メディア</span>
          </span>
        </Link>

        <nav aria-label="メインナビゲーション" className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-lg px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-muted hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
          <Button size="lg" className="ml-2" nativeButton={false} render={<Link href="/ranking" />}>
            おすすめを見る
          </Button>
        </nav>

        <Button
          variant="outline"
          size="icon"
          className="md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          <span className="sr-only">{open ? 'メニューを閉じる' : 'メニューを開く'}</span>
        </Button>
      </div>

      <div
        id="mobile-nav"
        className={cn(
          'overflow-hidden border-t border-border md:hidden',
          open ? 'block' : 'hidden',
        )}
      >
        <nav aria-label="モバイルナビゲーション" className="flex flex-col gap-1 px-4 py-3">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-2.5 text-sm font-medium transition-colors hover:bg-muted"
            >
              {link.label}
            </Link>
          ))}
          <p className="mt-2 px-3 text-xs font-semibold text-muted-foreground">カテゴリ</p>
          {categories.map((category) => (
            <Link
              key={category.slug}
              href={`/articles?category=${category.slug}`}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-2 text-sm text-foreground/80 transition-colors hover:bg-muted"
            >
              {category.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}
