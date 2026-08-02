export type Category = {
  slug: string
  name: string
  description: string
}

export type Product = {
  slug: string
  rank: number
  name: string
  brand: string
  type: string
  image: string
  price: string
  monthlyPrice: string
  score: number
  scores: {
    label: string
    value: number
  }[]
  summary: string
  highlights: string[]
  pros: string[]
  cons: string[]
  ingredients: string[]
  guarantee: string
  affiliateUrl: string
  // 提携審査が完了し、実際のトラッキングリンク(affiliateUrl)に差し替えるまでは
  // falseのままにしておく。falseの商品はランキング・記事内カードに表示されない。
  published: boolean
}

export type ArticleBlock =
  | { type: 'lead'; text: string }
  | { type: 'h2'; text: string }
  | { type: 'h3'; text: string }
  | { type: 'p'; text: string }
  | { type: 'list'; items: string[] }
  | { type: 'note'; title: string; text: string }
  | { type: 'product'; slug: string }

export type Article = {
  slug: string
  title: string
  excerpt: string
  category: string
  publishedAt: string
  updatedAt: string
  readingTime: number
  image: string
  imageAlt: string
  tags: string[]
  body: ArticleBlock[]
}

export const categories: Category[] = [
  {
    slug: 'aga',
    name: 'AGA・治療',
    description: '医療機関での治療や薬の基礎知識、費用の目安をまとめています。',
  },
  {
    slug: 'ikumo',
    name: '育毛剤・トニック',
    description: '成分や使い方の違いから、自分に合う育毛アイテムの選び方を解説。',
  },
  {
    slug: 'scalp',
    name: 'スカルプケア',
    description: 'シャンプーや洗い方など、毎日のケアで見直せるポイント。',
  },
  {
    slug: 'lifestyle',
    name: '生活習慣',
    description: '食事・睡眠・ストレスなど、頭皮環境に関わる生活面の工夫。',
  },
]

