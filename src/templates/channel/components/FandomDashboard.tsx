import React, { useRef } from 'react';
import {
  TrendingUp,
  Users,
  Eye,
  MessageCircle,
  Heart,
  MousePointerClick,
  Target,
  ArrowUpRight,
  BadgeCheck,
  BarChart3,
  Share2,
  Bookmark,
  AlertCircle,
  Zap,
  Lock,
  Search,
  Layers,
  Instagram,
  Youtube,
  ExternalLink,
  Download,
  User,
  Magnet,
  Repeat,
  ShoppingBag,
  Sparkles,
  Quote,
  Lightbulb,
  MessageSquareText,
  Crown,
  Rocket,
  ScanFace,
  Microscope,
  BrainCircuit,
  GraduationCap
} from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { FandomData, Tone } from '../types';

const iconMap = {
  TrendingUp,
  Users,
  Eye,
  MessageCircle,
  Heart,
  MousePointerClick,
  Target,
  ArrowUpRight,
  BadgeCheck,
  BarChart3,
  Share2,
  Bookmark,
  AlertCircle,
  Zap,
  Lock,
  Search,
  Layers,
  Instagram,
  Youtube,
  ExternalLink,
  Download,
  User,
  Magnet,
  Repeat,
  ShoppingBag,
  Sparkles,
  Quote,
  Lightbulb,
  MessageSquareText,
  Crown,
  Rocket,
  ScanFace,
  Microscope,
  BrainCircuit,
  GraduationCap,
} as const;

const getIcon = (name: string) => iconMap[name as keyof typeof iconMap];

const platformIconMap: Record<string, React.ElementType> = {
  Instagram,
  YouTube: Youtube,
};

const tagToneClass: Record<Tone, string> = {
  brand: 'bg-brand-50 text-brand-600',
  purple: 'bg-purple-50 text-purple-600',
  blue: 'bg-blue-50 text-blue-600',
  indigo: 'bg-indigo-50 text-indigo-600',
  slate: 'bg-slate-100 text-slate-600',
  pink: 'bg-pink-50 text-pink-600',
  emerald: 'bg-emerald-50 text-emerald-700',
  yellow: 'bg-yellow-50 text-yellow-700',
};

const dnaToneBar: Record<Tone, string> = {
  brand: 'bg-brand',
  purple: 'bg-purple-500',
  blue: 'bg-blue-500',
  indigo: 'bg-indigo-500',
  slate: 'bg-slate-400',
  pink: 'bg-pink-500',
  emerald: 'bg-emerald-500',
  yellow: 'bg-yellow-500',
};

const valueToneClass: Record<Tone, string> = {
  brand: 'text-brand',
  purple: 'text-purple-600',
  blue: 'text-blue-600',
  indigo: 'text-indigo-600',
  slate: 'text-slate-900',
  pink: 'text-pink-600',
  emerald: 'text-green-600',
  yellow: 'text-yellow-600',
};

const execToneMap: Record<Tone, { icon: string; tag: string }> = {
  brand: {
    icon: 'from-brand-400 to-brand-600',
    tag: 'bg-brand-500/20 border border-brand-500/30 text-brand-200',
  },
  blue: {
    icon: 'from-blue-400 to-blue-600',
    tag: 'bg-blue-500/20 border border-blue-500/30 text-blue-200',
  },
  pink: {
    icon: 'from-pink-400 to-pink-600',
    tag: 'bg-pink-500/20 border border-pink-500/30 text-pink-200',
  },
  purple: {
    icon: 'from-purple-400 to-purple-600',
    tag: 'bg-purple-500/20 border border-purple-500/30 text-purple-200',
  },
  indigo: {
    icon: 'from-indigo-400 to-indigo-600',
    tag: 'bg-indigo-500/20 border border-indigo-500/30 text-indigo-200',
  },
  slate: {
    icon: 'from-slate-400 to-slate-600',
    tag: 'bg-slate-500/20 border border-slate-500/30 text-slate-200',
  },
  emerald: {
    icon: 'from-emerald-400 to-emerald-600',
    tag: 'bg-emerald-500/20 border border-emerald-500/30 text-emerald-200',
  },
  yellow: {
    icon: 'from-yellow-400 to-yellow-600',
    tag: 'bg-yellow-500/20 border border-yellow-500/30 text-yellow-200',
  },
};

