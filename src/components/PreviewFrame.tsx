import React, { useState, useMemo, useEffect, useRef, Component } from 'react';
import { Users, FileText, AlertCircle, Loader2, Code, Eye } from 'lucide-react';
import FandomDashboard from '../templates/channel/components/FandomDashboard';
import ContentDashboard from '../templates/channel/components/ContentDashboard';
import { TabView } from '../templates/channel/types';
import type { DashboardData } from '../templates/channel/types';
import { dashboardData as sampleData } from '../templates/channel/data';
import { BRANDS, type BrandType } from '../lib/brands';

// Deep merge: AI data + sample defaults for missing fields
function deepMergeDefaults(defaults: any, source: any): any {
  if (source === undefined || source === null) return defaults;
  if (typeof defaults !== 'object' || defaults === null) return source;
  if (Array.isArray(defaults)) {
    return Array.isArray(source) && source.length > 0 ? source : defaults;
  }

  const result: any = {};
  const allKeys = new Set([
    ...Object.keys(defaults),
    ...Object.keys(source || {}),
  ]);

  for (const key of allKeys) {
    const hasInSource = source && key in source && source[key] !== undefined;
    const hasInDefaults = key in defaults;

    if (hasInSource && hasInDefaults) {
      if (
        typeof defaults[key] === 'object' &&
        !Array.isArray(defaults[key]) &&
        defaults[key] !== null
      ) {
        result[key] = deepMergeDefaults(defaults[key], source[key]);
      } else {
        result[key] = source[key];
      }
    } else if (hasInSource) {
      result[key] = source[key];
    } else {
      result[key] = defaults[key];
    }
  }
  return result;
}

// Error Boundary to catch rendering crashes
interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

class DashboardErrorBoundary extends Component<
  { children: React.ReactNode; dataTs: string },
  ErrorBoundaryState
> {
  state: ErrorBoundaryState = { hasError: false, error: null };

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidUpdate(prevProps: { children: React.ReactNode; dataTs: string }) {
    if (prevProps.dataTs !== this.props.dataTs && this.state.hasError) {
      this.setState({ hasError: false, error: null });
    }
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="bg-white rounded-lg border-2 border-red-200 p-8 text-center">
          <AlertCircle className="w-12 h-12 text-red-400 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-red-700 mb-2">
            대시보드 렌더링 실패
          </h3>
          <p className="text-sm text-red-500 mb-2">
            {this.state.error?.message || '컴포넌트 렌더링 중 오류가 발생했습니다.'}
          </p>
          <p className="text-xs text-gray-500 mb-4">
            데이터 구조가 올바르지 않을 수 있습니다. 다시 생성해주세요.
          </p>
          <details className="text-left">
            <summary className="cursor-pointer text-sm text-gray-500">원본 코드 보기</summary>
            <pre className="mt-2 text-xs bg-gray-50 p-3 rounded border overflow-x-auto max-h-64 overflow-y-auto">
              <code>{this.props.dataTs}</code>
            </pre>
          </details>
        </div>
      );
    }
    return this.props.children;
  }
}

interface PreviewFrameProps {
  dataTs: string | null;
  isLoading?: boolean;
  brand?: BrandType;
  onDataTsChange?: (dataTs: string) => void;
}

function parseDashboardData(dataTs: string): DashboardData | null {
  try {
    // Extract the object literal from "export const dashboardData: DashboardData = { ... };"
    const match = dataTs.match(/=\s*(\{[\s\S]*\})\s*;?\s*$/);
    if (!match) return null;

    const fn = new Function(`return ${match[1]}`);
    const rawData = fn();

    if (!rawData || typeof rawData !== 'object') return null;

    // Deep merge with sample data as defaults for any missing fields
    const merged = deepMergeDefaults(sampleData, rawData) as DashboardData;
    return merged;
  } catch (e) {
    console.error('Failed to parse dashboard data:', e);
    return null;
  }
}

type PreviewMode = 'preview' | 'editor';

