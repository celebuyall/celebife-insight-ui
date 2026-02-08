# Channel Analysis Dashboard Template

This template contains the complete haarpeer-insights dashboard components for channel analysis reporting.

## Structure

```
src/templates/channel/
├── App.tsx                           # Main app with tab navigation (80 lines)
├── types.ts                          # Complete TypeScript interfaces (146 lines)
├── data.ts                           # Data structure template (92 lines)
└── components/
    ├── FandomDashboard.tsx          # Fandom metrics dashboard (745 lines)
    └── ContentDashboard.tsx         # Content strategy dashboard (544 lines)
```

## Components

### App.tsx
- Two-tab interface: "팬덤 지표 분석" and "채널 핵심 콘텐츠 분석"
- Dynamic date display
- Sticky header with navigation
- Brand: "Celebeauty" (configurable)

### FandomDashboard.tsx
Displays 6 main sections:
1. **Commerce KPI Dashboard** - Scale, reach, audience fit, engagement metrics
2. **Core Definition** - Channel's commerce evaluation and key characteristics
3. **Deep Dive** - Top 3 commerce metrics with detailed analysis
4. **Funnel Analysis** - Customer journey through 4 stages
5. **SWOT Strategy** - Opportunity (strengths) and risk (weaknesses) strategies
6. **Executive Summary** - Final conclusions with 3 key points

### ContentDashboard.tsx
Displays 4 main sections:
1. **Hero Section** - Channel identity and core logic (3 pillars)
2. **Minimum Requirements** - 3 essential content patterns
3. **Core Strategies** - 4 winning content strategies with examples
4. **Conclusion** - Persona core, winning formula, strategic vision

### types.ts
Complete TypeScript definitions for:
- `DashboardData` - Root data structure
- `FandomData` - All fandom metrics and analysis
- `ContentData` - All content strategy data
- Supporting interfaces: `SwotCard`, `RequirementItem`, `StrategyItem`, etc.

### data.ts
Empty template structure matching the TypeScript types, ready to be populated with actual channel analysis data.

## Features

- **Text Highlighting**: Supports `**bold text**` markdown syntax for emphasis
- **Icon System**: Uses lucide-react icons mapped by name strings
- **Tone System**: 8 color themes (brand, purple, blue, indigo, slate, pink, emerald, yellow)
- **Responsive**: Mobile-first design with Tailwind CSS
- **Interactive**: Tab switching, section navigation, strategy carousel

## Data Flow

1. Generate channel analysis data (via LLM/API)
2. Parse into `DashboardData` structure
3. Render via `<App />` with data prop
4. FandomDashboard and ContentDashboard receive their respective data slices

## Usage

This template will be used by the channel generator to:
1. Accept two report inputs (fandom analysis + content strategy)
2. Transform LLM output into `DashboardData` format
3. Generate a complete React dashboard
4. Provide preview and export options
