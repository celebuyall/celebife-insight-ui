export type Tone = 'brand' | 'purple' | 'blue' | 'indigo' | 'slate' | 'pink' | 'emerald' | 'yellow';
export type IconName = string;

export interface DashboardData {
  meta: { lastUpdated?: string };
  fandom: FandomData;
  content: ContentData;
}

export interface TagItem {
  label: string;
  tone: Tone;
}

export interface FandomData {
  profile: {
    displayName: string;
    tags: TagItem[];
    platform: string;
    handle: string;
    profileUrl: string;
    stats: { followers: string; avgViews: string };
    commerceDNA: {
      subtitleLines: [string, string];
      cards: { label: string; title: string; subtitle: string; tone: Tone; icon: IconName }[];
    };
  };
  kpi: {
    scaleAndReach: { label: string; value: string; sub: string; highlight?: boolean; tone?: Tone }[];
    audienceFit: {
      distribution: { label: string; value: number }[];
      mainTarget: { label: string; percent: string };
      coreSegment: { label: string; percent: string };
      notes: string[];
    };
    engagement: {
      avgLikes: { value: string; rate: string };
      avgComments: { value: string; rate: string };
      commentLikeRatio: string;
      engagementRate: { value: string; note: string };
      formatShare: { value: string; note: string };
    };
  };
  coreDefinition: { headline: string; badgeLabel: string; description: string };
  evidence: { title: string; subtitle: string; description: string; icon: IconName }[];
  deepDive: {
    id: number;
    icon: IconName;
    title: string;
    mainValue: string;
    subValue?: string;
    reasonTitle: string;
    reason: string;
    insightTitle: string;
    insight: string;
  }[];
  funnel: {
    title: string;
    subtitle: string;
    steps: { step: string; title: string; subtitle: string; description: string; icon: IconName; highlight?: boolean }[];
  };
  buyingTriggers: {
    relationship: { title: string; icon: IconName; quote: string; description: string; tags: string[] };
    motivation: { title: string; icon: IconName; points: { label: string; quote: string }[]; keyTrigger: string };
  };
  swot: {
    opportunity: SwotCard;
    risk: SwotCard;
  };
  executiveSummary: { title: string; subtitle: string; description: string; tag: string; tone: Tone; icon: IconName }[];
}

export interface SwotCard {
  badge: string;
  title: string;
  tone: Tone;
  observation: { label: string; text: string; icon: IconName };
  strategyName: { title: string; subtitle: string };
  logic: string;
  actionPlan: { title: string; description: string; icon: IconName }[];
  expectedEffect: string;
}

export interface ContentData {
  hero: {
    badgeLabel: string;
    confidentialLabel: string;
    displayName: string;
    mainTitle: string;
    subTitle: string;
    subjectBadge: { label: string; initials: string; handle: string };
  };
  intro: { title: string; paragraphs: string[] };
  coreLogic: {
    label: string;
    title: string;
    subTitle: string;
    quoteLines?: string[];
    bullets?: string[];
    highlightQuote?: string;
    description: string;
    tone: Tone;
    icon: IconName;
  }[];
  requirements: { title: string; subtitle: string; items: RequirementItem[] };
  strategies: StrategyItem[];
  conclusion: {
    title: string;
    subtitle: string;
    identityBanner: { quote: string; tagline: string };
    personaCards: { title: string; subtitle: string; description: string; tone: Tone; icon: IconName }[];
    winningFormula: { label: string; title: string; description: string; tag: string; tone: Tone }[];
    strategicVision: { label: string; headline: string; description: string };
  };
}

export interface RequirementItem {
  id: number;
  patternLabel: string;
  statusBadge: string;
  statusTone: Tone;
  title: string;
  subTitle: string;
  description: string;
  footer: { type: 'quotes' | 'checks'; items: string[] };
  icon: IconName;
  iconTone: Tone;
}

export interface StrategyItem {
  id: number;
  title: string;
  subTitle: string;
  icon: IconName;
  tone: Tone;
  keyItem: string;
  context: string;
  dataProof: string;
  spec: string;
  guide: { concept: string; intro: string; action: string; ment: string };
}

export enum TabView {
  FANDOM = 'FANDOM',
  CONTENT = 'CONTENT'
}
