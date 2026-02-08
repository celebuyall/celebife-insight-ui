import type { VercelRequest, VercelResponse } from '@vercel/node';
import { GoogleGenerativeAI } from '@google/generative-ai';
import {
  CHANNEL_EXTRACT_SYSTEM_PROMPT,
  buildChannelExtractPrompt,
  type ProfileMeta,
} from '../src/lib/prompts/channel-extract';

interface ExtractRequestBody {
  reportA: string;
  reportB: string;
  meta: ProfileMeta;
}

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  // CORS headers for local development
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
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
    const { reportA, reportB, meta } = req.body as ExtractRequestBody;

    // Validate input
    if (!reportA || !reportB || !meta) {
      return res.status(400).json({
        success: false,
        error: 'Missing required fields: reportA, reportB, meta',
      });
    }

    if (!meta.platform || !meta.handle || !meta.profileUrl) {
      return res.status(400).json({
        success: false,
        error: 'Missing required meta fields: platform, handle, profileUrl',
      });
    }

    if (meta.platform !== 'Instagram' && meta.platform !== 'YouTube') {
      return res.status(400).json({
        success: false,
        error: 'Invalid platform. Must be "Instagram" or "YouTube"',
      });
    }

    // Check API key
    const apiKey = process.env.GOOGLE_AI_API_KEY;
    if (!apiKey) {
      return res.status(500).json({
        success: false,
        error: 'Server configuration error: Missing GOOGLE_AI_API_KEY',
      });
    }

    // Initialize Gemini AI with JSON schema enforcement
    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({
      model: 'gemini-2.5-pro',
      systemInstruction: CHANNEL_EXTRACT_SYSTEM_PROMPT,
      generationConfig: {
        responseMimeType: 'application/json',
      },
    });

    // Build user prompt
    const userPrompt = buildChannelExtractPrompt(reportA, reportB, meta);

    // Generate response - Gemini returns structured JSON matching the schema
    const result = await model.generateContent(userPrompt);
    const responseText = result.response.text();

    // Parse and validate JSON
    let dashboardData: unknown;
    try {
      dashboardData = JSON.parse(responseText);
    } catch {
      return res.status(500).json({
        success: false,
        error: 'AI response was not valid JSON',
      });
    }

    // Wrap JSON data as TypeScript code for deployment
    const dataTs = `import { DashboardData } from './types';

export const dashboardData: DashboardData = ${JSON.stringify(dashboardData, null, 2)};`;

    return res.status(200).json({
      success: true,
      dataTs,
    });

  } catch (error) {
    console.error('Extract API error:', error);

    const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';

    return res.status(500).json({
      success: false,
      error: `추출 중 오류 발생: ${errorMessage}`,
    });
  }
}
