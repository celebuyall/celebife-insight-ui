import React from 'react';

type LoadingStep = 1 | 2 | 3;

interface LoadingStateProps {
  currentStep: LoadingStep;
}

export const LoadingState: React.FC<LoadingStateProps> = ({ currentStep }) => {
  const steps = [
    { id: 1, label: '데이터 추출 중', icon: '📊' },
    { id: 2, label: '미리보기 생성 중', icon: '✨' },
    { id: 3, label: '완료', icon: '✅' },
  ] as const;

  return (
    <div className="bg-white rounded-lg border-2 border-purple-200 p-8">
      <div className="flex flex-col items-center space-y-6">
        {/* Animated spinner for steps 1 and 2 */}
        {currentStep < 3 && (
          <div className="relative">
            <div className="w-16 h-16 border-4 border-purple-100 border-t-purple-600 rounded-full animate-spin"></div>
            <div className="absolute inset-0 flex items-center justify-center text-2xl">
              {steps[currentStep - 1].icon}
            </div>
          </div>
        )}

        {/* Success icon for step 3 */}
        {currentStep === 3 && (
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-3xl animate-bounce">
            ✅
          </div>
        )}

        {/* Steps progress */}
        <div className="w-full max-w-md">
          <div className="flex justify-between mb-2">
            {steps.map((step) => (
              <div
                key={step.id}
                className={`flex-1 text-center transition-all ${
                  step.id === currentStep
                    ? 'text-purple-600 font-semibold'
                    : step.id < currentStep
                    ? 'text-green-600'
                    : 'text-gray-400'
                }`}
              >
                <div className="text-xs mb-1">Step {step.id}</div>
                <div className="text-sm">{step.label}</div>
              </div>
            ))}
          </div>

          {/* Progress bar */}
          <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
            <div
              className="bg-purple-600 h-full transition-all duration-500 ease-out rounded-full"
              style={{
                width: `${(currentStep / steps.length) * 100}%`,
              }}
            ></div>
          </div>
        </div>

        {/* Current step message */}
        <p className="text-gray-600 text-center">
          {currentStep === 1 && '보고서에서 데이터를 추출하고 있습니다...'}
          {currentStep === 2 && '채널 분석 미리보기를 생성하고 있습니다...'}
          {currentStep === 3 && '모든 작업이 완료되었습니다!'}
        </p>
      </div>
    </div>
  );
};
