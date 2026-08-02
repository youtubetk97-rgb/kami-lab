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

// v0で生成された商品データ(ブランド名・価格・成分・返金保証など)は実在確認できない
// プレースホルダーです。ASP審査通過後、実際に提携する商品の実データに置き換えるまで
// このフラグをfalseのままにして、商品カード・ランキングの表示を止めてください。
export const PRODUCTS_PUBLISHED = false

export const products: Product[] = [
  {
    slug: 'scalp-serum-pro',
    rank: 1,
    name: 'スカルプセラム PRO',
    brand: 'HATSU LABO',
    type: '薬用育毛剤（医薬部外品）',
    image: '/images/product-serum.png',
    price: '7,980円',
    monthlyPrice: '初回 2,980円',
    score: 4.8,
    scores: [
      { label: 'コスパ', value: 4.5 },
      { label: '使いやすさ', value: 5.0 },
      { label: '成分の充実度', value: 4.9 },
      { label: '続けやすさ', value: 4.7 },
    ],
    summary:
      '有効成分3種を配合した医薬部外品の育毛剤。ノズルが細く狙った部分に塗布しやすいため、生え際や頭頂部を中心にケアしたい人が選びやすい一本です。',
    highlights: ['有効成分3種を配合', '無香料・ベタつきにくい処方', '定期縛りなしで解約可能'],
    pros: [
      '1本で約1か月分、朝晩2回でも使い切りやすい容量',
      'ノズルが細く、分け目や生え際にピンポイントで塗布できる',
      '初回価格が安く、まず試してみたい人にも始めやすい',
    ],
    cons: ['店頭での取り扱いが少なく、基本は公式サイトからの購入', '香りのバリエーションがない'],
    ingredients: ['センブリエキス', 'グリチルリチン酸ジカリウム', 'パントテニルエチルエーテル'],
    guarantee: '30日間の返金保証あり',
    affiliateUrl: '#',
  },
  {
    slug: 'scalp-tonic-black',
    rank: 2,
    name: 'スカルプトニック BLACK',
    brand: 'MENS AXIS',
    type: '薬用トニック（医薬部外品）',
    image: '/images/product-tonic.png',
    price: '5,480円',
    monthlyPrice: '定期 4,380円',
    score: 4.5,
    scores: [
      { label: 'コスパ', value: 4.8 },
      { label: '使いやすさ', value: 4.6 },
      { label: '成分の充実度', value: 4.2 },
      { label: '続けやすさ', value: 4.6 },
    ],
    summary:
      'スプレータイプで頭皮全体に広げやすい薬用トニック。清涼感のある使用感で、皮脂やムレが気になる季節のケアに向いています。',
    highlights: ['広範囲に使いやすいスプレー式', 'さっぱりした清涼感', '1本あたりの価格が控えめ'],
    pros: [
      '一度の噴射範囲が広く、頭皮全体をケアしたい人に向く',
      '価格が抑えられており、長く続けやすい',
      'ドラッグストアでも見つけやすい',
    ],
    cons: ['清涼感が強く、刺激を感じやすい人には向かない場合がある', '香りがやや強め'],
    ingredients: ['ニンジンエキス', 'グリチルリチン酸ジカリウム', 'l-メントール'],
    guarantee: '未開封のみ返品可',
    affiliateUrl: '#',
  },
  {
    slug: 'hair-support-supplement',
    rank: 3,
    name: 'ヘアサポート サプリ',
    brand: 'INNER CARE',
    type: '栄養補助食品',
    image: '/images/product-supplement.png',
    price: '3,980円',
    monthlyPrice: '定期 3,180円',
    score: 4.2,
    scores: [
      { label: 'コスパ', value: 4.4 },
      { label: '使いやすさ', value: 4.8 },
      { label: '成分の充実度', value: 4.0 },
      { label: '続けやすさ', value: 4.5 },
    ],
    summary:
      '亜鉛やビオチンなど、髪の材料となる栄養素をまとめて補えるサプリメント。外側のケアと組み合わせて内側から整えたい人向けです。',
    highlights: ['1日2粒で続けやすい', '亜鉛・ビオチン・鉄を配合', '国内GMP工場で製造'],
    pros: [
      '食事だけでは補いにくい栄養素をまとめて摂れる',
      '粒が小さく、においが控えめで飲みやすい',
      '外用ケアと併用しやすい',
    ],
    cons: ['体感までに時間がかかりやすい', '薬を服用中の人は事前に医師へ相談が必要'],
    ingredients: ['亜鉛', 'ビオチン', 'ヘム鉄', 'L-シスチン'],
    guarantee: '定期は初回のみで解約可',
    affiliateUrl: '#',
  },
  {
    slug: 'scalp-shampoo-clear',
    rank: 4,
    name: 'スカルプシャンプー CLEAR',
    brand: 'AQUA DERM',
    type: 'スカルプシャンプー',
    image: '/images/product-shampoo.png',
    price: '3,280円',
    monthlyPrice: '定期 2,620円',
    score: 4.0,
    scores: [
      { label: 'コスパ', value: 4.2 },
      { label: '使いやすさ', value: 4.5 },
      { label: '成分の充実度', value: 3.8 },
      { label: '続けやすさ', value: 4.4 },
    ],
    summary:
      'アミノ酸系の洗浄成分をベースにしたスカルプシャンプー。洗浄力が穏やかで、乾燥やかゆみが気になる頭皮でも使いやすい設計です。',
    highlights: ['アミノ酸系のやさしい洗浄', 'シリコン・着色料フリー', '泡立ちが良く流しやすい'],
    pros: [
      '洗い上がりがつっぱりにくく、乾燥しやすい頭皮でも使いやすい',
      '毎日の習慣を変えずに置き換えるだけで始められる',
      '家族と共用しやすい香り',
    ],
    cons: ['整髪料をしっかり使う日は二度洗いが必要な場合がある', '育毛剤ほどの成分の充実度はない'],
    ingredients: ['ココイルグルタミン酸TEA', 'グリチルリチン酸2K', 'ヒアルロン酸Na'],
    guarantee: '定期は回数縛りなし',
    affiliateUrl: '#',
  },
]

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
      { type: 'product', slug: 'scalp-tonic-black' },
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
      { type: 'product', slug: 'scalp-shampoo-clear' },
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
