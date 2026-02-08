import React, { useState } from 'react';
import {
  CheckCircle2,
  Sparkles,
  Zap,
  ShieldCheck,
  Layers,
  ThermometerSnowflake,
  MoveHorizontal,
  Scissors,
  ScanFace,
  Ruler,
  Fingerprint,
  MousePointerClick,
  PlayCircle,
  Quote,
  BrainCircuit,
  Lightbulb,
  Box,
  Crown,
  Search,
  AlertTriangle,
  Megaphone,
  Eye,
  MousePointer2,
  Anchor,
  Scale,
  FileText,
  Users,
  ArrowRight,
  TrendingUp,
  Target,
  FileBarChart2,
  BookOpen,
  ChevronRight,
  LayoutTemplate,
  Camera,
  Clapperboard,
  Heart
} from 'lucide-react';
import { ContentData, Tone } from '../types';

const iconMap = {
  CheckCircle2,
  Sparkles,
  Zap,
  ShieldCheck,
  Layers,
  ThermometerSnowflake,
  MoveHorizontal,
  Scissors,
  ScanFace,
  Ruler,
  Fingerprint,
  MousePointerClick,
  PlayCircle,
  Quote,
  BrainCircuit,
  Lightbulb,
  Box,
  Crown,
  Search,
  AlertTriangle,
  Megaphone,
  Eye,
  MousePointer2,
  Anchor,
  Scale,
  FileText,
  Users,
  ArrowRight,
  TrendingUp,
  Target,
  FileBarChart2,
  BookOpen,
  ChevronRight,
  LayoutTemplate,
  Camera,
  Clapperboard,
  Heart,
} as const;

const getIcon = (name: string) => iconMap[name as keyof typeof iconMap];

const statusToneClass: Record<Tone, string> = {
  brand: 'bg-brand-50 text-brand-700 border-brand-200',
  purple: 'bg-purple-50 text-purple-700 border-purple-200',
  blue: 'bg-blue-50 text-blue-700 border-blue-200',
  indigo: 'bg-indigo-50 text-indigo-700 border-indigo-200',
  slate: 'bg-slate-100 text-slate-600 border-slate-200',
  pink: 'bg-pink-50 text-pink-700 border-pink-200',
  emerald: 'bg-green-50 text-green-700 border-green-200',
  yellow: 'bg-yellow-50 text-yellow-700 border-yellow-200',
};

const toneTextClass: Record<Tone, string> = {
  brand: 'text-brand',
  purple: 'text-purple-600',
  blue: 'text-blue-500',
  indigo: 'text-indigo-500',
  slate: 'text-slate-600',
  pink: 'text-pink-500',
  emerald: 'text-emerald-500',
  yellow: 'text-yellow-500',
};

const strategyToneMap: Record<Tone, { text: string; bg: string; border: string }> = {
  brand: { text: 'text-brand', bg: 'bg-brand', border: 'border-brand' },
  blue: { text: 'text-blue-500', bg: 'bg-blue-500', border: 'border-blue-500' },
  pink: { text: 'text-pink-500', bg: 'bg-pink-500', border: 'border-pink-500' },
  indigo: { text: 'text-indigo-500', bg: 'bg-indigo-500', border: 'border-indigo-500' },
  purple: { text: 'text-purple-500', bg: 'bg-purple-500', border: 'border-purple-500' },
  slate: { text: 'text-slate-500', bg: 'bg-slate-500', border: 'border-slate-500' },
  emerald: { text: 'text-emerald-500', bg: 'bg-emerald-500', border: 'border-emerald-500' },
  yellow: { text: 'text-yellow-500', bg: 'bg-yellow-500', border: 'border-yellow-500' },
};

