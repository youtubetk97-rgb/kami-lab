import { ChevronRight } from 'lucide-react'

const phases = [
  {
    key: 'phase1',
    num: '1',
    period: '1〜3ヶ月目',
    label: '変化を感じにくい期間',
    caption: '休止期だった髪が入れ替わる時期とされる',
  },
  {
    key: 'phase2',
    num: '2',
    period: '4〜6ヶ月目',
    label: '産毛が増え始める',
    caption: '細く柔らかい毛が見られ始める人が出てくる時期',
  },
  {
    key: 'phase3',
    num: '3',
    period: '6〜12ヶ月目',
    label: '密度・太さの変化',
    caption: '毛髪の変化を実感しやすくなるといわれる時期',
  },
  {
    key: 'phase4',
    num: '4',
    period: '12ヶ月以降',
    label: '継続して効果を維持',
    caption: '自己判断で中断すると徐々に戻るとされる',
  },
] as const

function SeedIcon() {
  return (
    <svg viewBox="0 0 80 80" className="size-full" aria-hidden="true">
      <ellipse cx="40" cy="52" rx="16" ry="20" fill="var(--color-secondary)" stroke="var(--color-border)" />
      <ellipse cx="40" cy="52" rx="9" ry="13" fill="var(--color-primary)" opacity="0.6" />
    </svg>
  )
}

function SproutIcon() {
  return (
    <svg viewBox="0 0 80 80" className="size-full" aria-hidden="true">
      <path d="M40 62 L40 34" stroke="var(--color-primary)" strokeWidth="4" strokeLinecap="round" />
      <path
        d="M40 40 C 40 24, 26 20, 18 22 C 18 38, 30 42, 40 40 Z"
        fill="var(--color-primary)"
        opacity="0.85"
      />
      <path
        d="M40 34 C 40 18, 54 14, 62 16 C 62 32, 50 36, 40 34 Z"
        fill="var(--color-primary)"
        opacity="0.6"
      />
      <ellipse cx="40" cy="64" rx="18" ry="5" fill="var(--color-border)" />
    </svg>
  )
}

function GrowthIcon() {
  return (
    <svg viewBox="0 0 80 80" className="size-full" aria-hidden="true">
      <path d="M28 62 L28 22" stroke="var(--color-primary)" strokeWidth="5" strokeLinecap="round" />
      <path d="M40 62 L40 16" stroke="var(--color-primary)" strokeWidth="5" strokeLinecap="round" />
      <path d="M52 62 L52 24" stroke="var(--color-primary)" strokeWidth="5" strokeLinecap="round" />
      <ellipse cx="40" cy="64" rx="22" ry="5" fill="var(--color-border)" />
    </svg>
  )
}

function RepeatIcon() {
  return (
    <svg viewBox="0 0 80 80" className="size-full" aria-hidden="true">
      <defs>
        <marker id="timeline-arrow-repeat" markerWidth="7" markerHeight="7" refX="3.5" refY="3.5" orient="auto">
          <path d="M0,0 L7,3.5 L0,7 Z" fill="var(--color-gold)" />
        </marker>
      </defs>
      <path
        d="M22 30 A 18 18 0 1 1 20 50"
        fill="none"
        stroke="var(--color-gold)"
        strokeWidth="4.5"
        strokeLinecap="round"
        markerEnd="url(#timeline-arrow-repeat)"
      />
      <path d="M40 40 L40 26" stroke="var(--color-primary)" strokeWidth="4" strokeLinecap="round" />
      <ellipse cx="40" cy="42" rx="6" ry="8" fill="var(--color-primary)" opacity="0.8" />
    </svg>
  )
}

const icons: Record<(typeof phases)[number]['key'], () => React.JSX.Element> = {
  phase1: SeedIcon,
  phase2: SproutIcon,
  phase3: GrowthIcon,
  phase4: RepeatIcon,
}

export function AgaTreatmentTimelineDiagram() {
  return (
    <div className="my-8 flex flex-col gap-3 sm:flex-row sm:items-stretch sm:gap-2">
      {phases.map((phase, index) => {
        const Icon = icons[phase.key]
        return (
          <div key={phase.key} className="flex items-center gap-2 sm:flex-1">
            <div className="flex flex-1 flex-col items-center gap-2 rounded-xl bg-card p-3 text-center ring-1 ring-foreground/10">
              <span className="flex size-6 items-center justify-center rounded-full bg-primary text-[11px] font-bold text-primary-foreground">
                {phase.num}
              </span>
              <div className="size-14 shrink-0">
                <Icon />
              </div>
              <div className="flex flex-col gap-0.5">
                <p className="text-[10px] font-semibold text-primary">{phase.period}</p>
                <p className="font-heading text-xs font-bold">{phase.label}</p>
                <p className="text-[10px] leading-snug text-muted-foreground">{phase.caption}</p>
              </div>
            </div>
            {index < phases.length - 1 ? (
              <ChevronRight
                className="hidden size-5 shrink-0 text-muted-foreground sm:block"
                aria-hidden="true"
              />
            ) : null}
          </div>
        )
      })}
    </div>
  )
}
