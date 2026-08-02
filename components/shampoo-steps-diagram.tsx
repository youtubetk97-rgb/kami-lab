import { ChevronRight } from 'lucide-react'

const steps = [
  { key: 'temp', num: '1', label: 'お湯は38℃前後', caption: '熱すぎるお湯は避ける' },
  { key: 'pre', num: '2', label: '予洗い 1分', caption: '汚れの大半はお湯で落ちる' },
  { key: 'wash', num: '3', label: '指の腹で円を描く', caption: '爪を立てない' },
  { key: 'rinse', num: '4', label: 'すすぎは2倍の時間', caption: '生え際・耳の後ろを重点的に' },
  { key: 'dry', num: '5', label: 'ドライヤーは20cm離す', caption: '根元からしっかり乾かす' },
] as const

function TempIcon() {
  return (
    <svg viewBox="0 0 80 80" className="size-full" aria-hidden="true">
      <rect x="34" y="14" width="12" height="38" rx="6" fill="var(--color-secondary)" stroke="var(--color-border)" />
      <circle cx="40" cy="58" r="12" fill="var(--color-primary)" />
      <rect x="37" y="26" width="6" height="26" rx="3" fill="var(--color-primary)" opacity="0.8" />
      <path d="M50 24 L58 24 M50 34 L58 34" stroke="var(--color-gold)" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  )
}

function PreWashIcon() {
  return (
    <svg viewBox="0 0 80 80" className="size-full" aria-hidden="true">
      <path
        d="M40 14 C 48 30, 58 38, 58 50 A 18 18 0 1 1 22 50 C 22 38, 32 30, 40 14 Z"
        fill="var(--color-primary)"
        opacity="0.85"
      />
      <circle cx="58" cy="18" r="11" fill="var(--color-secondary)" stroke="var(--color-border)" />
      <text x="58" y="22" textAnchor="middle" fontSize="11" fill="var(--color-foreground)" fontWeight="700">
        1分
      </text>
    </svg>
  )
}

function CircularWashIcon() {
  return (
    <svg viewBox="0 0 80 80" className="size-full" aria-hidden="true">
      <defs>
        <marker id="shampoo-arrow-wash" markerWidth="7" markerHeight="7" refX="3.5" refY="3.5" orient="auto">
          <path d="M0,0 L7,3.5 L0,7 Z" fill="var(--color-primary)" />
        </marker>
      </defs>
      <circle cx="40" cy="44" r="26" fill="var(--color-secondary)" />
      <path
        d="M40 24 A 20 20 0 1 1 21 40"
        fill="none"
        stroke="var(--color-primary)"
        strokeWidth="4.5"
        strokeLinecap="round"
        markerEnd="url(#shampoo-arrow-wash)"
      />
    </svg>
  )
}

function RinseIcon() {
  return (
    <svg viewBox="0 0 80 80" className="size-full" aria-hidden="true">
      <path d="M28 16 C 34 28, 40 34, 40 44 A 10 10 0 1 1 20 44 C 20 34, 26 28, 28 16 Z" fill="var(--color-primary)" opacity="0.85" />
      <path d="M54 24 C 60 36, 66 42, 66 52 A 10 10 0 1 1 46 52 C 46 42, 52 36, 54 24 Z" fill="var(--color-primary)" opacity="0.55" />
    </svg>
  )
}

function DryerIcon() {
  return (
    <svg viewBox="0 0 80 80" className="size-full" aria-hidden="true">
      <rect x="14" y="30" width="30" height="16" rx="8" fill="var(--color-primary)" opacity="0.85" transform="rotate(-18 29 38)" />
      <rect x="34" y="38" width="12" height="24" rx="4" fill="var(--color-primary)" opacity="0.85" transform="rotate(-18 40 50)" />
      <path d="M50 34 L64 30 M52 42 L66 40 M50 50 L62 52" stroke="var(--color-gold)" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  )
}

const icons: Record<(typeof steps)[number]['key'], () => React.JSX.Element> = {
  temp: TempIcon,
  pre: PreWashIcon,
  wash: CircularWashIcon,
  rinse: RinseIcon,
  dry: DryerIcon,
}

export function ShampooStepsDiagram() {
  return (
    <div className="my-8 flex flex-col gap-3 sm:flex-row sm:items-stretch sm:gap-2">
      {steps.map((step, index) => {
        const Icon = icons[step.key]
        return (
          <div key={step.key} className="flex items-center gap-2 sm:flex-1">
            <div className="flex flex-1 flex-col items-center gap-2 rounded-xl bg-card p-3 text-center ring-1 ring-foreground/10">
              <span className="flex size-6 items-center justify-center rounded-full bg-primary text-[11px] font-bold text-primary-foreground">
                {step.num}
              </span>
              <div className="size-14 shrink-0">
                <Icon />
              </div>
              <div className="flex flex-col gap-0.5">
                <p className="font-heading text-xs font-bold">{step.label}</p>
                <p className="text-[10px] leading-snug text-muted-foreground">{step.caption}</p>
              </div>
            </div>
            {index < steps.length - 1 ? (
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
