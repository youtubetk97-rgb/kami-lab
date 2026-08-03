const legend = [
  { key: 'growth', label: '成長期', color: 'var(--color-primary)' },
  { key: 'catagen', label: '退行期', color: 'var(--color-gold)' },
  { key: 'telogen', label: '休止期', color: 'var(--color-border)' },
] as const

const rows = [
  {
    key: 'normal',
    title: '正常なヘアサイクル',
    segments: [
      { key: 'growth', ratio: 78, caption: '2〜6年' },
      { key: 'catagen', ratio: 6, caption: '2〜3週間' },
      { key: 'telogen', ratio: 16, caption: '3〜4ヶ月' },
    ],
    note: '髪が太く長く育つ「成長期」が数年続くとされ、寿命を迎えた髪が自然に抜けて生え変わる',
  },
  {
    key: 'aga',
    title: 'AGAが進行したヘアサイクル',
    segments: [
      { key: 'growth', ratio: 28, caption: '数ヶ月〜1、2年' },
      { key: 'catagen', ratio: 10, caption: '短縮' },
      { key: 'telogen', ratio: 62, caption: '相対的に長期化' },
    ],
    note: '成長期が短縮されるといわれ、髪が十分に太く長く育つ前に抜けてしまいやすくなる',
  },
] as const

export function HairCycleDiagram() {
  return (
    <div className="my-8 flex flex-col gap-5 rounded-xl bg-card p-4 ring-1 ring-foreground/10 sm:p-5">
      <div className="flex flex-wrap items-center gap-4">
        {legend.map((item) => (
          <span key={item.key} className="flex items-center gap-1.5 text-[11px] text-muted-foreground">
            <span
              className="size-2.5 shrink-0 rounded-sm"
              style={{ backgroundColor: item.color }}
              aria-hidden="true"
            />
            {item.label}
          </span>
        ))}
      </div>

      <div className="flex flex-col gap-4">
        {rows.map((row) => (
          <div key={row.key} className="flex flex-col gap-1.5">
            <p className="font-heading text-xs font-bold sm:text-sm">{row.title}</p>
            <div className="flex h-7 w-full overflow-hidden rounded-md ring-1 ring-foreground/10">
              {row.segments.map((segment) => {
                const color = legend.find((l) => l.key === segment.key)?.color
                return (
                  <div
                    key={segment.key}
                    className="flex items-center justify-center overflow-hidden"
                    style={{ width: `${segment.ratio}%`, backgroundColor: color }}
                  >
                    {segment.ratio >= 20 ? (
                      <span className="truncate px-1 text-[10px] font-semibold text-background sm:text-[11px]">
                        {segment.caption}
                      </span>
                    ) : null}
                  </div>
                )
              })}
            </div>
            <p className="text-[11px] leading-relaxed text-muted-foreground sm:text-xs">{row.note}</p>
          </div>
        ))}
      </div>

      <p className="text-[10px] leading-relaxed text-muted-foreground">
        ※ 期間はいずれも一般的にいわれている目安であり、統一された計測基準があるわけではありません。図の比率は理解のためのイメージであり、実際の期間の比例を厳密に表すものではありません。
      </p>
    </div>
  )
}
