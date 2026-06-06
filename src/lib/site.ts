export const COMPANY = {
  name: "大和建設株式会社",
  reading: "だいわけんせつ",
  address: "〒596-0816 大阪府岸和田市尾生町523-2",
  tel: "072-444-4512",
  area: "大阪・岸和田を拠点に近畿エリア",
} as const;

export const LINKS = {
  corporate: "https://daiwakensetsu-k.jp/",
  apply: "https://wagasyade-saiyo.jp/daiwakensetsu/recruitment/",
} as const;

const BASE_PATH = "/recruit";
export const asset = (p: string) => `${BASE_PATH}${p.startsWith("/") ? p : `/${p}`}`;

export type Job = {
  id: string;
  title: string;
  lead: string;
  description: string;
  tags: string[];
  href: string;
};

export const JOBS: Job[] = [
  {
    id: "operator",
    title: "重機オペレーター",
    lead: "地図を変える仕事。",
    description:
      "バックホウ・ブルドーザーなどを操り、大規模造成や土工事の最前線へ。一日で景色が変わるスケールの仕事です。",
    tags: ["未経験OK", "経験者歓迎", "U・Iターン歓迎", "資格取得支援"],
    href: "https://media.daiwakensetsu-k.jp/lp2/",
  },
  {
    id: "dump",
    title: "10tダンプドライバー",
    lead: "まちの土台を、運ぶ。",
    description:
      "長距離なし・地場配送のみ。大阪の現場を相棒の専用ダンプでいったり来たり。夜はちゃんと家に帰れる、無理なく長く続けられる仕事です。",
    tags: ["長距離なし", "毎日帰れる", "未経験OK", "ブランクOK"],
    href: `${BASE_PATH}/dump/`,
  },
  {
    id: "kanri",
    title: "施工管理・現場監督",
    lead: "一生に残る構造物を、つくる。",
    description:
      "複数チームを束ね、公共インフラの大規模プロジェクトを動かす。3Dマシンコントロールなど最新技術に触れられる環境です。",
    tags: ["経験を活かす", "未経験も歓迎", "最新技術", "キャリアアップ"],
    href: "https://emdza.pagehub.jp/",
  },
];

export const STATS = [
  { value: "65", unit: "年超", label: "近畿エリアでの施工実績" },
  { value: "90", unit: "トン級", label: "大型重機を保有" },
  { value: "20", unit: "日/月", label: "勤務日数を保証" },
  { value: "週2", unit: "休制", label: "プライベートも大切に" },
];

export const MERITS = [
  {
    title: "地図を変えるスケール",
    body: "道路・河川・造成・上下水道など、公共インフラを支える大規模工事。社会に残る仕事に携われます。",
  },
  {
    title: "安定した働く環境",
    body: "公共インフラ中心で仕事が途切れにくく、天候に左右されにくい20日勤務保証。腰を据えて働けます。",
  },
  {
    title: "生活までサポート",
    body: "社宅・寮を完備。U・Iターンや移住をともなう転職でも、住まいの不安なくスタートできます。",
  },
  {
    title: "技術が伸びる仕組み",
    body: "資格取得支援や明確なキャリアパス。職長・現場監督へとステップアップできる体制があります。",
  },
];

export const VOICES = [
  {
    name: "30代・重機オペレーター（在籍5年）",
    quote:
      "未経験で入りましたが、先輩に教わりながら大型機械を任されるように。景色が変わる達成感は他にはありません。",
    jobId: "operator",
    href: "https://media.daiwakensetsu-k.jp/lp2/",
  },
  {
    name: "50代・職長（在籍10年）",
    quote:
      "現場を任され、若手を育てる立場に。責任と技術に見合った評価をしてもらえるのが、この会社の良さです。",
    jobId: "kanri",
    href: "https://emdza.pagehub.jp/",
  },
];

export const CREDO = {
  motto: "安全・誠実・団結・実行・創意",
  message: "誠実に、真面目に、前向きに、諦めない心",
};