const renderTextWithHighlight = (text: string) =>
  text.split(/(\*\*.*?\*\*)/g).map((part, index) =>
    part.startsWith('**') && part.endsWith('**') ? (
      <span key={index} className="font-bold text-slate-900 bg-slate-100 px-1">
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

const ContentDashboard: React.FC<{ data: ContentData }> = ({ data }) => {
  const [activeStrategyIndex, setActiveStrategyIndex] = useState(0);
  const activeStrategy = data.strategies[activeStrategyIndex];
  const activeTone = strategyToneMap[activeStrategy.tone];
  const ActiveIcon = getIcon(activeStrategy.icon) || ScanFace;

  return (
    <div className="space-y-12 pb-12">
      {/* 1. Hero */}
      <section className="bg-slate-900 rounded-3xl p-8 md:p-12 relative overflow-hidden shadow-2xl border-t border-white/10">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-b from-brand-900/20 to-transparent rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>

        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-end border-b border-white/10 pb-10 mb-10 gap-8">
            <div className="flex-1 w-full">
              <div className="flex items-center justify-between lg:justify-start gap-4 mb-6">
                <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-brand-300 text-[10px] font-bold uppercase tracking-widest flex items-center gap-1.5 backdrop-blur-sm">
                  <FileBarChart2 size={12} /> {data.hero.badgeLabel}
                </span>
                <span className="text-slate-500 text-[10px] font-mono tracking-widest uppercase">
                  {data.hero.confidentialLabel}
                </span>
              </div>

              <div className="relative">
                <h1 className="text-6xl md:text-8xl font-bold text-white font-logo tracking-tighter mb-4 leading-none bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-slate-400">
                  {data.hero.displayName}
                </h1>
                <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 text-slate-300 border-l-2 border-brand-500/50 pl-4 md:border-l-0 md:pl-0">
                  <span className="text-2xl md:text-3xl font-bold text-white tracking-tight">{data.hero.mainTitle}</span>
                  <span className="hidden md:block w-1.5 h-1.5 rounded-full bg-slate-600"></span>
                  <span className="text-lg md:text-2xl font-light text-slate-400 tracking-tight">{data.hero.subTitle}</span>
                </div>
              </div>
            </div>

            <div className="hidden lg:flex flex-col items-end gap-2 min-w-[200px] pb-2 opacity-80 hover:opacity-100 transition-opacity">
              <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider text-right">{data.hero.subjectBadge.label}</p>
              <div className="flex items-center gap-3 bg-white/5 px-4 py-2.5 rounded-xl border border-white/5 backdrop-blur-md">
                <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-slate-700 to-slate-600 flex items-center justify-center font-logo font-bold text-white border border-white/10 shadow-lg">
                  {data.hero.subjectBadge.initials}
                </div>
                <div className="text-right">
                  <p className="text-sm font-bold text-white leading-none font-logo">{data.hero.subjectBadge.handle}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-12">
            <div className="space-y-6">
              <h2 className="text-xl md:text-2xl font-bold text-brand-300 flex items-center gap-3">
                <span className="bg-brand-500/20 w-8 h-8 flex items-center justify-center rounded text-sm border border-brand-500/30 font-logo">I</span>
                {data.intro.title}
              </h2>
              <div className="prose prose-invert max-w-none space-y-4">
                {data.intro.paragraphs.map((p, idx) => (
                  <p key={idx} className="text-slate-300 text-base md:text-lg leading-relaxed text-justify font-light">
                    {renderTextWithBold(p)}
                  </p>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 bg-slate-800 rounded-2xl border border-white/10 overflow-hidden divide-y lg:divide-y-0 lg:divide-x divide-white/10">
            {data.coreLogic.map((item, idx) => {
              const Icon = getIcon(item.icon) || AlertTriangle;
              const toneText = toneTextClass[item.tone] || 'text-brand';
              return (
                <div key={idx} className="p-8 hover:bg-white/5 transition-colors group relative">
                  <div className={`absolute top-0 left-0 w-1 h-full hidden lg:block ${toneText.replace('text-', 'bg-')}`}></div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`p-2 rounded-lg ${toneText.replace('text-', 'bg-')}/20 ${toneText}`}>
                      <Icon size={20} />
                    </div>
                    <span className={`text-xs font-bold uppercase tracking-widest ${toneText}`}>{item.label}</span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-400 mb-4 font-medium">{item.subTitle}</p>

                  {item.quoteLines && (
                    <div className="bg-black/30 rounded-lg p-4 mb-4 border border-white/5">
                      {item.quoteLines.map((q, qi) => (
                        <p key={qi} className="text-xs text-slate-300 italic leading-relaxed">
                          {q}
                        </p>
                      ))}
                    </div>
                  )}

                  {item.bullets && (
                    <div className="space-y-3 mb-4">
                      {item.bullets.map((b, bi) => (
                        <div key={bi} className="flex items-center gap-2">
                          <CheckCircle2 size={14} className={toneText} />
                          <span className="text-xs text-slate-300">{b}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {item.highlightQuote && (
                    <div className="flex items-center gap-3 mb-4 bg-white/5 p-3 rounded-lg border border-white/10">
                      <Zap className="text-yellow-400 fill-yellow-400 shrink-0" size={16} />
                      <p className="text-xs text-white font-bold leading-tight">{item.highlightQuote}</p>
                    </div>
                  )}

                  <p className="text-xs text-slate-400 leading-relaxed text-justify">
                    {renderTextWithBold(item.description)}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="hidden lg:flex justify-between items-center px-16 -mt-3 relative z-10 pointer-events-none">
            <div className="w-12 h-12 bg-slate-900 rounded-full flex items-center justify-center border border-white/10 text-white shadow-xl translate-x-1/2">
              <ArrowRight size={20} />
            </div>
            <div className="w-12 h-12 bg-slate-900 rounded-full flex items-center justify-center border border-brand-500/50 text-brand-300 shadow-xl shadow-brand-900/50 -translate-x-1/2">
              <Sparkles size={20} />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Minimum Requirements */}
      <section>
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-1.5 h-7 bg-brand rounded-sm"></div>
            <h2 className="text-2xl font-bold text-slate-900">{data.requirements.title}</h2>
          </div>
          <p className="text-sm text-slate-500 pl-4.5">{data.requirements.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {data.requirements.items.map((req) => {
            const Icon = getIcon(req.icon) || AlertTriangle;
            return (
              <div key={req.id} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:border-brand/30 transition-all group flex flex-col h-full">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-2">
                    <div className={`w-8 h-8 rounded-lg bg-slate-100 text-slate-500 flex items-center justify-center transition-colors group-hover:${toneTextClass[req.iconTone].replace('text-', 'bg-')} group-hover:text-white`}>
                      <Icon size={18} />
                    </div>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">{req.patternLabel}</span>
                  </div>
                  <span className={`${statusToneClass[req.statusTone]} border border-current/20 text-[10px] font-bold px-2 py-0.5 rounded-full`}>{req.statusBadge}</span>
                </div>

                <h3 className="font-bold text-slate-900 text-lg mb-1">{req.title}</h3>
                <p className="text-xs text-slate-400 font-medium mb-4">{req.subTitle}</p>
                <p className="text-sm text-slate-700 leading-relaxed mb-6 flex-1">{renderTextWithHighlight(req.description)}</p>

                <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 relative mt-auto">
                  {req.footer.type === 'quotes' && (
                    <>
                      <Quote size={12} className="text-slate-400 absolute top-3 left-3 transform -scale-x-100" />
                      <div className="text-xs text-slate-600 text-center italic font-medium space-y-1">
                        {req.footer.items.map((item, idx) => (
                          <p key={idx}>{item}</p>
                        ))}
                      </div>
                    </>
                  )}
                  {req.footer.type === 'checks' && (
                    <div className="flex justify-between text-xs font-bold text-slate-600 px-2">
                      {req.footer.items.map((item, idx) => (
                        <React.Fragment key={idx}>
                          <span className="flex flex-col items-center gap-1"><CheckCircle2 size={14} className="text-brand"/>{item}</span>
                          {idx < req.footer.items.length - 1 && <span className="w-px h-full bg-slate-200"></span>}
                        </React.Fragment>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. Core Strategies */}
      <section>
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-1.5 h-7 bg-brand rounded-sm"></div>
            <h2 className="text-2xl font-bold text-slate-900">채널 핵심 콘텐츠 전략</h2>
          </div>
          <p className="text-sm text-slate-500 pl-4.5">데이터와 페르소나 분석으로 도출한 4가지 핵심 필승 전략</p>
        </div>

        <div className="flex flex-col gap-6">
          <div className="flex flex-wrap gap-2 md:gap-4 p-1.5 bg-slate-100 rounded-xl overflow-x-auto no-scrollbar">
            {data.strategies.map((strategy, index) => (
              <button
                key={strategy.id}
                onClick={() => setActiveStrategyIndex(index)}
                className={`flex items-center gap-2 px-4 py-3 rounded-lg text-sm font-bold transition-all whitespace-nowrap flex-1 md:flex-none justify-center ${
                  activeStrategyIndex === index
                    ? 'bg-white text-slate-900 shadow-md ring-1 ring-slate-200'
                    : 'text-slate-500 hover:bg-slate-200/50 hover:text-slate-700'
                }`}
              >
                <div className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] ${
                  activeStrategyIndex === index ? strategyToneMap[strategy.tone].bg + ' text-white' : 'bg-slate-200'
                }`}>
                  {activeStrategyIndex === index ? <>{React.createElement(getIcon(strategy.icon) || ScanFace, { size: 12 })}</> : strategy.id}
                </div>
                {strategy.title}
              </button>
            ))}
          </div>

          <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden min-h-[600px] flex flex-col animate-fade-in">
            <div className="bg-slate-50 border-b border-slate-100 p-6 md:p-8">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                  <span className={`inline-block ${activeTone.text} text-xs font-bold tracking-widest uppercase mb-2`}>Strategy 0{activeStrategy.id}</span>
                  <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2 font-logo">{activeStrategy.title}</h3>
                  <p className="text-slate-500 text-lg">{activeStrategy.subTitle}</p>
                </div>
                <div className={`hidden md:flex w-16 h-16 ${activeTone.text} bg-opacity-10 rounded-2xl items-center justify-center`}>
                  <ActiveIcon size={32} />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-slate-100 flex-1">
              <div className="lg:col-span-7 p-6 md:p-8 space-y-8">
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-slate-800 font-bold text-sm uppercase tracking-wide">
                    <BrainCircuit size={16} className={activeTone.text} />
                    [1] 채널 바이럴 공식 (Viral Formula)
                  </div>
                  <p className="text-slate-600 text-sm leading-7 text-justify bg-slate-50 p-5 rounded-2xl border border-slate-100">
                    {renderTextWithHighlight(activeStrategy.context)}
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-slate-800 font-bold text-sm uppercase tracking-wide">
                    <FileBarChart2 size={16} className={activeTone.text} />
                    [2] 데이터 기반 성공 요인 (Data)
                  </div>
                  <p className="text-slate-600 text-sm leading-7 text-justify bg-slate-50 p-5 rounded-2xl border border-slate-100">
                    {renderTextWithHighlight(activeStrategy.dataProof)}
                  </p>
                </div>

                <div className="space-y-3 pt-2">
                  <div className="flex items-center gap-2 text-slate-800 font-bold text-sm uppercase tracking-wide">
                    <Box size={16} className={activeTone.text} />
                    [3] 추천 아이템 (Recommended Item)
                  </div>

                  <div className={`p-6 rounded-2xl border-2 ${activeTone.border} bg-slate-50/50 shadow-sm relative overflow-hidden group`}>
                    <div className={`absolute top-0 right-0 p-2 rounded-bl-xl ${activeTone.bg} text-white`}>
                      <Sparkles size={14} />
                    </div>
                    <div className="mb-4">
                      <span className={`text-[10px] font-bold uppercase tracking-wider ${activeTone.text} mb-1 block`}>Selected Item</span>
                      <h4 className="text-lg font-bold text-slate-900">{activeStrategy.keyItem}</h4>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-start gap-2">
                        <div className={`mt-1.5 w-1.5 h-1.5 rounded-full ${activeTone.bg}`}></div>
                        <p className="text-sm text-slate-700 leading-relaxed font-medium">
                          {renderTextWithHighlight(activeStrategy.spec)}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 bg-slate-900 text-slate-300 p-0 flex flex-col relative overflow-hidden">
                <div className={`absolute top-0 right-0 w-64 h-64 ${activeTone.bg} opacity-10 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2`}></div>
                <div className="p-6 md:p-10 flex-1 flex flex-col z-10 justify-center">
                  <div className="flex items-center gap-2 text-white font-bold text-sm uppercase tracking-wide mb-8 border-b border-white/10 pb-4">
                    <Clapperboard size={18} className={activeTone.text} />
                    [4] 전략 맞춤 콘텐츠 예시
                  </div>

                  <div className="mb-10">
                    <h5 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-3">Concept Definition</h5>
                    <p className="text-xl text-white font-medium leading-relaxed font-serif italic opacity-90">
                      "{activeStrategy.guide.concept}"
                    </p>
                  </div>

                  <div className="space-y-8 flex-1">
                    <div className="relative pl-6 border-l border-white/10">
                      <div className={`absolute left-[-5px] top-0 w-2.5 h-2.5 rounded-full ${activeTone.bg} ring-4 ring-slate-900`}></div>
                      <span className={`text-xs font-bold ${activeTone.text} uppercase tracking-wider block mb-2`}>Intro (도입부)</span>
                      <p className="text-sm leading-relaxed text-slate-400">{renderTextWithBold(activeStrategy.guide.intro)}</p>
                    </div>

                    <div className="relative pl-6 border-l border-white/10">
                      <div className="absolute left-[-5px] top-0 w-2.5 h-2.5 rounded-full bg-slate-700 ring-4 ring-slate-900"></div>
                      <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-2">Action (연출)</span>
                      <p className="text-sm leading-relaxed text-slate-400">{renderTextWithBold(activeStrategy.guide.action)}</p>
                    </div>

                    <div className="relative pl-6 border-l border-white/10">
                      <div className="absolute left-[-5px] top-0 w-2.5 h-2.5 rounded-full bg-white ring-4 ring-slate-900"></div>
                      <span className="text-xs font-bold text-white uppercase tracking-wider block mb-2">Ment (멘트)</span>
                      <div className="bg-white/10 p-5 rounded-xl border border-white/5 relative">
                        <Quote size={14} className="absolute top-4 left-4 text-white/30 transform -scale-x-100" />
                        <p className="text-sm leading-relaxed text-slate-200 pl-5 italic">
                          {renderTextWithBold(activeStrategy.guide.ment)}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Conclusion */}
      <section className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden p-8 md:p-10">
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-1.5 h-7 bg-brand rounded-sm"></div>
            <h2 className="text-2xl font-bold text-slate-900">{data.conclusion.title}</h2>
          </div>
          <p className="text-sm text-slate-500 pl-4.5">{data.conclusion.subtitle}</p>
        </div>

        <div className="bg-brand-50/30 rounded-2xl p-8 border border-brand/10 text-center mb-10 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-1 h-full bg-brand"></div>
          <p className="text-xl md:text-2xl text-slate-800 font-bold leading-relaxed mb-3">"{data.conclusion.identityBanner.quote}"</p>
          <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">{data.conclusion.identityBanner.tagline}</p>
        </div>

        <div className="space-y-10">
          <div>
            <div className="flex items-center gap-2 mb-4 border-b border-slate-100 pb-2">
              <h3 className="text-lg font-bold text-slate-900">1. 페르소나의 핵심 (The Core Persona)</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {data.conclusion.personaCards.map((card, idx) => {
                const Icon = getIcon(card.icon) || Heart;
                return (
                  <div key={idx} className="bg-slate-50 rounded-xl p-5 border border-slate-100 flex gap-4">
                    <div className={`bg-white p-2.5 rounded-lg border border-slate-100 h-fit shrink-0 ${toneTextClass[card.tone]} shadow-sm`}>
                      <Icon size={20} className="fill-slate-50" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-base mb-1">{card.title}</h4>
                      <p className="text-xs text-slate-500 font-bold mb-2">{card.subtitle}</p>
                      <p className="text-sm text-slate-700 leading-relaxed text-justify">{renderTextWithHighlight(card.description)}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-4 border-b border-slate-100 pb-2">
              <h3 className="text-lg font-bold text-slate-900">2. 성공의 작동 원리 (The Winning Formula)</h3>
            </div>

            <div className="border border-slate-200 rounded-xl divide-y md:divide-y-0 md:divide-x divide-slate-200 grid grid-cols-1 md:grid-cols-3 bg-white">
              {data.conclusion.winningFormula.map((step, idx) => (
                <div key={idx} className="p-5 group hover:bg-slate-50 transition-colors">
                  <div className="flex justify-between items-start mb-3">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest border border-slate-200 px-1.5 py-0.5 rounded">{step.label}</span>
                    <div className="w-6 h-6 rounded-full bg-slate-100 text-slate-500 text-xs font-bold flex items-center justify-center">{idx + 1}</div>
                  </div>
                  <h4 className="font-bold text-slate-900 mb-2">{step.title}</h4>
                  <p className="text-sm text-slate-600 leading-relaxed mb-3 h-10">{renderTextWithHighlight(step.description)}</p>
                  <div className={`rounded p-2 text-xs text-center font-bold ${step.tone === 'brand' ? 'bg-brand-50 border border-brand/10 text-brand-700' : 'bg-slate-100 text-slate-500'}`}>
                    {step.tag}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-900 rounded-xl p-6 md:p-8 text-center md:text-left flex flex-col md:flex-row items-center gap-6 shadow-lg">
            <div className="shrink-0">
              <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-brand-500 to-purple-600 flex items-center justify-center text-white shadow-inner border border-white/10">
                <Sparkles size={28} />
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-brand-300 text-xs font-bold uppercase tracking-widest mb-2">{data.conclusion.strategicVision.label}</h3>
              <h4 className="text-xl md:text-2xl font-bold text-white mb-3">{data.conclusion.strategicVision.headline}</h4>
              <p className="text-slate-300 text-sm leading-relaxed text-justify md:text-left">{renderTextWithBold(data.conclusion.strategicVision.description)}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};


export default ContentDashboard;