// 2026年8月、公式サイト情報をもとに調査した実データに置き換え済み。
// 各商品の published は、A8.net提携が承認されaffiliateUrlが実際の
// トラッキングリンクに差し替わってから true にすること。
export const products: Product[] = [
  {
    slug: 'levcli',
    rank: 1,
    name: 'レバクリ',
    brand: 'オンライン完結のAGA診療',
    type: 'AGAオンライン診療（対面院なし）',
    image: '/images/product-serum.png',
    price: '自由診療・配送料550〜1,100円/回',
    monthlyPrice: '月1,349円〜',
    score: 4.6,
    scores: [
      { label: 'コスパ', value: 4.9 },
      { label: 'オンライン対応', value: 4.8 },
      { label: 'メニューの幅', value: 4.0 },
      { label: '続けやすさ', value: 4.7 },
    ],
    summary:
      '初診から薬の受け取りまで完全オンラインで完結するAGA診療サービス。フィナステリド単剤なら月1,349円〜と価格の低さが特徴で、深夜2時まで診察に対応しています。',
    highlights: ['初診料・診察料0円', '深夜2時まで診察対応', '副作用発生時は全額返金保証'],
    pros: [
      '月1,349円〜とオンラインAGA診療の中でも価格帯が低い',
      '通院不要で自宅から診察〜薬の受け取りまで完結できる',
      '医薬品を第三者機関で検査するなど品質面の取り組みがある',
    ],
    cons: ['対面での診察・処置は選べない', 'プラン数が多く、初めてだと選択に迷いやすい'],
    ingredients: [
      'フィナステリド単剤プラン',
      'フィナステリド+ミノキシジル内服プラン',
      '定期配送（6/12/24ヶ月ごと）',
    ],
    guarantee: '副作用発生時の全額返金保証制度あり（規定条件あり）',
    affiliateUrl: '#',
    published: false,
  },
  {
    slug: 'aga-skin-clinic',
    rank: 2,
    name: 'AGAスキンクリニック',
    brand: '全国60院以上のAGA専門クリニック',
    type: 'AGA専門クリニック（対面＋オンライン対応）',
    image: '/images/product-tonic.png',
    price: '自由診療（プランにより月4,400円〜11万円台まで幅あり）',
    monthlyPrice: '予防プラン 月6,600円〜',
    score: 4.4,
    scores: [
      { label: 'コスパ', value: 3.8 },
      { label: 'オンライン対応', value: 4.8 },
      { label: 'メニューの幅', value: 4.9 },
      { label: '続けやすさ', value: 4.3 },
    ],
    summary:
      '全国60院以上を展開する対面重視のAGA専門クリニック（2026年1月時点、提携院含む）。内服薬から発毛メソセラピー・注入治療まで幅広いメニューを取り揃えています。',
    highlights: ['全国60院以上・提携院含む', '初診料・カウンセリング・血液検査が無料', '条件付きの全額返金制度あり'],
    pros: [
      '近くに院があれば対面での診察・処置を受けやすい',
      '内服だけでなくメソセラピーや注入治療まで選択肢が広い',
      '予防目的の内服単体プランは月6,600円〜と始めやすい',
    ],
    cons: ['発毛を目指す上位プランは月10万円前後になることもある', '一部の割引プランは対象院が限定される'],
    ingredients: [
      '内服薬（フィナステリド／デュタステリド）',
      'オリジナル外用薬',
      'メソセラピー・注入治療',
      '血液検査（条件付き無料）',
    ],
    guarantee: '条件付きの全額返金制度あり（詳細は公式サイトで要確認）',
    affiliateUrl: '#',
    published: false,
  },
  {
    slug: 'gincli',
    rank: 3,
    name: '銀座総合美容クリニック（銀クリ）',
    brand: '東京・大阪のAGA専門クリニック',
    type: 'AGA専門クリニック（東京・大阪2拠点＋オンライン対応）',
    image: '/images/product-shampoo.png',
    price: '自由診療（2ヶ月目以降は薬代のみ）',
    monthlyPrice: '初月1,000円〜',
    score: 3.8,
    scores: [
      { label: 'コスパ', value: 4.0 },
      { label: 'オンライン対応', value: 3.6 },
      { label: 'メニューの幅', value: 4.2 },
      { label: '続けやすさ', value: 3.8 },
    ],
    summary:
      '東京・大阪の2拠点で展開するAGA専門クリニック。初診からオンライン診療にも対応し、院内調剤のオリジナル治療薬が特徴です。初月1,000円で治療を始められます。',
    highlights: ['初月1,000円から治療開始', '院内調剤のオリジナル治療薬', '初診からオンライン診療に対応'],
    pros: [
      '初月1,000円と初期費用を抑えて試しやすい',
      '2ヶ月目以降は薬代のみで、追加費用がわかりやすい',
      'GGF発毛メソセラピーやAGA遺伝子診断など専門メニューもある',
    ],
    cons: ['対面の拠点は東京・大阪の2院のみ', '発毛を目指す治療は月2万円前後になる場合がある'],
    ingredients: [
      '院内調剤オリジナル内服薬',
      'GGF発毛メソセラピー',
      'LEDセラピー',
      'AGA遺伝子診断',
    ],
    guarantee: '返金保証の詳細は公式サイトでご確認ください',
    affiliateUrl: '#',
    published: false,
  },
  {
    slug: 'premium-black-shampoo',
    rank: 4,
    name: 'プレミアムブラックシャンプー',
    brand: '&GINO',
    type: 'スカルプシャンプー（頭皮ケア）',
    image: '',
    price: '通常5,184円（税込）',
    monthlyPrice: '定期4,666円/月〜',
    score: 4.3,
    scores: [
      { label: 'コスパ', value: 3.8 },
      { label: '使用感', value: 4.5 },
      { label: '成分の充実度', value: 4.6 },
      { label: '続けやすさ', value: 4.2 },
    ],
    summary:
      '楽天ランキングの低刺激性シャンプー部門で1位を獲得した実績を持つスカルプシャンプー。植物由来成分21種を配合し、ノンシリコン・アミノ酸系・弱酸性処方で頭皮と髪をケアします。',
    highlights: ['楽天ランキング低刺激性シャンプー部門1位の実績', '植物由来成分21種配合', 'ノンシリコン・アミノ酸系・弱酸性処方'],
    pros: [
      '洗浄と3分間のヘアパックが1本で完結し、コンディショナーが不要',
      '石油系界面活性剤・防腐剤・合成香料・着色料を使用しない処方',
      '定期購入だと1本あたり10%オフ・送料無料になる',
    ],
    cons: ['単品購入だと5,000円台とやや高価格帯', '定期便は基本2ヶ月ごとの配送が前提'],
    ingredients: ['ノンシリコン', 'アミノ酸系洗浄成分', '弱酸性処方', '植物由来成分21種配合'],
    guarantee: '定期購入の解約条件・配送間隔の詳細は公式サイトでご確認ください',
    affiliateUrl: 'https://px.a8.net/svt/ejp?a8mat=4B9W9B+C7ZCTU+4P4W+TSJ41',
    published: true,
  },
  {
    slug: 'root-beaute-scalp-shampoo',
    rank: 5,
    name: 'ROOT BEAUTÉ スカルプマッサージシャンプー',
    brand: '綺和美（KIWABI）',
    type: 'スカルプシャンプー（頭皮ケア）',
    image: '',
    price: '3,680円（税込・300mL）',
    monthlyPrice: '定期購入で最大30%オフ',
    score: 4.1,
    scores: [
      { label: 'コスパ', value: 4.0 },
      { label: '使用感', value: 4.3 },
      { label: '成分の充実度', value: 4.2 },
      { label: '続けやすさ', value: 4.0 },
    ],
    summary:
      'アミノ酸系弱酸性処方でクリーミーな泡立ちが特徴のスカルプシャンプー。23種のボタニカルエキス・精油を配合し、頭皮環境を整えながらハリ・コシのある髪を目指します。',
    highlights: ['23種のボタニカルエキス・精油を配合', '8成分無添加処方', '配送間隔を選べる定期購入'],
    pros: [
      'クリーミーな泡立ちで頭皮マッサージがしやすい',
      '無添加処方で、頭皮への刺激を抑えたい人に選びやすい',
      '定期購入は配送間隔を選択でき、送料も無料',
    ],
    cons: ['単品購入時の割引は定期購入ほど大きくない', '香りやテクスチャの好みが分かれやすい'],
    ingredients: ['アミノ酸系洗浄成分', '弱酸性処方', 'ボタニカルエキス・精油23種配合'],
    guarantee: '定期購入の解約条件・最低購入回数は公式サイトでご確認ください',
    affiliateUrl: 'https://px.a8.net/svt/ejp?a8mat=4B9W9B+C7DX82+1JHI+1ZO5SX',
    published: true,
  },
]

