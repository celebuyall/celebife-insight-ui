import React from 'react';

interface DualReportInputProps {
  reportA: string;
  reportB: string;
  onChangeA: (value: string) => void;
  onChangeB: (value: string) => void;
}

export const DualReportInput: React.FC<DualReportInputProps> = ({
  reportA,
  reportB,
  onChangeA,
  onChangeB,
}) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Report A - Fandom/KPI Report */}
      <div className="flex flex-col">
        <label className="text-sm font-semibold text-gray-700 mb-2 flex items-center justify-between">
          <span className="flex items-center gap-2">
            <span className="inline-flex items-center justify-center w-6 h-6 bg-purple-100 text-purple-600 rounded-full text-xs font-bold">
              A
            </span>
            팬덤 지표 보고서
          </span>
          <span className="text-xs font-normal text-gray-500">
            {reportA.length.toLocaleString()} 자
          </span>
        </label>
        <textarea
          value={reportA}
          onChange={(e) => onChangeA(e.target.value)}
          placeholder="팬덤/KPI 보고서 내용을 붙여넣으세요...&#10;&#10;예시:&#10;- 팔로워 수, 증가율&#10;- 조회수, 참여율&#10;- 댓글, 좋아요 등 인게이지먼트 지표&#10;- 구독자 성장 추세"
          className="w-full h-96 px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all resize-none font-mono text-sm leading-relaxed"
          spellCheck={false}
        />
      </div>

      {/* Report B - Content/Branding Strategy Report */}
      <div className="flex flex-col">
        <label className="text-sm font-semibold text-gray-700 mb-2 flex items-center justify-between">
          <span className="flex items-center gap-2">
            <span className="inline-flex items-center justify-center w-6 h-6 bg-purple-100 text-purple-600 rounded-full text-xs font-bold">
              B
            </span>
            콘텐츠 전략 보고서
          </span>
          <span className="text-xs font-normal text-gray-500">
            {reportB.length.toLocaleString()} 자
          </span>
        </label>
        <textarea
          value={reportB}
          onChange={(e) => onChangeB(e.target.value)}
          placeholder="콘텐츠/브랜딩 전략 보고서 내용을 붙여넣으세요...&#10;&#10;예시:&#10;- 콘텐츠 테마 및 방향성&#10;- 브랜드 아이덴티티&#10;- 타겟 오디언스 분석&#10;- 콘텐츠 카테고리 및 전략"
          className="w-full h-96 px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all resize-none font-mono text-sm leading-relaxed"
          spellCheck={false}
        />
      </div>
    </div>
  );
};
