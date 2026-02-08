export interface ProfileMeta {
  platform: 'Instagram' | 'YouTube';
  handle: string;
  profileUrl: string;
}

export interface ExtractRequest {
  reportA: string;
  reportB: string;
  meta: ProfileMeta;
}

export interface ExtractResponse {
  success: boolean;
  dataTs?: string;
  error?: string;
}

export interface DeployRequest {
  dataTs: string;
  meta: ProfileMeta;
}

export interface DeployResponse {
  success: boolean;
  deploymentUrl?: string;
  projectName?: string;
  error?: string;
}
