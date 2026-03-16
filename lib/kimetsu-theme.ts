import type { ThemeContent, ThemeMeta } from "@/types";

export const KIMETSU_THEME_KO: ThemeMeta = {
  id: "kimetsu",
  label: "귀멸의 칼날",
  emoji: "🗡️",
  gradient: "from-[#0f172a] via-[#7c2d12] to-[#f59e0b]",
  accentColor: "#7c2d12",
  tags: ["귀살대", "호흡", "일륜도"],
};

export const KIMETSU_CONTENT_KO: ThemeContent = {
  questions: [
    {
      axis: "EI",
      prompt: "혹독한 최종 선별에서 살아남아 나비 저택으로 돌아왔다. 당신은?",
      options: [
        { value: "E", label: "\"다들 무사해서 다행이야!\" 동기들과 모여 밥을 먹으며 무용담을 나눈다." },
        { value: "I", label: "\"살아남았군...\" 조용히 방으로 들어가 다친 몸을 쉬게 한다." },
      ],
    },
    {
      axis: "EI",
      prompt: "압도적인 위압감을 뿜는 주들을 처음 마주했다. 당신의 행동은?",
      options: [
        { value: "E", label: "긴장되지만 큰 목소리로 인사하며 존재감을 각인시킨다." },
        { value: "I", label: "숨을 죽이고 그들의 분위기와 행동거지를 멀리서 관찰한다." },
      ],
    },
    {
      axis: "EI",
      prompt: "다음 임무 전까지 꿀맛 같은 휴식 시간이 주어졌다.",
      options: [
        { value: "E", label: "동료들과 번화가에 나가 우동도 먹고 시끌벅적하게 스트레스를 푼다." },
        { value: "I", label: "숲속 그늘에서 명상하거나 칼을 손질하며 차분히 시간을 보낸다." },
      ],
    },
    {
      axis: "EI",
      prompt: "주합 훈련 중 당신이 선호하는 훈련 방식은?",
      options: [
        { value: "E", label: "다른 대원과 대련하며 기합을 주고받고 에너지를 얻는 훈련." },
        { value: "I", label: "폭포수 밑 수련이나 개인 루틴으로 묵묵히 검을 휘두르는 훈련." },
      ],
    },
    {
      axis: "SN",
      prompt: "새로운 전집중 호흡의 형을 배울 때 가장 집중하는 것은?",
      options: [
        { value: "S", label: "발의 보폭, 산소량, 검을 쥐는 각도 같은 구체적 신체 감각." },
        { value: "N", label: "흐르는 물, 타오르는 불꽃 같은 심상을 그리며 호흡 흐름을 상상하는 것." },
      ],
    },
    {
      axis: "SN",
      prompt: "음산한 기운이 감도는 숲에 진입했다. 가장 먼저 신경 쓰이는 것은?",
      options: [
        { value: "S", label: "발자국, 부러진 나뭇가지, 옅은 피 냄새 같은 현실적 단서." },
        { value: "N", label: "\"뭔가 불길해.\" 공기의 흐름과 직감적으로 느껴지는 오한." },
      ],
    },
    {
      axis: "SN",
      prompt: "처음 보는 혈귀술을 쓰는 적을 만났다. 당신의 대처법은?",
      options: [
        { value: "S", label: "공격 속도, 궤도, 사정거리를 빠르게 읽으며 패턴부터 분석한다." },
        { value: "N", label: "술법의 발동 원리와 진짜 약점이 무엇인지 본질을 꿰뚫어 보려 한다." },
      ],
    },
    {
      axis: "SN",
      prompt: "일륜도의 색이 변했다. 당신의 첫 생각은?",
      options: [
        { value: "S", label: "이 색의 칼이 내구도나 절삭력에서 어떤 차이를 낼지 생각한다." },
        { value: "N", label: "이 색이 내 영혼과 운명의 어떤 면을 상징하는지 의미를 찾는다." },
      ],
    },
    {
      axis: "TF",
      prompt: "치열한 사투 끝에 혈귀의 목을 베었다. 재가 되어가는 혈귀가 눈물을 흘린다면?",
      options: [
        { value: "T", label: "\"인간을 잡아먹은 업이다.\" 냉정하게 상황을 정리한다." },
        { value: "F", label: "\"이 자도 한때는 인간이었겠지...\" 조용히 명복을 빌어 준다." },
      ],
    },
    {
      axis: "TF",
      prompt: "함께 임무에 나선 동료가 공포에 질려 다리가 풀렸다.",
      options: [
        { value: "T", label: "\"여기서 떨면 죽어!\" 팩트로 정신을 차리게 만든다." },
        { value: "F", label: "\"무서운 게 당연해. 내가 앞을 맡을게.\" 안심시키며 역할을 나눈다." },
      ],
    },
    {
      axis: "TF",
      prompt: "도망치는 하현의 혈귀와 피를 흘리는 민간인 중 하나만 먼저 선택해야 한다면?",
      options: [
        { value: "T", label: "더 큰 피해를 막기 위해 혈귀를 추격한다." },
        { value: "F", label: "눈앞의 생명을 외면할 수 없어 민간인 구조를 먼저 한다." },
      ],
    },
    {
      axis: "TF",
      prompt: "시노부가 \"왜 귀살대에 들어왔나요?\"라고 묻는다면?",
      options: [
        { value: "T", label: "\"비합리적인 혈귀라는 존재를 박멸하기 위해서입니다.\"라고 답한다." },
        { value: "F", label: "\"사랑하는 사람들을 지키고 슬픈 눈물을 끝내기 위해서요.\"라고 답한다." },
      ],
    },
    {
      axis: "JP",
      prompt: "까마귀가 새로운 임무 지역을 하달했다. 당신의 출발 준비는?",
      options: [
        { value: "J", label: "등꽃 독, 구급상자, 비상식량과 이동 경로까지 철저히 챙긴다." },
        { value: "P", label: "일단 일륜도부터 챙기고 \"가면서 생각하자!\"며 뛰어나간다." },
      ],
    },
    {
      axis: "JP",
      prompt: "임무 중 예상치 못하게 상현을 맞닥뜨렸다.",
      options: [
        { value: "J", label: "승산이 낮다고 판단해 일단 후퇴하고 주에게 지원을 요청한다." },
        { value: "P", label: "즉시 태세를 갖추고 내 한계를 시험할 기회로 받아들인다." },
      ],
    },
    {
      axis: "JP",
      prompt: "나비 저택에 배정받은 당신의 병실 상태는?",
      options: [
        { value: "J", label: "대원복과 일륜도가 정해진 자리마다 깔끔하게 정돈되어 있다." },
        { value: "P", label: "붕대와 약병이 널려 있지만 나름의 규칙 속에서 굴러간다." },
      ],
    },
    {
      axis: "JP",
      prompt: "당신의 훈련 스케줄 관리법은?",
      options: [
        { value: "J", label: "정해진 루틴을 비가 오나 눈이 오나 지키며 반복한다." },
        { value: "P", label: "컨디션과 영감에 따라 강약을 조절하며 유연하게 훈련한다." },
      ],
    },
  ],
  results: {
    ENFJ: {
      name: "카마도 탄지로",
      desc: "따뜻한 태양처럼 모두를 품는 공감형 리더.",
      longDesc: "탄지로는 타인의 고통을 깊이 읽고, 절망 속에서도 사람을 포기하지 않는 ENFJ입니다. 상처 입은 사람을 감싸고 동료를 이끄는 온기, 그리고 마지막까지 희망을 놓지 않는 도덕적 힘이 중심에 있습니다.",
      episodeNote: "명대사: \"잃어버린 것은 돌아오지 않아. 그래도 우리는 살아갈 수밖에 없어.\"",
    },
    ESFP: {
      name: "아가츠마 젠이츠",
      desc: "극한의 순간 본능으로 번개처럼 폭발하는 감각형.",
      longDesc: "젠이츠는 평소에는 감정 기복이 크고 요란하지만, 위기의 찰나에 신체 감각과 반응이 극단적으로 예리해지는 ESFP입니다. 현재 순간에 몰입했을 때 누구보다 압도적인 파괴력을 보여 줍니다.",
      episodeNote: "명대사: \"번개의 호흡 제1형, 벽력일섬.\"",
    },
    ESTP: {
      name: "하시비라 이노스케",
      desc: "야생의 감각으로 돌파하는 저돌적 전투광.",
      longDesc: "이노스케는 계산보다 몸이 먼저 움직이는 ESTP입니다. 낯선 상황도 겁내지 않고, 강한 상대와 직접 부딪치며 자신을 시험하는 데서 살아 있음을 느낍니다. 직감과 추진력이 전장의 흐름을 바꿉니다.",
      episodeNote: "명대사: \"저돌맹진! 저돌맹진!\"",
    },
    ISFJ: {
      name: "카마도 네즈코",
      desc: "조용히 사랑을 증명하는 헌신형 수호자.",
      longDesc: "네즈코는 말보다 행동으로 애정을 보여 주는 ISFJ입니다. 자신이 상처 입더라도 가족과 인간을 지키려는 태도, 그리고 묵묵한 보호 본능이 이 유형의 따뜻함과 책임감을 잘 보여 줍니다.",
      episodeNote: "스토리 포인트: 혈귀술 폭혈로 동료들을 지키며 헌신을 증명한 순간들.",
    },
    INFJ: {
      name: "우부야시키 카가야",
      desc: "부드러운 카리스마로 미래를 설계하는 통찰자.",
      longDesc: "카가야는 약한 몸에도 불구하고 사람의 마음과 조직의 흐름을 정확히 읽는 INFJ입니다. 개성 강한 주들을 하나로 묶고, 긴 시간에 걸쳐 귀살대의 미래를 설계하는 비전과 공감 능력이 돋보입니다.",
      episodeNote: "명대사: \"불멸이라는 것은 사람의 마음이다.\"",
    },
    INTJ: {
      name: "코쵸우 시노부",
      desc: "분노를 지성으로 정제한 치밀한 전략가.",
      longDesc: "시노부는 힘의 한계를 정확히 인식한 뒤, 독과 지식, 장기 전략으로 격차를 뒤집는 INTJ입니다. 미소 뒤에 감정을 감추고 끝까지 계획을 밀어붙이는 냉정함이 핵심입니다.",
      episodeNote: "명대사: \"그럼 독으로 죽이면 되겠네요.\"",
    },
    ISTJ: {
      name: "토미오카 기유",
      desc: "감정보다 책임과 원칙을 앞세우는 고요한 검사.",
      longDesc: "기유는 말이 적고 감정을 잘 드러내지 않지만, 자신이 세운 책임과 규율은 끝까지 지켜내는 ISTJ입니다. 외로운 방식으로 버티더라도 맡은 역할을 놓지 않는 무게감이 있습니다.",
      episodeNote: "명대사: \"생사여탈권을 타인에게 쥐여주지 마라!\"",
    },
    INTP: {
      name: "토키토 무이치로",
      desc: "안개처럼 흐르다 핵심만 베어내는 천재형 분석가.",
      longDesc: "무이치로는 평소에는 멍해 보여도 전투에 들어가면 모든 변수를 즉각 정리하는 INTP입니다. 불필요한 감정 소모 없이 논리와 최적화된 움직임으로 승부를 냅니다.",
      episodeNote: "명대사: \"저 구름의 이름이 뭐였더라...\"",
    },
    INFP: {
      name: "칸로지 미츠리",
      desc: "사랑과 낭만을 부끄러워하지 않는 감성형 전사.",
      longDesc: "미츠리는 풍부한 감정과 로맨틱한 상상력을 가진 INFP입니다. 남들과 다르다는 이유로 상처받기도 하지만, 결국 자기다움을 긍정하며 사랑의 힘으로 싸우는 순수함이 매력입니다.",
      episodeNote: "명대사: \"나, 남몰래 두근거려버렸어!\"",
    },
    ENFP: {
      name: "렌고쿠 쿄쥬로",
      desc: "가슴을 뜨겁게 만드는 영감형 불꽃 리더.",
      longDesc: "렌고쿠는 넘치는 열정과 흔들리지 않는 낙관으로 모두의 마음에 불을 붙이는 ENFP입니다. 자신이 무너지는 순간에도 후배들에게 용기와 방향을 남기는 강한 생명력이 있습니다.",
      episodeNote: "명대사: \"마음을 불태워라. 한계를 넘어라!\"",
    },
    ENTJ: {
      name: "우즈이 텐겐",
      desc: "전장을 화려하게 지휘하는 카리스마형 지휘관.",
      longDesc: "텐겐은 화려함 속에 냉정한 판단과 강한 자기 통제를 감춘 ENTJ입니다. 목표를 위해 전장을 빠르게 읽고 사람을 배치하며, 위험한 판에서도 주도권을 쥐고 움직입니다.",
      episodeNote: "명대사: \"화려하게 간다!\"",
    },
    ESTJ: {
      name: "이구로 오바나이",
      desc: "원칙과 위계를 매섭게 지키는 엄격한 감시자.",
      longDesc: "오바나이는 자신에게도 타인에게도 높은 기준을 들이대는 ESTJ입니다. 말은 독하지만 그 밑바닥에는 귀살대를 지켜야 한다는 강한 책임감이 놓여 있습니다.",
      episodeNote: "명대사: \"신용하지 않는다. 신용하지 않아.\"",
    },
    ESFJ: {
      name: "히메지마 교메이",
      desc: "눈물과 자비로 모두를 감싸는 바위 같은 수호자.",
      longDesc: "교메이는 타인의 고통을 깊이 슬퍼하면서도, 정작 전투에서는 누구보다 단단하게 앞에 서는 ESFJ입니다. 공동체를 지키기 위한 보호 본능과 따뜻한 연민이 함께 드러납니다.",
      episodeNote: "명대사: \"아아, 나무아미타불.\"",
    },
    ISFP: {
      name: "츠유리 카나오",
      desc: "침묵 속에 섬세한 감정을 품은 조용한 꽃.",
      longDesc: "카나오는 감정을 밖으로 쉽게 드러내지 않지만, 내면에는 강렬한 감수성과 아름다운 집중력을 품은 ISFP입니다. 스스로 결정하지 못하던 상태를 넘어 자기 의지를 회복해 가는 흐름이 인상적입니다.",
      episodeNote: "명대사: \"어차피 다 아무래도 좋으니까, 스스로 정할 수 없어.\"",
    },
    ISTP: {
      name: "시나즈가와 사네미",
      desc: "몸으로 부딪쳐 답을 내는 사나운 실전형.",
      longDesc: "사네미는 상처투성이가 되더라도 현장에서 직접 부딪치며 결과를 만들어 내는 ISTP입니다. 거친 말투와 달리 상황 판단은 빠르고, 실전에서 필요한 행동만 남기는 냉혹한 효율이 특징입니다.",
      episodeNote: "명대사: \"혈귀는 전부 죽여버리겠다!\"",
    },
    ENTP: {
      name: "도우마",
      desc: "감정을 실험하듯 소비하는 차가운 호기심의 혈귀.",
      longDesc: "도우마는 인간의 감정을 진심으로 이해하지 못한 채, 자극과 새로움 자체를 즐기는 ENTP입니다. 도덕을 비웃고 사람의 반응을 관찰하며 노는 모습이 위험한 창의성과 공허함을 동시에 드러냅니다.",
      episodeNote: "명대사: \"인간은 참 불쌍해. 내가 구원해 줄게.\"",
    },
  },
};

