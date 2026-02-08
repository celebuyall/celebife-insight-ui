export type BrandType = 'beauty' | 'food';

export interface BrandConfig {
  type: BrandType;
  logo: string;
  brandColor: string;
  chartColors: [string, string];
  title: string;
}

export const BRANDS: Record<BrandType, BrandConfig> = {
  beauty: {
    type: 'beauty',
    logo: 'Celebeauty',
    brandColor: '#8b5cf6',
    chartColors: ['#7d4fde', '#e8e0fb'],
    title: 'Celebeauty Intelligence Dashboard',
  },
  food: {
    type: 'food',
    logo: 'Celebfood',
    brandColor: '#7c7d35',
    chartColors: ['#7c7d35', '#e5e5d7'],
    title: 'Celebfood Intelligence Dashboard',
  },
};