const renderTextWithHighlight = (text: string) =>
  text.split(/(\*\*.*?\*\*)/g).map((part, index) =>
    part.startsWith('**') && part.endsWith('**') ? (
      <span key={index} className="font-bold text-slate-800 bg-indigo-50/80 px-1 rounded-sm">
        {part.slice(2, -2)}
      </span>
    ) : (
      part
    )
  );

const renderTextWithHighlightPurple = (text: string) =>
  text.split(/(\*\*.*?\*\*)/g).map((part, index) =>
    part.startsWith('**') && part.endsWith('**') ? (
      <span key={index} className="font-bold text-brand bg-brand-50/80 px-1 rounded-sm">
        {part.slice(2, -2)}
      </span>
    ) : (
      part
    )
  );

const renderTextWithBold = (text: string) =>
  text.split(/(\*\*.*?\*\*)/g).map((part, index) =>
    part.startsWith('**') && part.endsWith('**') ? (
      <strong key={index} className="text-white font-extrabold bg-white/20 px-1.5 py-0.5 rounded mx-0.5 box-decoration-clone leading-relaxed">
        {part.slice(2, -2)}
      </strong>
    ) : (
      part
    )
  );

const FandomDashboard: React.FC<{ data: FandomData; chartColors?: [string, string] }> = ({ data, chartColors }) => {
  const section1Ref = useRef<HTMLElement>(null);
  const section2Ref = useRef<HTMLElement>(null);
  const section3Ref = useRef<HTMLElement>(null);
  const section4Ref = useRef<HTMLElement>(null);
  const section5Ref = useRef<HTMLElement>(null);
  const section6Ref = useRef<HTMLElement>(null);

  const scrollToSection = (ref: React.RefObject<HTMLElement | null>) => {
    if (ref.current) {
      const yOffset = -140;
      const y = ref.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const navItems = [
    { label: '핵심 지표', ref: section1Ref },
    { label: '종합 평가', ref: section2Ref },
    { label: '심층 분석', ref: section3Ref },
    { label: '구매 여정', ref: section4Ref },
    { label: '채널 장단점', ref: section5Ref },
    { label: '최종 결론', ref: section6Ref },
  ];

  const audienceData = data.kpi.audienceFit.distribution;
  const COLORS = chartColors || ['#7d4fde', '#e8e0fb'];
  const displayName = data.profile.displayName;
  const nameSizeClass = displayName.length > 14 ? 'text-xl md:text-2xl' : 'text-2xl md:text-3xl';
  const commerceDNAOrder = ['Identity', 'Action', 'Trigger'];
  const primaryAudience = audienceData.length
    ? audienceData.reduce((top, item) => (item.value > top.value ? item : top), audienceData[0])
    : null;

  return (
    <div className="pb-12">
      {/* Profile Header Section */}
      <div className="-mx-4 md:mx-0">
        <div className="bg-white md:rounded-t-2xl border border-slate-200 border-b-0 shadow-sm p-6 md:p-8">
          <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-slate-50 flex items-center justify-center shrink-0 border border-slate-100">
              <User className="text-slate-300 w-10 h-10 md:w-12 md:h-12" />
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-2">
                {data.profile.tags.map((tag, i) => (
                  <span key={i} className={`${tagToneClass[tag.tone] || tagToneClass.brand} text-[11px] font-bold px-2 py-0.5 rounded`}>
                    {tag.label}
                  </span>
                ))}
              </div>
              <h1 className={`${nameSizeClass} font-bold text-slate-900 flex items-center gap-2 min-w-0 leading-tight`}>
                <span className="min-w-0 break-words">{displayName}</span>
                <a
                  href={data.profile.profileUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-slate-400 hover:text-pink-500 transition-colors shrink-0"
                >
                  {(() => {
                    const PlatformIcon = platformIconMap[data.profile.platform] || ExternalLink;
                    return <PlatformIcon size={20} />;
                  })()}
                </a>
              </h1>
              <p className="text-sm text-slate-500 mt-1 flex flex-wrap items-center gap-x-4 gap-y-1">
                <span className="flex items-center gap-1">
                  {data.profile.platform}: <span className="font-medium text-slate-700">{data.profile.handle}</span>
                </span>
              </p>

              <div className="flex items-center gap-4 mt-3 text-sm">
                <div>
                  <span className="font-bold text-slate-900 text-lg">{data.profile.stats.followers}</span>
                  <span className="text-slate-500 text-xs ml-1">팔로워</span>
                </div>
                <div className="w-px h-8 bg-slate-200"></div>
                <div>
                  <span className="font-bold text-slate-900 text-lg">{data.profile.stats.avgViews}</span>
                  <span className="text-slate-500 text-xs ml-1">평균 조회수</span>
                </div>
              </div>
            </div>

            <div className="hidden lg:flex items-center gap-6 mt-4 md:mt-0">
              <div className="text-right">
                <div className="flex items-center justify-end gap-1.5 text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">
                  <Sparkles size={12} className="text-brand" /> Commerce DNA
                </div>
                <p className="text-sm font-logo font-bold text-slate-900 leading-tight">
                  <span className="text-brand">{data.profile.commerceDNA.subtitleLines[0]}</span><br/>
                  {data.profile.commerceDNA.subtitleLines[1]}
                </p>
              </div>

              <div className="h-10 w-px bg-slate-200"></div>

              <div className="flex gap-3">
                {commerceDNAOrder.map((label, idx) => {
                  const card = data.profile.commerceDNA.cards.find((item) => item.label === label) || data.profile.commerceDNA.cards[idx];
                  if (!card) return null;
                  const Icon = getIcon(card.icon) || Lightbulb;
                  return (
                    <div key={label} className="group relative w-36 bg-white rounded-xl border border-slate-200 p-3 shadow-sm hover:shadow-md transition-all duration-300">
                      <div className={`absolute left-0 top-3 bottom-3 w-1 ${dnaToneBar[card.tone]} rounded-r-full`}></div>
                      <div className="ml-2">
                        <div className="flex items-center gap-2 mb-1">
                          <Icon size={12} className={dnaToneBar[card.tone].replace('bg-', 'text-')} />
                          <span className="text-[9px] font-extrabold text-slate-400 uppercase tracking-wider">{card.label}</span>
                        </div>
                        <p className="text-sm font-bold text-slate-800 leading-none mb-1">{card.title}</p>
                        <p className="text-[10px] text-slate-500 font-medium">{card.subtitle}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sticky Navigation */}
      <div className="sticky top-16 z-40 -mx-4 md:mx-0">
        <div className="bg-white border border-slate-200 border-t-0 shadow-sm md:rounded-b-2xl px-6 md:px-8 overflow-x-auto no-scrollbar">
          <div className="flex gap-8 min-w-max">
            {navItems.map((item, idx) => (
              <button
                key={idx}
                onClick={() => scrollToSection(item.ref)}
                className="py-4 text-sm font-medium text-slate-500 border-b-2 border-transparent hover:text-brand hover:border-brand hover:font-bold transition-all"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Sections */}
      <div className="space-y-12 mt-8">
        {/* I. KPI */}
        <section ref={section1Ref} className="scroll-mt-40">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-brand text-white flex items-center justify-center font-bold font-logo">I</div>
            <h2 className="text-xl font-bold text-slate-800">커머스 핵심 지표 요약 (Commerce KPI Dashboard)</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className="lg:col-span-12 bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
              <h3 className="text-sm font-bold text-slate-500 uppercase tracking-wide mb-4 flex items-center gap-2">
                <BarChart3 size={16} /> 1. Scale & Reach (스케일 및 도달 효율)
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                {data.kpi.scaleAndReach.map((item, i) => (
                  <div
                    key={i}
                    className={`p-4 rounded-xl ${item.highlight ? 'bg-brand-50 border border-brand/20' : 'bg-slate-50 border border-slate-100'}`}
                  >
                    <p className="text-xs text-slate-500 mb-1">{item.label}</p>
                    <p className={`text-xl font-bold ${item.tone ? valueToneClass[item.tone] : 'text-slate-900'}`}>{item.value}</p>
                    <p className="text-[10px] text-slate-400 mt-1">{item.sub}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
              <h3 className="text-sm font-bold text-slate-500 uppercase tracking-wide mb-4 flex items-center gap-2">
                <Target size={16} /> 2. Audience Fit (타깃 적합도)
              </h3>
              <div className="flex gap-6 items-center h-full">
                <div className="w-32 h-32 relative flex-shrink-0">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie data={audienceData} cx="50%" cy="50%" innerRadius={25} outerRadius={40} dataKey="value">
                        {audienceData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                  {primaryAudience && (
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none text-[10px] font-bold text-slate-600 text-center px-2 whitespace-nowrap">
                      {primaryAudience.label} {primaryAudience.value}%
                    </div>
                  )}
                </div>
                <div className="flex-1 space-y-4">
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-slate-500">{data.kpi.audienceFit.mainTarget.label}</span>
                      <span className="font-bold text-brand">{data.kpi.audienceFit.mainTarget.percent}</span>
                    </div>
                    <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                      <div className="bg-brand h-full rounded-full" style={{ width: data.kpi.audienceFit.mainTarget.percent }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-slate-500">{data.kpi.audienceFit.coreSegment.label}</span>
                      <span className="font-bold text-slate-800">{data.kpi.audienceFit.coreSegment.percent}</span>
                    </div>
                    <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                      <div className="bg-brand-300 h-full rounded-full" style={{ width: data.kpi.audienceFit.coreSegment.percent }}></div>
                    </div>
                    <div className="text-[10px] text-slate-400 mt-1 space-y-1">
                      {data.kpi.audienceFit.notes.map((note, idx) => (
                        <p key={idx}>* {note}</p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
              <h3 className="text-sm font-bold text-slate-500 uppercase tracking-wide mb-4 flex items-center gap-2">
                <MousePointerClick size={16} /> 3. Engagement & Conversion Signal (참여 및 전환 신호)
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-4">
                <div className="bg-slate-50 p-3 rounded-lg text-center">
                  <p className="text-xs text-slate-400">Avg Likes</p>
                  <p className="font-bold text-lg text-slate-800">{data.kpi.engagement.avgLikes.value} <span className="text-[10px] font-normal text-slate-400">({data.kpi.engagement.avgLikes.rate})</span></p>
                </div>
                <div className="bg-slate-50 p-3 rounded-lg text-center">
                  <p className="text-xs text-slate-400">Avg Comments</p>
                  <p className="font-bold text-lg text-slate-800">{data.kpi.engagement.avgComments.value} <span className="text-[10px] font-normal text-slate-400">({data.kpi.engagement.avgComments.rate})</span></p>
                </div>
                <div className="bg-brand-50 border border-brand/20 p-3 rounded-lg text-center col-span-2">
                  <p className="text-xs text-brand-600 font-bold uppercase">Comment / Like Ratio</p>
                  <p className="font-black text-2xl text-brand">{data.kpi.engagement.commentLikeRatio}</p>
                </div>
              </div>
              <div className="flex gap-4 text-xs text-slate-500 bg-slate-50 p-3 rounded-lg">
                <div className="flex-1 border-r border-slate-200 pr-4">
                  <p className="text-[11px] font-bold text-slate-600">
                    참여율(ER): <span className="text-slate-900">{data.kpi.engagement.engagementRate.value}</span>
                  </p>
                  <p className="text-[10px] text-slate-500 mt-1">
                    {renderTextWithHighlight(data.kpi.engagement.engagementRate.note)}
                  </p>
                </div>
                <div className="flex-1 pl-2">
                  <p className="text-[11px] font-bold text-slate-600">
                    포맷 비중: <span className="text-slate-900">{data.kpi.engagement.formatShare.value}</span>
                  </p>
                  <p className="text-[10px] text-slate-500 mt-1">
                    {renderTextWithHighlight(data.kpi.engagement.formatShare.note)}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* II. Core Definition */}
        <section ref={section2Ref} className="scroll-mt-40">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-brand text-white flex items-center justify-center font-bold font-logo">II</div>
            <h2 className="text-xl font-bold text-slate-800">종합 커머스 평가 및 핵심 특징</h2>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-brand/20 overflow-hidden">
            <div className="p-8 md:p-10 border-b border-slate-100 relative">
              <Quote className="absolute top-6 left-6 text-brand/10 w-12 h-12 -z-0 transform -scale-x-100" />
              <div className="relative z-10 text-center max-w-3xl mx-auto">
                <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 leading-normal md:leading-snug">
                  “{renderTextWithHighlight(data.coreDefinition.headline)}”
                </h3>
                <div className="inline-flex items-center gap-2 bg-brand-50 text-brand-700 px-4 py-1.5 rounded-full text-sm font-bold">
                  <Lightbulb size={16} className="text-brand" />
                  <span>{data.coreDefinition.badgeLabel}</span>
                </div>
                <p className="text-slate-500 text-sm mt-6 leading-relaxed">
                  {renderTextWithHighlight(data.coreDefinition.description)}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-100 bg-slate-50/50">
              {data.evidence.map((item, idx) => {
                const Icon = getIcon(item.icon) || Repeat;
                return (
                  <div key={idx} className="p-6 md:p-8 flex items-start gap-4">
                    <div className="bg-white p-3 rounded-xl shadow-sm text-brand border border-slate-100 shrink-0">
                      <Icon size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-800 text-lg mb-1">{item.title}</h4>
                      <p className="text-xs text-brand-600 font-bold uppercase mb-2">{item.subtitle}</p>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        {renderTextWithHighlight(item.description)}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* III. Deep Dive */}
        <section ref={section3Ref} className="scroll-mt-40">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-brand text-white flex items-center justify-center font-bold font-logo">III</div>
            <h2 className="text-xl font-bold text-slate-800">커머스 관점 핵심 3개 지표 (Deep Dive)</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {data.deepDive.map((metric) => {
              const Icon = getIcon(metric.icon) || MessageCircle;
              return (
                <div key={metric.id} className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:border-brand/50 transition-colors group flex flex-col h-full">
                  <div className="flex justify-between items-start mb-4">
                    <div className="bg-brand-50 p-2.5 rounded-lg text-brand group-hover:bg-brand group-hover:text-white transition-colors">
                      <Icon size={24} />
                    </div>
                    <div className="text-right">
                      <span className="block text-2xl font-bold text-slate-800">{metric.mainValue}</span>
                      {metric.subValue && <span className="text-xs text-slate-400 font-medium">{metric.subValue}</span>}
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-slate-800 mb-4">{metric.title}</h3>

                  <div className="space-y-3 mt-auto">
                    <div className="bg-slate-50 p-3 rounded-lg">
                      <p className="text-[11px] font-bold text-slate-500 uppercase mb-1">{metric.reasonTitle}</p>
                      <p className="text-xs text-slate-700 leading-snug">{renderTextWithHighlight(metric.reason)}</p>
                    </div>
                    <div>
                      <p className="text-[11px] font-bold text-brand uppercase mb-1">{metric.insightTitle}</p>
                      <p className="text-xs text-slate-600 leading-relaxed">{renderTextWithHighlight(metric.insight)}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* IV. Funnel */}
        <section ref={section4Ref} className="scroll-mt-40">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-brand text-white flex items-center justify-center font-bold font-logo">IV</div>
            <h2 className="text-xl font-bold text-slate-800">팬덤 구매 여정 분석</h2>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-slate-100 shadow-sm">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                <div>
                  <h3 className="text-lg font-bold text-slate-800 flex items-center gap-2">
                    <Layers size={20} className="text-brand" /> {data.funnel.title}
                  </h3>
                  <p className="text-sm text-slate-500 mt-1">{renderTextWithHighlight(data.funnel.subtitle)}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
                <div className="absolute top-1/2 left-4 right-4 h-0.5 bg-slate-100 -translate-y-1/2 hidden md:block z-0"></div>

                {data.funnel.steps.map((step, idx) => {
                  const Icon = getIcon(step.icon) || Magnet;
                  return (
                    <div
                      key={idx}
                      className={`p-5 rounded-xl border relative z-10 h-full flex flex-col shadow-sm ${
                        step.highlight ? 'bg-gradient-to-br from-brand-50 to-white border-brand/20' : 'bg-slate-50 border-slate-100'
                      }`}
                    >
                      <div className={`w-8 h-8 rounded-full ${step.highlight ? 'bg-brand text-white' : 'bg-white text-slate-400'} border border-slate-200 flex items-center justify-center text-xs font-bold mb-3 shadow-sm`}>
                        {step.step}
                      </div>
                      <div className="flex items-center gap-2 mb-2">
                        <Icon size={18} className={step.highlight ? 'text-brand' : 'text-slate-500'} />
                        <h4 className="font-bold text-slate-800">{step.title}</h4>
                      </div>
                      <p className={`text-xs font-bold ${step.highlight ? 'text-brand' : 'text-slate-700'} mb-2`}>{step.subtitle}</p>
                      <div className={`p-3 rounded-lg text-[11px] text-slate-600 leading-snug mt-auto ${step.highlight ? 'bg-white border border-brand/10' : 'bg-white border border-slate-100'}`}>
                        {renderTextWithHighlight(step.description)}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl p-6 md:p-8 border border-slate-100 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-purple-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                <h3 className="text-lg font-bold text-slate-800 flex items-center gap-2 mb-4 relative z-10">
                  {(() => {
                    const Icon = getIcon(data.buyingTriggers.relationship.icon) || BadgeCheck;
                    return <Icon size={20} className="text-brand" />;
                  })()}
                  {data.buyingTriggers.relationship.title}
                </h3>
                <div className="bg-slate-50 rounded-xl p-5 border border-slate-100 relative z-10">
                  <p className="text-sm text-slate-800 font-bold mb-2">{data.buyingTriggers.relationship.quote}</p>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {renderTextWithHighlight(data.buyingTriggers.relationship.description)}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {data.buyingTriggers.relationship.tags.map((tag, idx) => (
                      <span key={idx} className="px-2 py-1 bg-white border border-slate-200 rounded text-[10px] text-slate-500 font-medium">#{tag}</span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 md:p-8 border border-slate-100 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                <h3 className="text-lg font-bold text-slate-800 flex items-center gap-2 mb-4 relative z-10">
                  {(() => {
                    const Icon = getIcon(data.buyingTriggers.motivation.icon) || Zap;
                    return <Icon size={20} className="text-yellow-500 fill-yellow-500" />;
                  })()}
                  {data.buyingTriggers.motivation.title}
                </h3>
                <div className="space-y-3 relative z-10">
                  {data.buyingTriggers.motivation.points.map((point, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-1.5 shrink-0"></div>
                      <div>
                        <span className="text-xs font-bold text-slate-700 block">{point.label}</span>
                        <p className="text-xs text-slate-500">{point.quote}</p>
                      </div>
                    </div>
                  ))}
                  <div className="bg-brand-50 rounded-lg p-3 border border-brand/20 mt-2 flex items-center gap-2">
                    <Sparkles size={16} className="text-brand" />
                    <p className="text-xs font-bold text-brand-800">{data.buyingTriggers.motivation.keyTrigger}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* V. SWOT */}
        <section ref={section5Ref} className="scroll-mt-40">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-brand text-white flex items-center justify-center font-bold font-logo">V</div>
            <h2 className="text-xl font-bold text-slate-800">전략적 제언 (채널 장단점 맞춤 전략)</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {[data.swot.opportunity, data.swot.risk].map((card, idx) => {
              const ObservationIcon = getIcon(card.observation.icon) || Search;
              const isOpportunity = idx === 0;
              const swotHighlight = isOpportunity ? renderTextWithHighlightPurple : renderTextWithHighlight;
              return (
                <div
                  key={idx}
                  className={`bg-white rounded-2xl p-6 border-l-4 shadow-sm flex flex-col h-full ${
                    isOpportunity ? 'border-l-brand' : 'border-l-slate-400'
                  }`}
                >
                  <div className="flex flex-wrap items-center gap-2 mb-6">
                    <span className={`text-xs font-bold px-2 py-1 rounded ${isOpportunity ? 'bg-brand/10 text-brand' : 'bg-slate-100 text-slate-500'}`}>
                      {isOpportunity ? '강점 극대화' : '약점 보완'}
                    </span>
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">{card.badge}</span>
                    <h3 className="text-lg font-bold text-slate-800 w-full">{card.title}</h3>
                  </div>

                  <div className="mb-5 bg-slate-50 p-4 rounded-xl border border-slate-100">
                    <div className="flex items-start gap-2 mb-1">
                      <ObservationIcon size={14} className={isOpportunity ? 'text-brand' : 'text-slate-400'} />
                      <span className="text-xs font-bold text-slate-500 uppercase">{card.observation.label}</span>
                    </div>
                    <p className="text-sm font-medium text-slate-800 leading-snug">{swotHighlight(card.observation.text)}</p>
                  </div>

                  <div className="mb-4">
                    <p className="text-xs text-slate-500 font-bold uppercase mb-1">Strategy Name</p>
                    <p className={`text-xl font-bold ${card.tone === 'brand' ? 'text-brand' : 'text-slate-700'}`}>
                      {card.strategyName.title}
                      <span className="text-base font-normal text-slate-600"> {card.strategyName.subtitle}</span>
                    </p>
                  </div>

                  <div className="mb-6">
                    <p className="text-xs text-slate-500 font-bold uppercase mb-2">Logic (논리적 배경)</p>
                    <p className="text-sm text-slate-600 leading-relaxed text-justify">{swotHighlight(card.logic)}</p>
                  </div>

                  <div className="space-y-4 pt-4 border-t border-slate-100 mt-auto">
                    <h4 className="text-xs font-bold text-slate-700 uppercase">Business Action Plan</h4>
                    {card.actionPlan.map((action, aIdx) => {
                      const ActionIcon = getIcon(action.icon) || MessageCircle;
                      return (
                        <div key={aIdx} className="flex gap-3 text-sm text-slate-600 items-start">
                          <div className={`p-1.5 rounded mt-0.5 shrink-0 ${isOpportunity ? 'bg-brand-50' : 'bg-slate-100'}`}>
                            <ActionIcon size={14} className={isOpportunity ? 'text-brand' : 'text-slate-500'} />
                          </div>
                          <div>
                            <span className="font-bold text-slate-800 block mb-0.5">{action.title}</span>
                            <span className="text-slate-600 text-xs">{swotHighlight(action.description)}</span>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  <div className={`mt-5 p-3 rounded-lg text-center shadow-md ${isOpportunity ? 'bg-brand text-white shadow-brand/20' : 'bg-slate-700 text-white'}`}>
                    <p className="text-xs font-bold uppercase opacity-80 mb-1">Expected Effect</p>
                    <p className="text-sm font-bold">{card.expectedEffect}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* VI. Executive Summary */}
        <section ref={section6Ref} className="scroll-mt-40">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-brand text-white flex items-center justify-center font-bold font-logo">VI</div>
            <h2 className="text-xl font-bold text-slate-800">최종 결론 (Executive Summary)</h2>
          </div>

          <div className="relative bg-slate-900 rounded-3xl p-8 md:p-10 overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-600/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none mix-blend-screen"></div>
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-600/20 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2 pointer-events-none mix-blend-screen"></div>

            <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6">
              {data.executiveSummary.map((item, idx) => {
                const Icon = getIcon(item.icon) || Crown;
                const tone = execToneMap[item.tone] || execToneMap.brand;
                return (
                  <div key={idx} className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 flex flex-col hover:bg-white/10 transition-all duration-300 group">
                    <div className="flex justify-between items-start mb-6">
                      <div className={`bg-gradient-to-br ${tone.icon} w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                        <Icon className="text-white" size={24} />
                      </div>
                      <span className="text-5xl font-logo text-white/5 font-bold absolute right-6 top-6">0{idx + 1}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{item.title}<br/><span className="text-base font-normal text-slate-400">({item.subtitle})</span></h3>
                    <p className="text-slate-300 text-sm leading-relaxed mb-4 flex-1">{renderTextWithBold(item.description)}</p>
                    <div className="mt-auto pt-4 border-t border-white/5">
                      <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold ${tone.tag}`}>
                        {item.tag}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};


export default FandomDashboard;
