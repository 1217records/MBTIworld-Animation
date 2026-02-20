import type { Metadata } from "next";
import Link from "next/link";
import { permanentRedirect } from "next/navigation";
import JsonLd from "@/components/JsonLd";
import AdExperiment from "@/components/AdExperiment";
import { CONTENTS, THEMES } from "@/data";
import { MBTI_LONG_DESCS, MBTI_SHORT_DESCS } from "@/constants";
import { SITE_NAME, SITE_ORIGIN, SITE_TAGLINE } from "@/lib/site";
import { localizedAlternatesFromUrls } from "@/lib/seo";
import ResultShareClient from "./ResultShareClient";

export const runtime = "edge";

function normalizeType(raw: string | null): string {
  if (!raw) return "ISTJ";
  return raw.replace(/\.png$/i, "").toUpperCase();
}

function resolveThemeId(raw: string | undefined): string {
  if (raw && Object.prototype.hasOwnProperty.call(THEMES, raw)) return raw;
  return "onepiece";
}

function resolveType(
  raw: string | undefined,
  content: (typeof CONTENTS)[keyof typeof CONTENTS],
): string {
  const normalized = normalizeType(raw ?? "ISTJ");
  if (Object.prototype.hasOwnProperty.call(content.results, normalized)) return normalized;
  return "ISTJ";
}

type ResultPageProps = {
  searchParams: Promise<{ theme?: string; type?: string }>;
};

export async function generateMetadata({ searchParams }: ResultPageProps): Promise<Metadata> {
  const resolved = await searchParams;
  const themeId = resolveThemeId(resolved?.theme);

  const theme = THEMES[themeId as keyof typeof THEMES] ?? THEMES.onepiece;
  const content = CONTENTS[themeId as keyof typeof CONTENTS] ?? CONTENTS.onepiece;
  const type = resolveType(resolved?.type, content);
  const character = content.results[type] ?? content.results.ISTJ;

  const ogImage = `${SITE_ORIGIN}/og/${encodeURIComponent(theme.id)}/${encodeURIComponent(type)}.png`;
  const ogTitle = `${type} · ${character.name}`;
  const description = `MBTI 유형별 특징과 궁합을 분석하는 ${theme.label} 테스트 결과입니다. ${type} 유형의 성격, 장단점, 관계 패턴을 확인하세요.`;
  const canonicalKo = `${SITE_ORIGIN}/result?theme=${encodeURIComponent(theme.id)}&type=${encodeURIComponent(type)}`;
  const canonicalEn = `${SITE_ORIGIN}/en/result?theme=${encodeURIComponent(theme.id)}&type=${encodeURIComponent(type)}`;

  return {
    title: `${type} 결과 | ${SITE_NAME}`,
    description,
    alternates: localizedAlternatesFromUrls(canonicalKo, canonicalEn, "ko"),
    openGraph: {
      title: ogTitle,
      description,
      type: "website",
      url: canonicalKo,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: ogTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description,
      images: [ogImage],
    },
  };
}

