const zones = [
  {
    key: 'front',
    label: '① 前頭部（生え際）',
    caption: '生え際から頭頂部に向かって、指の腹で引き上げるように',
  },
  {
    key: 'temple',
    label: '② 側頭部（こめかみ周辺）',
    caption: 'こめかみから耳の上を通り、頭頂部に向かって',
  },
  {
    key: 'crown',
    label: '③ 頭頂部（つむじ周辺）',
    caption: '指の腹で小さな円を描くように、頭皮を動かす',
  },
  {
    key: 'back',
    label: '④ 後頭部（首の付け根まで）',
    caption: '頭頂部から後頭部を通り、首の付け根に向かって流す',
  },
] as const

function HeadBase() {
  return (
    <ellipse
      cx="80"
      cy="85"
      rx="52"
      ry="58"
      fill="var(--color-secondary)"
      stroke="var(--color-border)"
      strokeWidth="1.5"
    />
  )
}

function ArrowDefs({ id }: { id: string }) {
  return (
    <defs>
      <marker id={id} markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
        <path d="M0,0 L8,4 L0,8 Z" fill="var(--color-primary)" />
      </marker>
    </defs>
  )
}

function Arrow({ d, markerId }: { d: string; markerId: string }) {
  return (
    <path
      d={d}
      fill="none"
      stroke="var(--color-primary)"
      strokeWidth="4"
      strokeLinecap="round"
      markerEnd={`url(#${markerId})`}
    />
  )
}

function FrontZone() {
  const markerId = 'scalp-arrow-front'
  return (
    <svg viewBox="0 0 160 160" className="size-full" aria-hidden="true">
      <ArrowDefs id={markerId} />
      <HeadBase />
      <ellipse cx="80" cy="45" rx="46" ry="20" fill="var(--color-primary)" opacity="0.25" />
      <Arrow d="M58 58 C 56 46, 60 34, 64 26" markerId={markerId} />
      <Arrow d="M80 56 C 80 44, 80 32, 80 24" markerId={markerId} />
      <Arrow d="M102 58 C 104 46, 100 34, 96 26" markerId={markerId} />
    </svg>
  )
}

function TempleZone() {
  const markerId = 'scalp-arrow-temple'
  return (
    <svg viewBox="0 0 160 160" className="size-full" aria-hidden="true">
      <ArrowDefs id={markerId} />
      <HeadBase />
      <ellipse cx="34" cy="70" rx="14" ry="26" fill="var(--color-primary)" opacity="0.25" />
      <ellipse cx="126" cy="70" rx="14" ry="26" fill="var(--color-primary)" opacity="0.25" />
      <Arrow d="M32 90 C 30 74, 40 58, 62 44" markerId={markerId} />
      <Arrow d="M128 90 C 130 74, 120 58, 98 44" markerId={markerId} />
    </svg>
  )
}

function CrownZone() {
  const markerId = 'scalp-arrow-crown'
  return (
    <svg viewBox="0 0 160 160" className="size-full" aria-hidden="true">
      <ArrowDefs id={markerId} />
      <HeadBase />
      <circle cx="80" cy="72" r="24" fill="var(--color-primary)" opacity="0.25" />
      <path
        d="M80 54 A 18 18 0 1 1 62 72"
        fill="none"
        stroke="var(--color-primary)"
        strokeWidth="4"
        strokeLinecap="round"
        markerEnd={`url(#${markerId})`}
      />
    </svg>
  )
}

function BackZone() {
  const markerId = 'scalp-arrow-back'
  return (
    <svg viewBox="0 0 160 160" className="size-full" aria-hidden="true">
      <ArrowDefs id={markerId} />
      <HeadBase />
      <ellipse cx="80" cy="118" rx="40" ry="24" fill="var(--color-primary)" opacity="0.25" />
      <Arrow d="M80 66 C 80 88, 80 108, 80 132" markerId={markerId} />
      <Arrow d="M56 78 C 60 96, 68 112, 78 128" markerId={markerId} />
      <Arrow d="M104 78 C 100 96, 92 112, 82 128" markerId={markerId} />
    </svg>
  )
}

const diagrams: Record<(typeof zones)[number]['key'], () => React.JSX.Element> = {
  front: FrontZone,
  temple: TempleZone,
  crown: CrownZone,
  back: BackZone,
}

export function ScalpMassageDiagram() {
  return (
    <div className="my-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {zones.map((zone) => {
        const Diagram = diagrams[zone.key]
        return (
          <div
            key={zone.key}
            className="flex flex-col items-center gap-3 rounded-xl bg-card p-4 text-center ring-1 ring-foreground/10"
          >
            <div className="size-24 shrink-0">
              <Diagram />
            </div>
            <div className="flex flex-col gap-1">
              <p className="font-heading text-sm font-bold text-primary">{zone.label}</p>
              <p className="text-xs leading-relaxed text-muted-foreground">{zone.caption}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}
