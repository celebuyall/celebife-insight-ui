import type { VercelRequest, VercelResponse } from '@vercel/node';
import type { ProfileMeta } from '../src/lib/types';
import { BRANDS, type BrandType } from '../src/lib/brands';
import {
  TEMPLATE_PACKAGE_JSON,
  TEMPLATE_VITE_CONFIG,
  TEMPLATE_TSCONFIG,
  TEMPLATE_MAIN_TSX,
  getTemplateIndexHTML,
  getTemplateIndexCSS,
  getTemplateAppTsx,
  getTemplateTypesTsx,
  getTemplateFandomDashboard,
  getTemplateContentDashboard,
} from './template-files';

interface DeployRequestBody {
  dataTs: string;
  meta: ProfileMeta;
  brand?: BrandType;
}

interface VercelFile {
  file: string;
  data: string;
}

function sanitizeHandle(handle: string): string {
  return handle
    .replace(/^@/, '')
    .replace(/[^a-zA-Z0-9_-]/g, '-')
    .toLowerCase()
    .slice(0, 50);
}

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  // CORS headers
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,POST');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({
      success: false,
      error: 'Method not allowed',
    });
  }

  try {
    const { dataTs, meta, brand: brandKey } = req.body as DeployRequestBody;

    // Validate input
    if (!dataTs || !meta) {
      return res.status(400).json({
        success: false,
        error: 'Missing required fields: dataTs, meta',
      });
    }

    if (!meta.handle) {
      return res.status(400).json({
        success: false,
        error: 'Missing required meta field: handle',
      });
    }

    // Resolve brand config (default to beauty for backwards compatibility)
    const brand: BrandType = brandKey && BRANDS[brandKey] ? brandKey : 'beauty';
    const brandConfig = BRANDS[brand];

    // Check deploy token
    const deployToken = process.env.VERCEL_DEPLOY_TOKEN;
    if (!deployToken) {
      return res.status(500).json({
        success: false,
        error: 'Server configuration error: Missing VERCEL_DEPLOY_TOKEN',
      });
    }

    const teamId = process.env.VERCEL_TEAM_ID;
    const sanitizedHandle = sanitizeHandle(meta.handle);
    const projectName = `haarpeer-${sanitizedHandle}`;

    // Read complex template files from source with brand-specific values
    const appTsx = getTemplateAppTsx(brandConfig.logo);
    const typesTsx = getTemplateTypesTsx();
    const fandomDashboard = getTemplateFandomDashboard(brandConfig.chartColors);
    const contentDashboard = getTemplateContentDashboard();

    // Build the file array for Vercel deployment
    const files: VercelFile[] = [
      { file: 'index.html', data: getTemplateIndexHTML(brandConfig.title) },
      { file: 'package.json', data: TEMPLATE_PACKAGE_JSON },
      { file: 'vite.config.ts', data: TEMPLATE_VITE_CONFIG },
      { file: 'tsconfig.json', data: TEMPLATE_TSCONFIG },
      { file: 'src/main.tsx', data: TEMPLATE_MAIN_TSX },
      { file: 'src/index.css', data: getTemplateIndexCSS(brandConfig.brandColor) },
      { file: 'src/App.tsx', data: appTsx },
      { file: 'src/types.ts', data: typesTsx },
      { file: 'src/data.ts', data: dataTs },
      { file: 'src/components/FandomDashboard.tsx', data: fandomDashboard },
      { file: 'src/components/ContentDashboard.tsx', data: contentDashboard },
    ];

    // Build Vercel deployment API request
    const deploymentBody: Record<string, unknown> = {
      name: projectName,
      files,
      projectSettings: {
        framework: 'vite',
        buildCommand: 'npm run build',
        outputDirectory: 'dist',
        installCommand: 'npm install',
      },
      target: 'production',
    };

    // Build URL with optional team ID
    let deployUrl = 'https://api.vercel.com/v13/deployments';
    if (teamId) {
      deployUrl += `?teamId=${teamId}`;
    }

    // Call Vercel Deployment API
    const deployResponse = await fetch(deployUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${deployToken}`,
      },
      body: JSON.stringify(deploymentBody),
    });

    const deployResult = await deployResponse.json();

    if (!deployResponse.ok) {
      console.error('Vercel deploy error:', deployResult);
      const errorMsg = deployResult.error?.message || deployResult.message || 'Vercel API error';
      return res.status(deployResponse.status).json({
        success: false,
        error: `배포 실패: ${errorMsg}`,
      });
    }

    // Extract deployment URL
    const deploymentUrl = deployResult.url
      ? `https://${deployResult.url}`
      : null;

    return res.status(200).json({
      success: true,
      deploymentUrl,
      projectName,
    });
  } catch (error) {
    console.error('Deploy API error:', error);

    const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';

    return res.status(500).json({
      success: false,
      error: `배포 중 오류 발생: ${errorMessage}`,
    });
  }
}