// 公開中の商品だけを対象に、スコア順で表示用の順位(rank)を振り直す。
// products配列上のrankは編集用の通し番号であり、表示にはこちらを使う。
export const publishedProducts = products
  .filter((product) => product.published)
  .sort((a, b) => b.score - a.score)
  .map((product, index) => ({ ...product, rank: index + 1 }))

export const PRODUCTS_PUBLISHED = publishedProducts.length > 0

export const articles: Article[] = [
  {
    slug: 'aga-basics',
    title: 'AGAとは？進行の仕組みと受診の目安をやさしく解説',
    excerpt:
      '抜け毛が増えたと感じたとき、まず知っておきたいAGAの基本。進行のパターン、セルフケアで様子を見ていい範囲、クリニックを検討する目安を整理しました。',
    category: 'aga',
    publishedAt: '2026-07-18',
    updatedAt: '2026-07-28',
    readingTime: 8,
    image: '/images/article-aga.png',
    imageAlt: '医師がダーモスコープで頭皮を診察している様子',
    tags: ['AGA', '基礎知識', '受診の目安'],
    body: [
      {
        type: 'lead',
        text: '「最近、分け目が目立つ気がする」——そんな小さな違和感から調べ始める方がとても多いテーマです。ここでは専門用語をできるだけ使わずに、AGAの考え方と行動の順番を整理します。',
      },
      { type: 'h2', text: 'AGAは「進行のパターン」がある' },
      {
        type: 'p',
        text: 'AGA（男性型脱毛症）は、生え際が後退するタイプ、頭頂部が薄くなるタイプ、その両方が同時に進むタイプに大きく分かれます。共通しているのは、髪が太く長く育つ前に抜けてしまうサイクルの乱れが少しずつ進むという点です。',
      },
      {
        type: 'p',
        text: 'そのため「ある日突然」ではなく、数か月から数年かけて変化します。写真を月に1回、同じ場所・同じ明るさで撮っておくと、自分の変化を客観的に把握しやすくなります。',
      },
      { type: 'h2', text: 'セルフケアで様子を見てよいケース' },
      {
        type: 'list',
        items: [
          '抜け毛が季節的に増えているだけで、髪の太さは変わっていない',
          '睡眠不足や強いストレスなど、思い当たる原因が最近あった',
          '頭皮の赤みやかゆみが主な悩みで、地肌の透けは気にならない',
        ],
      },
      {
        type: 'p',
        text: 'この段階では、シャンプーの見直しや育毛剤でのケア、生活習慣の調整から始める人が多いです。3か月ほど記録を残しながら続けてみて、変化の方向を確認しましょう。',
      },
      { type: 'h2', text: '受診を検討したい目安' },
      {
        type: 'list',
        items: [
          '地肌の透けが半年前の写真と比べて明らかに広がっている',
          '細く短い毛の割合が増えてきた',
          '家族に同じような進行パターンの人がいる',
        ],
      },
      {
        type: 'note',
        title: 'ここに注意',
        text: '本記事は一般的な情報の整理です。診断や治療方針は医師のみが判断できます。気になる症状がある場合は、皮膚科やAGA外来での相談を優先してください。',
      },
      { type: 'h2', text: 'まず始めるなら、続けやすいものから' },
      {
        type: 'p',
        text: 'セルフケアで最も大切なのは「続けられること」です。塗りやすさや価格が負担にならないものを選ぶと、記録を取りながら判断する期間を確保しやすくなります。',
      },
      { type: 'product', slug: 'scalp-serum-pro' },
    ],
  },
  {
    slug: 'ikumozai-choose',
    title: '育毛剤の選び方｜成分・使用感・続けやすさの3点で比べる',
    excerpt:
      '種類が多すぎて選べない育毛剤。医薬部外品と化粧品の違い、注目される成分、そして意外と重要な「塗りやすさ」の観点から、比較の軸を絞り込みます。',
    category: 'ikumo',
    publishedAt: '2026-07-10',
    updatedAt: '2026-07-25',
    readingTime: 7,
    image: '/images/product-serum.png',
    imageAlt: '白とティールの育毛剤ボトルの商品写真',
    tags: ['育毛剤', '選び方', '成分'],
    body: [
      {
        type: 'lead',
        text: '育毛剤は価格帯も成分もばらばらで、比較が難しいカテゴリです。比べる軸を3つに絞れば、自分に合うものはかなり見つけやすくなります。',
      },
      { type: 'h2', text: '1. 分類を確認する' },
      {
        type: 'p',
        text: '「医薬部外品」は有効成分の種類と配合量が定められたもの、「化粧品」は頭皮環境を整えることを目的としたものです。どちらが優れているという話ではなく、目的が違います。まずパッケージの表記を確認しましょう。',
      },
      { type: 'h2', text: '2. 成分の役割で見る' },
      {
        type: 'list',
        items: [
          '血行に着目した成分：センブリエキス、ニンジンエキスなど',
          '頭皮の状態を整える成分：グリチルリチン酸ジカリウムなど',
          '保湿に関わる成分：ヒアルロン酸Na、グリセリンなど',
        ],
      },
      {
        type: 'p',
        text: '成分名の多さより、自分の悩み（乾燥・ベタつき・かゆみ）に対応した役割の成分が入っているかを見るほうが選びやすくなります。',
      },
      { type: 'h3', text: '香りと使用感も無視できない' },
      {
        type: 'p',
        text: '毎日使うものなので、香りが苦手・ベタつくといった理由で中断してしまうのが一番もったいないパターンです。清涼感の強さは製品差が大きいので、口コミの「使用感」欄は必ず確認しましょう。',
      },
      { type: 'h2', text: '3. 続けやすさ＝価格と解約条件' },
      {
        type: 'p',
        text: '育毛ケアは短期決戦ではありません。3〜6か月分の総額と、定期購入の解約条件をセットで確認しておくと、後から困りにくくなります。',
      },
      {
        type: 'note',
        title: 'チェックリスト',
        text: '「初回だけ安い」価格ではなく、2回目以降の価格で総額を計算するのがコツです。回数縛りの有無、返金保証の期間も合わせて控えておきましょう。',
      },
      { type: 'product', slug: 'root-beaute-scalp-shampoo' },
    ],
  },
  {
    slug: 'shampoo-howto',
    title: '頭皮にやさしい洗い方｜今日から直せる5つのポイント',
    excerpt:
      'シャンプーを変える前に見直したいのが洗い方。お湯の温度、予洗い、指の使い方、乾かし方まで、頭皮の負担を減らす具体的な手順をまとめました。',
    category: 'scalp',
    publishedAt: '2026-06-28',
    updatedAt: '2026-07-20',
    readingTime: 6,
    image: '/images/article-shampoo.png',
    imageAlt: '明るいバスルームでシャンプーをしている男性',
    tags: ['シャンプー', '頭皮ケア', '習慣'],
    body: [
      {
        type: 'lead',
        text: '同じシャンプーでも、洗い方で頭皮の状態は変わります。道具も費用も不要で、今夜から実践できる5つのポイントです。',
      },
      { type: 'h2', text: '1. お湯は少しぬるめに' },
      {
        type: 'p',
        text: '38度前後が目安です。熱いお湯は気持ちよく感じますが、必要な皮脂まで落としやすく、乾燥やかゆみにつながることがあります。',
      },
      { type: 'h2', text: '2. 予洗いを1分' },
      {
        type: 'p',
        text: '実は汚れの大半はお湯だけで落ちます。先に1分ほどしっかり流しておくと、シャンプーの量を減らしても泡立ちが良くなります。',
      },
      { type: 'h2', text: '3. 爪を立てず、指の腹で動かす' },
      {
        type: 'p',
        text: '髪ではなく頭皮を動かすイメージで、指の腹を小さく円を描くように使います。ゴシゴシ洗うほど汚れが落ちるわけではありません。',
      },
      { type: 'h2', text: '4. すすぎは洗う時間の2倍' },
      {
        type: 'list',
        items: [
          '生え際と耳の後ろは残りやすいので最後にもう一度',
          '泡が見えなくなってから、さらに30秒流す',
          'コンディショナーは頭皮につけず毛先中心に',
        ],
      },
      { type: 'h2', text: '5. 自然乾燥のまま寝ない' },
      {
        type: 'p',
        text: '濡れた状態が長いと頭皮の環境が乱れやすくなります。タオルで水分を吸わせたあと、ドライヤーは20cm以上離して根元から乾かしましょう。',
      },
      {
        type: 'note',
        title: '洗浄力を見直すなら',
        text: '洗い方を整えてもつっぱる、かゆいという場合は、洗浄成分がご自身に強すぎる可能性があります。アミノ酸系など穏やかなタイプへの切り替えも選択肢です。',
      },
      { type: 'product', slug: 'premium-black-shampoo' },
    ],
  },
  {
    slug: 'hair-nutrition',
    title: '髪のための食事｜意識したい栄養素と現実的な食べ方',
    excerpt:
      'タンパク質・亜鉛・鉄・ビタミンB群。髪の材料になる栄養素を、コンビニや外食でも取り入れやすいメニュー例と一緒に紹介します。',
    category: 'lifestyle',
    publishedAt: '2026-06-15',
    updatedAt: '2026-07-12',
    readingTime: 6,
    image: '/images/article-nutrition.png',
    imageAlt: '卵、鮭、ナッツ、ほうれん草などの食材を並べた俯瞰写真',
    tags: ['食事', '栄養素', 'サプリ'],
    body: [
      {
        type: 'lead',
        text: '髪の主成分はタンパク質です。特別な食材をそろえる必要はなく、毎日の食事で「足りていないものを足す」考え方で十分です。',
      },
      { type: 'h2', text: '土台になるのはタンパク質' },
      {
        type: 'p',
        text: '1食あたり手のひら1枚分の肉・魚・卵・大豆製品を目安にすると、無理なく量を確保できます。朝食が菓子パンやコーヒーだけになりがちな人は、ゆで卵やヨーグルトを1つ足すだけでも変わります。',
      },
      { type: 'h2', text: '不足しやすい微量栄養素' },
      {
        type: 'list',
        items: [
          '亜鉛：牡蠣、牛赤身、チーズ、カシューナッツ',
          '鉄：赤身肉、レバー、あさり、小松菜',
          'ビタミンB群：豚肉、納豆、卵、玄米',
        ],
      },
      { type: 'h3', text: '外食・コンビニでの組み立て例' },
      {
        type: 'list',
        items: [
          'サラダチキン＋おにぎり＋味噌汁',
          '納豆巻き＋ゆで卵＋野菜スープ',
          '鮭の定食（ご飯少なめ）＋ほうれん草のおひたし',
        ],
      },
      {
        type: 'note',
        title: 'サプリは「補う」もの',
        text: '食事で足りない分を補う位置づけです。過剰摂取は体調に影響することもあるため、表示の目安量を守り、服薬中の方は医師に相談してください。',
      },
      { type: 'product', slug: 'hair-support-supplement' },
    ],
  },
  {
    slug: 'sleep-and-stress',
    title: '睡眠とストレスの整え方｜頭皮環境に効く生活の見直し',
    excerpt:
      '生活リズムの乱れは頭皮にも表れます。就寝前90分の過ごし方、休日の寝だめの落とし穴、ストレスとの距離の取り方を具体的に紹介します。',
    category: 'lifestyle',
    publishedAt: '2026-05-30',
    updatedAt: '2026-07-05',
    readingTime: 5,
    image: '/images/article-sleep.png',
    imageAlt: '朝の光が差し込む清潔な寝室で眠っている様子',
    tags: ['睡眠', 'ストレス', '生活習慣'],
    body: [
      {
        type: 'lead',
        text: '「よく眠る」は精神論ではなく、時間の設計です。3つのタイミングを決めるだけで、睡眠の質は整いやすくなります。',
      },
      { type: 'h2', text: '起きる時間を固定する' },
      {
        type: 'p',
        text: '寝る時間より、起きる時間を一定に保つほうがリズムは安定します。休日も平日との差を2時間以内に収めるのが目安です。',
      },
      { type: 'h2', text: '就寝前90分の設計' },
      {
        type: 'list',
        items: [
          '入浴は就寝の90分前までに済ませる',
          '照明を一段落とし、画面の明るさも下げる',
          'カフェインは就寝8時間前まで',
        ],
      },
      { type: 'h2', text: 'ストレスは「量」より「逃げ道」' },
      {
        type: 'p',
        text: 'ストレスをゼロにはできません。10分歩く、ノートに書き出す、人に話すなど、決まった逃げ道を1つ用意しておくと、頭皮を触る・抜くといった習慣も減らしやすくなります。',
      },
      {
        type: 'note',
        title: '記録のすすめ',
        text: '睡眠時間と抜け毛の体感を1行メモで残すと、あとから振り返ったときに自分のパターンが見えてきます。',
      },
    ],
  },
  {
    slug: 'aga-cost',
    title: 'AGA治療の費用の目安｜クリニック選びで確認する5項目',
    excerpt:
      '月額いくらかかるのか、内訳はどうなっているのか。初診料や検査費用を含めた費用の考え方と、契約前に必ず聞くべき質問をまとめました。',
    category: 'aga',
    publishedAt: '2026-05-12',
    updatedAt: '2026-06-30',
    readingTime: 7,
    image: '/images/hero-clinic.png',
    imageAlt: '明るいクリニックで医師とカウンセリングを受けている様子',
    tags: ['AGA', '費用', 'クリニック'],
    body: [
      {
        type: 'lead',
        text: 'AGA治療は自由診療のため、費用はクリニックごとに異なります。比較のときは「月額」だけでなく総額と条件をそろえて見るのがポイントです。',
      },
      { type: 'h2', text: '費用の内訳を分解する' },
      {
        type: 'list',
        items: [
          '初診料・再診料（無料のところもある）',
          '血液検査などの検査費用',
          '薬代（内服・外用の組み合わせで変動）',
          'オンライン診療の場合は配送料',
        ],
      },
      { type: 'h2', text: '契約前に聞いておく5項目' },
      {
        type: 'list',
        items: [
          '提示された金額は月あたりか、一括か',
          '契約期間の縛りと途中解約の扱い',
          '薬を変更した場合の料金の変化',
          '副作用が出たときの対応と相談窓口',
          '通院とオンラインの併用が可能か',
        ],
      },
      {
        type: 'note',
        title: '無料カウンセリングの活用',
        text: '多くのクリニックが無料カウンセリングを用意しています。1か所で決めず、2〜3か所で同じ質問をして比較すると判断しやすくなります。',
      },
      { type: 'h2', text: '並行してできるセルフケア' },
      {
        type: 'p',
        text: '受診を検討している期間も、シャンプーの見直しや生活習慣の調整は無駄になりません。記録を持って相談に行くと、話がスムーズに進みます。',
      },
    ],
  },
]