export default function PreviewFrame({ dataTs, isLoading = false, brand = 'beauty', onDataTsChange }: PreviewFrameProps) {
  const [activeTab, setActiveTab] = useState<TabView>(TabView.FANDOM);
  const [mode, setMode] = useState<PreviewMode>('preview');
  const [editBuffer, setEditBuffer] = useState<string>('');
  const [parseError, setParseError] = useState<string | null>(null);
  const isLocalEdit = useRef(false);
  const brandConfig = BRANDS[brand];

  const dashboardData = useMemo(() => {
    if (!dataTs) return null;
    return parseDashboardData(dataTs);
  }, [dataTs]);

  useEffect(() => {
    if (dataTs && !isLocalEdit.current) {
      setEditBuffer(dataTs);
      setParseError(null);
    }
    isLocalEdit.current = false;
  }, [dataTs]);

  if (isLoading) {
    return (
      <div className="bg-white rounded-lg border-2 border-gray-200 p-8 flex flex-col items-center justify-center min-h-[400px]">
        <Loader2 className="w-12 h-12 animate-spin mb-4" style={{ color: brandConfig.brandColor }} />
        <p className="text-gray-600 font-medium">채널 데이터 생성 중...</p>
      </div>
    );
  }

  if (!dataTs) {
    return (
      <div className="bg-white rounded-lg border-2 border-dashed border-gray-300 p-8 flex flex-col items-center justify-center min-h-[400px] text-center">
        <AlertCircle className="w-12 h-12 text-gray-400 mb-4" />
        <h3 className="text-lg font-semibold text-gray-700 mb-2">
          미리보기 준비되지 않음
        </h3>
        <p className="text-sm text-gray-500 max-w-md">
          입력 탭에서 채널 정보를 입력하고 "AI로 채널 생성" 버튼을 클릭하면
          여기에 대시보드 미리보기가 표시됩니다.
        </p>
      </div>
    );
  }

  if (!dashboardData) {
    return (
      <div className="bg-white rounded-lg border-2 border-red-200 p-8 flex flex-col items-center justify-center min-h-[400px] text-center">
        <AlertCircle className="w-12 h-12 text-red-400 mb-4" />
        <h3 className="text-lg font-semibold text-red-700 mb-2">
          데이터 파싱 실패
        </h3>
        <p className="text-sm text-red-500 max-w-md">
          생성된 데이터를 파싱할 수 없습니다. 다시 생성해주세요.
        </p>
        <details className="mt-4 w-full text-left">
          <summary className="cursor-pointer text-sm text-gray-500">원본 코드 보기</summary>
          <pre className="mt-2 text-xs bg-gray-50 p-3 rounded border overflow-x-auto max-h-64 overflow-y-auto">
            <code>{dataTs}</code>
          </pre>
        </details>
      </div>
    );
  }

  return (
    <DashboardErrorBoundary dataTs={dataTs}>
      <div
        className="bg-[#F3F5F9] rounded-lg border-2 overflow-hidden"
        style={{ borderColor: `${brandConfig.brandColor}33`, '--color-brand': brandConfig.brandColor } as React.CSSProperties}
      >
        {/* Tab Navigation */}
        <div className="bg-white border-b border-slate-200 px-4 py-3">
          <div className="flex items-center justify-between">
            <span className="font-logo text-2xl font-normal tracking-tight cursor-pointer select-none" style={{ color: brandConfig.brandColor }}>
              {brandConfig.logo}
            </span>
            {mode === 'preview' && (
              <div className="flex bg-slate-100 p-1 rounded-lg">
                <button
                  onClick={() => setActiveTab(TabView.FANDOM)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                    activeTab === TabView.FANDOM
                      ? 'bg-white shadow-sm'
                      : 'text-slate-500 hover:text-slate-700'
                  }`}
                  style={activeTab === TabView.FANDOM ? { color: brandConfig.brandColor } : undefined}
                >
                  <Users size={16} />
                  팬덤 지표 분석
                </button>
                <button
                  onClick={() => setActiveTab(TabView.CONTENT)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                    activeTab === TabView.CONTENT
                      ? 'bg-white shadow-sm'
                      : 'text-slate-500 hover:text-slate-700'
                  }`}
                  style={activeTab === TabView.CONTENT ? { color: brandConfig.brandColor } : undefined}
                >
                  <FileText size={16} />
                  채널 핵심 콘텐츠 분석
                </button>
              </div>
            )}
            <div className="flex bg-slate-100 p-1 rounded-lg">
              <button
                onClick={() => setMode('preview')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition-all duration-200 ${
                  mode === 'preview'
                    ? 'bg-white shadow-sm text-slate-700'
                    : 'text-slate-400 hover:text-slate-600'
                }`}
              >
                <Eye size={14} />
                미리보기
              </button>
              <button
                onClick={() => {
                  setMode('editor');
                  if (dataTs && !editBuffer) setEditBuffer(dataTs);
                }}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition-all duration-200 ${
                  mode === 'editor'
                    ? 'bg-white shadow-sm text-slate-700'
                    : 'text-slate-400 hover:text-slate-600'
                }`}
              >
                <Code size={14} />
                코드편집
              </button>
            </div>
          </div>
        </div>

        {/* Dashboard Content / Editor */}
        {mode === 'preview' ? (
          <div className="p-4">
            {activeTab === TabView.FANDOM
              ? <FandomDashboard data={dashboardData.fandom} chartColors={brandConfig.chartColors} />
              : <ContentDashboard data={dashboardData.content} />
            }
          </div>
        ) : (
          <div className="p-4">
            {parseError && (
              <div className="mb-3 px-4 py-3 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-sm font-medium text-red-700">파싱 오류</p>
                <p className="text-xs text-red-500 mt-1">{parseError}</p>
              </div>
            )}
            <textarea
              value={editBuffer}
              onChange={(e) => {
                const newValue = e.target.value;
                setEditBuffer(newValue);
                try {
                  const match = newValue.match(/=\s*(\{[\s\S]*\})\s*;?\s*$/);
                  if (!match) {
                    setParseError('데이터 객체를 찾을 수 없습니다. "export const dashboardData: DashboardData = { ... };" 형식을 확인하세요.');
                    return;
                  }
                  const fn = new Function(`return ${match[1]}`);
                  fn();
                  setParseError(null);
                  isLocalEdit.current = true;
                  onDataTsChange?.(newValue);
                } catch (err) {
                  setParseError(err instanceof Error ? err.message : '코드 파싱에 실패했습니다.');
                }
              }}
              className="w-full h-[600px] font-mono text-sm bg-slate-900 text-green-300 p-4 rounded-lg border border-slate-700 resize-y focus:outline-none focus:ring-2 focus:ring-blue-500 leading-relaxed"
              spellCheck={false}
              placeholder="data.ts 코드를 입력하세요..."
            />
            <div className="mt-2 flex items-center justify-between text-xs text-slate-400">
              <span>TypeScript 코드를 직접 수정할 수 있습니다. 유효한 코드는 자동으로 미리보기에 반영됩니다.</span>
              <span>{editBuffer.split('\n').length}줄</span>
            </div>
          </div>
        )}
      </div>
    </DashboardErrorBoundary>
  );
}
