export type Category = {
  slug: string
  name: string
  description: string
}

export type ProductCategory = {
  slug: string
  name: string
  description: string
}

export const productCategories: ProductCategory[] = [
  {
    slug: 'shampoo',
    name: 'スカルプシャンプー',
    description: '毎日の洗浄で頭皮環境を整えるタイプの商品です。',
  },
  {
    slug: 'tonic',
    name: '育毛トニック・育毛剤',
    description: '有効成分を頭皮に直接塗布するタイプの商品です。',
  },
  {
    slug: 'clinic',
    name: 'AGAクリニック',
    description: '医療機関でのAGA治療プランです。',
  },
]

export type Product = {
  slug: string
  rank: number
  category: 'shampoo' | 'tonic' | 'clinic'
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
  | { type: 'hairPatternDiagram' }
  | { type: 'scalpMassageDiagram' }
  | { type: 'shampooStepsDiagram' }
  | { type: 'hairCycleDiagram' }
  | { type: 'agaTreatmentTimelineDiagram' }

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
  {
    slug: 'women',
    name: '女性の薄毛',
    description: '産後・ダイエットから更年期まで、年代別に女性特有の薄毛の原因とケアを解説します。',
  },
  {
    slug: 'young-men',
    name: '20代・30代男性の薄毛',
    description: 'M字・O字などのパターン診断や、体験談・口コミとの付き合い方など、20代・30代男性に向けた薄毛対策を解説します。',
  },
]

