// Template files for the deployed dashboard site.
// These are bundled as string constants and sent to Vercel Deployment API.
// Each export represents a file in the deployed project.

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// In ESM, __dirname is not available. Reconstruct it from import.meta.url.
// Template files are included via vercel.json includeFiles config.
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const TEMPLATES_DIR = path.join(__dirname, '..', 'src', 'templates', 'channel');

function readTemplateFile(relativePath: string): string {
  return fs.readFileSync(path.join(TEMPLATES_DIR, relativePath), 'utf-8');
}

// Simple config files defined inline
export const TEMPLATE_INDEX_HTML = `<!doctype html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Haarpeer Channel Dashboard</title>
    <link rel="stylesheet" as="style" crossorigin href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css" />
    <link href="https://fonts.cdnfonts.com/css/caviar-dreams" rel="stylesheet">
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>`;

export function getTemplateIndexHTML(title: string): string {
  return TEMPLATE_INDEX_HTML.replace('Haarpeer Channel Dashboard', title);
}

export const TEMPLATE_PACKAGE_JSON = JSON.stringify({
  name: 'haarpeer-dashboard',
  private: true,
  version: '1.0.0',
  type: 'module',
  scripts: {
    dev: 'vite',
    build: 'tsc -b && vite build',
    preview: 'vite preview',
  },
  dependencies: {
    'lucide-react': '^0.563.0',
    'react': '^19.2.0',
    'react-dom': '^19.2.0',
    'recharts': '^3.7.0',
  },
  devDependencies: {
    '@tailwindcss/vite': '^4.1.18',
    '@types/react': '^19.2.5',
    '@types/react-dom': '^19.2.3',
    '@vitejs/plugin-react': '^5.1.1',
    'tailwindcss': '^4.1.18',
    'typescript': '~5.9.3',
    'vite': '^7.2.4',
  },
}, null, 2);

export const TEMPLATE_VITE_CONFIG = `import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
})`;

export const TEMPLATE_TSCONFIG = JSON.stringify({
  compilerOptions: {
    target: 'ES2020',
    useDefineForClassFields: true,
    lib: ['ES2020', 'DOM', 'DOM.Iterable'],
    module: 'ESNext',
    skipLibCheck: true,
    moduleResolution: 'bundler',
    allowImportingTsExtensions: true,
    isolatedModules: true,
    moduleDetection: 'force',
    noEmit: true,
    jsx: 'react-jsx',
    strict: true,
    noUnusedLocals: false,
    noUnusedParameters: false,
    noFallthroughCasesInSwitch: true,
    noUncheckedSideEffectImports: true,
  },
  include: ['src'],
}, null, 2);

export const TEMPLATE_VITE_ENV = `/// <reference types="vite/client" />
`;

export const TEMPLATE_MAIN_TSX = `import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)`;

export const TEMPLATE_INDEX_CSS = `@import "tailwindcss";

@theme {
  --font-sans: 'Pretendard', -apple-system, BlinkMacSystemFont, system-ui, Roboto, sans-serif;
  --font-logo: 'Caviar Dreams', sans-serif;

  --color-brand: #8b5cf6;
  --color-slate-850: #151f32;
}

body {
  font-family: var(--font-sans);
  background-color: #F3F5F9;
  -webkit-font-smoothing: antialiased;
  word-break: keep-all;
}

::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}
::-webkit-scrollbar-track {
  background: transparent;
}
::-webkit-scrollbar-thumb {
  background: #cbd5e1;
  border-radius: 4px;
}

@keyframes fade-in {
  from { opacity: 0; transform: translateY(8px); }
  to { opacity: 1; transform: translateY(0); }
}

.animate-fade-in {
  animation: fade-in 0.3s ease-out;
}`;

export function getTemplateIndexCSS(brandColor: string): string {
  return TEMPLATE_INDEX_CSS.replace('--color-brand: #8b5cf6;', `--color-brand: ${brandColor};`);
}

// Complex component files read from source at runtime.
// These contain template literals and JSX that would be error-prone to inline.
// Vercel bundles these via includeFiles in vercel.json.
export function getTemplateAppTsx(logoName: string): string {
  const content = readTemplateFile('App.tsx');
  return content.replace(/Celebeauty/g, logoName);
}

export function getTemplateTypesTsx(): string {
  return readTemplateFile('types.ts');
}

export function getTemplateFandomDashboard(chartColors: [string, string]): string {
  const content = readTemplateFile('components/FandomDashboard.tsx');
  return content
    .replace("'#7d4fde'", `'${chartColors[0]}'`)
    .replace("'#e8e0fb'", `'${chartColors[1]}'`);
}

export function getTemplateContentDashboard(): string {
  return readTemplateFile('components/ContentDashboard.tsx');
}
