import React from 'react';

interface ProfileMetaFormProps {
  meta: {
    platform: 'Instagram' | 'YouTube';
    handle: string;
    profileUrl: string;
  };
  onChange: (meta: ProfileMetaFormProps['meta']) => void;
}

export const ProfileMetaForm: React.FC<ProfileMetaFormProps> = ({
  meta,
  onChange,
}) => {
  const handleFieldChange = (field: keyof typeof meta, value: string) => {
    onChange({
      ...meta,
      [field]: value,
    });
  };

  return (
    <div className="bg-white rounded-lg border-2 border-gray-200 p-6 space-y-4">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">
        프로필 정보
      </h3>

      {/* Platform Selection */}
      <div className="flex flex-col">
        <label className="text-sm font-medium text-gray-700 mb-2">
          플랫폼
        </label>
        <div className="flex gap-3">
          <button
            type="button"
            onClick={() => handleFieldChange('platform', 'Instagram')}
            className={`flex-1 px-4 py-3 rounded-lg border-2 font-medium transition-all ${
              meta.platform === 'Instagram'
                ? 'border-purple-500 bg-purple-50 text-purple-700'
                : 'border-gray-200 bg-white text-gray-600 hover:border-gray-300'
            }`}
          >
            <span className="flex items-center justify-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              Instagram
            </span>
          </button>
          <button
            type="button"
            onClick={() => handleFieldChange('platform', 'YouTube')}
            className={`flex-1 px-4 py-3 rounded-lg border-2 font-medium transition-all ${
              meta.platform === 'YouTube'
                ? 'border-purple-500 bg-purple-50 text-purple-700'
                : 'border-gray-200 bg-white text-gray-600 hover:border-gray-300'
            }`}
          >
            <span className="flex items-center justify-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
              YouTube
            </span>
          </button>
        </div>
      </div>

      {/* Handle Input */}
      <div className="flex flex-col">
        <label className="text-sm font-medium text-gray-700 mb-2">
          핸들
        </label>
        <input
          type="text"
          value={meta.handle}
          onChange={(e) => handleFieldChange('handle', e.target.value)}
          placeholder="@username"
          className="px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all"
        />
      </div>

      {/* Profile URL Input */}
      <div className="flex flex-col">
        <label className="text-sm font-medium text-gray-700 mb-2">
          프로필 URL
        </label>
        <input
          type="url"
          value={meta.profileUrl}
          onChange={(e) => handleFieldChange('profileUrl', e.target.value)}
          placeholder={
            meta.platform === 'Instagram'
              ? 'https://instagram.com/username'
              : 'https://youtube.com/@username'
          }
          className="px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all"
        />
      </div>
    </div>
  );
};