export const faqs = [
  {
    question: '育毛ケアはどのくらい続ければ判断できますか？',
    answer:
      '髪の生え替わりには時間がかかるため、一般的には3〜6か月を1つの目安として様子を見る方が多いです。同じ場所・同じ明るさで月1回写真を残しておくと、変化を客観的に振り返りやすくなります。',
  },
  {
    question: '育毛剤とAGA治療はどちらを先に始めるべき？',
    answer:
      '地肌の透けが明らかに広がっている場合は、まず医療機関での相談が優先です。抜け毛が気になり始めた段階であれば、セルフケアから始めて記録を取り、変化を見て受診を検討する流れが取りやすいです。',
  },
  {
    question: 'シャンプーを変えるだけでも意味はありますか？',
    answer:
      '頭皮の乾燥やかゆみ、ベタつきが悩みの中心であれば、洗浄成分の見直しは有効な選択肢です。ただしシャンプーは頭皮環境を整えるものなので、進行の抑制を目的とする場合は他のケアと組み合わせて考えます。',
  },
  {
    question: 'サプリメントは薬と一緒に飲めますか？',
    answer:
      '成分によっては薬の吸収に影響することがあります。服薬中の方や治療中の方は、必ず医師または薬剤師に相談してから開始してください。',
  },
]

export function getArticle(slug: string) {
  return articles.find((article) => article.slug === slug)
}

export function getProduct(slug: string) {
  return products.find((product) => product.slug === slug)
}

export function getCategory(slug: string) {
  return categories.find((category) => category.slug === slug)
}

export function getRelatedArticles(slug: string, limit = 3) {
  const current = getArticle(slug)
  if (!current) return articles.slice(0, limit)
  const sameCategory = articles.filter(
    (article) => article.slug !== slug && article.category === current.category,
  )
  const others = articles.filter(
    (article) => article.slug !== slug && article.category !== current.category,
  )
  return [...sameCategory, ...others].slice(0, limit)
}

export function formatDate(value: string) {
  const date = new Date(value)
  return `${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日`
}