export default async function ResultPage({ searchParams }: ResultPageProps) {
  const resolved = await searchParams;
  const rawThemeId = resolved?.theme;
  const rawType = normalizeType(resolved?.type ?? "ISTJ");
  const themeId = resolveThemeId(resolved?.theme);

  const theme = THEMES[themeId as keyof typeof THEMES] ?? THEMES.onepiece;
  const content = CONTENTS[themeId as keyof typeof CONTENTS] ?? CONTENTS.onepiece;
  const type = resolveType(resolved?.type, content);
  const character = content.results[type] ?? content.results.ISTJ;

  const shareUrl = `${SITE_ORIGIN}/result?theme=${encodeURIComponent(theme.id)}&type=${encodeURIComponent(type)}`;
  const imageUrl = `${SITE_ORIGIN}/og/${encodeURIComponent(theme.id)}/${encodeURIComponent(type)}.png`;

  if (rawThemeId !== theme.id || rawType !== type) {
    permanentRedirect(shareUrl);
  }

  const summaryPoints = [
    `${type}의 핵심 키워드: ${MBTI_SHORT_DESCS[type]}`,
    `${theme.label} 세계관 기준 해석으로 공감되는 행동 패턴을 제시`,
    "강점과 주의점을 함께 제시해 균형 잡힌 자기이해 제공",
  ];
  const TYPE_PROFILE_DETAILS: Record<
    string,
    {
      deep: string;
      relation: string;
      work: string;
      stress: string;
      growth: string;
      compatibility: string;
      relationTips: string[];
    }
  > = {
    INTJ: {
      deep: "INTJ는 전체 구조를 읽고 장기 전략을 설계하는 데 강합니다. 직관(Ni)으로 복잡한 정보를 큰 그림으로 통합하고 사고(Te)로 실행 가능한 시스템으로 전환하며, 의미 없는 반복과 비효율에는 빠르게 피로를 느끼는 편입니다.",
      relation: "관계에서는 폭넓은 네트워킹보다 신뢰 가능한 소수와 깊은 연결을 선호합니다. 처음에는 차분하고 거리감 있어 보일 수 있지만, 신뢰가 쌓이면 매우 충실하고 책임감 있는 모습을 보입니다.",
      work: "업무에서는 독립성과 전문성을 중시하며, 복잡한 문제를 구조화해 해결할 때 몰입도가 높습니다. 목표가 생기면 체계적인 계획을 세우고 장기적으로 성과를 축적합니다.",
      stress: "스트레스 상황에서는 통제 욕구가 강해지고 주변의 비효율에 예민해질 수 있습니다.",
      growth: "완벽주의를 완화하고 감정 표현의 언어를 늘릴수록 리더십과 협업력이 함께 확장됩니다.",
      compatibility: "가치와 목표가 명확한 파트너와 높은 시너지를 내며, 실행력 높은 유형과 협업할 때 전략이 현실 성과로 이어집니다.",
      relationTips: ["결론 제시 전 상대 감정 맥락 한 줄 요약하기", "완성도 100%보다 실행 가능성 70%를 우선해 속도 확보하기", "관계 피드백을 성과 피드백과 분리해 전달하기"],
    },
    INTP: {
      deep: "INTP는 사고(Ti) 기반의 정교한 논리 체계와 직관(Ne)의 가능성 탐색이 결합된 분석형입니다. 결론을 서두르기보다 다양한 관점에서 구조를 이해하는 과정 자체에서 에너지를 얻습니다.",
      relation: "관계에서는 조용하고 독립적인 태도를 보이며, 생각이 맞는 사람과 깊이 있는 대화를 선호합니다. 감정 표현은 절제되어도 신뢰가 형성되면 진솔하고 안정적인 관계를 유지합니다.",
      work: "복잡한 개념 정리, 문제 원인 분해, 창의적 해결안 도출에 강점이 큽니다. 반면 반복적 운영이나 세부 관리에는 흥미가 급격히 떨어질 수 있습니다.",
      stress: "스트레스가 높아지면 사고가 과도하게 깊어져 실행이 늦어질 수 있습니다.",
      growth: "아이디어를 작은 실험 단위로 빠르게 행동으로 옮기는 루틴이 성장의 핵심입니다.",
      compatibility: "질문을 허용하고 자율성을 보장해 주는 파트너와 궁합이 좋습니다. 실행형 동료와 짝을 이룰 때 아이디어의 완성도가 높아집니다.",
      relationTips: ["토론 목적을 승부가 아닌 공동 탐색으로 명시하기", "의견 공유 시 결론-근거-보류점 순서로 구조화하기", "생각 정리 시간을 미리 알리고 재응답 타이밍 합의하기"],
    },
    ENTJ: {
      deep: "ENTJ는 목표 설정, 구조 설계, 실행 지휘에 강한 리더형입니다. 직관으로 방향을 정하고 사고로 전략을 현실화하며, 결과 중심의 의사결정 속도가 빠릅니다.",
      relation: "관계에서는 직설적이고 명확한 소통을 선호하며, 함께 성장하는 파트너십에 높은 가치를 둡니다.",
      work: "큰 프로젝트를 조직하고 변화 흐름을 만드는 상황에서 강점을 보입니다. 책임 회피보다 문제 해결과 전진을 선택하는 경향이 뚜렷합니다.",
      stress: "압박이 커지면 통제 욕구가 강화되고 주변에 엄격해질 수 있습니다.",
      growth: "공감 문장과 유연한 위임을 결합하면 추진력은 유지하면서 팀 신뢰를 크게 높일 수 있습니다.",
      compatibility: "주도성 있는 유형과 생산적 긴장을 만들며, 사람 중심 유형과 짝을 이룰 때 조직 완성도가 올라갑니다.",
      relationTips: ["지시 전에 목적과 기대효과를 먼저 공유하기", "성과 점검 시 사람 평가가 아닌 행동 기준으로 피드백하기", "결정 고수 항목과 유연 조정 항목을 사전 분리하기"],
    },
    ENTP: {
      deep: "ENTP는 가능성을 탐색하고 기존 틀을 재구성하는 데 강한 창의형입니다. 직관을 통해 아이디어를 확장하고 토론을 통해 사고를 정교화합니다.",
      relation: "관계에서는 유머와 재치로 빠르게 연결되지만, 토론 성향이 강해 상대에게 도전적으로 보일 수 있습니다.",
      work: "프로젝트 초기 기획, 방향 전환, 실험 설계에서 큰 강점을 보입니다. 다만 마무리 단계에서 집중력이 분산되기 쉽습니다.",
      stress: "스트레스 시 산만함이 커지거나 흥미 저하로 추진력이 급감할 수 있습니다.",
      growth: "아이디어마다 우선순위와 종료 기준을 설정하면 실행 완결성이 크게 향상됩니다.",
      compatibility: "실행 안정성이 높은 파트너와 조합될 때 혁신성과 완성도가 동시에 확보됩니다.",
      relationTips: ["토론 시작 전 합의 목표를 한 문장으로 정의하기", "새 아이디어는 즉시 실행보다 백로그 분류 후 선택하기", "마감 전에는 논쟁보다 결정과 역할 정리에 집중하기"],
    },
    INFJ: {
      deep: "INFJ는 직관(Ni)과 감정(Fe)을 기반으로 사람과 상황의 의미를 깊게 읽는 이상주의형입니다. 겉은 차분하지만 내면의 가치 기준과 신념이 매우 강한 편입니다.",
      relation: "넓은 관계보다 깊은 신뢰 관계를 선호하며, 상대의 말하지 않은 감정까지 섬세하게 포착하는 능력이 뛰어납니다.",
      work: "사람과 비전을 연결하는 역할에서 강점을 발휘합니다. 장기 목표를 꾸준히 추적하며 팀의 잠재력을 발견하고 방향성을 제시합니다.",
      stress: "과도한 배려가 누적되면 감정적으로 소진되고 혼자 회복 시간이 필요해집니다.",
      growth: "타인 이해 능력에 자기표현과 경계를 더하면 영향력이 더 안정적으로 커집니다.",
      compatibility: "가치 존중형 파트너와 깊은 시너지를 내며, 현실 실행형 동료와 협업 시 비전이 결과로 연결됩니다.",
      relationTips: ["상대 감정 공감 후 자신의 필요도 명확히 말하기", "도움 요청을 받으면 우선순위와 한계를 먼저 제시하기", "정서 회복 시간을 일정에 고정해 소진 예방하기"],
    },
    INFP: {
      deep: "INFP는 감정(Fi) 기반의 진정성과 직관(Ne) 기반의 가능성 탐색이 결합된 가치지향형입니다. 외부 성과보다 자신의 신념과 일치하는 삶을 중요하게 여깁니다.",
      relation: "관계에서는 따뜻한 공감과 진심을 중시하며, 있는 그대로 수용받는 경험에서 깊은 신뢰를 형성합니다.",
      work: "창작, 기획, 글쓰기 등 개성과 의미를 표현할 수 있는 환경에서 높은 몰입을 보입니다.",
      stress: "가치가 존중받지 못한다고 느끼면 감정적 부담이 커지고 에너지가 급격히 떨어질 수 있습니다.",
      growth: "이상과 실행 사이를 잇는 작은 실천 루틴이 잠재력을 크게 확장합니다.",
      compatibility: "정서적 안정감을 주는 파트너와 궁합이 좋고, 구조를 제공하는 동료와 협업 시 아이디어가 오래 지속됩니다.",
      relationTips: ["중요 가치 2~3개를 언어화해 협업 기준으로 공유하기", "감정 소모가 큰 대화 후 회복 루틴을 즉시 실행하기", "완벽한 의미를 기다리기보다 작은 실행으로 의미를 검증하기"],
    },
    ENFJ: {
      deep: "ENFJ는 감정(Fe)으로 사람을 읽고 직관(Ni)으로 성장 방향을 제시하는 선도형입니다. 타인의 잠재력을 발견하고 팀을 하나로 묶는 능력이 뛰어납니다.",
      relation: "관계에서는 따뜻하고 적극적인 소통을 통해 신뢰를 형성하며, 공동의 성장을 중요한 가치로 둡니다.",
      work: "협업 조율, 동기 부여, 방향성 정리에서 강점을 보이며 사람 중심 프로젝트에서 영향력이 큽니다.",
      stress: "모두를 만족시키려는 압박이 커지면 자신을 소모하며 피로가 누적될 수 있습니다.",
      growth: "타인을 돕는 힘에 자기 경계와 회복 리듬을 더할 때 리더십이 더 안정화됩니다.",
      compatibility: "목표지향형 파트너와 결합하면 추진력과 팀 응집력이 동시에 높아집니다.",
      relationTips: ["조율 전 자신의 우선순위를 먼저 명확히 정리하기", "모든 요구를 수용하기보다 역할과 기대치를 명시하기", "정기적으로 개인 회복 시간을 고정해 에너지 관리하기"],
    },
    ENFP: {
      deep: "ENFP는 직관(Ne)으로 새로운 가능성을 발견하고 감정(Fi)으로 의미 있는 방향을 선택하는 활동형입니다. 변화와 새로운 경험에서 동기를 크게 얻습니다.",
      relation: "관계에서는 친근하고 개방적이며 빠르게 연결되지만, 동시에 진정성 있는 깊은 관계를 중요하게 여깁니다.",
      work: "초기 기획, 아이디어 발굴, 새로운 방향 탐색 단계에서 특히 강점을 보입니다.",
      stress: "가능성을 동시에 많이 잡으면 집중력이 분산되고 완결성이 떨어질 수 있습니다.",
      growth: "창의력에 구조를 더해 실행 루프를 만들 때 영향력이 급격히 커집니다.",
      compatibility: "체계형 파트너와 조합하면 아이디어가 성과로 안정적으로 전환됩니다.",
      relationTips: ["동시에 진행할 프로젝트 수를 제한해 집중 분산 줄이기", "아이디어마다 다음 행동 1개를 즉시 정의하기", "열정 기반 약속은 일정/우선순위와 함께 재확인하기"],
    },
    ISFJ: {
      deep: "ISFJ는 감각(Si)의 안정성, 감정(Fe)의 배려가 결합된 수호형입니다. 검증된 방식과 책임 있는 실행으로 주변의 신뢰를 꾸준히 얻습니다.",
      relation: "겉으로 크게 드러나지 않아도 가까운 사람을 세심하게 챙기며 장기적 관계를 소중히 여깁니다.",
      work: "꼼꼼함과 지속력이 강점이며, 팀이 안정적으로 운영되도록 보이지 않는 핵심 역할을 수행합니다.",
      stress: "책임을 혼자 떠안거나 자신의 감정을 뒤로 미루며 소진되기 쉽습니다.",
      growth: "타인 배려에 자기보호와 요청 표현을 더할 때 지속 가능한 성장으로 이어집니다.",
      compatibility: "신뢰 기반 관계에서 강점을 발휘하며, 변화형 파트너와 함께할 때 적응 폭이 넓어집니다.",
      relationTips: ["도움 요청을 받기 전에 현재 여유를 먼저 점검하기", "거절이 필요한 상황은 이유와 대안을 함께 제시하기", "정서적 피로 신호를 체크해 회복 시간을 선제 확보하기"],
    },
    ISTJ: {
      deep: "ISTJ는 감각(Si)의 사실성, 사고(Te)의 실행력이 결합된 현실주의형입니다. 계획을 세우고 단계적으로 완수하는 능력이 뛰어나며 신뢰와 규칙을 중요하게 여깁니다.",
      relation: "관계에서는 신중하고 차분하며, 감정 표현은 절제되어도 책임과 일관성으로 신뢰를 보여줍니다.",
      work: "명확한 목표와 구조가 있는 환경에서 높은 성과를 내며, 결과의 안정성을 확보하는 데 강합니다.",
      stress: "예측 불가능한 변화나 계획 붕괴 상황에서 부담이 커지고 비효율에 민감해질 수 있습니다.",
      growth: "새로운 방식에 대한 유연성을 확장하면 기존 강점이 더 크게 발휘됩니다.",
      compatibility: "규칙과 약속을 존중하는 파트너와 안정적 궁합을 보이며, 창의형 동료와 협업하면 확장성이 보완됩니다.",
      relationTips: ["변화 요청 시 기존 방식 대비 이점부터 확인하기", "원칙 유지 항목과 실험 가능 항목을 구분하기", "피드백에서 사실 전달 뒤 감정/의도 확인 질문 추가하기"],
    },
    ESFJ: {
      deep: "ESFJ는 감정(Fe)의 관계 감각과 감각(Si)의 안정 지향이 결합된 돌봄형입니다. 공동체 안에서 조화를 만들고 사람을 연결하는 능력이 뛰어납니다.",
      relation: "친절하고 적극적인 소통으로 관계를 따뜻하게 유지하며, 가까운 사람의 안정을 중요하게 생각합니다.",
      work: "협업 환경에서 조율과 운영 능력이 강하고 팀 분위기를 안정시키는 역할에서 두각을 보입니다.",
      stress: "관계 갈등이나 외부 평가에 크게 흔들릴 수 있고, 모두를 만족시키려다 부담이 커질 수 있습니다.",
      growth: "타인 배려에 자기 기준과 우선순위를 더하면 안정성과 영향력이 함께 높아집니다.",
      compatibility: "사람 중심 목표가 분명한 파트너와 궁합이 좋으며, 분석형 동료와 조합 시 균형이 좋아집니다.",
      relationTips: ["타인 요구 수용 전 내 우선순위 1순위를 먼저 확인하기", "관계 갈등 시 사실-감정-요청 순서로 대화하기", "칭찬과 피드백을 동시에 전달해 소통 효율 높이기"],
    },
    ESTJ: {
      deep: "ESTJ는 사고(Te)의 구조화 능력과 감각(Si)의 현실 기준이 강한 관리자형입니다. 목표를 명확히 정리하고 실행 체계를 빠르게 구축합니다.",
      relation: "관계에서는 직설적이고 명확한 소통을 선호하며, 효율과 책임을 중심으로 신뢰를 쌓습니다.",
      work: "조직 운영, 역할 분배, 일정 관리와 같은 실행 영역에서 강력한 영향력을 발휘합니다.",
      stress: "통제력 상실이나 반복되는 비효율 상황에서 엄격함이 강해질 수 있습니다.",
      growth: "유연성과 공감의 언어를 결합하면 리더십이 더 설득력 있게 확장됩니다.",
      compatibility: "추진력 있는 유형과 높은 생산성을 만들고, 공감형 파트너와 조합 시 팀 안정성이 강화됩니다.",
      relationTips: ["지적 전 칭찬 또는 인정 포인트 1개 먼저 전달하기", "성과 압박 상황에서 합리적 완충시간을 의도적으로 확보하기", "결정 사유를 공유해 구성원 자율성과 수용성 높이기"],
    },
    ISFP: {
      deep: "ISFP는 감정(Fi)의 진정성과 감각(Se)의 현장 감각이 결합된 예술가형입니다. 자신의 감정과 가치, 현재 경험을 섬세하게 받아들이며 고유한 표현력을 발휘합니다.",
      relation: "관계에서는 부드럽고 따뜻하며, 적극적 과시는 적어도 가까운 사람에게 깊은 진심과 배려를 보입니다.",
      work: "디자인, 예술, 콘텐츠 등 감각적 표현이 중요한 환경에서 높은 몰입과 창의성을 보입니다.",
      stress: "감정을 혼자 감당하며 거리 두기 패턴이 나타날 수 있어 회복을 위한 개인 공간이 필요합니다.",
      growth: "내면의 감정과 재능을 꾸준히 외부로 표현할수록 영향력이 크게 확장됩니다.",
      compatibility: "존중과 자율성을 보장해 주는 파트너와 궁합이 좋고, 구조형 동료와 협업 시 실행 안정성이 올라갑니다.",
      relationTips: ["감정 과부하 전에 휴식 신호를 먼저 공유하기", "선호/비선호를 모호하게 넘기지 말고 짧게 명시하기", "창의 작업은 마감 직전보다 중간 점검 루틴 추가하기"],
    },
    ISTP: {
      deep: "ISTP는 사고(Ti)의 문제 분해 능력과 감각(Se)의 상황 대응력이 뛰어난 장인형입니다. 실제로 작동하는 해법을 빠르게 찾고 실전에서 성능을 검증하는 데 강합니다.",
      relation: "관계에서는 독립적이고 조용하지만, 중요한 사람에게는 실질적 도움으로 신뢰를 보여줍니다.",
      work: "기술 문제 해결, 시스템 이해, 긴급 대응과 같이 즉시 판단이 필요한 영역에서 강점을 발휘합니다.",
      stress: "지나친 간섭과 과도한 규칙에서 답답함이 커지며, 혼자 해결하려는 경향이 강해질 수 있습니다.",
      growth: "문제 해결 역량을 장기 목표와 연결하면 성과 지속성이 크게 향상됩니다.",
      compatibility: "자율성을 존중해 주는 파트너와 궁합이 좋으며, 기획형 동료와 조합 시 전체 완성도가 높아집니다.",
      relationTips: ["도움 요청 시 배경보다 원하는 결과를 먼저 명확히 공유하기", "단기 해결 후 장기 재발 방지 체크를 습관화하기", "중요 관계에서는 감정보다 행동만이 아닌 말로도 의도 설명하기"],
    },
    ESFP: {
      deep: "ESFP는 감각(Se)의 생동감과 감정(Fi)의 진정성이 결합된 연예인형입니다. 현재 경험을 풍부하게 누리며 사람들과의 상호작용에서 활력을 얻습니다.",
      relation: "관계에서는 친근하고 따뜻하며 분위기를 밝히는 역할을 자주 맡습니다. 즐거움 속에서도 진심 있는 연결을 중요하게 생각합니다.",
      work: "현장감, 실행력, 소통력이 필요한 환경에서 강점이 크며 서비스·이벤트·콘텐츠 영역에서 두각을 보입니다.",
      stress: "지루하고 제한적인 환경에서는 동기와 에너지가 빠르게 감소할 수 있습니다.",
      growth: "즐거움 중심의 강점에 지속 가능한 목표 구조를 더할 때 영향력이 장기화됩니다.",
      compatibility: "활동성과 정서적 교류를 존중하는 파트너와 잘 맞고, 계획형 동료와 협업 시 성과 안정성이 보완됩니다.",
      relationTips: ["재미 요소와 책임 요소를 일정에 동시에 배치하기", "즉흥 결정 전 핵심 조건 2개만 빠르게 확인하기", "관계 갈등 시 회피보다 짧은 대화로 빠르게 정리하기"],
    },
    ESTP: {
      deep: "ESTP는 감각(Se)의 즉시 상황 파악과 사고(Ti)의 현실 해법 도출이 강한 모험가형입니다. 변화가 큰 환경에서 빠른 판단과 행동으로 흐름을 전환하는 능력이 뛰어납니다.",
      relation: "관계에서는 활발하고 자신감 있는 소통을 보이며, 현장 감각으로 분위기를 주도하는 경우가 많습니다.",
      work: "긴급 상황 대응, 문제 돌파, 현장 중심 프로젝트에서 강점을 크게 발휘합니다.",
      stress: "압박 상황에서 충동적 선택이나 과도한 위험 감수가 늘어날 수 있습니다.",
      growth: "행동력에 장기 전략을 결합하면 단기 성과를 지속 가능한 성장으로 전환할 수 있습니다.",
      compatibility: "실행 속도를 이해해 주는 파트너와 잘 맞고, 장기 설계형 동료와 조합 시 균형이 좋아집니다.",
      relationTips: ["즉시 실행 전 리스크/리턴을 1분 점검하는 루틴 만들기", "갈등 상황에서 결론 전에 상대 의도 확인 질문 넣기", "단기 승리 후 장기 후속조치 책임자를 명확히 지정하기"],
    },
  };
  const typeProfile = TYPE_PROFILE_DETAILS[type] ?? TYPE_PROFILE_DETAILS.ISTJ;
  const episodeInsight = `${character.name}의 이 장면은 ${type}의 핵심 성향인 "${MBTI_SHORT_DESCS[type]}"이 실제 선택에서 어떻게 드러나는지를 보여줍니다. 감정적인 순간에도 기준을 잃지 않는 태도, 그리고 관계를 지키기 위한 행동이 이 유형의 장점으로 연결됩니다.`;
  const compatibilityStrategies = [
    typeProfile.compatibility,
    `${type}의 강점을 관계에 적용할 때는 성과 기준과 감정 기준을 분리해 대화하면 오해를 줄일 수 있습니다.`,
    "관계 피로가 높아질 때는 문제 해결 대화와 감정 정리 대화를 분리해 진행하는 것이 효과적입니다.",
  ];
  const communicationChecklist = [
    ...typeProfile.relationTips,
    "관계 회복 단계: 잘한 점 1개 + 개선점 1개 구조로 피드백하기",
  ];
  const profileDetailBlocks = [
    { title: "관계 스타일", body: typeProfile.relation },
    { title: "일하는 방식", body: typeProfile.work },
    { title: "스트레스 패턴", body: typeProfile.stress },
    { title: "성장 포인트", body: typeProfile.growth },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: `${type} 결과 | ${SITE_NAME}`,
    description: `MBTI 유형별 특징과 궁합을 분석하는 ${theme.label} 테스트 결과`,
    about: `${type} MBTI 성격 유형`,
    mainEntityOfPage: shareUrl,
  };

  return (
    <div className="space-y-16 animate-in fade-in pb-24">
      <JsonLd data={jsonLd} />

      <section className={`relative overflow-hidden rounded-[3rem] p-7 sm:p-16 bg-gradient-to-br ${theme.gradient} text-white shadow-[0_25px_60px_-15px_rgba(0,0,0,0.15)]`}>
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 blur-[130px] -translate-y-1/2 translate-x-1/2 rounded-full" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 blur-[100px] translate-y-1/2 -translate-x-1/2 rounded-full" />

        <div className="relative z-10 space-y-10">
          <div className="flex flex-col items-center text-center gap-6">
            <span className="px-6 py-2.5 rounded-full bg-white/15 backdrop-blur-md text-[11px] font-black tracking-[0.4em] uppercase border border-white/10">
              {SITE_TAGLINE}
            </span>
            <div className="space-y-4">
              <h1 className="text-6xl sm:text-8xl font-black font-serif tracking-widest drop-shadow-2xl">
                {type}
              </h1>
              <div className="h-1 w-20 bg-white/40 mx-auto rounded-full" />
              <p className="text-white/90 font-bold text-xl sm:text-2xl tracking-tight">{MBTI_SHORT_DESCS[type]}</p>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-2xl rounded-[3rem] p-7 sm:p-14 border border-white/20 flex flex-col items-center text-center gap-8 shadow-2xl">
            <div className="space-y-1">
              <div className="text-[11px] font-black text-white/50 uppercase tracking-[0.3em]">The Character That Matches Your Soul</div>
              <h2 className="text-[clamp(1.6rem,7vw,3.75rem)] font-black font-serif tracking-tight leading-none whitespace-nowrap">
                {character.name}
              </h2>
            </div>
            <p className="text-white text-base sm:text-xl leading-relaxed w-full max-w-none font-medium italic opacity-90 break-keep whitespace-normal px-2 text-center">
              {character.desc}
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white rounded-[3rem] p-7 sm:p-14 border border-gray-100 shadow-sm space-y-8">
        <div className="flex flex-col items-center gap-3 text-center">
          <h2 className="text-2xl font-black text-[#16324f] font-serif text-center">요약 인사이트</h2>
        </div>
        <blockquote className="border-l-4 border-[#16324f]/20 pl-4 text-gray-600 leading-relaxed italic">
          “{type} 유형은 {MBTI_SHORT_DESCS[type]} 성향을 중심으로, 관계와 목표 사이의 균형을 중요하게 여깁니다.”
        </blockquote>
        <ul className="list-disc list-inside text-sm text-gray-600 space-y-2">
          {summaryPoints.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      </section>

      <AdExperiment
        experimentKey="result_primary"
        className="bg-white rounded-[2rem] p-4 sm:p-6 border border-gray-100 shadow-sm"
        format="horizontal"
      />

      <section className="bg-white rounded-[3rem] p-7 sm:p-10 border border-gray-100 shadow-sm space-y-4">
        <div className="flex flex-col items-center gap-3 text-center">
          <h2 className="font-black text-[#16324f] text-xl font-serif text-center">ℹ️ 해석 가이드</h2>
        </div>
        <p className="text-sm text-gray-600 leading-relaxed max-w-3xl mx-auto">
          본 결과는 애니메이션 세계관을 바탕으로 한 엔터테인먼트 콘텐츠입니다. 스스로의 성향을 돌아보는 참고 자료로 활용해 주세요.
        </p>
      </section>

      {character.episodeNote && (
        <section className="bg-white rounded-[3rem] p-7 sm:p-14 border border-gray-100 shadow-sm space-y-8">
          <div className="flex flex-col items-center gap-3 text-center">
            <h2 className="font-black text-[#16324f] text-xl font-serif text-center">기억에 남는 장면</h2>
          </div>
          <div className="space-y-6">
            <p className="text-lg sm:text-xl font-serif text-gray-800 leading-[1.8] italic text-center px-4">
              {character.episodeNote}
            </p>
            <div className="max-w-4xl mx-auto rounded-2xl bg-[#f8fbff] border border-[#16324f]/10 p-5 sm:p-6">
              <h3 className="text-sm font-black text-[#16324f] tracking-wide mb-2">이 장면이 결과와 연결되는 이유</h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{episodeInsight}</p>
            </div>
          </div>
        </section>
      )}

      <section className="bg-[#16324f] rounded-[3rem] px-7 sm:px-14 pt-4 pb-8 sm:pt-8 sm:pb-12 text-white shadow-2xl space-y-10 relative overflow-hidden">
        <div className={`absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl ${theme.gradient} opacity-20 blur-[100px]`} />
        <div className="flex flex-col items-center gap-4 relative z-10 text-center">
          <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-xl text-indigo-300">🧠</div>
          <h2 className="font-black text-white text-xl font-serif text-center">유형별 성향 분석</h2>
        </div>
        <div className="relative z-10">
          <p className="text-lg text-white/80 leading-[2] whitespace-pre-wrap font-light">{MBTI_LONG_DESCS[type]}</p>
          <p className="text-lg text-white/80 leading-[2] whitespace-pre-wrap font-light mt-6">{typeProfile.deep}</p>
          <div className="mt-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {profileDetailBlocks.map((block) => (
              <article key={block.title} className="rounded-2xl bg-white/10 border border-white/20 backdrop-blur-md p-4 sm:p-5 space-y-2">
                <p className="text-[11px] font-black tracking-[0.2em] uppercase text-white/60">{block.title}</p>
                <p className="text-sm sm:text-[15px] leading-[1.8] text-white/90">{block.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white rounded-[3rem] p-7 sm:p-10 border border-gray-100 shadow-sm space-y-6">
        <div className="flex flex-col items-center gap-3 text-center">
          <h2 className="text-2xl font-black font-serif text-[#16324f] text-center">궁합 및 관계 패턴</h2>
        </div>
        <div className="rounded-2xl bg-[#f8fbff] border border-[#16324f]/10 p-4 sm:p-5">
          <p className="text-xs font-black tracking-[0.18em] uppercase text-[#16324f]/70 mb-2">Compatibility Snapshot</p>
          <p className="text-gray-700 leading-relaxed">
            {typeProfile.compatibility}
          </p>
        </div>
        <p className="text-gray-600 leading-relaxed">
          {type} 유형의 관계 강점은 "{MBTI_SHORT_DESCS[type]}"을 바탕으로 신뢰를 구축하는 데 있습니다. {typeProfile.compatibility}
          관계 만족도를 높이려면 성향의 차이를 우열이 아닌 역할 분담의 힌트로 해석하는 접근이 효과적입니다.
        </p>
        <p className="text-gray-600 leading-relaxed">
          특히 갈등 상황에서는 사실 판단과 감정 반응을 분리해 대화하면 오해를 줄일 수 있습니다. 이 페이지의 궁합 해석은
          절대적 매칭이 아니라, 서로 다른 성향이 어떻게 상호보완적으로 작동할 수 있는지에 대한 실전 가이드입니다.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="rounded-2xl bg-[#f8fbff] border border-[#16324f]/10 p-5">
            <h3 className="text-base font-black text-[#16324f] mb-3">관계 만족도를 높이는 실전 전략</h3>
            <ul className="list-disc list-inside text-sm text-gray-600 space-y-2">
              {compatibilityStrategies.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl bg-[#fdfcf9] border border-gray-100 p-5">
            <h3 className="text-base font-black text-[#16324f] mb-3">대화 체크리스트</h3>
            <ul className="list-disc list-inside text-sm text-gray-600 space-y-2">
              {communicationChecklist.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-white rounded-[3rem] p-7 sm:p-10 border border-gray-100 shadow-sm space-y-6">
        <div className="flex flex-col items-center gap-3 text-center">
          <h2 className="text-2xl font-black font-serif text-[#16324f] text-center">심리학적 근거</h2>
        </div>
        <div className="space-y-3">
          <h3 className="text-lg font-black text-[#16324f]">결과 해석의 기본 원리</h3>
          <p className="text-gray-600 leading-relaxed">
            본 결과는 MBTI의 네 지표(E/I, S/N, T/F, J/P)를 바탕으로 응답 경향을 해석합니다. 네 글자 유형은 절대적 낙인이
            아니라 상대적으로 우세한 선호를 요약한 값이며, 캐릭터 매칭은 이해를 돕기 위한 스토리 기반 예시입니다.
          </p>
        </div>
        <div className="space-y-3">
          <h3 className="text-lg font-black text-[#16324f]">과학적 한계와 활용 범위</h3>
          <p className="text-gray-600 leading-relaxed">
            MBTI는 실무와 대중 영역에서 널리 활용되지만, 심리측정 관점에서는 재검사 일관성과 이분법 분류의 한계가 보고됩니다.
            따라서 결과는 임상 진단이나 능력 평가가 아니라 자기탐색·대화 개선을 위한 참고 자료로 활용하는 것을 권장합니다.
          </p>
        </div>
        <div className="space-y-3">
          <h3 className="text-lg font-black text-[#16324f]">해석 시 권장 방식</h3>
          <ul className="list-disc list-inside text-sm text-gray-600 space-y-2">
            <li>유형을 고정 정체성으로 단정하지 않고, 현재의 선호 경향으로 이해하기</li>
            <li>관계 해석은 캐릭터 유사성보다 실제 행동 패턴과 맥락을 함께 보기</li>
            <li>필요 시 Big Five 등 검증된 특성 모델과 함께 교차 참고하기</li>
          </ul>
        </div>
        <h3 className="text-lg font-black text-[#16324f]">참고 문헌/출처</h3>
        <ul className="list-disc list-inside text-sm text-gray-500 space-y-2">
          <li>MBTI 성격 유형 이론의 4가지 지표 구조</li>
          <li>검사-재검사 신뢰도 및 이분법 분류 한계 관련 심리측정 연구</li>
          <li>성격심리학 개론과 성격 특성 모델 비교 연구</li>
          <li>인터랙티브 내러티브 기반 성향 파악 연구</li>
        </ul>
      </section>

      <ResultShareClient themeId={theme.id} type={type} shareUrl={shareUrl} imageUrl={imageUrl} />

      <section className="flex flex-col sm:flex-row justify-center items-center gap-4">
        <Link
          href="/select"
          className="w-full sm:w-auto px-12 py-4 rounded-full bg-[#16324f] text-white font-black text-lg shadow-xl shadow-[#16324f]/30 hover:-translate-y-1 transition-all active:scale-95"
        >
          다른 세계관 탐험하기
        </Link>
        <Link
          href={`/test/${theme.id}`}
          className="w-full sm:w-auto px-12 py-4 rounded-full bg-white border border-gray-200 text-[#16324f] font-black text-lg shadow-sm hover:bg-gray-50 transition-colors"
        >
          테스트 다시하기
        </Link>
      </section>

      <section className="bg-white rounded-[2rem] p-8 sm:p-10 border border-gray-100 shadow-sm space-y-6">
        <div className="flex flex-col items-center gap-3 text-center">
          <h2 className="text-2xl font-black font-serif text-[#16324f] text-center">관련 테스트</h2>
        </div>
        <div className="flex flex-wrap gap-3 justify-center">
          {Object.values(THEMES)
            .filter((item) => item.id !== theme.id)
            .slice(0, 2)
            .map((item) => (
              <Link key={item.id} href={`/test/${item.id}`} className="px-4 py-2 rounded-full bg-[#fdfcf9] border border-gray-100 text-sm font-bold text-[#16324f] hover:bg-white">
                {item.label} 테스트
              </Link>
            ))}
        </div>
      </section>
    </div>
  );
}