export const KIMETSU_THEME_EN: ThemeMeta = {
  id: "kimetsu",
  label: "Demon Slayer",
  emoji: "🗡️",
  gradient: "from-[#0f172a] via-[#7c2d12] to-[#f59e0b]",
  accentColor: "#7c2d12",
  tags: ["Corps", "Breathing", "Nichirin"],
};

export const KIMETSU_CONTENT_EN: ThemeContent = {
  questions: [
    {
      axis: "EI",
      prompt: "You survived Final Selection and returned to the Butterfly Mansion. You...",
      options: [
        { value: "E", label: "Gather everyone, share food, and talk through what happened." },
        { value: "I", label: "Slip quietly to your room and recover alone in silence." },
      ],
    },
    {
      axis: "EI",
      prompt: "You meet the Hashira for the first time. You...",
      options: [
        { value: "E", label: "Shout a firm greeting and make yourself known." },
        { value: "I", label: "Stay quiet and observe their pressure and behavior first." },
      ],
    },
    {
      axis: "EI",
      prompt: "You suddenly get real free time before the next mission.",
      options: [
        { value: "E", label: "Head into town with allies, eat loudly, and burn off stress together." },
        { value: "I", label: "Sit under a tree, meditate, and maintain your sword in peace." },
      ],
    },
    {
      axis: "EI",
      prompt: "During Hashira Training, which method fits you more?",
      options: [
        { value: "E", label: "Spar with others, exchange shouts, and build energy together." },
        { value: "I", label: "Train alone under a waterfall or stick to a quiet personal target." },
      ],
    },
    {
      axis: "SN",
      prompt: "When learning a new Total Concentration form, what do you focus on?",
      options: [
        { value: "S", label: "Stride length, oxygen control, grip angle, and exact body mechanics." },
        { value: "N", label: "The image of water, flame, or wind flowing through your mind." },
      ],
    },
    {
      axis: "SN",
      prompt: "You enter a forest full of ominous presence. What hits you first?",
      options: [
        { value: "S", label: "Tracks, broken branches, and the smell of blood." },
        { value: "N", label: "A bad feeling in the air and a chill you cannot explain." },
      ],
    },
    {
      axis: "SN",
      prompt: "You face a demon with a Blood Demon Art you have never seen. You...",
      options: [
        { value: "S", label: "Track speed, trajectory, range, and attack patterns immediately." },
        { value: "N", label: "Look for the hidden mechanism and the true weakness underneath it." },
      ],
    },
    {
      axis: "SN",
      prompt: "Your Nichirin blade changes color. Your first thought is...",
      options: [
        { value: "S", label: "How will this affect durability or cutting performance?" },
        { value: "N", label: "What does this color symbolize about my soul?" },
      ],
    },
    {
      axis: "TF",
      prompt: "A defeated demon dissolves into ash while crying. You...",
      options: [
        { value: "T", label: "Stay cold. Their sins do not deserve sympathy." },
        { value: "F", label: "Recognize that they were once human and quietly pray for them." },
      ],
    },
    {
      axis: "TF",
      prompt: "Your partner freezes in fear during a mission. You...",
      options: [
        { value: "T", label: "Snap them back with hard truth and direct command." },
        { value: "F", label: "Calm them first and give them a manageable role beside you." },
      ],
    },
    {
      axis: "TF",
      prompt: "Choose one first: a fleeing Lower Rank demon or a bleeding civilian.",
      options: [
        { value: "T", label: "Chase the demon before more lives are endangered." },
        { value: "F", label: "Save the life in front of you before anything else." },
      ],
    },
    {
      axis: "TF",
      prompt: "Shinobu asks why you joined the Corps. You answer...",
      options: [
        { value: "T", label: "To eliminate demons, an irrational threat that must be removed." },
        { value: "F", label: "To protect the people I love and end needless tears." },
      ],
    },
    {
      axis: "JP",
      prompt: "Kasugai Crow assigns a new mission zone. You prepare by...",
      options: [
        { value: "J", label: "Packing medicine, wisteria poison, food, and memorizing the route." },
        { value: "P", label: "Grabbing your blade first and figuring the rest out on the way." },
      ],
    },
    {
      axis: "JP",
      prompt: "You unexpectedly encounter an Upper Rank demon mid-mission.",
      options: [
        { value: "J", label: "Assess the odds, fall back, and request Hashira support." },
        { value: "P", label: "Step in immediately and treat it as a test of your limit." },
      ],
    },
    {
      axis: "JP",
      prompt: "What does your Butterfly Mansion room look like?",
      options: [
        { value: "J", label: "Uniform folded cleanly, blade placed exactly where it belongs." },
        { value: "P", label: "Bandages and medicine are scattered, but you know your own system." },
      ],
    },
    {
      axis: "JP",
      prompt: "How do you manage your training schedule?",
      options: [
        { value: "J", label: "Keep the same routine every day, no matter what." },
        { value: "P", label: "Push hard on good days and rest when your body or instinct says so." },
      ],
    },
  ],
  results: {
    ENFJ: {
      name: "Tanjiro Kamado",
      desc: "A warm-hearted guide who leads through empathy and hope.",
      longDesc: "Tanjiro is the ENFJ ideal in action. He understands pain deeply, refuses to discard people, and keeps moving others forward with compassion and conviction.",
      episodeNote: "Core line: \"What was lost will not return. Even so, we have to keep living.\"",
    },
    ESFP: {
      name: "Zenitsu Agatsuma",
      desc: "An emotional spark who becomes lightning in true danger.",
      longDesc: "Zenitsu fits ESFP through intense outward emotion and explosive instinct under pressure. In the decisive moment, his body reads the battlefield faster than thought.",
      episodeNote: "Core line: \"Thunder Breathing, First Form: Thunderclap and Flash.\"",
    },
    ESTP: {
      name: "Inosuke Hashibira",
      desc: "A wild-force fighter who crashes straight into the battle.",
      longDesc: "Inosuke is pure ESTP momentum: physical instinct, fearless confrontation, and joy in testing himself against stronger opponents.",
      episodeNote: "Core line: \"Rush! Charge!\"",
    },
    ISFJ: {
      name: "Nezuko Kamado",
      desc: "A quiet guardian who proves love through action.",
      longDesc: "Nezuko shows ISFJ devotion through protection, sacrifice, and silent loyalty. Even after becoming a demon, her first instinct remains guarding family and humans.",
      episodeNote: "Story note: Her Blood Burst moments reveal quiet but absolute devotion.",
    },
    INFJ: {
      name: "Kagaya Ubuyashiki",
      desc: "A gentle visionary who holds the Corps together.",
      longDesc: "Kagaya represents INFJ foresight, calm charisma, and moral vision. He sees people clearly and gives strong personalities a shared direction.",
      episodeNote: "Core line: \"What is immortal is the human heart.\"",
    },
    INTJ: {
      name: "Shinobu Kocho",
      desc: "A precise strategist who turns rage into method.",
      longDesc: "Shinobu fits INTJ through calculation, long memory, and cold strategic patience. She overcomes raw disadvantage with intelligence and chemical design.",
      episodeNote: "Core line: \"Then I suppose poison will do.\"",
    },
    ISTJ: {
      name: "Giyu Tomioka",
      desc: "A reserved protector driven by duty and principle.",
      longDesc: "Giyu carries ISTJ restraint, discipline, and responsibility. He rarely explains himself, but he follows the rules he has chosen with unwavering seriousness.",
      episodeNote: "Core line: \"Do not leave your life and death in someone else's hands!\"",
    },
    INTP: {
      name: "Muichiro Tokito",
      desc: "A mist-like prodigy who sees the cleanest answer fast.",
      longDesc: "Muichiro reflects INTP through detachment, rapid pattern reading, and elegant efficiency. His mind clears the noise and lands on the essential move.",
      episodeNote: "Core line: \"What was the name of that cloud again...?\"",
    },
    INFP: {
      name: "Mitsuri Kanroji",
      desc: "A romantic fighter who turns sensitivity into strength.",
      longDesc: "Mitsuri embodies INFP through emotional richness, longing to belong, and eventual self-acceptance. She fights without abandoning tenderness or wonder.",
      episodeNote: "Core line: \"My heart secretly started racing!\"",
    },
    ENFP: {
      name: "Kyojuro Rengoku",
      desc: "A blazing inspirer who ignites courage in others.",
      longDesc: "Rengoku is ENFP at full flame: passionate, uplifting, and unforgettable. His optimism does not ignore tragedy, but answers it with spirit and action.",
      episodeNote: "Core line: \"Set your heart ablaze. Go beyond your limits!\"",
    },
    ENTJ: {
      name: "Tengen Uzui",
      desc: "A commanding leader who turns the battlefield into a performance.",
      longDesc: "Tengen matches ENTJ through commanding presence, strategic control, and confidence under pressure. Beneath the flash is strict discipline and sharp leadership.",
      episodeNote: "Core line: \"Let's make this flashy!\"",
    },
    ESTJ: {
      name: "Obanai Iguro",
      desc: "A severe guardian of rank, rules, and standards.",
      longDesc: "Obanai shows ESTJ through strict judgment, sharp hierarchy awareness, and heavy responsibility. His harshness is tied to protecting the Corps' structure.",
      episodeNote: "Core line: \"I do not trust you. I do not trust you at all.\"",
    },
    ESFJ: {
      name: "Gyomei Himejima",
      desc: "A compassionate pillar who protects like stone.",
      longDesc: "Gyomei reflects ESFJ warmth and guardianship. He grieves for suffering deeply yet stands as the strongest shield when people need safety.",
      episodeNote: "Core line: \"Namu Amida Butsu.\"",
    },
    ISFP: {
      name: "Kanao Tsuyuri",
      desc: "A quiet flower with deep feeling beneath the surface.",
      longDesc: "Kanao fits ISFP through internal sensitivity, careful expression, and beauty in focused action. Her arc is about slowly reclaiming her own will.",
      episodeNote: "Core line: \"I cannot decide for myself. I do not really care anyway.\"",
    },
    ISTP: {
      name: "Sanemi Shinazugawa",
      desc: "A brutal realist who proves everything in combat.",
      longDesc: "Sanemi is ISTP through relentless field action, quick judgment, and stripped-down efficiency. He prefers outcomes over explanation and trusts what survives reality.",
      episodeNote: "Core line: \"I will kill every demon.\"",
    },
    ENTP: {
      name: "Doma",
      desc: "A smiling monster driven by curiosity without empathy.",
      longDesc: "Doma reflects ENTP at its coldest: fascinated by reactions, detached from ordinary morality, and always seeking fresh stimulation from people and pain.",
      episodeNote: "Core line: \"Humans are so pitiful. I will save you.\"",
    },
  },
};
