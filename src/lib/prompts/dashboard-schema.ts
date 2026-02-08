import { SchemaType, type Schema } from '@google/generative-ai';

const ToneEnum: Schema = {
  type: SchemaType.STRING,
  enum: ['brand', 'purple', 'blue', 'indigo', 'slate', 'pink', 'emerald', 'yellow'],
};

const TagItem: Schema = {
  type: SchemaType.OBJECT,
  properties: {
    label: { type: SchemaType.STRING },
    tone: ToneEnum,
  },
  required: ['label', 'tone'],
};

const CommerceDNACard: Schema = {
  type: SchemaType.OBJECT,
  properties: {
    label: { type: SchemaType.STRING },
    title: { type: SchemaType.STRING },
    subtitle: { type: SchemaType.STRING },
    tone: ToneEnum,
    icon: { type: SchemaType.STRING },
  },
  required: ['label', 'title', 'subtitle', 'tone', 'icon'],
};

const ScaleAndReachItem: Schema = {
  type: SchemaType.OBJECT,
  properties: {
    label: { type: SchemaType.STRING },
    value: { type: SchemaType.STRING },
    sub: { type: SchemaType.STRING },
    highlight: { type: SchemaType.BOOLEAN },
    tone: ToneEnum,
  },
  required: ['label', 'value', 'sub'],
};

const DistributionItem: Schema = {
  type: SchemaType.OBJECT,
  properties: {
    label: { type: SchemaType.STRING },
    value: { type: SchemaType.NUMBER },
  },
  required: ['label', 'value'],
};

const TargetItem: Schema = {
  type: SchemaType.OBJECT,
  properties: {
    label: { type: SchemaType.STRING },
    percent: { type: SchemaType.STRING },
  },
  required: ['label', 'percent'],
};

const ValueNote: Schema = {
  type: SchemaType.OBJECT,
  properties: {
    value: { type: SchemaType.STRING },
    note: { type: SchemaType.STRING },
  },
  required: ['value', 'note'],
};

const ValueRate: Schema = {
  type: SchemaType.OBJECT,
  properties: {
    value: { type: SchemaType.STRING },
    rate: { type: SchemaType.STRING },
  },
  required: ['value', 'rate'],
};

const EvidenceItem: Schema = {
  type: SchemaType.OBJECT,
  properties: {
    title: { type: SchemaType.STRING },
    subtitle: { type: SchemaType.STRING },
    description: { type: SchemaType.STRING },
    icon: { type: SchemaType.STRING },
  },
  required: ['title', 'subtitle', 'description', 'icon'],
};

const DeepDiveItem: Schema = {
  type: SchemaType.OBJECT,
  properties: {
    id: { type: SchemaType.NUMBER },
    icon: { type: SchemaType.STRING },
    title: { type: SchemaType.STRING },
    mainValue: { type: SchemaType.STRING },
    subValue: { type: SchemaType.STRING },
    reasonTitle: { type: SchemaType.STRING },
    reason: { type: SchemaType.STRING },
    insightTitle: { type: SchemaType.STRING },
    insight: { type: SchemaType.STRING },
  },
  required: ['id', 'icon', 'title', 'mainValue', 'reasonTitle', 'reason', 'insightTitle', 'insight'],
};

const FunnelStep: Schema = {
  type: SchemaType.OBJECT,
  properties: {
    step: { type: SchemaType.STRING },
    title: { type: SchemaType.STRING },
    subtitle: { type: SchemaType.STRING },
    description: { type: SchemaType.STRING },
    icon: { type: SchemaType.STRING },
    highlight: { type: SchemaType.BOOLEAN },
  },
  required: ['step', 'title', 'subtitle', 'description', 'icon'],
};

const MotivationPoint: Schema = {
  type: SchemaType.OBJECT,
  properties: {
    label: { type: SchemaType.STRING },
    quote: { type: SchemaType.STRING },
  },
  required: ['label', 'quote'],
};

const ActionPlanItem: Schema = {
  type: SchemaType.OBJECT,
  properties: {
    title: { type: SchemaType.STRING },
    description: { type: SchemaType.STRING },
    icon: { type: SchemaType.STRING },
  },
  required: ['title', 'description', 'icon'],
};

