import { DashboardData } from './types';

export const dashboardData: DashboardData = {
  meta: { lastUpdated: '2025.02.05' },
  fandom: {
    profile: {
      displayName: '셀럽뷰티',
      tags: [
        { label: '뷰티 인플루언서', tone: 'brand' },
        { label: '스킨케어 전문', tone: 'purple' },
        { label: 'MZ세대 타겟', tone: 'blue' }
      ],
      platform: 'Instagram',
      handle: '@celebeauty_official',
      profileUrl: 'https://instagram.com/celebeauty_official',
      stats: { followers: '125.3K', avgViews: '45.2K' },
      commerceDNA: {
        subtitleLines: ['뷰티 & 스킨케어 전문 채널', 'MZ세대 여성 타겟 콘텐츠'],
        cards: [
          { label: '핵심 강점', title: '높은 신뢰도', subtitle: '전문성 기반 리뷰', tone: 'brand', icon: 'BadgeCheck' },
          { label: '콘텐츠 특징', title: '진정성 있는 후기', subtitle: '실제 사용 경험 공유', tone: 'purple', icon: 'Heart' },
          { label: '협업 적합도', title: '브랜드 친화적', subtitle: '자연스러운 PPL 연출', tone: 'blue', icon: 'Sparkles' }
        ]
      }
    },
    kpi: {
      scaleAndReach: [
        { label: '팔로워', value: '125.3K', sub: '+12.5% (최근 30일)', highlight: true, tone: 'brand' },
        { label: '평균 도달', value: '45.2K', sub: '팔로워 대비 36%', tone: 'purple' },
        { label: '월 콘텐츠', value: '24건', sub: '주 6회 업로드', tone: 'blue' },
        { label: '성장률', value: '+18%', sub: '업계 평균 대비 2.3배', highlight: true, tone: 'emerald' }
      ],
      audienceFit: {
        distribution: [
          { label: '25-34세 여성', value: 68 },
          { label: '18-24세 여성', value: 22 },
          { label: '기타', value: 10 }
        ],
        mainTarget: { label: '25-34세 여성', percent: '68%' },
        coreSegment: { label: '뷰티 관심 MZ세대', percent: '85%' },
        notes: [
          '핵심 오디언스는 **25-34세 여성**으로 전체의 68%를 차지하며, 이들은 스킨케어 제품에 대한 높은 구매력을 보유',
          '2차 타겟인 **18-24세 여성**(22%)은 트렌드 민감도가 높아 바이럴 확산에 기여'
        ]
      },
      engagement: {
        avgLikes: { value: '3,245', rate: '2.6%' },
        avgComments: { value: '156', rate: '0.12%' },
        commentLikeRatio: '4.8%',
        engagementRate: { value: '2.72%', note: '업계 평균(1.8%) 대비 1.5배 높음' },
        formatShare: { value: '릴스 65%', note: '숏폼 콘텐츠 중심 전략' }
      }
    },
    coreDefinition: {
      headline: '신뢰 기반의 뷰티 인플루언서',
      badgeLabel: '핵심 정의',
      description: '셀럽뷰티는 **진정성 있는 제품 리뷰**와 **전문적인 스킨케어 지식**을 바탕으로 팔로워들의 높은 신뢰를 확보한 채널입니다. 단순 광고가 아닌 **실제 사용 경험**을 공유하며, 이를 통해 팔로워들의 구매 결정에 직접적인 영향을 미치고 있습니다.'
    },
    evidence: [
      {
        title: '높은 댓글 참여율',
        subtitle: '업계 평균 2배',
        description: '댓글에서 **제품 문의 및 추천 요청**이 활발하게 이루어지며, 이는 팔로워들이 채널을 **신뢰할 수 있는 정보원**으로 인식하고 있음을 보여줍니다.',
        icon: 'MessageCircle'
      },
      {
        title: '제품 태그 클릭률',
        subtitle: '평균 대비 180%',
        description: '제품 태그 클릭률이 업계 평균 대비 **180% 높게** 나타나며, 이는 팔로워들의 **구매 의향**이 매우 높음을 의미합니다.',
        icon: 'MousePointerClick'
      },
      {
        title: '저장 비율',
        subtitle: '게시물당 평균 8.2%',
        description: '저장 비율이 **8.2%**로 높게 나타나며, 팔로워들이 콘텐츠를 **나중에 참고하기 위해 보관**하는 행동을 보입니다.',
        icon: 'Bookmark'
      }
    ],
    deepDive: [
      {
        id: 1,
        icon: 'Users',
        title: '팬덤 충성도',
        mainValue: '32%',
        subValue: '반복 댓글 사용자',
        reasonTitle: '분석 배경',
        reason: '전체 댓글 중 32%가 **반복 방문 사용자**로부터 발생하여 높은 팬덤 충성도를 보여줍니다.',
        insightTitle: '비즈니스 인사이트',
        insight: '충성 팬덤은 **브랜드 협업 시 높은 전환율**을 보장하며, 장기적 파트너십에 적합합니다.'
      },
      {
        id: 2,
        icon: 'TrendingUp',
        title: '콘텐츠 성과',
        mainValue: '52K',
        subValue: '릴스 평균 조회',
        reasonTitle: '분석 배경',
        reason: '릴스 콘텐츠의 평균 조회수가 **52K**로 피드 게시물 대비 2.3배 높은 성과를 보입니다.',
        insightTitle: '비즈니스 인사이트',
        insight: '숏폼 콘텐츠 중심 전략이 효과적이며, **릴스 협업**을 우선 고려해야 합니다.'
      },
      {
        id: 3,
        icon: 'Eye',
        title: '바이럴 효과',
        mainValue: '12%',
        subValue: '탐색탭 도달',
        reasonTitle: '분석 배경',
        reason: '전체 콘텐츠 중 **12%**가 탐색 탭을 통해 비팔로워에게 도달하여 신규 유입을 견인합니다.',
        insightTitle: '비즈니스 인사이트',
        insight: '바이럴 잠재력이 높아 **신규 브랜드 인지도 확대**에 효과적입니다.'
      }
    ],
    funnel: {
      title: '구매 여정 분석',
      subtitle: '팔로워의 구매 결정 과정',
      steps: [
        { step: '01', title: '인지', subtitle: '콘텐츠 발견', description: '릴스/탐색 탭 통한 유입 45K', icon: 'Eye', highlight: false },
        { step: '02', title: '관심', subtitle: '프로필 방문', description: '관심 전환율 27%로 12K 방문', icon: 'User', highlight: false },
        { step: '03', title: '고려', subtitle: '제품 탐색', description: '태그 클릭 & 저장 4.8K', icon: 'Search', highlight: true },
        { step: '04', title: '구매', subtitle: '링크 클릭', description: '최종 전환율 2.7%로 1.2K 클릭', icon: 'ShoppingBag', highlight: true }
      ]
    },
    buyingTriggers: {
      relationship: {
        title: '팔로워와의 관계',
        icon: 'Heart',
        quote: '"진짜 써보고 추천하는 게 느껴져요"',
        description: '팔로워들은 채널을 **친한 언니 같은 존재**로 인식하며, 이러한 **친밀한 관계성**이 구매 결정에 핵심적인 영향을 미칩니다.',
        tags: ['신뢰', '친밀감', '진정성']
      },
      motivation: {
        title: '구매 동기 요인',
        icon: 'Zap',
        points: [
          { label: '솔직한 평가', quote: '실제 사용 후기와 솔직한 평가가 신뢰를 줌' },
          { label: '맞춤 추천', quote: '피부 타입별 맞춤 추천이 도움됨' },
          { label: '가성비 발굴', quote: '가성비 제품 발굴 능력이 뛰어남' }
        ],
        keyTrigger: '**솔직한 장단점 비교**가 가장 강력한 구매 트리거로 작용'
      }
    },
    swot: {
      opportunity: {
        badge: '기회 요인',
        title: '프리미엄 브랜드 협업 확대',
        tone: 'brand',
        observation: {
          label: '관찰',
          text: '최근 프리미엄 스킨케어에 대한 콘텐츠 반응이 **40% 증가**했습니다.',
          icon: 'TrendingUp'
        },
        strategyName: { title: '프리미엄 라인업 확장', subtitle: '고가 제품 리뷰 강화' },
        logic: '팔로워 연령대(25-34)의 **구매력 상승**과 맞물려, 프리미엄 제품 협업 시 높은 전환율이 기대됩니다.',
        actionPlan: [
          { title: '월간 협업', description: '월 2회 프리미엄 브랜드 협업 콘텐츠 제작', icon: 'Calendar' },
          { title: '시리즈 기획', description: '럭셔리 스킨케어 루틴 시리즈 기획', icon: 'Layers' },
          { title: 'VIP 이벤트', description: 'VIP 팔로워 대상 샘플링 이벤트', icon: 'Gift' }
        ],
        expectedEffect: '프리미엄 협업 단가 **30% 상승** 및 브랜드 포트폴리오 다각화'
      },
      risk: {
        badge: '리스크 요인',
        title: '과도한 광고 콘텐츠',
        tone: 'slate',
        observation: {
          label: '관찰',
          text: '최근 광고 콘텐츠 비율이 **35%**로 증가하며 일부 팔로워 이탈 징후가 감지됩니다.',
          icon: 'AlertCircle'
        },
        strategyName: { title: '콘텐츠 밸런스 조정', subtitle: '광고/오가닉 비율 관리' },
        logic: '광고 콘텐츠 과다는 **신뢰도 하락**으로 이어질 수 있으며, 장기적으로 채널 가치를 훼손할 위험이 있습니다.',
        actionPlan: [
          { title: '비율 관리', description: '광고 콘텐츠 비율 25% 이하 유지', icon: 'PieChart' },
          { title: '품질 강화', description: '오가닉 콘텐츠 품질 강화', icon: 'Star' },
          { title: '투명성', description: '협찬 표기 투명성 제고', icon: 'Shield' }
        ],
        expectedEffect: '팔로워 이탈률 **50% 감소** 및 장기 신뢰도 유지'
      }
    },
    executiveSummary: [
      {
        title: '채널 핵심 가치',
        subtitle: '신뢰 기반 인플루언서',
        description: '셀럽뷰티는 **진정성과 전문성**을 기반으로 한 뷰티 인플루언서 채널로, 25-34세 여성 타겟에서 **높은 신뢰도와 구매 전환력**을 보유하고 있습니다.',
        tag: '핵심 가치',
        tone: 'brand',
        icon: 'Crown'
      },
      {
        title: '협업 추천',
        subtitle: '프리미엄 브랜드 최적',
        description: '스킨케어 중심의 **프리미엄 브랜드 협업**에 최적화되어 있으며, 특히 **Before/After 포맷**의 콘텐츠에서 높은 성과가 예상됩니다.',
        tag: '협업 적합도',
        tone: 'purple',
        icon: 'Rocket'
      },
      {
        title: '주의사항',
        subtitle: '콘텐츠 밸런스 필요',
        description: '광고 콘텐츠 비율 관리가 필요하며, **오가닉 콘텐츠와의 밸런스**를 유지하여 채널 신뢰도를 보존해야 합니다.',
        tag: '리스크 관리',
        tone: 'slate',
        icon: 'AlertCircle'
      }
    ]
  },
  content: {
    hero: {
      badgeLabel: '콘텐츠 전략 분석',
      confidentialLabel: 'Confidential',
      displayName: '셀럽뷰티',
      mainTitle: '신뢰 기반 뷰티 콘텐츠의 정석',
      subTitle: 'MZ세대 여성을 사로잡는 진정성 있는 스킨케어 리뷰 채널',
      subjectBadge: { label: '분석 대상', initials: 'CB', handle: '@celebeauty_official' }
    },
    intro: {
      title: '채널 콘텐츠 개요',
      paragraphs: [
        '셀럽뷰티 채널은 **스킨케어 제품 리뷰**를 핵심 콘텐츠로, 25-34세 여성 타겟에게 **신뢰할 수 있는 뷰티 정보**를 제공합니다. 단순 제품 소개가 아닌 **실제 사용 경험**과 **솔직한 장단점 분석**을 통해 팔로워들의 구매 결정을 돕고 있습니다.',
        '콘텐츠 형식은 **릴스(65%)** 중심의 숏폼 전략을 채택하고 있으며, 특히 **Before/After 포맷**이 가장 높은 참여율을 기록합니다. 이는 시각적으로 효과를 증명하며 **신뢰도를 강화**하는 핵심 전략입니다.'
      ]
    },
    coreLogic: [
      {
        label: '핵심 전략 01',
        title: '진정성 기반 리뷰',
        subTitle: '솔직한 장단점 분석',
        quoteLines: ['"광고지만 진짜 좋아서 추천"', '"단점도 솔직하게 말해줘서 믿음이 가요"'],
        bullets: ['실제 사용 경험 공유', '장단점 균형있는 분석', '피부 반응 솔직한 공개'],
        highlightQuote: '진정성이 신뢰의 핵심',
        description: '광고임에도 **솔직한 장단점**을 언급하여 팔로워 신뢰 확보. 이것이 셀럽뷰티의 차별화 포인트입니다.',
        tone: 'brand',
        icon: 'CheckCircle2'
      },
      {
        label: '핵심 전략 02',
        title: '피부 타입별 맞춤 정보',
        subTitle: '개인화된 추천 시스템',
        quoteLines: ['"내 피부 타입에 맞는 추천이라 도움돼요"'],
        bullets: ['건성/지성/민감성 분류', '피부 고민별 솔루션', '성분 기반 추천'],
        highlightQuote: '맞춤형 정보가 전환의 핵심',
        description: '**건성/지성/민감성** 등 피부 타입별로 세분화된 추천을 제공하여 개인화된 가치 전달.',
        tone: 'purple',
        icon: 'Layers'
      },
      {
        label: '핵심 전략 03',
        title: '트렌드 선도력',
        subTitle: '빠른 신제품 리뷰',
        quoteLines: ['"항상 새로운 제품을 먼저 알려줘요"'],
        bullets: ['신제품 선제적 리뷰', '뷰티 트렌드 분석', '핫템 발굴'],
        highlightQuote: '트렌드 리더십이 팔로워 유입의 핵심',
        description: '신제품 및 **뷰티 트렌드**를 빠르게 분석하여 팔로워들에게 최신 정보를 선제적으로 제공.',
        tone: 'blue',
        icon: 'Zap'
      }
    ],
    requirements: {
      title: '브랜드 협업 필수 조건',
      subtitle: '성공적인 협업을 위한 핵심 요구사항',
      items: [
        {
          id: 1,
          patternLabel: '필수 조건',
          statusBadge: '최우선',
          statusTone: 'brand',
          title: '제품 품질 검증',
          subTitle: '실제 효과가 검증된 제품만',
          description: '실제 효과가 검증된 제품만 협업 진행. **성분 분석** 및 **실사용 테스트** 필수.',
          footer: { type: 'checks', items: ['성분 안전성 검증', '실사용 2주 이상 테스트', '피부 반응 모니터링'] },
          icon: 'ShieldCheck',
          iconTone: 'brand'
        },
        {
          id: 2,
          patternLabel: '필수 조건',
          statusBadge: '중요',
          statusTone: 'purple',
          title: '솔직한 리뷰 보장',
          subTitle: '단점 언급 가능해야 함',
          description: '장점뿐 아니라 **단점도 언급 가능**해야 함. 100% 긍정 리뷰 강요 시 협업 거절.',
          footer: { type: 'quotes', items: ['"단점도 말할 수 있어야 진정성이 유지됩니다"', '"팔로워 신뢰가 최우선입니다"'] },
          icon: 'FileText',
          iconTone: 'purple'
        },
        {
          id: 3,
          patternLabel: '권장 조건',
          statusBadge: '권장',
          statusTone: 'blue',
          title: '타겟 적합성',
          subTitle: '25-34세 여성 스킨케어',
          description: '25-34세 여성, 스킨케어 관심층에 **적합한 제품**이어야 함. 타겟 미스매치 시 효과 저하.',
          footer: { type: 'checks', items: ['25-34세 여성 타겟', '스킨케어 카테고리', '합리적 가격대'] },
          icon: 'Users',
          iconTone: 'blue'
        }
      ]
    },
    strategies: [
      {
        id: 1,
        title: 'Before/After 포맷 강화',
        subTitle: '시각적 증거 기반 신뢰 구축',
        icon: 'ScanFace',
        tone: 'brand',
        keyItem: 'Before/After 콘텐츠 비율 40%로 확대',
        context: '**Before/After 콘텐츠**가 일반 리뷰 대비 **2.3배 높은 참여율**을 기록하며, 제품 효과를 시각적으로 증명하는 가장 효과적인 포맷입니다.',
        dataProof: '참여율 4.2% (일반 리뷰 1.8% 대비 2.3배)',
        spec: '2주/4주 사용 후기 시리즈화, 조명/각도 표준화',
        guide: {
          concept: '시각적 증거로 신뢰 구축',
          intro: '"오늘은 2주간 사용한 결과를 보여드릴게요"',
          action: 'Before 촬영 → 제품 소개 → After 비교 → 솔직 평가',
          ment: '"확실히 달라졌죠? 근데 솔직히 말씀드리면..."'
        }
      },
      {
        id: 2,
        title: '피부 타입별 시리즈',
        subTitle: '개인화된 콘텐츠 전략',
        icon: 'BrainCircuit',
        tone: 'purple',
        keyItem: '건성/지성/민감성/복합성 4개 시리즈 구축',
        context: '팔로워들의 가장 많은 **DM 질문**이 "내 피부 타입에 맞는 제품 추천"이며, 이를 시리즈 콘텐츠로 체계화할 필요가 있습니다.',
        dataProof: 'DM 질문 중 45%가 피부 타입 관련',
        spec: '피부 타입 자가진단 콘텐츠, 타입별 추천 제품 아카이브',
        guide: {
          concept: '맞춤형 정보로 가치 제공',
          intro: '"오늘은 건성 피부를 위한 추천이에요"',
          action: '피부 타입 설명 → 맞춤 제품 소개 → 사용법 → Q&A',
          ment: '"건성 피부라면 이 성분이 핵심이에요"'
        }
      },
      {
        id: 3,
        title: '성분 분석 교육 콘텐츠',
        subTitle: '전문성 기반 차별화',
        icon: 'Lightbulb',
        tone: 'blue',
        keyItem: '주요 성분 해설 시리즈 (레티놀, 나이아신아마이드 등)',
        context: '뷰티 시장에서 **성분 중심 소비**가 증가하고 있으며, 성분 분석 콘텐츠는 채널의 **전문성을 강화**하는 핵심 전략입니다.',
        dataProof: '성분 관련 콘텐츠 저장률 12% (평균 8% 대비 50% 높음)',
        spec: '성분 조합 가이드, 성분표 읽는 법 교육',
        guide: {
          concept: '전문 지식으로 신뢰 강화',
          intro: '"오늘은 레티놀에 대해 제대로 알려드릴게요"',
          action: '성분 소개 → 효과 설명 → 주의사항 → 추천 제품',
          ment: '"이 성분은 이런 피부에 좋고, 이건 피해야 해요"'
        }
      },
      {
        id: 4,
        title: '프리미엄 협업 확대',
        subTitle: '브랜드 포트폴리오 고도화',
        icon: 'Crown',
        tone: 'emerald',
        keyItem: '분기별 1개 이상 프리미엄 브랜드 협업',
        context: '25-34세 타겟의 **구매력 상승**에 맞춰, 프리미엄 스킨케어 브랜드와의 협업을 확대하여 채널 가치를 제고합니다.',
        dataProof: '프리미엄 제품 콘텐츠 전환율 3.2% (일반 2.1% 대비 52% 높음)',
        spec: '럭셔리 vs 드럭스토어 비교 콘텐츠, VIP 팔로워 샘플링',
        guide: {
          concept: '프리미엄 가치 전달',
          intro: '"오늘은 특별한 제품을 소개해드릴게요"',
          action: '브랜드 스토리 → 제품 특징 → 사용 경험 → 가격 대비 가치',
          ment: '"가격은 있지만, 이 효과라면 충분히 가치 있어요"'
        }
      }
    ],
    conclusion: {
      title: '종합 결론',
      subtitle: '셀럽뷰티 채널의 콘텐츠 전략 방향',
      identityBanner: {
        quote: '"솔직한 리뷰로 신뢰를 쌓고, 전문성으로 가치를 증명한다"',
        tagline: 'Trust & Expertise'
      },
      personaCards: [
        {
          title: '신뢰의 아이콘',
          subtitle: '팔로워 신뢰 1위',
          description: '광고임에도 솔직한 리뷰로 **팔로워 신뢰 1위** 채널',
          tone: 'brand',
          icon: 'Heart'
        },
        {
          title: '뷰티 교육자',
          subtitle: '전문 지식 전달',
          description: '성분/피부타입 기반 **전문 지식 전달**로 차별화',
          tone: 'purple',
          icon: 'GraduationCap'
        },
        {
          title: '트렌드 리더',
          subtitle: '선제적 리뷰',
          description: '신제품 **선제적 리뷰**로 뷰티 트렌드 선도',
          tone: 'blue',
          icon: 'Sparkles'
        }
      ],
      winningFormula: [
        { label: '핵심 강점', title: '진정성 + 전문성', description: '솔직한 리뷰와 전문 지식의 조합', tag: '차별화', tone: 'brand' },
        { label: '타겟 적합도', title: '25-34세 여성', description: '스킨케어 관심 MZ세대 최적화', tag: '타겟', tone: 'purple' },
        { label: '콘텐츠 전략', title: 'Before/After 중심', description: '시각적 증거 기반 신뢰 구축', tag: '포맷', tone: 'blue' },
        { label: '성장 방향', title: '프리미엄 확대', description: '브랜드 포트폴리오 고도화', tag: '성장', tone: 'emerald' }
      ],
      strategicVision: {
        label: '전략적 비전',
        headline: '신뢰 기반 뷰티 인플루언서의 표준을 만든다',
        description: '셀럽뷰티는 **솔직함과 전문성**이라는 두 축을 기반으로, 단순 광고 채널이 아닌 **신뢰할 수 있는 뷰티 정보원**으로서의 위상을 공고히 해야 합니다. Before/After 포맷 강화, 피부 타입별 시리즈화, 성분 분석 콘텐츠를 통해 **차별화된 가치**를 제공하며, 프리미엄 브랜드 협업을 통해 **채널 가치를 지속적으로 상승**시키는 것이 핵심 전략입니다.'
      }
    }
  }
};