// 2026年8月、公式サイト情報をもとに調査した実データに置き換え済み。
// 各商品の published は、A8.net提携が承認されaffiliateUrlが実際の
// トラッキングリンクに差し替わってから true にすること。
export const products: Product[] = [
  {
    slug: 'levcli',
    rank: 1,
    category: 'clinic',
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
    category: 'clinic',
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
    slug: 'premium-black-shampoo',
    rank: 4,
    category: 'shampoo',
    name: 'プレミアムブラックシャンプー',
    brand: '&GINO',
    type: 'スカルプシャンプー（頭皮ケア）',
    image: 'https://www29.a8.net/svt/bgt?aid=260802191739&wid=001&eno=01&mid=s00000021920005004000&mc=1',
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
    category: 'shampoo',
    name: 'ROOT BEAUTÉ スカルプマッサージシャンプー',
    brand: '綺和美（KIWABI）',
    type: 'スカルプシャンプー（頭皮ケア）',
    image: 'https://www22.a8.net/svt/bgt?aid=260802191738&wid=001&eno=01&mid=s00000007191012038000&mc=1',
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
  {
    slug: 'riup-scalp-shampoo',
    rank: 6,
    category: 'shampoo',
    name: 'リアップ スカルプシャンプー（つめかえ用 350mL×2個）',
    brand: '大正製薬',
    type: '薬用シャンプー（医薬部外品）',
    image: 'https://thumbnail.image.rakuten.co.jp/@0_mall/koyama-p/cabinet/iyakubugaihin/4987306058736-2.jpg',
    price: 'つめかえ用 350mL×2個',
    monthlyPrice: '2,480円（税込・送料無料）',
    score: 4.2,
    scores: [
      { label: 'コスパ', value: 4.2 },
      { label: '使用感', value: 4.0 },
      { label: '成分の充実度', value: 4.5 },
      { label: '続けやすさ', value: 4.3 },
    ],
    summary:
      '大正製薬が展開する医薬部外品の薬用シャンプー。フケ・かゆみをケアする有効成分ピロクトンオラミン・グリチルリチン酸ジカリウムを配合し、アミノ酸系の洗浄成分で頭皮への負担を抑えます。',
    highlights: [
      '有効成分（ピロクトンオラミン・グリチルリチン酸ジカリウム）配合の医薬部外品',
      'アミノ酸系洗浄成分を採用',
      'つめかえ用2個セット・送料無料',
    ],
    pros: [
      '医薬部外品として承認された有効成分で、フケ・かゆみのケアを目的に設計されている',
      'アミノ酸、ビタミン、海藻エキス、生姜エキスなど保湿成分も配合',
      '大正製薬という実績のあるメーカーの製品',
    ],
    cons: [
      'このセットは「つめかえ用」のため、ポンプ容器を持っていない場合は本体タイプを別途用意する必要がある',
      '医薬部外品のため、医薬品のような「発毛」を目的とした効果は表示されていない',
    ],
    ingredients: ['ピロクトンオラミン', 'グリチルリチン酸ジカリウム', 'アミノ酸系洗浄成分', '保湿成分（ビタミン・海藻エキス・生姜エキス）'],
    guarantee: '返品・交換条件は販売店（楽天市場）の規定をご確認ください',
    affiliateUrl:
      'https://hb.afl.rakuten.co.jp/ichiba/5641fbff.c3d62c88.5641fc00.af55cbac/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fkoyama-p%2F4987306058736-2%2F&link_type=picttext&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0dGV4dCIsInNpemUiOiIyNDB4MjQwIiwibmFtIjoxLCJuYW1wIjoicmlnaHQiLCJjb20iOjEsImNvbXAiOiJkb3duIiwicHJpY2UiOjEsImJvciI6MSwiY29sIjoxLCJiYnRuIjoxLCJwcm9kIjowLCJhbXAiOmZhbHNlfQ%3D%3D',
    published: true,
  },
  {
    slug: 'nile-scalp-shampoo',
    rank: 7,
    category: 'shampoo',
    name: 'NILE 濃密泡スカルプシャンプー',
    brand: 'NILE（ナイル）',
    type: 'スカルプシャンプー',
    image: 'https://thumbnail.image.rakuten.co.jp/@0_mall/rise-store/cabinet/item/nile_shampoo/imgrc0118372910.jpg',
    price: '本体ボトル300mL／詰め替え用250mL',
    monthlyPrice: '2,140円〜（税込・送料無料）',
    score: 4.2,
    scores: [
      { label: 'コスパ', value: 4.3 },
      { label: '使用感', value: 4.4 },
      { label: '成分の充実度', value: 4.0 },
      { label: '続けやすさ', value: 4.2 },
    ],
    summary:
      'ポンプから濃密な泡が出てくるタイプのアミノ酸系スカルプシャンプー。頭皮ケア成分や植物エキス、保湿成分を配合し、ノンシリコン処方で仕上げます。',
    highlights: ['アミノ酸系洗浄成分（ラウロイルメチルアラニンNaなど）', 'ノンシリコン処方', '本体・詰め替え用の両方を展開'],
    pros: [
      'ポンプを押すだけで濃密な泡が出るため、時短で洗いやすい',
      'アルニカ花エキス・ゴボウ根エキスなどの植物エキスやプラセンタエキスを配合',
      '詰め替え用があり、まとめ買いの割引が用意されていることもある',
    ],
    cons: [
      '本体ボトルと詰め替え用で商品ページが分かれている場合があり、購入時にタイプの選択が必要',
      '医薬部外品ではなく化粧品分類のため、育毛剤のような効能効果の表示はない',
    ],
    ingredients: [
      'アミノ酸系洗浄成分（ラウロイルメチルアラニンNa等）',
      '頭皮ケア成分（ピロリジニルジアミノピリミジンオキサイド）',
      '植物エキス（アルニカ花エキス・ゴボウ根エキス等）',
      'プラセンタエキス・コメ発酵液',
    ],
    guarantee: '返品・交換条件は販売店（楽天市場）の規定をご確認ください',
    affiliateUrl:
      'https://hb.afl.rakuten.co.jp/ichiba/5641fe02.29abb169.5641fe03.6ad5dbe1/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Frise-store%2Fnile_shampoo%2F&link_type=picttext&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0dGV4dCIsInNpemUiOiIyNDB4MjQwIiwibmFtIjoxLCJuYW1wIjoicmlnaHQiLCJjb20iOjEsImNvbXAiOiJkb3duIiwicHJpY2UiOjEsImJvciI6MSwiY29sIjoxLCJiYnRuIjoxLCJwcm9kIjowLCJhbXAiOmZhbHNlfQ%3D%3D',
    published: true,
  },
  {
    slug: 'chapup-shampoo',
    rank: 8,
    category: 'shampoo',
    name: 'チャップアップ（CHAP UP）シャンプー',
    brand: 'CHAP UP（ソーシャルテック）',
    type: 'スカルプシャンプー',
    image: 'https://thumbnail.image.rakuten.co.jp/@0_mall/chap-up/cabinet/thumb/thumb_tsudo/thumb_tsu_u/sha1-pic_1.jpg',
    price: '300mL・1本',
    monthlyPrice: '5,300円〜（税込・送料無料）',
    score: 4.0,
    scores: [
      { label: 'コスパ', value: 3.2 },
      { label: '使用感', value: 4.3 },
      { label: '成分の充実度', value: 4.7 },
      { label: '続けやすさ', value: 3.8 },
    ],
    summary:
      '育毛剤ブランド「チャップアップ」が展開するオーガニックスカルプシャンプー。アミノ酸系・植物系の洗浄成分5種、オーガニック成分10種、植物系成分43種を配合し、7項目のフリー処方にこだわっています。',
    highlights: ['オーガニック成分10種・植物系成分43種を配合', 'サルフェート・シリコン・パラベンなど7項目フリー', 'ノンシリコンでもきしみにくい処方'],
    pros: [
      '洗浄成分だけでなく保湿・補修を意識した処方で、成分の充実度が高い',
      '無添加へのこだわりが強く、敏感肌の人でも選びやすい設計',
      '3本セットなどのまとめ買いプランも用意されている',
    ],
    cons: [
      '1本5,300円〜と他のスカルプシャンプーと比べて価格帯が高め',
      '継続して使う場合、月々のコストが上がりやすい',
    ],
    ingredients: [
      'アミノ酸系・植物系洗浄成分5種',
      'オーガニック成分10種',
      '植物系成分43種',
      '新成分（ジンゲルシックスR）',
    ],
    guarantee: '返品・交換条件は販売店（楽天市場）の規定をご確認ください',
    affiliateUrl:
      'https://hb.afl.rakuten.co.jp/ichiba/5641fef2.bdedabe0.5641fef3.1ff4a230/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fchap-up%2Fchapup-shampoo_1_m%2F&link_type=picttext&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0dGV4dCIsInNpemUiOiIyNDB4MjQwIiwibmFtIjoxLCJuYW1wIjoicmlnaHQiLCJjb20iOjEsImNvbXAiOiJkb3duIiwicHJpY2UiOjEsImJvciI6MSwiY29sIjoxLCJiYnRuIjoxLCJwcm9kIjowLCJhbXAiOmZhbHNlfQ%3D%3D',
    published: true,
  },
  {
    slug: 'scalp-d-medicated-shampoo',
    rank: 9,
    category: 'shampoo',
    name: 'スカルプD 薬用スカルプシャンプー',
    brand: 'アンファー（ANGFA）',
    type: '薬用シャンプー（医薬部外品）',
    image: 'https://thumbnail.image.rakuten.co.jp/@0_mall/angfa/cabinet/11720449/20260609114916.jpg',
    price: '350mL・頭皮タイプ別に選べる5種',
    monthlyPrice: '4,300円〜（税込・送料無料）',
    score: 4.3,
    scores: [
      { label: 'コスパ', value: 3.8 },
      { label: '使用感', value: 4.3 },
      { label: '成分の充実度', value: 4.4 },
      { label: '続けやすさ', value: 4.5 },
    ],
    summary:
      'アンファーが展開する医薬部外品の薬用スカルプシャンプー。独自開発の豆乳発酵液など8種の頭皮ケア成分を配合し、頭皮タイプ（オイリー・ドライ・超脂性肌用など）に合わせて選べます。',
    highlights: ['頭皮タイプ別に選べる5種類のラインナップ', '豆乳発酵液など独自の頭皮ケア成分8種を配合', '全額返金保証つき'],
    pros: [
      '脂性肌・乾燥肌など頭皮タイプに合わせてタイプを選べる',
      '皮脂吸着成分で毛穴づまりの原因になる余分な皮脂にアプローチ',
      '公式ストアで全額返金保証が用意されている',
    ],
    cons: ['1本4,300円〜と価格帯はやや高め', '自分の頭皮タイプに合ったものを選ぶ必要があり、種類が多い分迷いやすい'],
    ingredients: ['豆乳発酵液', '浸透型ハリコシ成分', '皮脂吸着成分', 'ノンシリコン・パラベンフリー処方'],
    guarantee: '公式ストアによる全額返金保証あり（条件は販売ページでご確認ください）',
    affiliateUrl:
      'https://hb.afl.rakuten.co.jp/ichiba/5642017d.4480d963.5642017e.d666035d/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fangfa%2F648226%2F&link_type=picttext&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0dGV4dCIsInNpemUiOiIyNDB4MjQwIiwibmFtIjoxLCJuYW1wIjoicmlnaHQiLCJjb20iOjEsImNvbXAiOiJkb3duIiwicHJpY2UiOjEsImJvciI6MSwiY29sIjoxLCJiYnRuIjoxLCJwcm9kIjowLCJhbXAiOmZhbHNlfQ%3D%3D',
    published: true,
  },
  {
    slug: 'botanist-botanical-shampoo',
    rank: 10,
    category: 'shampoo',
    name: 'BOTANIST ボタニカルシャンプー（ダメージケア）',
    brand: 'BOTANIST（I-ne）',
    type: 'ボタニカルシャンプー（化粧品）',
    image: 'https://thumbnail.image.rakuten.co.jp/@0_mall/kobe-beauty-labo/cabinet/1st_thum/bota-01.jpg',
    price: 'ボトルタイプ',
    monthlyPrice: '1,540円〜（税込・送料無料）',
    score: 4.0,
    scores: [
      { label: 'コスパ', value: 4.4 },
      { label: '使用感', value: 4.2 },
      { label: '成分の充実度', value: 3.8 },
      { label: '続けやすさ', value: 4.3 },
    ],
    summary:
      'I-neが展開する植物由来成分配合のボタニカルヘアケアブランド。弱酸性の洗浄成分でしっかり洗いながら、ダメージケアやうるおいを目的に配合された処方が特徴です。',
    highlights: ['植物由来の洗浄・保湿成分を配合', '弱酸性処方', 'モイスト・スムース・ダメージケアなど複数ラインから選べる'],
    pros: [
      '手に取りやすい価格帯で、ドラッグストア感覚で続けやすい',
      'ノンシリコンでもきしみにくいよう設計されている',
      '香りや処方が複数ラインに分かれており、髪質・好みで選びやすい',
    ],
    cons: ['薄毛・抜け毛ケアに特化した有効成分は配合されておらず、位置づけは一般的なヘアケア用品', '医薬部外品ではなく化粧品のため、頭皮悩みへの効能効果表示はない'],
    ingredients: ['植物由来洗浄成分（ヤシ由来・大豆由来等）', '弱酸性処方', '植物性うるおい成分'],
    guarantee: '返品・交換条件は販売店（楽天市場）の規定をご確認ください',
    affiliateUrl:
      'https://hb.afl.rakuten.co.jp/ichiba/56420268.9fca5671.56420269.5ab63be7/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fkobe-beauty-labo%2Fbota-01%2F&link_type=picttext&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0dGV4dCIsInNpemUiOiIyNDB4MjQwIiwibmFtIjoxLCJuYW1wIjoicmlnaHQiLCJjb20iOjEsImNvbXAiOiJkb3duIiwicHJpY2UiOjEsImJvciI6MSwiY29sIjoxLCJiYnRuIjoxLCJwcm9kIjowLCJhbXAiOmZhbHNlfQ%3D%3D',
    published: true,
  },
  {
    slug: 'scalp-d-beaute-shampoo',
    rank: 11,
    category: 'shampoo',
    name: 'スカルプDボーテ 薬用スカルプシャンプー ボリューム',
    brand: 'アンファー（ANGFA）',
    type: '薬用シャンプー（医薬部外品・女性用）',
    image: 'https://thumbnail.image.rakuten.co.jp/@0_mall/angfa/cabinet/11720449/sdb_tanpin.jpg',
    price: '女性用・30代～50代向け',
    monthlyPrice: '3,680円〜（税込・送料別）',
    score: 4.2,
    scores: [
      { label: 'コスパ', value: 3.9 },
      { label: '使用感', value: 4.2 },
      { label: '成分の充実度', value: 4.4 },
      { label: '続けやすさ', value: 4.4 },
    ],
    summary:
      '「スカルプD」の女性向けライン。有効成分ピロクトンオラミン・グリチルリチン酸ジカリウムに加え、保湿成分ソイセラム（豆乳発酵液）やWヒアルロン酸など天然植物由来のうるおい成分11種を配合した薬用スカルプシャンプーです。',
    highlights: ['有効成分（ピロクトンオラミン・グリチルリチン酸ジカリウム）配合', 'ソイセラム（豆乳発酵液）など保湿成分を多数配合', 'シリコン・鉱物油・パラベンなど5つの無添加'],
    pros: [
      '女性の頭皮環境に着目して設計されており、30代〜50代の悩みに合わせやすい',
      'ハリ・コシ・ボリュームを目的とした処方で、加齢による髪のボリューム悩みに対応',
      '公式ストアで全額返金保証が用意されている',
    ],
    cons: ['送料が別途かかる場合がある', '男性用スカルプDと同様、価格帯はドラッグストアの一般的なシャンプーよりやや高め'],
    ingredients: ['ピロクトンオラミン', 'グリチルリチン酸ジカリウム', 'ソイセラム（豆乳発酵液）', 'Wヒアルロン酸'],
    guarantee: '公式ストアによる全額返金保証あり（条件は販売ページでご確認ください）',
    affiliateUrl:
      'https://hb.afl.rakuten.co.jp/ichiba/5642017d.4480d963.5642017e.d666035d/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fangfa%2Fbeaute-s%2F&link_type=picttext&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0dGV4dCIsInNpemUiOiIyNDB4MjQwIiwibmFtIjoxLCJuYW1wIjoicmlnaHQiLCJjb20iOjEsImNvbXAiOiJkb3duIiwicHJpY2UiOjEsImJvciI6MSwiY29sIjoxLCJiYnRuIjoxLCJwcm9kIjowLCJhbXAiOmZhbHNlfQ%3D%3D',
    published: true,
  },
  {
    slug: 'scalp-d-medicated-tonic',
    rank: 12,
    category: 'tonic',
    name: 'スカルプD 薬用育毛スカルプトニック（JET）',
    brand: 'アンファー（ANGFA）',
    type: '薬用育毛トニック（医薬部外品）',
    image: 'https://thumbnail.image.rakuten.co.jp/@0_mall/angfa/cabinet/11720449/2501jet01.jpg',
    price: 'スプレータイプ・特殊ノズル搭載',
    monthlyPrice: '3,800円〜（税込・送料別）',
    score: 4.1,
    scores: [
      { label: 'コスパ', value: 3.7 },
      { label: '使用感', value: 4.3 },
      { label: '成分の充実度', value: 4.3 },
      { label: '続けやすさ', value: 4.1 },
    ],
    summary:
      'アンファーが展開する薬用育毛トニック。特許取得の特殊ノズルで有効成分を毛穴に届けやすく設計されており、グリチルリチン酸ジカリウムなど3つの有効成分を配合しています。',
    highlights: ['特許取得の特殊ノズルを搭載', '有効成分3種（グリチルリチン酸ジカリウム等）配合', '返金保証あり'],
    pros: [
      'スプレータイプで頭皮の狙った部分に塗布しやすい',
      'ミント&オレンジの爽快な使用感',
      '独自の頭皮柔軟化成分（ポリグルタミン酸塩）を配合',
    ],
    cons: ['送料が別途かかる場合がある', '清涼感が強く、刺激を感じやすい人には不向きな場合がある'],
    ingredients: ['グリチルリチン酸ジカリウム', 'タマサキツヅラフジアルカロイド', '酢酸DL-α-トコフェロール', '高純度化ニンジンエキス'],
    guarantee: '返金保証あり（条件は販売ページでご確認ください）',
    affiliateUrl:
      'https://hb.afl.rakuten.co.jp/ichiba/5642017d.4480d963.5642017e.d666035d/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fangfa%2F005428%2F&link_type=picttext&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0dGV4dCIsInNpemUiOiIyNDB4MjQwIiwibmFtIjoxLCJuYW1wIjoicmlnaHQiLCJjb20iOjEsImNvbXAiOiJkb3duIiwicHJpY2UiOjEsImJvciI6MSwiY29sIjoxLCJiYnRuIjoxLCJwcm9kIjowLCJhbXAiOmZhbHNlfQ%3D%3D',
    published: true,
  },
  {
    slug: 'polypure-ex',
    rank: 13,
    category: 'tonic',
    name: 'ポリピュアEX',
    brand: 'シーエスシー（CSC）',
    type: '育毛剤（医薬部外品・スプレータイプ）',
    image: 'https://thumbnail.image.rakuten.co.jp/@0_mall/cscjp/cabinet/polypure/polypure/p501.jpg',
    price: '120mL・スプレータイプ',
    monthlyPrice: '7,900円（税込・送料無料・初回全額返金保証）',
    score: 4.1,
    scores: [
      { label: 'コスパ', value: 3.5 },
      { label: '使用感', value: 4.3 },
      { label: '成分の充実度', value: 4.4 },
      { label: '続けやすさ', value: 4.0 },
    ],
    summary:
      'シーエスシーが展開する医薬部外品の育毛剤。5種類の有効成分と独自成分バイオポリリン酸を配合し、無香料・無着色でアレルギーテストも実施しています。',
    highlights: ['有効成分5種を配合', '独自成分バイオポリリン酸（酵母エキス）による保湿', '初回全額返金保証つき'],
    pros: [
      '無香料・無着色でアレルギーテスト実施済み',
      '有効成分の種類が多く、複数のアプローチを一本でカバー',
      '初回は全額返金保証があり試しやすい',
    ],
    cons: ['単品で7,900円とやや高価格帯', '2回目以降の価格や定期条件は公式サイトで要確認'],
    ingredients: ['ニンジンエキス', 'センブリエキス', 'パントテニルエチルエーテル', 'グリチルリチン酸ジカリウム', '塩酸ジフェンヒドラミン'],
    guarantee: '初回全額返金保証あり（条件は販売ページでご確認ください）',
    affiliateUrl:
      'https://hb.afl.rakuten.co.jp/ichiba/56420d37.565118d9.56420d38.64dc0754/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fcscjp%2Fp501%2F&link_type=picttext&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0dGV4dCIsInNpemUiOiIyNDB4MjQwIiwibmFtIjoxLCJuYW1wIjoicmlnaHQiLCJjb20iOjEsImNvbXAiOiJkb3duIiwicHJpY2UiOjEsImJvciI6MSwiY29sIjoxLCJiYnRuIjoxLCJwcm9kIjowLCJhbXAiOmZhbHNlfQ%3D%3D',
    published: true,
  },
  {
    slug: 'newmo',
    rank: 14,
    category: 'tonic',
    name: 'ニューモ（NEWMO）',
    brand: 'ファーマフーズ',
    type: '育毛剤（医薬部外品）',
    image: 'https://thumbnail.image.rakuten.co.jp/@0_mall/tamago-kichi/cabinet/13095270/productsnewmo01.jpg',
    price: 'スカルプケアトニック',
    monthlyPrice: '7,380円〜（税込・送料無料）',
    score: 4.2,
    scores: [
      { label: 'コスパ', value: 3.7 },
      { label: '使用感', value: 4.3 },
      { label: '成分の充実度', value: 4.5 },
      { label: '続けやすさ', value: 4.2 },
    ],
    summary:
      '東証プライム上場のファーマフーズが開発した医薬部外品の育毛剤。独自成分HGP（卵黄由来の頭皮保護成分）と28種類の植物エキスを配合し、6種類の添加物を使わない設計です。',
    highlights: ['独自成分HGP（卵黄リゾホスファチジルコリン）配合', '28種類の植物エキスを配合', '6種類の添加物を使わない無添加設計'],
    pros: [
      '東証プライム上場企業が開発・販売しており、実績への信頼性がある',
      '有効成分3種に加え植物エキスも豊富に配合',
      '無添加設計で頭皮への刺激を抑えている',
    ],
    cons: ['卵由来の独自成分を配合しているため、卵アレルギーがある人は使用前に確認が必要', '価格帯はやや高め'],
    ingredients: ['センブリエキス', 'グリチルリチン酸ジカリウム', 'D-パントテニルアルコール', 'HGP（卵黄由来頭皮保護成分）'],
    guarantee: '返品・交換条件は販売店（楽天市場）の規定をご確認ください',
    affiliateUrl:
      'https://hb.afl.rakuten.co.jp/ichiba/56420e02.cb9039cf.56420e03.a3b4f834/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Ftamago-kichi%2Fproductsnewmo01%2F&link_type=picttext&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0dGV4dCIsInNpemUiOiIyNDB4MjQwIiwibmFtIjoxLCJuYW1wIjoicmlnaHQiLCJjb20iOjEsImNvbXAiOiJkb3duIiwicHJpY2UiOjEsImJvciI6MSwiY29sIjoxLCJiYnRuIjoxLCJwcm9kIjowLCJhbXAiOmZhbHNlfQ%3D%3D',
    published: true,
  },
  {
    slug: 'chapup-lotion',
    rank: 15,
    category: 'tonic',
    name: 'チャップアップ 育毛ローション',
    brand: 'CHAP UP（ソーシャルテック）',
    type: '育毛剤（医薬部外品・育毛ローション）',
    image: 'https://thumbnail.image.rakuten.co.jp/@0_mall/chap-up/cabinet/thumb/thumb_tsudo/thumb_tsu_u/lo1-pop.jpg',
    price: '120mL・1本',
    monthlyPrice: '8,690円〜（税込・送料無料）',
    score: 4.0,
    scores: [
      { label: 'コスパ', value: 3.0 },
      { label: '使用感', value: 4.2 },
      { label: '成分の充実度', value: 4.5 },
      { label: '続けやすさ', value: 3.8 },
    ],
    summary:
      'チャップアップシャンプーと同ブランドの薬用育毛ローション。センブリエキス・グリチルリチン酸ジカリウムなどの有効成分に加え、高知県四万十産の赤ショウガから抽出した独自成分ジンゲルシックス®を配合しています。',
    highlights: ['有効成分3種+独自成分ジンゲルシックス®配合', '無添加・低刺激処方（香料・着色料・鉱物油・シリコン・パラベンフリー）', '全額返金保証つき'],
    pros: [
      '同ブランドのシャンプーと合わせて使いやすい',
      '独自成分ジンゲルシックス®はチャップアップだけの配合成分',
      '全額返金保証があり試しやすい',
    ],
    cons: ['1本8,690円〜とスカルプシャンプーと比べても価格帯が高め', '2本・3本セットの方が単価は下がるため購入本数の検討が必要'],
    ingredients: ['センブリエキス', 'グリチルリチン酸ジカリウム', 'ジフェンヒドラミンHCl', 'ジンゲルシックス®（ショウキョウエキス）'],
    guarantee: '全額返金保証あり（条件は販売ページでご確認ください）',
    affiliateUrl:
      'https://hb.afl.rakuten.co.jp/ichiba/5641fef2.bdedabe0.5641fef3.1ff4a230/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fchap-up%2Fchapup-lotion_1%2F&link_type=picttext&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0dGV4dCIsInNpemUiOiIyNDB4MjQwIiwibmFtIjoxLCJuYW1wIjoicmlnaHQiLCJjb20iOjEsImNvbXAiOiJkb3duIiwicHJpY2UiOjEsImJvciI6MSwiY29sIjoxLCJiYnRuIjoxLCJwcm9kIjowLCJhbXAiOmZhbHNlfQ%3D%3D',
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
    updatedAt: '2026-08-02',
    readingTime: 9,
    image: '/images/article-aga.png',
    imageAlt: '医師がダーモスコープで頭皮を診察している様子',
    tags: ['AGA', '基礎知識', '受診の目安'],
    body: [
      {
        type: 'lead',
        text: '「最近、分け目が目立つ気がする」——そんな小さな違和感から調べ始める方がとても多いテーマです。ここでは専門用語をできるだけ使わずに、AGAの考え方と行動の順番を整理します。',
      },
      { type: 'h2', text: 'AGA（男性型脱毛症）とは' },
      {
        type: 'p',
        text: 'AGAとは、男性ホルモンや遺伝的な影響によって髪の発育サイクル（ヘアサイクル）が乱れ、髪が太く育つ前に抜けてしまう現象を指すといわれています。女性に見られる同様のタイプはFAGA（女性男性型脱毛症）と呼ばれ、進行の仕方に違いがあるとされています。',
      },
      { type: 'h2', text: 'AGAは「進行のパターン」がある' },
      {
        type: 'p',
        text: 'AGA（男性型脱毛症）は、生え際が後退するM字型、頭頂部が薄くなるO字型、その両方が同時に進むU字型に大きく分かれるといわれています。共通しているのは、髪が太く長く育つ前に抜けてしまうサイクルの乱れが少しずつ進むという点です。',
      },
      { type: 'hairPatternDiagram' },
      {
        type: 'list',
        items: [
          'M字型：両サイドの生え際が後退し、額の形がM字に近づいていく',
          'O字型：頭頂部（つむじ周辺）から地肌が目立ち始める',
          'U字型：M字型とO字型が進行し、前頭部から頭頂部にかけてつながっていく',
        ],
      },
      {
        type: 'p',
        text: 'いずれのタイプも「ある日突然」ではなく、数か月から数年かけて変化します。写真を月に1回、同じ場所・同じ明るさで撮っておくと、自分の変化を客観的に把握しやすくなります。パターンごとの進行段階の目安や見分け方は、20代・30代男性の薄毛パターンを扱った記事でさらに詳しく解説しています。',
      },
      {
        type: 'note',
        title: '女性の薄毛は進行の仕方が異なる',
        text: '女性の薄毛は、M字・O字のように部分的に進行するタイプよりも、頭部全体が均等に薄くなる「びまん性脱毛」が多いといわれています。女性特有の原因については、女性の薄毛を扱った記事をご覧ください。',
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
      { type: 'product', slug: 'premium-black-shampoo' },
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
    readingTime: 8,
    image: '/images/article-shampoo.png',
    imageAlt: '明るいバスルームでシャンプーをしている男性',
    tags: ['シャンプー', '頭皮ケア', '習慣'],
    body: [
      {
        type: 'lead',
        text: '同じシャンプーでも、洗い方で頭皮の状態は変わります。道具も費用も不要で、今夜から実践できる5つのポイントです。',
      },
      { type: 'shampooStepsDiagram' },
      { type: 'h2', text: '1. お湯は少しぬるめに' },
      {
        type: 'p',
        text: '38度前後が目安です。熱いお湯は気持ちよく感じますが、頭皮を守る役割を持つ必要な皮脂まで落としやすく、乾燥やかゆみにつながることがあります。逆にぬるすぎると洗浄成分や整髪料が十分に落ちきらないこともあるため、「熱すぎず、ぬるすぎず」がポイントです。',
      },
      { type: 'h2', text: '2. 予洗いを1分' },
      {
        type: 'p',
        text: '実は汚れの大半はお湯だけで落ちます。先に1分ほどしっかり流しておくと、シャンプーの量を減らしても泡立ちが良くなります。髪と頭皮がしっかり濡れていないと、シャンプーの摩擦がそのまま頭皮への刺激になりやすい点にも注意が必要です。',
      },
      { type: 'h2', text: '3. 爪を立てず、指の腹で動かす' },
      {
        type: 'p',
        text: '髪ではなく頭皮を動かすイメージで、指の腹を小さく円を描くように使います。ゴシゴシ洗うほど汚れが落ちるわけではありません。順番としては、生え際→側頭部→頭頂部→後頭部のように部位ごとに動かすと洗い残しが減らしやすくなります（頭皮マッサージの記事でも同じ順序を紹介しています）。',
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
      {
        type: 'p',
        text: 'シャンプーのすすぎ残しは、かゆみやフケの原因になることがあるといわれています。「泡が消えたら終わり」ではなく、消えてからもう少し流す意識を持つと安心です。',
      },
      { type: 'h2', text: '5. 自然乾燥のまま寝ない' },
      {
        type: 'p',
        text: '濡れた状態が長いと頭皮の環境が乱れやすくなります。タオルで水分を吸わせたあと、ドライヤーは20cm以上離して根元から乾かしましょう。毛先だけでなく地肌までしっかり乾かすことが、翌朝の頭皮のべたつきを防ぐポイントです。',
      },
      {
        type: 'note',
        title: 'ドライヤーの熱にも注意',
        text: 'ドライヤーを1か所に長く当て続けると、頭皮が乾燥しすぎることがあります。同じ場所に集中させず、頭全体を小刻みに動かしながら乾かすと負担を抑えやすくなります。',
      },
      {
        type: 'note',
        title: '洗浄力を見直すなら',
        text: '洗い方を整えてもつっぱる、かゆいという場合は、洗浄成分がご自身に強すぎる可能性があります。アミノ酸系など穏やかなタイプへの切り替えも選択肢です。洗浄成分の種類ごとの違いは、スカルプシャンプーの選び方の記事でも詳しく解説しています。',
      },
      { type: 'product', slug: 'premium-black-shampoo' },
    ],
  },
  {
    slug: 'hair-nutrition',
    title: '髪のための食事｜忙しい社会人のための現実的な栄養補給',
    excerpt:
      'タンパク質・亜鉛・鉄・ビタミンB群。髪の材料になる栄養素を、朝食を抜きがちな人・外食や飲み会が多い人でも無理なく取り入れられる形で整理しました。',
    category: 'lifestyle',
    publishedAt: '2026-06-15',
    updatedAt: '2026-08-02',
    readingTime: 9,
    image: '/images/article-nutrition.png',
    imageAlt: '卵、鮭、ナッツ、ほうれん草などの食材を並べた俯瞰写真',
    tags: ['食事', '栄養素', '社会人'],
    body: [
      {
        type: 'lead',
        text: '髪の主成分はタンパク質です。理想的な食事を毎日完璧に用意するのは、仕事で忙しい社会人にとって現実的ではありません。ここでは「足りていないものを、無理のない形で足す」という考え方で、平日・外食・飲み会それぞれの場面での工夫を整理します。',
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
      { type: 'h2', text: '忙しい平日の朝：時短でタンパク質を確保する' },
      {
        type: 'p',
        text: '朝は時間との勝負になりがちです。調理せずそのまま食べられるものを常備しておくと、忙しい日でも「何も食べない」より一歩前進できます。',
      },
      {
        type: 'list',
        items: [
          'ゆで卵のまとめ茹で（冷蔵で3〜4日ほど保存し、朝1〜2個食べる）',
          '無糖のギリシャヨーグルト（タンパク質量が通常のヨーグルトより多め）',
          '納豆パック（そのままでも、ご飯や豆腐にかけても）',
          'プロテインドリンク（食事の置き換えではなく、あくまで補助として）',
        ],
      },
      { type: 'h2', text: 'ランチ：外食・コンビニでの組み立て例' },
      {
        type: 'list',
        items: [
          'コンビニ：サラダチキン＋おにぎり＋味噌汁、または鮭おにぎり＋ゆで卵＋野菜スープ',
          '牛丼・定食チェーン：牛皿や豚汁などの単品を1つ追加してタンパク質を底上げする',
          '社員食堂・定食屋：主菜（肉・魚）を残さず、小鉢の副菜も選んで品目数を増やす',
          '麺類だけで済ませる日が続く場合は、卵やチャーシューなどのトッピングを追加する',
        ],
      },
      { type: 'h2', text: '残業・飲み会が続くときの工夫' },
      {
        type: 'p',
        text: '外食や飲み会が続く時期は、栄養バランスを完璧に保つより「大きく崩さない」ことを意識するだけでも変わります。',
      },
      {
        type: 'list',
        items: [
          '飲み会のつまみは、枝豆・冷奴・刺身・焼き鳥（塩）など高タンパクで比較的負担の少ないものを選ぶ',
          '揚げ物・締めのラーメンなど脂質・糖質に偏るメニューが続いた翌日は、野菜とタンパク質を意識して調整する',
          '遅い時間の食事は、消化への負担が少ない豆腐・鶏むね肉・魚などを中心にする',
          '飲酒が続く時期は、亜鉛やビタミンB群の消費が増えるといわれるため、意識して補う',
        ],
      },
      { type: 'h2', text: '週末にできる「仕込み」で平日を楽にする' },
      {
        type: 'list',
        items: [
          '鶏むね肉・鶏もも肉に下味をつけて小分け冷凍しておく',
          '卵をまとめて茹でておく、または常備菜として副菜を2〜3品作り置きする',
          '冷凍野菜（ほうれん草、ブロッコリーなど）を使うと、平日は解凍するだけで副菜が1品増やせる',
        ],
      },
      {
        type: 'note',
        title: 'サプリは「補う」もの',
        text: '食事で足りない分を補う位置づけです。過剰摂取は体調に影響することもあるため、表示の目安量を守り、服薬中の方は医師に相談してください。',
      },
    ],
  },
  {
    slug: 'sleep-and-stress',
    title: '睡眠とストレスの整え方｜頭皮環境に効く生活の見直し',
    excerpt:
      '生活リズムの乱れは頭皮にも表れます。睡眠が頭皮に関わる理由から、就寝前90分の過ごし方、寝室環境、休日の寝だめの落とし穴、ストレスとの距離の取り方まで詳しく紹介します。',
    category: 'lifestyle',
    publishedAt: '2026-05-30',
    updatedAt: '2026-08-02',
    readingTime: 11,
    image: '/images/article-sleep.png',
    imageAlt: '朝の光が差し込む清潔な寝室で眠っている様子',
    tags: ['睡眠', 'ストレス', '生活習慣'],
    body: [
      {
        type: 'lead',
        text: '「よく眠る」は精神論ではなく、時間の設計です。睡眠とストレスがなぜ頭皮の状態に関わるとされるのか、その理由から、今夜から見直せる具体的なタイミング・環境・習慣までまとめて整理しました。',
      },
      { type: 'h2', text: 'なぜ睡眠が頭皮の状態に関わるといわれるのか' },
      {
        type: 'p',
        text: '髪の成長に関わる成長ホルモンは、入眠後の深い眠りの時間帯に多く分泌されるといわれています。睡眠不足や眠りの質の低下が続くと、この分泌のリズムが乱れやすくなり、頭皮や髪の状態にも影響が及ぶ可能性があるとされています。また、睡眠不足は自律神経のバランスを崩しやすく、血流にも影響するといわれており、頭皮環境という観点でも「よく眠ること」は土台になる要素の一つです。',
      },
      { type: 'h2', text: '体内時計を安定させる基本' },
      {
        type: 'p',
        text: '睡眠の質を語るとき、つい「何時間眠るか」に目が向きがちですが、まず整えたいのは体内時計のリズムです。',
      },
      {
        type: 'list',
        items: [
          '起きる時間を毎日そろえる（寝る時間より優先度が高い）',
          '休日も平日との差を2時間以内に収める',
          '起床後、できるだけ早く太陽光を浴びる（曇りの日でも屋外の光は効果があるとされる）',
        ],
      },
      {
        type: 'p',
        text: '朝に光を浴びることで体内時計がリセットされ、その約14〜16時間後に自然な眠気が訪れやすくなるといわれています。起きる時間を固定することは、夜の眠りやすさにもつながる土台づくりです。',
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
      {
        type: 'p',
        text: '入浴で一時的に上がった深部体温が下がっていく過程で眠気が訪れやすくなるといわれており、就寝の90分前が一つの目安とされています。スマートフォンやPCの画面から出る光は覚醒を促しやすいとされるため、就寝前は照明・画面ともに明るさを落とす習慣をつけると入眠しやすくなります。',
      },
      { type: 'h2', text: '睡眠の「質」を左右する寝室環境' },
      {
        type: 'p',
        text: '同じ時間眠っても、環境によって睡眠の質は変わるといわれています。以下のポイントは、道具を買い替えなくても今日から見直せる部分です。',
      },
      {
        type: 'list',
        items: [
          '室温：夏は26℃前後、冬は18℃前後が目安とされる（体感には個人差がある）',
          '寝具：枕の高さが合っていないと、寝返りが増えて眠りが浅くなることがある',
          '光：豆電球程度のわずかな光でも眠りの質に影響するといわれ、遮光カーテンやアイマスクも選択肢になる',
          '音：耳栓やホワイトノイズを活用し、周囲の音を気にせず眠れる環境を作る',
        ],
      },
      { type: 'h2', text: '休日の「寝だめ」の落とし穴' },
      {
        type: 'p',
        text: '平日の睡眠不足を補おうと休日に長く眠る「寝だめ」は、多くの人が経験する習慣です。ただし、平日と休日で起きる時間が大きくずれると、体内時計にずれが生じ、時差ボケに似た状態（ソーシャルジェットラグと呼ばれることがあります）になりやすいといわれています。その結果、休み明けに強いだるさを感じたり、夜になっても寝つきが悪くなったりすることがあります。',
      },
      {
        type: 'note',
        title: '寝だめをするなら',
        text: 'どうしても寝だめをしたい場合は、起きる時間を平日より2時間以上遅らせないことが目安とされています。足りない分は、休日の午後に20〜30分程度の短い仮眠で補うほうが、リズムを崩しにくいといわれています。',
      },
      { type: 'h2', text: 'ストレスは「量」より「逃げ道」' },
      {
        type: 'p',
        text: 'ストレスをゼロにはできません。10分歩く、ノートに書き出す、人に話すなど、決まった逃げ道を1つ用意しておくと、頭皮を触る・抜くといった習慣も減らしやすくなります。ここでは代表的な3つの方向性を紹介します。',
      },
      { type: 'h3', text: '体を動かす' },
      {
        type: 'p',
        text: 'ウォーキングや軽いストレッチなど、強度の高くない運動でも気分転換につながるとされています。デスクワーク中心の人は、1時間に1回立ち上がるだけでも変化を感じやすくなります。',
      },
      { type: 'h3', text: '書き出す' },
      {
        type: 'p',
        text: '頭の中の考えごとをそのまま紙やメモアプリに書き出す方法です。「何にモヤモヤしているか」を言語化するだけで、頭の中が整理され、就寝前の考えごとが減りやすくなるといわれています。',
      },
      { type: 'h3', text: '話す' },
      {
        type: 'p',
        text: '家族や友人に話す、あるいは専門家に相談するなど、人に話すこと自体がストレスの逃げ道になるとされています。身近に話しにくい内容であれば、カウンセリングなど第三者に相談できる窓口を選択肢に入れることもできます。',
      },
      { type: 'h2', text: '忙しい人でも取り入れやすい工夫' },
      {
        type: 'list',
        items: [
          '通勤中に外を歩く区間を作り、朝の光を浴びる時間に充てる',
          '寝る前のスマートフォンは「充電は寝室の外で」など置き場所のルールを決める',
          '休日の予定を詰め込みすぎず、寝だめより軽い運動や外出で気分を切り替える',
          '完璧を求めず、できた日を1つでも増やす意識で続ける',
        ],
      },
      {
        type: 'note',
        title: '記録のすすめ',
        text: '睡眠時間と抜け毛の体感を1行メモで残すと、あとから振り返ったときに自分のパターンが見えてきます。',
      },
      { type: 'h2', text: '改善しない場合は専門機関へ' },
      {
        type: 'p',
        text: '生活習慣を見直しても寝つけない状態が長期間続く場合や、日中の強い眠気が生活に支障をきたしている場合は、自己判断で抱え込まず、睡眠外来や心療内科などの専門機関に相談することも選択肢の一つです。',
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
    updatedAt: '2026-08-02',
    readingTime: 9,
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
      { type: 'h2', text: '治療内容別の費用イメージ' },
      {
        type: 'p',
        text: '同じ「AGA治療」でも、内容によって費用感は大きく変わります。ここでは代表的な治療内容ごとに、一般的にいわれている費用の傾向を整理します（実際の金額は必ず各クリニックの公式情報でご確認ください）。',
      },
      { type: 'h3', text: '予防中心の治療（内服薬のみ）' },
      {
        type: 'p',
        text: 'フィナステリドやデュタステリドなど、進行を抑えるタイプの内服薬のみを使うプランは、比較的費用を抑えやすい傾向があります。相場としては月2,000円台〜1万円程度の幅で提供されることが多いといわれています。各薬剤の作用の違いは、AGA治療薬の種類と効果を扱った記事で詳しく解説しています。',
      },
      { type: 'h3', text: '発毛を目指す治療（内服＋外用・メソセラピーなど）' },
      {
        type: 'p',
        text: '内服薬に加えて外用薬やメソセラピー（頭皮への注入治療）を組み合わせる場合、費用は月1万円台〜数万円まで幅が広くなります。メソセラピーなどの処置は1回単体でも1万円台〜数万円かかることがあり、複数回のコースになると総額はさらに上がる点に注意が必要です。',
      },
      { type: 'h3', text: 'オンライン診療と通院型の費用差' },
      {
        type: 'p',
        text: '通院不要のオンライン診療は、店舗運営コストが少ない分、内服薬中心のプランでは比較的安価な傾向があるといわれています。一方、メソセラピーなど処置を伴う治療は対面での通院が前提になることが多く、その分費用も上がりやすくなります。',
      },
      {
        type: 'note',
        title: '費用感はあくまで目安',
        text: 'ここで紹介した費用感は一般的な傾向であり、実際の金額はクリニックやプラン内容によって大きく異なります。契約前には必ず総額と内訳を確認してください。',
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
      { type: 'product', slug: 'newmo' },
    ],
  },
  {
    slug: 'scalp-massage-howto',
    title: '頭皮マッサージのやり方｜正しい手順とやりすぎの注意点',
    excerpt:
      'シャンプーのついでにできる頭皮マッサージ。血行を意識した基本の手順から、力の入れすぎで頭皮を傷つけないための注意点まで整理しました。',
    category: 'scalp',
    publishedAt: '2026-08-02',
    updatedAt: '2026-08-02',
    readingTime: 8,
    image: '/images/article-scalp-massage-spa.jpg',
    imageAlt: 'スパで頭部にマッサージを受けている女性',
    tags: ['頭皮マッサージ', 'セルフケア', 'スカルプケア'],
    body: [
      {
        type: 'lead',
        text: '頭皮マッサージは道具も費用もかけずに始められるセルフケアの一つです。ただし「強くもめばもむほど良い」わけではなく、やり方を間違えると逆に頭皮への負担になることもあります。',
      },
      { type: 'h2', text: 'マッサージが注目される理由' },
      {
        type: 'p',
        text: '頭皮は顔や首と比べて血行が滞りやすい部位といわれ、マッサージによって血行を促すことが期待できるとされています。ただし、マッサージ単体で薄毛が改善するという医学的な保証はなく、あくまで頭皮環境を整えるためのケアの一つとして位置づけるのが実情に近い理解です。',
      },
      { type: 'h2', text: '基本の姿勢と共通のコツ' },
      {
        type: 'list',
        items: [
          '爪を立てず、指の腹を使う',
          '頭皮を「こする」のではなく、頭皮ごと軽く動かすようなイメージで力をかける',
          '1か所につき2〜3秒、頭全体で3〜5分程度を目安にする',
          'シャンプー時や入浴後、頭皮が温まっているタイミングで行う',
        ],
      },
      { type: 'h2', text: '4つのゾーンに分けた動かし方' },
      {
        type: 'p',
        text: '頭皮全体を一度に動かそうとすると力加減が雑になりやすいため、部位ごとに分けて順番に行うとやりやすくなります。よく紹介される順序は、生え際（前頭部）→こめかみ周辺（側頭部）→つむじ周辺（頭頂部）→首の付け根（後頭部）の4ステップです。',
      },
      { type: 'scalpMassageDiagram' },
      { type: 'h3', text: '① 前頭部（生え際）' },
      {
        type: 'p',
        text: '生え際に指の腹を当て、頭皮を上に持ち上げるようなイメージで頭頂部に向かって動かします。デスクワークなどで眉間にシワが寄りやすい人は、この部分がこわばりやすいといわれています。',
      },
      { type: 'h3', text: '② 側頭部（こめかみ周辺）' },
      {
        type: 'p',
        text: 'こめかみに指を当て、耳の上を通るように頭頂部へ向かって動かします。側頭筋はかみしめ癖の影響を受けやすい部位ともいわれ、意識的にほぐしたい人が多いポイントです。',
      },
      { type: 'h3', text: '③ 頭頂部（つむじ周辺）' },
      {
        type: 'p',
        text: 'つむじ周辺は他の部位よりも頭皮が薄く、皮膚が骨に近いため、強く押しすぎないよう注意しながら指の腹で小さな円を描くように動かします。',
      },
      { type: 'h3', text: '④ 後頭部（首の付け根まで）' },
      {
        type: 'p',
        text: '頭頂部から後頭部を通り、首の付け根に向かって流すように動かします。首や肩のこりを感じやすい人は、この部分を最後に丁寧に行うと一連の流れがつながりやすくなります。',
      },
      { type: 'h2', text: 'おすすめの頻度・タイミング' },
      {
        type: 'list',
        items: [
          '毎日行う場合は、1回3〜5分程度を目安にする',
          '入浴中やシャンプーの後など、頭皮がふやけて温まっているタイミングが動かしやすい',
          '毎日でなくても、2〜3日に1回でも継続すること自体に意味があるとされる',
        ],
      },
      { type: 'h2', text: 'やりすぎ・力の入れすぎには注意' },
      {
        type: 'p',
        text: '強くこすったり爪を立てたりすると、頭皮に細かい傷がつき、かゆみやフケの原因になることがあります。「痛気持ちいい」と感じる程度の力加減にとどめ、毎日必ず長時間行う必要はありません。',
      },
      {
        type: 'note',
        title: 'こんなときは控える',
        text: '頭皮に炎症や傷、強いかゆみがある場合はマッサージを控え、皮膚科などで相談してください。',
      },
      { type: 'h2', text: 'シャンプー時に取り入れる方法' },
      {
        type: 'p',
        text: '洗浄と同時に行うと習慣化しやすく、毎日の負担になりません。泡立てたあとに指の腹でマッサージしながら洗うだけでも、爪を立てて洗うより頭皮への刺激を抑えられます。',
      },
      { type: 'product', slug: 'root-beaute-scalp-shampoo' },
    ],
  },
  {
    slug: 'aga-genetics',
    title: '薄毛は遺伝する？家族からの影響と考え方の整理',
    excerpt:
      '「父方より母方の影響が強い」など、薄毛と遺伝にまつわる話は色々耳にします。現時点でよく言われている考え方と、過度に心配しすぎないための視点を整理しました。',
    category: 'aga',
    publishedAt: '2026-08-02',
    updatedAt: '2026-08-02',
    readingTime: 6,
    image: '/images/hero-clinic.png',
    imageAlt: '医師とAGAについて相談する男性',
    tags: ['AGA', '遺伝', '基礎知識'],
    body: [
      {
        type: 'lead',
        text: '「親が薄毛だから自分もいずれ」という不安から検索する人は多いテーマです。遺伝が関与すると言われる理由と、遺伝だけで決まるわけではない点を整理します。',
      },
      { type: 'h2', text: '遺伝が関与すると言われる理由' },
      {
        type: 'p',
        text: 'AGAの進行には、男性ホルモンの働きに対する毛根の感受性が関係すると考えられており、その感受性の強さには遺伝的な要因が関わるとされています。「母方の祖父に似る」という説がよく語られますが、近年の研究では父方・母方どちらの家系からも影響を受けうるとする見方も紹介されており、一つの遺伝子だけで単純に決まるものではないとされています。',
      },
      { type: 'h2', text: '「親が薄毛だから自分も」とは限らない' },
      {
        type: 'list',
        items: [
          '進行の有無・スピードには生活習慣やストレスなど複数の要因が関わるとされる',
          '遺伝的な傾向があっても、実際に進行するかどうかは個人差が大きい',
          '家族に薄毛の人がいない場合でも、AGA以外の原因で薄毛になることもある',
        ],
      },
      { type: 'h2', text: '遺伝子検査という選択肢' },
      {
        type: 'p',
        text: '一部のAGA専門クリニックでは、AGAに関する遺伝的な感受性を調べる検査を提供しています。ただし検査結果はあくまで傾向を示すものであり、それだけで将来の進行を断定するものではない、という位置づけで捉えるのが実情に近い理解です。気になる場合は、検査の意味や限界について医療機関で説明を受けてから判断することをおすすめします。',
      },
      {
        type: 'note',
        title: '心配しすぎる前にできること',
        text: '遺伝の有無を気にするより、まずは自分の頭皮・髪の変化を記録し、気になる変化があれば早めに専門家に相談する方が実践的です。',
      },
      { type: 'h2', text: 'まとめ' },
      {
        type: 'p',
        text: '遺伝はAGAに関わる要因の一つとされていますが、それだけで進行が決まるわけではありません。家族に薄毛の人がいてもいなくても、セルフチェックと早めの相談という基本の対応は変わりません。',
      },
    ],
  },
  {
    slug: 'non-silicone-shampoo',
    title: 'ノンシリコンシャンプーは本当にいいの？メリットと選び方',
    excerpt:
      '「ノンシリコン」という言葉だけが独り歩きしがちですが、メリットだけでなく指摘されるデメリットもあります。選ぶときに見ておきたいポイントを整理しました。',
    category: 'ikumo',
    publishedAt: '2026-08-02',
    updatedAt: '2026-08-02',
    readingTime: 6,
    image: '/images/product-serum.png',
    imageAlt: '化粧品ボトルのイメージ写真',
    tags: ['ノンシリコン', 'シャンプー', '選び方'],
    body: [
      {
        type: 'lead',
        text: '「ノンシリコン＝頭皮に良い」というイメージが先行しがちですが、実際にはメリットとデメリットの両方があります。自分の頭皮・髪質に合うかどうかで判断することが大切です。',
      },
      { type: 'h2', text: 'ノンシリコンシャンプーとは' },
      {
        type: 'p',
        text: 'シリコンは髪の表面をコーティングし、指通りを滑らかにする目的で配合される成分です。ノンシリコンシャンプーはこのシリコンを配合せず、洗浄成分やその他の成分で仕上がりを整えるタイプの製品を指します。',
      },
      { type: 'h2', text: 'メリットとされる点' },
      {
        type: 'list',
        items: [
          '頭皮に洗浄成分以外の被膜が残りにくいとされる',
          'アミノ酸系など洗浄力が穏やかな処方と組み合わされることが多い',
          '髪や頭皮への負担を抑えたい人が選択肢にしやすい',
        ],
      },
      { type: 'h2', text: '一方で指摘されるデメリット' },
      {
        type: 'list',
        items: [
          '髪がきしみやすく、ブラッシング時に引っかかりを感じることがある',
          '髪質によってはパサつきやすいと感じる場合がある',
          '「ノンシリコンだから頭皮に良い」と洗浄力の強さまで保証するものではない',
        ],
      },
      { type: 'h2', text: '選ぶときのポイント' },
      {
        type: 'list',
        items: [
          '洗浄成分の種類（アミノ酸系かどうかなど）を確認する',
          '無添加処方（着色料・合成香料・石油系界面活性剤の有無など）を確認する',
          'きしみが気になる場合は、コンディショナー不要をうたう処方も選択肢になる',
        ],
      },
      {
        type: 'note',
        title: '「ノンシリコン」だけで選ばない',
        text: 'ノンシリコンかどうかは選び方の一つの軸にすぎません。自分の頭皮の悩み（乾燥・ベタつき・かゆみなど）に合った洗浄成分かどうかを合わせて確認することをおすすめします。',
      },
      { type: 'product', slug: 'premium-black-shampoo' },
    ],
  },
  {
    slug: 'women-hair-loss-basics',
    title: '20代・30代女性に増えている薄毛、男性のAGAとの違いは？',
    excerpt:
      '「分け目が広がった」「全体的にボリュームが減った」など、女性の薄毛は男性のAGAとは進み方が異なるといわれています。20代・30代に多い原因の傾向を整理しました。',
    category: 'women',
    publishedAt: '2026-08-02',
    updatedAt: '2026-08-02',
    readingTime: 7,
    image: '/images/article-aga.png',
    imageAlt: '医師が女性患者の頭皮をダーモスコープで診察している様子',
    tags: ['女性の薄毛', 'FAGA', '基礎知識'],
    body: [
      {
        type: 'lead',
        text: '薄毛というと男性のイメージが強いかもしれませんが、20代・30代の女性でも「髪のボリュームが減った」「分け目が目立つ」と感じて検索する人は少なくありません。まずは男性の薄毛（AGA）との違いを整理します。',
      },
      { type: 'h2', text: 'AGA（男性型脱毛症）とFAGA（女性男性型脱毛症）' },
      {
        type: 'p',
        text: 'AGA・FAGAはいずれも、男性ホルモンや遺伝的な影響によって髪の発育サイクル（ヘアサイクル）が乱れ、髪が太く育つ前に抜けてしまう現象を指すといわれています。男性に多く見られるタイプをAGA、女性に見られるタイプをFAGA（女性男性型脱毛症）と呼び分けることがあります。',
      },
      { type: 'h2', text: '男性のAGAとの主な違い' },
      {
        type: 'list',
        items: [
          '生え際が後退するタイプは少なく、頭部全体が均等に薄くなる「びまん性脱毛」が多いといわれる',
          '完全に髪がなくなるところまで進行することは比較的まれとされる',
          '原因が一つに絞りにくく、複数の要因が重なって起こることが多い',
        ],
      },
      { type: 'h2', text: '20代・30代の女性に多いとされる原因' },
      {
        type: 'list',
        items: [
          '出産後のホルモンバランスの変化（産後脱毛）',
          '過度なダイエットによる栄養不足',
          'ストレスや睡眠不足による自律神経の乱れ',
          '無理な結び方・引っ張るヘアスタイルの継続（牽引性脱毛症）',
          '甲状腺の機能や鉄不足など、体調面の要因が関わることもある',
        ],
      },
      {
        type: 'note',
        title: '自己判断しすぎないために',
        text: '原因が複数考えられるため、市販の育毛剤やサプリだけで様子を見続けるより、範囲が広がる・長期間続く場合は婦人科や皮膚科、女性のAGA（FAGA）にも対応するクリニックへの相談が選択肢になります。',
      },
      { type: 'h2', text: 'セルフチェックのポイント' },
      {
        type: 'list',
        items: [
          '分け目やつむじ周辺の地肌が以前より目立たないか',
          '髪全体のボリュームやハリ・コシが減っていないか',
          '抜け毛の本数が季節的な範囲を超えて増えていないか',
        ],
      },
      {
        type: 'p',
        text: '次の記事では、20代・30代女性で特に相談が多い「産後の抜け毛」と「ダイエットと抜け毛の関係」について、それぞれ詳しく解説します。',
      },
      { type: 'product', slug: 'scalp-d-beaute-shampoo' },
    ],
  },
  {
    slug: 'postpartum-hair-loss',
    title: '産後の抜け毛はいつまで続く？時期の目安とセルフケア',
    excerpt:
      '出産後に抜け毛が急に増えて驚く人は多くいます。ホルモンバランスとの関係、落ち着くまでの時期の目安、この時期にできるセルフケアを整理しました。',
    category: 'women',
    publishedAt: '2026-08-02',
    updatedAt: '2026-08-02',
    readingTime: 6,
    image: '/images/article-postpartum-mother.jpg',
    imageAlt: '生まれたばかりの赤ちゃんを抱く母親',
    tags: ['産後脱毛', '女性の薄毛', 'ホルモンバランス'],
    body: [
      {
        type: 'lead',
        text: '「出産してから抜け毛がひどい」という悩みは、多くの女性が経験するといわれています。多くの場合は一時的なものですが、時期の目安を知っておくと不安を減らしやすくなります。',
      },
      { type: 'h2', text: 'なぜ産後に抜け毛が増えるのか' },
      {
        type: 'p',
        text: '妊娠中はホルモンの働きにより髪が抜けにくい状態が続くとされ、出産後にホルモンバランスが元に戻る過程で、その間に抜けるはずだった髪がまとめて抜けるように感じられることが、産後脱毛の主な理由として説明されています。',
      },
      { type: 'h2', text: '落ち着くまでの時期の目安' },
      {
        type: 'p',
        text: '一般的には出産後2〜3か月ごろから抜け毛が増え始め、半年から1年程度で徐々に落ち着いていくといわれています。ただし個人差が大きく、育児による睡眠不足やストレス、栄養状態によって長引くと感じる場合もあります。',
      },
      { type: 'h2', text: 'この時期にできるセルフケア' },
      {
        type: 'list',
        items: [
          '育児で不足しがちな鉄・タンパク質・亜鉛を意識して摂る',
          '爪を立てずに優しく洗う・乾かすなど頭皮への刺激を減らす',
          '一人で抱え込まず、可能な範囲で休息の時間を確保する',
        ],
      },
      {
        type: 'note',
        title: '目安を超えて続く場合',
        text: '1年以上経っても抜け毛が減らない、または地肌が目立つほど進行している場合は、産後脱毛以外の原因（甲状腺の機能低下や鉄欠乏など）が関わっている可能性もあるため、婦人科や皮膚科への相談をおすすめします。',
      },
      { type: 'product', slug: 'root-beaute-scalp-shampoo' },
    ],
  },
  {
    slug: 'diet-and-hair-loss',
    title: '無理なダイエットが抜け毛に与える影響と栄養の摂り方',
    excerpt:
      '急激な食事制限のあとに抜け毛が増えた経験はありませんか。ダイエットと抜け毛の関係、髪のために意識したい栄養バランスを整理しました。',
    category: 'women',
    publishedAt: '2026-08-02',
    updatedAt: '2026-08-02',
    readingTime: 6,
    image: '/images/article-nutrition.png',
    imageAlt: '野菜や果物など彩りのよい食事の写真',
    tags: ['ダイエット', '栄養', '女性の薄毛'],
    body: [
      {
        type: 'lead',
        text: '「ダイエットを始めてから髪がパサつく」「抜け毛が増えた」という声は珍しくありません。急激な食事制限が髪に影響するとされる理由と、両立のための考え方を整理します。',
      },
      { type: 'h2', text: 'なぜダイエットで抜け毛が増えるとされるのか' },
      {
        type: 'p',
        text: '髪はタンパク質を主成分とし、成長には亜鉛や鉄などの栄養素も関わるとされています。極端な食事制限で摂取カロリーや栄養素が大きく不足すると、体は生命維持に直結しない髪の成長を後回しにする傾向があるといわれ、結果として抜け毛が増えやすくなるとされています。',
      },
      { type: 'h2', text: '髪への影響が出やすいとされるダイエット' },
      {
        type: 'list',
        items: [
          '特定の栄養素（炭水化物やタンパク質など）を極端に抜く方法',
          '短期間で大幅な減量を目指す食事制限',
          '食事量そのものを大きく減らす方法',
        ],
      },
      { type: 'h2', text: '両立のために意識したいこと' },
      {
        type: 'list',
        items: [
          'タンパク質（肉・魚・卵・大豆製品）は毎食手のひら1枚分を目安に確保する',
          '鉄・亜鉛（赤身肉、レバー、貝類、ナッツなど）を意識的に取り入れる',
          '極端な減量ペースを避け、緩やかな減量を心がける',
        ],
      },
      {
        type: 'note',
        title: '栄養素の摂りすぎにも注意',
        text: 'サプリメントで特定の栄養素を補う場合も、表示された目安量を超えないようにしましょう。持病がある方や薬を服用中の方は、事前に医師や薬剤師に相談してください。',
      },
      {
        type: 'p',
        text: '抜け毛が長期間続く、または大量に抜ける場合は、ダイエット以外の原因が関わっている可能性もあるため、無理に自己判断で対処し続けず、医療機関への相談も検討してください。',
      },
    ],
  },
  {
    slug: 'aga-treatment-effect-timeline',
    title: 'AGA治療の効果はいつから実感できる？図解でみる治療サイクルと公表データ',
    excerpt:
      '個人の体験談ではなく、一般的にいわれている毛周期の仕組みや治療の経過、クリニック各社が公式に発表しているデータをもとに、効果を実感するまでの目安を図解で整理しました。',
    category: 'aga',
    publishedAt: '2026-08-02',
    updatedAt: '2026-08-03',
    readingTime: 10,
    image: '/images/article-treatment-calendar.jpg',
    imageAlt: '手帳のカレンダーに書き込む手元',
    tags: ['AGA', '治療効果', '毛周期', '公表データ'],
    body: [
      {
        type: 'lead',
        text: 'ネット上には「効果があった」「なかった」という個人の体験談が数多くありますが、条件が異なる個人の感想をそのまま自分に当てはめるのは難しいものです。ここでは特定の個人の感想ではなく、一般的にいわれている毛周期の仕組み・治療サイクルと、クリニックが公式に発表している数値をもとに整理します。',
      },
      { type: 'h2', text: 'そもそも毛周期（ヘアサイクル）とは' },
      {
        type: 'p',
        text: '髪の毛は一本ごとに「成長期」「退行期」「休止期」というサイクルを繰り返しながら生え変わっているといわれています。成長期には毛根の細胞が活発に分裂して髪が太く長く伸び、退行期に成長が止まり、休止期を経て自然に抜け落ち、また新しい成長期の髪に置き換わる、という流れです。AGA治療の効果を考えるうえでは、この毛周期のどの段階に薬が作用するのかを知っておくと、なぜ効果の実感に時間がかかるのかが理解しやすくなります。',
      },
      { type: 'hairCycleDiagram' },
      {
        type: 'p',
        text: 'AGAでは、男性ホルモンの影響などにより本来数年続くはずの成長期が短縮されるといわれています。その結果、髪が十分に太く長く育つ前に退行期・休止期へ移ってしまい、細く短い髪の割合が増えていく、というのが一般的な説明です。AGA治療薬は、この短縮された成長期を正常に近づけることを目的とした薬とされており、既に休止期に入ってしまった髪の周期が一巡するまでは、外見上の変化が現れにくいと考えられています。',
      },
      { type: 'h2', text: '治療開始からの一般的な流れ' },
      {
        type: 'p',
        text: '毛周期の仕組みをふまえると、治療開始から効果を実感するまでにはある程度の期間が必要になる理由がみえてきます。以下は、あくまで一般的にいわれている目安の流れです。',
      },
      { type: 'agaTreatmentTimelineDiagram' },
      {
        type: 'p',
        text: 'これはあくまで一般的にいわれている目安であり、進行度・治療内容・個人差によって前後します。詳しい経過の見通しは、カウンセリングを受けた医師に確認するのが確実です。',
      },
      { type: 'h2', text: '通院・検査の一般的なサイクル' },
      {
        type: 'list',
        items: [
          '初診：問診・頭皮の状態確認、クリニックによっては血液検査を実施',
          '治療開始後1〜2ヶ月目：服薬状況や副作用の有無を確認する診察が入ることが多い',
          'その後は1〜3ヶ月に1回程度：経過の確認と処方の継続・見直し',
          '定期的な血液検査：肝機能など、薬の影響を確認する目的で年1回程度実施するクリニックが多い',
        ],
      },
      {
        type: 'note',
        title: '通院サイクルはクリニックにより異なる',
        text: 'オンライン診療中心のクリニックと対面診療中心のクリニックとでは、通院・診察の頻度や検査体制が異なります。どのくらいの頻度で診察や検査があるのかは、契約前のカウンセリングで確認しておくと安心です。',
      },
      { type: 'h2', text: '公表されている実感率データの例' },
      {
        type: 'p',
        text: '一部のAGA専門クリニックでは、一定期間治療を継続した患者を対象にしたデータを公式サイトで公表しています。例えばAGAスキンクリニックは公式サイトで「6か月治療を継続した3,307名のうち、発毛実感率99.4%（2023年4月〜2024年9月の調査）」と発表しています。こうした数値は治療を検討する際の参考材料になりますが、算出方法や対象者の条件はクリニックによって異なるため、鵜呑みにせず内容を確認することが大切です。',
      },
      {
        type: 'note',
        title: '「発毛実感」の基準を確認する',
        text: '実感率などの数値は、各クリニックが独自に定めた基準（アンケートや視診など）にもとづくことが多く、統一された医学的な基準があるわけではありません。数値の大小だけでなく、どのような方法で測定されたデータかも確認しておくと判断材料になります。',
      },
      { type: 'h2', text: '治療をやめるとどうなるか' },
      {
        type: 'p',
        text: '内服薬などによるAGA治療は、継続することで効果を維持するタイプの治療とされています。自己判断で中断すると、治療前の状態に徐々に戻っていく可能性があるといわれているため、やめる場合も含めて事前にクリニックへ相談しておくと安心です。',
      },
    ],
  },
  {
    slug: 'reading-aga-reviews',
    title: 'ネットのAGA体験談・口コミとの付き合い方',
    excerpt:
      'SNSやレビューサイトにあふれる「効果があった」「なかった」という声。参考にする際に気をつけたいポイントと、体験談だけで判断しない方がよい理由を整理しました。',
    category: 'aga',
    publishedAt: '2026-08-02',
    updatedAt: '2026-08-02',
    readingTime: 5,
    image: '/images/article-reading-reviews.jpg',
    imageAlt: 'ソファでスマートフォンを操作している女性',
    tags: ['口コミ', '体験談', 'AGA'],
    body: [
      {
        type: 'lead',
        text: '「〇か月で生えた」「効果がなかった」——AGAで検索すると、こうした個人の体験談を数多く目にします。参考にすること自体は自然ですが、いくつか気をつけたいポイントがあります。',
      },
      { type: 'h2', text: '体験談には条件のばらつきが大きい' },
      {
        type: 'list',
        items: [
          '進行度・年齢・体質など、前提条件が投稿者ごとに異なる',
          '実際にどの治療をどれくらいの期間・量で行ったかが不明瞭なことが多い',
          '効果を感じた人ほど積極的に発信する傾向があり、感じなかった人の声は埋もれやすい',
        ],
      },
      { type: 'h2', text: '医療機関の広告における体験談の扱い' },
      {
        type: 'p',
        text: '医療機関の広告に関するガイドラインでは、患者の体験談を治療効果の広告として扱うことは認められていません。個人の体験談は主観や条件のばらつきに大きく左右され、誤解を招くおそれがあるためです。当サイトが特定の体験談を「効果の証拠」のように紹介することも行っていません。',
      },
      { type: 'h2', text: '体験談・口コミとの付き合い方' },
      {
        type: 'list',
        items: [
          '一つの体験談ではなく、複数の声や傾向として捉える',
          '極端に良い・悪い評価は、投稿の背景（広告目的など）がないか注意する',
          '最終的な判断材料は、無料カウンセリングなど自分自身の状態に基づく情報を優先する',
        ],
      },
      {
        type: 'note',
        title: 'まとめ',
        text: '体験談は「こういうケースもある」という参考情報として捉え、自分の状態に合うかどうかは専門家に相談して判断することをおすすめします。',
      },
    ],
  },
  {
    slug: 'diffuse-hair-loss-midlife-women',
    title: '40代・50代女性に増える「びまん性脱毛症」とは',
    excerpt:
      '20〜30代の薄毛とは進み方が異なるといわれる、40代以降の女性の薄毛。更年期のホルモン変化との関係や、セルフチェックのポイントを整理しました。',
    category: 'women',
    publishedAt: '2026-08-02',
    updatedAt: '2026-08-02',
    readingTime: 7,
    image: '/images/article-midlife-woman.jpg',
    imageAlt: '屋外で笑顔を見せる中高年女性',
    tags: ['びまん性脱毛症', '更年期', '女性の薄毛'],
    body: [
      {
        type: 'lead',
        text: '「分け目が広がった」「地肌が透けて見える」——40代・50代になってから髪の変化を感じ始める女性は少なくありません。この年代に多いとされる「びまん性脱毛症」について整理します。',
      },
      { type: 'h2', text: 'びまん性脱毛症とは' },
      {
        type: 'p',
        text: '一部分だけが極端に薄くなるのではなく、頭部全体の髪が均等に少しずつ薄くなっていくタイプの脱毛を指すといわれています。分け目が広がる、髪全体のボリュームが減る、といった変化として気づく人が多いとされています。',
      },
      { type: 'h2', text: '更年期のホルモン変化との関係' },
      {
        type: 'p',
        text: '女性ホルモン（エストロゲン）には髪の成長を助ける働きがあるとされ、更年期にはこのホルモンの分泌量が減少します。この変化が、びまん性脱毛症の一因として指摘されることがあります。ただし更年期の症状の出方には個人差が大きく、薄毛の進み方にも同様に個人差があります。',
      },
      { type: 'h2', text: '更年期以外に考えられる要因' },
      {
        type: 'list',
        items: [
          '加齢にともなう毛周期（髪が生えて抜けるサイクル）の変化',
          '甲状腺の機能の変化',
          '鉄欠乏性貧血',
          '睡眠の質の低下やストレス',
        ],
      },
      { type: 'h2', text: 'セルフチェックのポイント' },
      {
        type: 'list',
        items: [
          '分け目の広がりが半年前と比べて明らかに進んでいないか',
          '髪一本一本の太さやコシが変化していないか',
          '抜け毛の量が季節的な範囲を超えていないか',
        ],
      },
      {
        type: 'note',
        title: '相談先に迷ったら',
        text: '婦人科では更年期症状全体について、皮膚科では頭皮・毛髪の状態について、それぞれ専門的に相談できます。どちらに相談すべきか迷う場合は、まずかかりつけ医に相談するのも一つの方法です。',
      },
      { type: 'product', slug: 'scalp-d-beaute-shampoo' },
    ],
  },
  {
    slug: 'menopause-hair-selfcare',
    title: '更年期世代のためのヘアケア｜今日から見直せる生活習慣',
    excerpt:
      '更年期はホルモンの変化だけでなく、頭皮も乾燥しやすくなるといわれる時期です。食事・睡眠・ヘアケア用品選びの観点から、見直せるポイントを整理しました。',
    category: 'women',
    publishedAt: '2026-08-02',
    updatedAt: '2026-08-02',
    readingTime: 6,
    image: '/images/article-nutrition.png',
    imageAlt: '大豆製品や野菜など彩りのよい食事の写真',
    tags: ['更年期', 'セルフケア', '女性の薄毛'],
    body: [
      {
        type: 'lead',
        text: '更年期の薄毛は原因が一つに絞りにくいテーマですが、日々の生活の中で見直せるポイントもあります。ホルモン変化そのものに対処するのではなく、頭皮環境を整えるという視点で取り入れやすい工夫を紹介します。',
      },
      { type: 'h2', text: '食事で意識したいこと' },
      {
        type: 'list',
        items: [
          'タンパク質（肉・魚・卵・大豆製品）を毎食意識して摂る',
          '鉄・亜鉛（赤身肉、レバー、貝類、ナッツなど）を取り入れる',
          '大豆製品に含まれる大豆イソフラボンを含む食品をバランスよく取り入れる',
        ],
      },
      { type: 'h2', text: '頭皮が乾燥しやすくなることへの対応' },
      {
        type: 'p',
        text: '更年期は肌と同様に、頭皮も乾燥しやすくなるといわれています。洗浄力の強すぎるシャンプーを避け、保湿を意識した処方のものに切り替えることも選択肢の一つです。ドライヤーの熱を頭皮に近づけすぎないことも、乾燥を防ぐうえで意識したいポイントです。',
      },
      { type: 'h2', text: '睡眠とストレスへの向き合い方' },
      {
        type: 'p',
        text: '更年期は寝つきや睡眠の質が変化しやすい時期ともいわれます。就寝前の照明・カフェイン摂取のタイミングを見直すなど、無理のない範囲で睡眠環境を整えることも、間接的に頭皮の健やかさにつながるとされています。',
      },
      {
        type: 'note',
        title: '一人で抱え込まないために',
        text: '更年期の症状は薄毛だけでなく、体調・気分の変化を伴うこともあります。つらさを感じる場合は、婦人科やかかりつけ医に相談することも選択肢の一つです。',
      },
      { type: 'product', slug: 'root-beaute-scalp-shampoo' },
    ],
  },
  {
    slug: 'male-hair-loss-patterns',
    title: '20代・30代男性の薄毛パターン｜M字・O字・U字型の特徴とセルフチェック',
    excerpt:
      '男性の薄毛は進行するパターンによっていくつかのタイプに分けられるといわれています。20代・30代で気づきやすい変化の出方と、セルフチェックのポイントを整理しました。',
    category: 'young-men',
    publishedAt: '2026-08-02',
    updatedAt: '2026-08-02',
    readingTime: 9,
    image: '/images/article-male-mirror-check.jpg',
    imageAlt: '屋外の鏡で自分の姿を確認している男性',
    tags: ['薄毛パターン', 'AGA', 'セルフチェック'],
    body: [
      {
        type: 'lead',
        text: '男性の薄毛（AGA）は、進行する場所によっていくつかのパターンに分けて説明されることが多いテーマです。自分がどのタイプに近いかを知っておくと、セルフケアやクリニック相談の際に状況を伝えやすくなります。',
      },
      { type: 'h2', text: '代表的な3つのパターン' },
      {
        type: 'list',
        items: [
          'M字型：両サイドの生え際が後退し、額の形がM字に近づいていくタイプ',
          'O字型：頭頂部（つむじ周辺）から地肌が目立ち始めるタイプ',
          'U字型：M字型とO字型が進行し、前頭部から頭頂部にかけてつながっていくタイプ',
        ],
      },
      { type: 'hairPatternDiagram' },
      {
        type: 'p',
        text: 'これらは説明のためによく使われる分類であり、実際にはどのタイプにもきれいに当てはまらない、複数のタイプが混在するケースも珍しくないとされています。以下でそれぞれの特徴をもう少し詳しく見ていきます。',
      },
      { type: 'h3', text: 'M字型の特徴' },
      {
        type: 'p',
        text: '前頭部の両端（剃り込み部分）から後退が始まり、正面の生え際中央部分は比較的残りやすいため、額の形がアルファベットの「M」に近づいていくのが特徴です。進行の初期は「生え際が心なしか広くなった気がする」程度の変化で、本人以外は気づきにくいことが多いとされています。',
      },
      {
        type: 'list',
        items: [
          '初期：セット時に生え際の位置が以前より高く感じる',
          '中期：両端の後退がはっきりし、額の形にM字の輪郭が見えてくる',
          '進行期：後退が中央付近まで広がり、前頭部全体の生え際が上がる',
        ],
      },
      { type: 'h3', text: 'O字型の特徴' },
      {
        type: 'p',
        text: '頭頂部（つむじ周辺）を中心に、円形または楕円形に地肌が目立ち始めるタイプです。自分では気づきにくく、美容師や周囲の指摘、あるいは真上から撮った写真で初めて気づくケースが多いといわれています。',
      },
      {
        type: 'list',
        items: [
          '初期：つむじ周辺の分け目がやや広く見える程度',
          '中期：頭頂部の地肌の透けが真上から見て分かるようになる',
          '進行期：薄くなった範囲が広がり、周囲の髪との境目がはっきりする',
        ],
      },
      { type: 'h3', text: 'U字型の特徴' },
      {
        type: 'p',
        text: 'M字型とO字型がそれぞれ進行し、前頭部から頭頂部にかけての範囲がつながることで、側頭部から後頭部にかけての髪だけが馬蹄（ばてい）形に残る状態を指すといわれています。3タイプの中では進行が比較的進んだ段階で見られる特徴とされています。',
      },
      {
        type: 'note',
        title: '混合型・移行についての注意',
        text: '実際にはM字型とO字型が同時に進み、時間の経過とともにU字型に近づいていくケースもあれば、片方のタイプの進行が緩やかなまま長期間変化しないケースもあり、パターンは固定的なものではないとされています。',
      },
      { type: 'h2', text: '20代・30代で気づきやすい変化' },
      {
        type: 'list',
        items: [
          '20代：M字部分の後退にセットの際やスタイリングで気づくケースが多いといわれる',
          '20代後半〜30代：つむじ周辺の地肌の透けを、美容室で指摘されて気づくケースもある',
          'どちらのタイプも、進行のスピードには個人差が大きい',
        ],
      },
      { type: 'h2', text: 'セルフチェックの方法' },
      {
        type: 'list',
        items: [
          '正面・斜め45度・頭頂部の3方向を、同じ照明・同じ距離で月1回撮影する',
          '生え際の位置を、眉から指何本分かで記録しておく',
          'つむじ周辺は、スマートフォンのカメラを上から自撮りするか、家族に撮ってもらう',
        ],
      },
      {
        type: 'note',
        title: 'パターンだけで自己診断しない',
        text: 'ここで紹介した分類はあくまで一般的な目安です。実際の進行度や原因の特定には専門的な診察が必要になるため、気になる変化があれば自己判断で対策を続ける前に、皮膚科やAGA専門クリニックへの相談も検討してください。',
      },
      { type: 'product', slug: 'scalp-d-medicated-shampoo' },
    ],
  },
  {
    slug: 'reading-aga-reviews-men',
    title: 'ネットのAGA体験談・口コミとの付き合い方【男性向け】',
    excerpt:
      'ビフォーアフター画像、SNSでの「発毛報告」、口コミサイトの星評価。男性がAGA関連の情報を集める際によく目にするコンテンツの見方と、注意したいポイントを整理しました。',
    category: 'young-men',
    publishedAt: '2026-08-02',
    updatedAt: '2026-08-02',
    readingTime: 6,
    image: '/images/article-shampoo.png',
    imageAlt: '身支度をする男性の写真',
    tags: ['口コミ', '体験談', 'AGA', 'SNS'],
    body: [
      {
        type: 'lead',
        text: 'AGAについて調べ始めると、SNSの「発毛報告」投稿、比較サイトの口コミ、クリニック広告のビフォーアフター画像など、様々な情報が目に入ります。男性が特に目にしやすいこれらのコンテンツとの付き合い方を整理します。',
      },
      { type: 'h2', text: 'SNSの「発毛報告」投稿の見方' },
      {
        type: 'p',
        text: 'X（旧Twitter）などでは、治療の経過を写真付きで発信するアカウントを見かけることがあります。継続の励みとして参考になる一方、照明・角度・髪型のセット方法によって見え方が大きく変わるため、写真の印象だけで効果の有無を判断するのは難しい点に注意が必要です。また、広告案件として投稿されているケースもあり、その場合は「PR」「広告」の表記があるかを確認する習慣をつけると読み解きやすくなります。',
      },
      { type: 'h2', text: 'ビフォーアフター画像の注意点' },
      {
        type: 'list',
        items: [
          '照明の当て方や髪の濡れ具合で、地肌の透け方は写真ごとに変わる',
          '同じ人物・同じ条件で撮影されたものかどうかは、外部からは判断しづらい',
          '「最も効果が出た一例」が紹介されている可能性があり、平均的な結果とは限らない',
        ],
      },
      { type: 'h2', text: '口コミサイト・比較サイトの星評価' },
      {
        type: 'p',
        text: '星の数だけで判断せず、レビューの本文まで確認することをおすすめします。件数が極端に少ない、極端に高評価だけが並ぶといった場合は、サイトの成り立ちや評価の集め方も含めて参考程度に見ておくとよいでしょう。',
      },
      {
        type: 'note',
        title: '当サイトのスタンスについて',
        text: '医療機関の広告に関するガイドラインでは、患者の体験談を治療効果の広告として扱うことは認められていません。当サイトでも特定の体験談を「効果の証拠」として紹介することはせず、公表データや制度面の解説を中心に情報を整理する方針にしています。',
      },
      { type: 'h2', text: 'まとめ' },
      {
        type: 'p',
        text: 'SNSや口コミは「こういう例もある」という参考情報として捉え、最終的な判断は自分の状態に基づいて専門家に相談することが、遠回りに見えて確実な進め方です。',
      },
    ],
  },
  {
    slug: 'aga-medication-types',
    title: 'AGA治療薬の種類と効果｜フィナステリド・デュタステリド・ミノキシジルの違い',
    excerpt:
      'AGA治療でよく使われる代表的な治療薬について、作用の仕組み・期待される効果・副作用の目安を整理しました。処方は必ず医師の診察のもとで受けてください。',
    category: 'aga',
    publishedAt: '2026-08-02',
    updatedAt: '2026-08-02',
    readingTime: 9,
    image: '/images/hero-clinic.png',
    imageAlt: '医師と治療薬について相談している様子',
    tags: ['AGA', '治療薬', 'フィナステリド', 'ミノキシジル'],
    body: [
      {
        type: 'lead',
        text: 'AGA治療でよく使われる薬は、大きく分けて「進行を抑える内服薬」と「発毛を促す外用薬（一部内服）」の2系統があります。それぞれ作用の仕組みが異なるため、違いを知っておくとクリニックでの説明も理解しやすくなります。',
      },
      {
        type: 'note',
        title: 'はじめに',
        text: 'ここで紹介する内容は一般的な医薬品情報の整理であり、個別の処方や用法用量を推奨するものではありません。実際の処方・服用は必ず医師の診察・指導のもとで行ってください。',
      },
      { type: 'h2', text: '内服薬①：フィナステリド（進行を抑えるタイプ）' },
      {
        type: 'p',
        text: '男性ホルモンの一種であるテストステロンは、体内の5α還元酵素という酵素によってジヒドロテストステロン（DHT）に変換されます。このDHTが毛包に作用することがAGA進行の一因とされており、フィナステリドは5α還元酵素の働きを阻害することでDHTの生成を抑える薬です。日本皮膚科学会の診療ガイドラインでも推奨度の高い治療選択肢の一つとされています。',
      },
      {
        type: 'list',
        items: [
          '主な役割：抜け毛の進行を抑える（予防寄りの位置づけ）',
          '対象：成人男性のみ。女性・未成年は使用できない',
          '副作用の目安：性欲減退（報告例で1%程度）、勃起機能に関する症状（同程度）などが添付文書に記載されている',
          '服用を中止すると、これらの症状が改善したという報告もある',
        ],
      },
      { type: 'h2', text: '内服薬②：デュタステリド（より強力とされるタイプ）' },
      {
        type: 'p',
        text: 'デュタステリドもフィナステリドと同じく5α還元酵素を阻害する薬ですが、酵素の2つのタイプ（I型・II型）の両方に作用する点が異なるとされ、フィナステリドより強力にDHTを抑制すると説明されることがあります。国内の臨床試験では、24週間の服用で毛髪数の増加が報告されていますが、これは試験参加者の平均的なデータであり、個人の結果を保証するものではありません。',
      },
      {
        type: 'list',
        items: [
          '主な役割：フィナステリドと同様、進行を抑える方向の薬',
          '対象：成人男性のみ。女性・未成年は使用できない',
          '副作用の傾向：フィナステリドと似た症状が報告されており、薬の特性上、注意点も共通する部分が多い',
        ],
      },
      {
        type: 'note',
        title: '女性・妊娠中の方への重要な注意',
        text: 'フィナステリド・デュタステリドはいずれも、妊娠中の女性が誤って成分に触れると胎児に影響が及ぶ可能性があるとされています。錠剤が割れたり砕けたりしたものを妊娠中・妊娠の可能性がある女性が取り扱うことも避ける必要があるとされており、家族間での薬の受け渡しにも注意が必要です。',
      },
      { type: 'h2', text: '外用薬・内服薬：ミノキシジル（発毛を促すタイプ）' },
      {
        type: 'p',
        text: 'ミノキシジルはもともと高血圧の治療薬として開発された成分で、服用時の副作用として毛が濃くなる作用が見られたことから、外用薬として発毛目的に応用されるようになった経緯があります。頭皮の血管を広げて血流を促すとともに、毛包の毛母細胞を刺激して発毛・育毛を促す作用があるとされています。フィナステリドやデュタステリドが「進行を抑える」薬であるのに対し、ミノキシジルは「発毛を促す」方向の薬という違いがあります。',
      },
      {
        type: 'list',
        items: [
          '外用（塗るタイプ）：日本国内では市販薬としても入手できる。濃度は男性向けが高め、女性向けは低めに設定されていることが多い',
          '内服（飲むタイプ）：一部のクリニックで自由診療として処方される。効果が期待できる一方、動悸や多毛など全身性の副作用が報告されており、外用よりも注意が必要とされる',
          '副作用の目安：頭皮のかゆみ・かぶれなどの局所症状、使用開始直後の一時的な「初期脱毛」が起こることがある',
        ],
      },
      { type: 'h2', text: '内服薬と外用薬を併用する考え方' },
      {
        type: 'p',
        text: 'フィナステリド／デュタステリドで進行を抑えつつ、ミノキシジルで発毛を促す、という組み合わせで処方されることが多いのは、それぞれの作用の仕組みが異なるためです。どの薬をどう組み合わせるかは、進行度や体質によって医師が判断する部分になります。',
      },
      {
        type: 'note',
        title: '自己判断での中断・変更は避ける',
        text: '副作用が疑われる症状が出た場合や、効果を感じられない場合も、自己判断で急に中断・変更せず、まず処方を受けた医師に相談してください。オンライン診療に対応するクリニックであれば、通院せずに相談できる場合もあります。',
      },
    ],
  },
  {
    slug: 'ikumozai-classification-ingredients',
    title: '育毛剤の「医薬品」「医薬部外品」「化粧品」の違いと代表的な成分',
    excerpt:
      'ドラッグストアやネット通販に並ぶ育毛剤は、実は薬機法上の分類がそれぞれ異なります。「育毛成分」「発毛成分」という言葉の違いも含めて、パッケージの見分け方を整理しました。',
    category: 'ikumo',
    publishedAt: '2026-08-02',
    updatedAt: '2026-08-02',
    readingTime: 8,
    image: '/images/product-serum.png',
    imageAlt: '化粧品ボトルのイメージ写真',
    tags: ['育毛剤', '医薬部外品', '成分'],
    body: [
      {
        type: 'lead',
        text: '「育毛剤」「発毛剤」「スカルプケア化粧品」。似たような見た目の商品でも、実は薬機法（医薬品、医療機器等の品質、有効性及び安全性の確保等に関する法律）によって扱いが分かれています。何がどう違うのかを知っておくと、パッケージの表示を読み解きやすくなります。',
      },
      { type: 'h2', text: '薬機法上の3つの分類' },
      {
        type: 'list',
        items: [
          '医薬品：もっとも強い効果表示が認められる分類。「発毛」を明記できるのは基本的にこの分類の製品のみとされる（代表例：ミノキシジル配合の第1類医薬品）',
          '医薬部外品：厚生労働省が承認した範囲内で「育毛」「発毛促進」「脱毛の予防」などの効能効果を表示できる分類。市販の育毛剤の多くはここに該当する',
          '化粧品：「頭皮を清浄に保つ」「髪にハリ・コシを与える」など、医薬品的な効能効果を表示できない分類',
        ],
      },
      {
        type: 'note',
        title: '表示できる効能効果は製品ごとに承認されたものだけ',
        text: 'ここで紹介した違いは一般的な整理です。実際に表示できる効能効果は製品ごとに承認された範囲に限られるため、正確な内容はパッケージや公式サイトに記載された効能効果欄で確認してください。',
      },
      { type: 'h2', text: '医薬品：ミノキシジルなど「発毛」を明記できる分類' },
      {
        type: 'p',
        text: '国内で市販されている医薬品の育毛剤で最もよく知られる有効成分がミノキシジルです。医薬品は臨床試験によって効果と安全性が確認されたうえで承認されるため、「発毛」という強い効能効果を表示できます。ミノキシジルの作用の仕組みについては、AGA治療薬を扱った記事でも詳しく解説しています。',
      },
      { type: 'h2', text: '医薬部外品：多くの「育毛剤」が該当する分類' },
      {
        type: 'p',
        text: '医薬部外品は、医薬品ほど強い効果はないものの、化粧品より踏み込んだ効能効果を表示できる分類です。「育毛」「脱毛の予防」「発毛促進」など、承認された範囲の効能効果を表示できます。ドラッグストアに並ぶ「薬用育毛剤」の多くはこの分類に含まれます。',
      },
      { type: 'h3', text: '代表的な有効成分' },
      {
        type: 'list',
        items: [
          'センブリエキス：生薬由来の成分で、血行促進を目的に配合されることが多い',
          'グリチルリチン酸ジカリウム：抗炎症作用があり、頭皮の炎症やかゆみを抑える目的で配合される',
          'パントテニルエチルエーテル（パンテノール）：毛根・毛母細胞への働きかけを目的に配合される',
          'ニンジンエキス：血行促進を目的に配合されることが多い成分',
          'トコフェロール酢酸エステル（ビタミンE誘導体）：血行促進を目的に配合される',
        ],
      },
      {
        type: 'p',
        text: 'これらの有効成分は単体ではなく、複数を組み合わせて配合されている製品が一般的です。パッケージの「有効成分」欄を見ると、その製品がどの成分を軸にしているかを確認できます。',
      },
      { type: 'h2', text: '化粧品：頭皮環境を整える位置づけ' },
      {
        type: 'p',
        text: '化粧品に分類されるスカルプケア製品は、「頭皮を清浄に保つ」「髪にハリ・コシを与える」といった、医薬品的な効能効果を伴わない範囲での表示にとどまります。効果が弱いということではなく、洗浄・保湿など日常的なケアを目的とした位置づけの製品と捉えるとわかりやすくなります。',
      },
      { type: 'h2', text: 'パッケージでの見分け方' },
      {
        type: 'list',
        items: [
          'パッケージに「医薬部外品」の表示があるか確認する（ない場合は化粧品に分類される）',
          '「有効成分」という表記がある場合、その製品は医薬品または医薬部外品である',
          '「発毛」という言葉が明記されている場合、医薬品である可能性が高い（要確認）',
        ],
      },
      {
        type: 'note',
        title: '選び方の目安',
        text: '進行を積極的に抑えたい・発毛を目指したい場合は医薬品やクリニックでの相談が選択肢になり、予防や頭皮環境を整える目的であれば医薬部外品・化粧品も選択肢になります。目的に応じて分類を確認しながら選ぶことをおすすめします。',
      },
      { type: 'product', slug: 'scalp-d-medicated-tonic' },
    ],
  },
  {
    slug: 'scalp-shampoo-choose',
    title: 'スカルプケアシャンプーの選び方｜洗浄成分・処方・悩み別のポイント',
    excerpt:
      'スカルプシャンプー選びで最も差が出るのは「洗浄成分」です。アミノ酸系・高級アルコール系・石けん系の違いから、悩み別の選び方、パッケージのチェックポイントまで整理しました。',
    category: 'scalp',
    publishedAt: '2026-08-02',
    updatedAt: '2026-08-02',
    readingTime: 8,
    image: '/images/product-tonic.png',
    imageAlt: '化粧品ボトルのイメージ写真',
    tags: ['スカルプシャンプー', '選び方', '洗浄成分'],
    body: [
      {
        type: 'lead',
        text: 'スカルプシャンプーは種類が多く、パッケージの謳い文句だけでは選びにくいアイテムです。実は洗い上がりや頭皮への負担感を大きく左右するのは「洗浄成分（界面活性剤）」の種類です。まずはここを軸に整理します。',
      },
      { type: 'h2', text: '頭皮環境が悪化する原因' },
      {
        type: 'p',
        text: 'シャンプーのすすぎ残し、過度な洗髪による乾燥、皮脂の過剰分泌などは、毛穴や頭皮の健康を損ねる要因になるといわれています。日々使うシャンプー選びを見直すことは、こうした頭皮環境の乱れを防ぐための土台になります。',
      },
      { type: 'h2', text: '洗浄成分で見る3タイプ' },
      { type: 'h3', text: 'アミノ酸系' },
      {
        type: 'p',
        text: 'グルタミン酸系・グリシン系・アラニン系などがあり、弱酸性で肌・髪の性質に近いとされる洗浄成分です。洗浄力は穏やかで、乾燥やかゆみが気になる頭皮でも使いやすいとされています。近年のスカルプシャンプーの多くがこのタイプを採用しています。',
      },
      { type: 'h3', text: '高級アルコール系（硫酸系）' },
      {
        type: 'p',
        text: 'ラウリル硫酸ナトリウムなどが代表的な成分です。洗浄力が強く、泡立ちも豊かですが、皮脂を落としすぎて乾燥やつっぱりを感じる人もいるとされています。皮脂分泌が多く、さっぱりした洗い上がりを求める人には選択肢になります。',
      },
      { type: 'h3', text: '石けん系' },
      {
        type: 'p',
        text: '石けん素地などを使った洗浄成分で、洗浄力はしっかりしている一方、アルカリ性のためきしみを感じやすいとされています。すすぎ残しがあると頭皮への刺激につながる場合もあるため、しっかりすすぐことが大切です。',
      },
      { type: 'h2', text: '悩み別の選び方' },
      {
        type: 'list',
        items: [
          '乾燥・かゆみが気になる：アミノ酸系＋保湿成分（セラミド、ヒアルロン酸Naなど）配合のものを選ぶ',
          '皮脂・べたつきが気になる：メントールなど清涼感のある処方や、洗浄力がやや高めのタイプも選択肢になる',
          '抜け毛・薄毛が気になる：医薬部外品（有効成分配合）の薬用シャンプーを選択肢に入れる（分類の違いは別記事で解説）',
          'カラー・パーマ後の髪も一緒にケアしたい：アミノ酸系など、洗浄力が穏やかなタイプが髪への負担を抑えやすい',
        ],
      },
      { type: 'h2', text: 'パッケージ・処方のチェックポイント' },
      {
        type: 'list',
        items: [
          '成分表示の上位（水の次あたり）に来ている洗浄成分の種類を確認する',
          '「ノンシリコン」「無香料」「無着色」など無添加処方の表示を確認する',
          '「医薬部外品」の表示があるか（薬用シャンプーかどうかの目安になる）',
          '弱酸性かどうかの表示（アルカリ性の石けん系と迷う場合の判断材料になる）',
        ],
      },
      {
        type: 'note',
        title: '「洗浄力が強い＝悪い」わけではない',
        text: '皮脂分泌が多い人にとっては、洗浄力の高いタイプの方が快適に感じられることもあります。自分の頭皮タイプ（乾燥しやすい／皮脂が多い）に合わせて選ぶのがポイントで、一律に「アミノ酸系が正解」というわけではありません。',
      },
      { type: 'h2', text: '続けやすさも選び方の軸' },
      {
        type: 'p',
        text: 'どれだけ処方が良くても、価格や香り、定期購入の解約条件などが合わないと続けにくくなります。頭皮への効果は使い続けてこそ実感しやすいものなので、無理なく継続できる価格帯・使用感のものを選ぶことも大切な視点です。',
      },
      { type: 'product', slug: 'premium-black-shampoo' },
      { type: 'product', slug: 'root-beaute-scalp-shampoo' },
    ],
  },
  {
    slug: 'aga-clinic-comparison',
    title: 'AGAクリニックの選び方｜料金・特徴を徹底比較',
    excerpt:
      'AGA治療を検討する際に比較したいポイントと、料金・対応の違いを整理しました。「安さ」だけで選ばず、続けやすさや対応の幅も含めて比較することが大切です。',
    category: 'aga',
    publishedAt: '2026-08-03',
    updatedAt: '2026-08-03',
    readingTime: 8,
    image: '/images/hero-clinic.png',
    imageAlt: '医師と向き合って相談する男性',
    tags: ['AGA', 'クリニック比較', '費用'],
    body: [
      {
        type: 'lead',
        text: 'AGAクリニックは数多くあり、「とにかく安いところ」だけで選ぶと、実際に通い始めてから「思っていたメニューがなかった」「対応時間が合わなかった」と感じることもあります。ここでは比較する際に見ておきたいポイントと、当サイトで確認している2院の特徴を整理しました。',
      },
      { type: 'h2', text: 'クリニック選びで比較したい5つのポイント' },
      {
        type: 'list',
        items: [
          '診察料・再診料が無料かどうか',
          '予防プラン（内服薬のみ）と発毛プラン（内服＋外用・メソセラピー等）それぞれの月額目安',
          'オンライン診療のみか、対面の院があるか',
          '返金保証・解約条件の有無',
          '対応している診療時間帯（深夜・早朝でも診療可能か）',
        ],
      },
      {
        type: 'note',
        title: '薬の種類については別記事で解説',
        text: 'フィナステリド・デュタステリド・ミノキシジルなど、実際に使われる治療薬の違いについては、AGA治療薬の種類と効果を扱った記事で詳しく解説しています。',
      },
      { type: 'h2', text: '2院の特徴を比較する' },
      {
        type: 'p',
        text: 'ここでは、当サイトで公式サイトの情報をもとに確認している2院を紹介します。価格帯・対応の方向性がそれぞれ異なるため、自分が重視する条件と照らし合わせてみてください。',
      },
      { type: 'product', slug: 'levcli' },
      { type: 'product', slug: 'aga-skin-clinic' },
      { type: 'h2', text: 'まとめ：迷ったら無料カウンセリングの比較から' },
      {
        type: 'p',
        text: 'オンライン診療のみで価格を抑えたい人はレバクリ、近くに院があり対面での相談やメニューの幅を重視したい人はAGAスキンクリニックが選択肢になりやすい傾向です。ただし実際に合うかどうかは人によって異なるため、1院に絞らず複数の無料カウンセリングを受けて比較することをおすすめします。',
      },
      {
        type: 'note',
        title: 'この記事について',
        text: '医療機関の広告に関するガイドラインでは、患者の体験談を治療効果の広告として扱うことは認められていません。当サイトでは特定の体験談を紹介する形式ではなく、公式サイトで確認できる料金・制度面の情報をもとに比較しています。',
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
