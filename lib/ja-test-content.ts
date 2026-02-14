import type { MBTI_Value } from "@/types";

export type JaQuestion = {
  prompt: string;
  options: [
    { value: MBTI_Value; label: string },
    { value: MBTI_Value; label: string },
  ];
};

export const JA_QUESTIONS: JaQuestion[] = [
  {
    prompt: "新しい環境に入ったとき、最初にすることは？",
    options: [
      { value: "E", label: "まず周りの人に話しかけて雰囲気をつかむ" },
      { value: "I", label: "少し観察してから必要な場面で話す" },
    ],
  },
  {
    prompt: "問題が起きたとき、あなたはどちらに近い？",
    options: [
      { value: "S", label: "今ある事実や手順を確認して対応する" },
      { value: "N", label: "背景や可能性を考えて大きな流れを見る" },
    ],
  },
  {
    prompt: "意見が割れたとき、重視するのは？",
    options: [
      { value: "T", label: "一貫した基準と合理性" },
      { value: "F", label: "人の気持ちと関係への配慮" },
    ],
  },
  {
    prompt: "予定の立て方はどちらが楽？",
    options: [
      { value: "J", label: "先に計画を決めて順番に進める" },
      { value: "P", label: "状況に合わせて柔軟に進める" },
    ],
  },
  {
    prompt: "休みの日の過ごし方は？",
    options: [
      { value: "E", label: "人と会って活動すると充電できる" },
      { value: "I", label: "一人時間で静かに過ごすと充電できる" },
    ],
  },
  {
    prompt: "新しい情報を学ぶときの癖は？",
    options: [
      { value: "S", label: "具体例を見て理解を固める" },
      { value: "N", label: "全体像や意味を先に把握する" },
    ],
  },
  {
    prompt: "友人の相談に乗るときは？",
    options: [
      { value: "T", label: "原因を整理して解決策を提案する" },
      { value: "F", label: "まず気持ちを受け止めて寄り添う" },
    ],
  },
  {
    prompt: "締切がある作業では？",
    options: [
      { value: "J", label: "小分けにして早めに終わらせる" },
      { value: "P", label: "直前の集中力で一気に仕上げる" },
    ],
  },
  {
    prompt: "初対面の集まりでは？",
    options: [
      { value: "E", label: "自分から話題を作って会話を広げる" },
      { value: "I", label: "聞き役に回って相手を知る" },
    ],
  },
  {
    prompt: "決断前に集める情報は？",
    options: [
      { value: "S", label: "実績や数字など確認できる情報" },
      { value: "N", label: "将来性や発展性など見えにくい要素" },
    ],
  },
  {
    prompt: "チームで役割を担うなら？",
    options: [
      { value: "T", label: "目的達成のために判断と調整を行う" },
      { value: "F", label: "メンバーが安心できる雰囲気を作る" },
    ],
  },
  {
    prompt: "旅行の準備はどちら派？",
    options: [
      { value: "J", label: "行程表を作って予約まで済ませる" },
      { value: "P", label: "大枠だけ決めて現地で調整する" },
    ],
  },
  {
    prompt: "会議で発言するときは？",
    options: [
      { value: "E", label: "その場で考えを出しながら整理する" },
      { value: "I", label: "頭の中でまとめてから発言する" },
    ],
  },
  {
    prompt: "作品を楽しむポイントは？",
    options: [
      { value: "S", label: "演出や描写など具体的な完成度" },
      { value: "N", label: "テーマや伏線など解釈の広がり" },
    ],
  },
  {
    prompt: "対立を収めるときは？",
    options: [
      { value: "T", label: "論点を明確にしてルールを決める" },
      { value: "F", label: "互いの感情を整理して歩み寄る" },
    ],
  },
  {
    prompt: "新しいチャンスが来たときは？",
    options: [
      { value: "J", label: "準備が整ってから着実に進める" },
      { value: "P", label: "まず挑戦して動きながら形にする" },
    ],
  },
];
