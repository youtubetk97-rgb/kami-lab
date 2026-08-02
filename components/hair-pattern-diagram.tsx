const patterns = [
  {
    key: 'm',
    label: 'M字型',
    caption: '両サイドの生え際が後退するタイプ',
    view: '正面から見たイメージ',
  },
  {
    key: 'o',
    label: 'O字型',
    caption: '頭頂部（つむじ周辺）から薄くなるタイプ',
    view: '頭頂部を見たイメージ',
  },
  {
    key: 'u',
    label: 'U字型',
    caption: 'M字とO字が進行し、前頭部〜頭頂部がつながるタイプ',
    view: '正面から見たイメージ',
  },
] as const

function MPattern() {
  return (
    <svg viewBox="0 0 160 160" className="size-full" aria-hidden="true">
      <circle cx="80" cy="90" r="62" fill="var(--color-secondary)" />
      <path
        d="M22 78 C 22 40, 48 18, 80 18 C 112 18, 138 40, 138 78 L 138 90 C 118 66, 108 92, 96 66 C 90 52, 70 52, 64 66 C 52 92, 42 66, 22 90 Z"
        fill="var(--color-primary)"
        opacity="0.85"
      />
      <path
        d="M40 60 C 46 78, 54 84, 60 68"
        fill="none"
        stroke="var(--color-gold)"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M120 60 C 114 78, 106 84, 100 68"
        fill="none"
        stroke="var(--color-gold)"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  )
}

function OPattern() {
  return (
    <svg viewBox="0 0 160 160" className="size-full" aria-hidden="true">
      <circle cx="80" cy="80" r="62" fill="var(--color-primary)" opacity="0.85" />
      <circle cx="80" cy="80" r="26" fill="var(--color-secondary)" />
      <circle cx="80" cy="80" r="26" fill="none" stroke="var(--color-gold)" strokeWidth="3" strokeDasharray="4 5" />
    </svg>
  )
}

function UPattern() {
  return (
    <svg viewBox="0 0 160 160" className="size-full" aria-hidden="true">
      <circle cx="80" cy="90" r="62" fill="var(--color-secondary)" />
      <path
        d="M18 92 C 18 130, 44 152, 80 152 C 116 152, 142 130, 142 92 C 142 108, 128 118, 116 108 C 108 100, 108 84, 96 84 L 64 84 C 52 84, 52 100, 44 108 C 32 118, 18 108, 18 92 Z"
        fill="var(--color-primary)"
        opacity="0.85"
      />
    </svg>
  )
}

const diagrams: Record<(typeof patterns)[number]['key'], () => React.JSX.Element> = {
  m: MPattern,
  o: OPattern,
  u: UPattern,
}

export function HairPatternDiagram() {
  return (
    <div className="my-8 grid gap-4 sm:grid-cols-3">
      {patterns.map((pattern) => {
        const Diagram = diagrams[pattern.key]
        return (
          <div
            key={pattern.key}
            className="flex flex-col items-center gap-3 rounded-xl bg-card p-4 text-center ring-1 ring-foreground/10"
          >
            <div className="size-24 shrink-0">
              <Diagram />
            </div>
            <div className="flex flex-col gap-1">
              <p className="font-heading text-sm font-bold text-primary">{pattern.label}</p>
              <p className="text-xs leading-relaxed text-muted-foreground">{pattern.caption}</p>
              <p className="text-[10px] text-muted-foreground/70">（{pattern.view}）</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}