const SwotCard: Schema = {
  type: SchemaType.OBJECT,
  properties: {
    badge: { type: SchemaType.STRING },
    title: { type: SchemaType.STRING },
    tone: ToneEnum,
    observation: {
      type: SchemaType.OBJECT,
      properties: {
        label: { type: SchemaType.STRING },
        text: { type: SchemaType.STRING },
        icon: { type: SchemaType.STRING },
      },
      required: ['label', 'text', 'icon'],
    },
    strategyName: {
      type: SchemaType.OBJECT,
      properties: {
        title: { type: SchemaType.STRING },
        subtitle: { type: SchemaType.STRING },
      },
      required: ['title', 'subtitle'],
    },
    logic: { type: SchemaType.STRING },
    actionPlan: { type: SchemaType.ARRAY, items: ActionPlanItem },
    expectedEffect: { type: SchemaType.STRING },
  },
  required: ['badge', 'title', 'tone', 'observation', 'strategyName', 'logic', 'actionPlan', 'expectedEffect'],
};

const ExecutiveSummaryItem: Schema = {
  type: SchemaType.OBJECT,
  properties: {
    title: { type: SchemaType.STRING },
    subtitle: { type: SchemaType.STRING },
    description: { type: SchemaType.STRING },
    tag: { type: SchemaType.STRING },
    tone: ToneEnum,
    icon: { type: SchemaType.STRING },
  },
  required: ['title', 'subtitle', 'description', 'tag', 'tone', 'icon'],
};

// Content types

const CoreLogicItem: Schema = {
  type: SchemaType.OBJECT,
  properties: {
    label: { type: SchemaType.STRING },
    title: { type: SchemaType.STRING },
    subTitle: { type: SchemaType.STRING },
    quoteLines: { type: SchemaType.ARRAY, items: { type: SchemaType.STRING } },
    bullets: { type: SchemaType.ARRAY, items: { type: SchemaType.STRING } },
    highlightQuote: { type: SchemaType.STRING },
    description: { type: SchemaType.STRING },
    tone: ToneEnum,
    icon: { type: SchemaType.STRING },
  },
  required: ['label', 'title', 'subTitle', 'description', 'tone', 'icon'],
};

const RequirementItem: Schema = {
  type: SchemaType.OBJECT,
  properties: {
    id: { type: SchemaType.NUMBER },
    patternLabel: { type: SchemaType.STRING },
    statusBadge: { type: SchemaType.STRING },
    statusTone: ToneEnum,
    title: { type: SchemaType.STRING },
    subTitle: { type: SchemaType.STRING },
    description: { type: SchemaType.STRING },
    footer: {
      type: SchemaType.OBJECT,
      properties: {
        type: { type: SchemaType.STRING, enum: ['quotes', 'checks'] },
        items: { type: SchemaType.ARRAY, items: { type: SchemaType.STRING } },
      },
      required: ['type', 'items'],
    },
    icon: { type: SchemaType.STRING },
    iconTone: ToneEnum,
  },
  required: ['id', 'patternLabel', 'statusBadge', 'statusTone', 'title', 'subTitle', 'description', 'footer', 'icon', 'iconTone'],
};

const StrategyGuide: Schema = {
  type: SchemaType.OBJECT,
  properties: {
    concept: { type: SchemaType.STRING },
    intro: { type: SchemaType.STRING },
    action: { type: SchemaType.STRING },
    ment: { type: SchemaType.STRING },
  },
  required: ['concept', 'intro', 'action', 'ment'],
};

const StrategyItem: Schema = {
  type: SchemaType.OBJECT,
  properties: {
    id: { type: SchemaType.NUMBER },
    title: { type: SchemaType.STRING },
    subTitle: { type: SchemaType.STRING },
    icon: { type: SchemaType.STRING },
    tone: ToneEnum,
    keyItem: { type: SchemaType.STRING },
    context: { type: SchemaType.STRING },
    dataProof: { type: SchemaType.STRING },
    spec: { type: SchemaType.STRING },
    guide: StrategyGuide,
  },
  required: ['id', 'title', 'subTitle', 'icon', 'tone', 'keyItem', 'context', 'dataProof', 'spec', 'guide'],
};

