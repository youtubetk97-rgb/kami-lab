import Link from 'next/link'

const LINK_PATTERN = /\[([^\]]+)\]\(([a-z0-9-]+)\)/g

export function RichText({ text }: { text: string }) {
  const parts: React.ReactNode[] = []
  let lastIndex = 0

  for (const match of text.matchAll(LINK_PATTERN)) {
    const index = match.index ?? 0
    if (index > lastIndex) parts.push(text.slice(lastIndex, index))
    parts.push(
      <Link
        key={index}
        href={`/articles/${match[2]}`}
        className="font-medium text-primary underline underline-offset-4 hover:no-underline"
      >
        {match[1]}
      </Link>,
    )
    lastIndex = index + match[0].length
  }

  if (lastIndex < text.length) parts.push(text.slice(lastIndex))
  return <>{parts}</>
}