const PersonaCard: Schema = {
  type: SchemaType.OBJECT,
  properties: {
    title: { type: SchemaType.STRING },
    subtitle: { type: SchemaType.STRING },
    description: { type: SchemaType.STRING },
    tone: ToneEnum,
    icon: { type: SchemaType.STRING },
  },
  required: ['title', 'subtitle', 'description', 'tone', 'icon'],
};

const WinningFormulaItem: Schema = {
  type: SchemaType.OBJECT,
  properties: {
    label: { type: SchemaType.STRING },
    title: { type: SchemaType.STRING },
    description: { type: SchemaType.STRING },
    tag: { type: SchemaType.STRING },
    tone: ToneEnum,
  },
  required: ['label', 'title', 'description', 'tag', 'tone'],
};

export const DASHBOARD_RESPONSE_SCHEMA: Schema = {
  type: SchemaType.OBJECT,
  properties: {
    meta: {
      type: SchemaType.OBJECT,
      properties: {
        lastUpdated: { type: SchemaType.STRING },
      },
    },
    fandom: {
      type: SchemaType.OBJECT,
      properties: {
        profile: {
          type: SchemaType.OBJECT,
          properties: {
            displayName: { type: SchemaType.STRING },
            tags: { type: SchemaType.ARRAY, items: TagItem },
            platform: { type: SchemaType.STRING },
            handle: { type: SchemaType.STRING },
            profileUrl: { type: SchemaType.STRING },
            stats: {
              type: SchemaType.OBJECT,
              properties: {
                followers: { type: SchemaType.STRING },
                avgViews: { type: SchemaType.STRING },
              },
              required: ['followers', 'avgViews'],
            },
            commerceDNA: {
              type: SchemaType.OBJECT,
              properties: {
                subtitleLines: { type: SchemaType.ARRAY, items: { type: SchemaType.STRING } },
                cards: { type: SchemaType.ARRAY, items: CommerceDNACard },
              },
              required: ['subtitleLines', 'cards'],
            },
          },
          required: ['displayName', 'tags', 'platform', 'handle', 'profileUrl', 'stats', 'commerceDNA'],
        },
        kpi: {
          type: SchemaType.OBJECT,
          properties: {
            scaleAndReach: { type: SchemaType.ARRAY, items: ScaleAndReachItem },
            audienceFit: {
              type: SchemaType.OBJECT,
              properties: {
                distribution: { type: SchemaType.ARRAY, items: DistributionItem },
                mainTarget: TargetItem,
                coreSegment: TargetItem,
                notes: { type: SchemaType.ARRAY, items: { type: SchemaType.STRING } },
              },
              required: ['distribution', 'mainTarget', 'coreSegment', 'notes'],
            },
            engagement: {
              type: SchemaType.OBJECT,
              properties: {
                avgLikes: ValueRate,
                avgComments: ValueRate,
                commentLikeRatio: { type: SchemaType.STRING },
                engagementRate: ValueNote,
                formatShare: ValueNote,
              },
              required: ['avgLikes', 'avgComments', 'commentLikeRatio', 'engagementRate', 'formatShare'],
            },
          },
          required: ['scaleAndReach', 'audienceFit', 'engagement'],
        },
        coreDefinition: {
          type: SchemaType.OBJECT,
          properties: {
            headline: { type: SchemaType.STRING },
            badgeLabel: { type: SchemaType.STRING },
            description: { type: SchemaType.STRING },
          },
          required: ['headline', 'badgeLabel', 'description'],
        },
        evidence: { type: SchemaType.ARRAY, items: EvidenceItem },
        deepDive: { type: SchemaType.ARRAY, items: DeepDiveItem },
        funnel: {
          type: SchemaType.OBJECT,
          properties: {
            title: { type: SchemaType.STRING },
            subtitle: { type: SchemaType.STRING },
            steps: { type: SchemaType.ARRAY, items: FunnelStep },
          },
          required: ['title', 'subtitle', 'steps'],
        },
        buyingTriggers: {
          type: SchemaType.OBJECT,
          properties: {
            relationship: {
              type: SchemaType.OBJECT,
              properties: {
                title: { type: SchemaType.STRING },
                icon: { type: SchemaType.STRING },
                quote: { type: SchemaType.STRING },
                description: { type: SchemaType.STRING },
                tags: { type: SchemaType.ARRAY, items: { type: SchemaType.STRING } },
              },
              required: ['title', 'icon', 'quote', 'description', 'tags'],
            },
            motivation: {
              type: SchemaType.OBJECT,
              properties: {
                title: { type: SchemaType.STRING },
                icon: { type: SchemaType.STRING },
                points: { type: SchemaType.ARRAY, items: MotivationPoint },
                keyTrigger: { type: SchemaType.STRING },
              },
              required: ['title', 'icon', 'points', 'keyTrigger'],
            },
          },
          required: ['relationship', 'motivation'],
        },
        swot: {
          type: SchemaType.OBJECT,
          properties: {
            opportunity: SwotCard,
            risk: SwotCard,
          },
          required: ['opportunity', 'risk'],
        },
        executiveSummary: { type: SchemaType.ARRAY, items: ExecutiveSummaryItem },
      },
      required: ['profile', 'kpi', 'coreDefinition', 'evidence', 'deepDive', 'funnel', 'buyingTriggers', 'swot', 'executiveSummary'],
    },
    content: {
      type: SchemaType.OBJECT,
      properties: {
        hero: {
          type: SchemaType.OBJECT,
          properties: {
            badgeLabel: { type: SchemaType.STRING },
            confidentialLabel: { type: SchemaType.STRING },
            displayName: { type: SchemaType.STRING },
            mainTitle: { type: SchemaType.STRING },
            subTitle: { type: SchemaType.STRING },
            subjectBadge: {
              type: SchemaType.OBJECT,
              properties: {
                label: { type: SchemaType.STRING },
                initials: { type: SchemaType.STRING },
                handle: { type: SchemaType.STRING },
              },
              required: ['label', 'initials', 'handle'],
            },
          },
          required: ['badgeLabel', 'confidentialLabel', 'displayName', 'mainTitle', 'subTitle', 'subjectBadge'],
        },
        intro: {
          type: SchemaType.OBJECT,
          properties: {
            title: { type: SchemaType.STRING },
            paragraphs: { type: SchemaType.ARRAY, items: { type: SchemaType.STRING } },
          },
          required: ['title', 'paragraphs'],
        },
        coreLogic: { type: SchemaType.ARRAY, items: CoreLogicItem },
        requirements: {
          type: SchemaType.OBJECT,
          properties: {
            title: { type: SchemaType.STRING },
            subtitle: { type: SchemaType.STRING },
            items: { type: SchemaType.ARRAY, items: RequirementItem },
          },
          required: ['title', 'subtitle', 'items'],
        },
        strategies: { type: SchemaType.ARRAY, items: StrategyItem },
        conclusion: {
          type: SchemaType.OBJECT,
          properties: {
            title: { type: SchemaType.STRING },
            subtitle: { type: SchemaType.STRING },
            identityBanner: {
              type: SchemaType.OBJECT,
              properties: {
                quote: { type: SchemaType.STRING },
                tagline: { type: SchemaType.STRING },
              },
              required: ['quote', 'tagline'],
            },
            personaCards: { type: SchemaType.ARRAY, items: PersonaCard },
            winningFormula: { type: SchemaType.ARRAY, items: WinningFormulaItem },
            strategicVision: {
              type: SchemaType.OBJECT,
              properties: {
                label: { type: SchemaType.STRING },
                headline: { type: SchemaType.STRING },
                description: { type: SchemaType.STRING },
              },
              required: ['label', 'headline', 'description'],
            },
          },
          required: ['title', 'subtitle', 'identityBanner', 'personaCards', 'winningFormula', 'strategicVision'],
        },
      },
      required: ['hero', 'intro', 'coreLogic', 'requirements', 'strategies', 'conclusion'],
    },
  },
  required: ['meta', 'fandom', 'content'],
};
