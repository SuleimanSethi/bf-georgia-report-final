import {
  GOLD, GOLD_BRIGHT, COPPER, COPPER_BRIGHT, SAGE, SAGE_BRIGHT,
  WARM_TAN, TEAL, LABEL,
} from '../app/tokens';

// ─── Headline Metrics ─────────────────────────────────────────────────────────
export const headlineRow1 = [
  { label: 'Total Revenue',   value: 6813.84, prefix: '$', decimals: 2, sub: '15-day campaign window',           accent: GOLD_BRIGHT    },
  { label: 'Total Orders',    value: 150,     decimals: 0,              sub: '5× daily baseline',                accent: COPPER_BRIGHT   },
  { label: 'Avg Order Value', value: 45.43,   prefix: '$', decimals: 2, sub: 'Across all 150 orders',           accent: WARM_TAN       },
] as const;

export const headlineRow2 = [
  { label: 'New Customers',   value: 124,     decimals: 0,              sub: '82.7% of all buyers',             accent: SAGE_BRIGHT    },
  { label: 'Meta Ad Spend',   value: 1150.36, prefix: '$', decimals: 2, sub: '$50–$100/day budget',            accent: COPPER_BRIGHT   },
  { label: 'True ROAS',       value: 2.6,     suffix: '×', decimals: 1, sub: 'Full attribution (2.18× pixel)', accent: GOLD_BRIGHT    },
] as const;

// ─── Campaign Timeline ────────────────────────────────────────────────────────
export const timelineEvents = [
  { date: 'Mar 24', label: 'Launch Day',      desc: 'Georgia email sent to full list',   pct: 0,   color: GOLD          },
  { date: 'Mar 30', label: 'Meta Ads Live',   desc: '3 carousels · $50/day budget',      pct: 30,  color: COPPER        },
  { date: 'Apr 4',  label: 'Selling Fast',    desc: 'Follow-up email · mid-flight push', pct: 55,  color: SAGE          },
  { date: 'Apr 6',  label: 'Budget Scaled',   desc: 'Winning creatives · $100/day',      pct: 65,  color: COPPER_BRIGHT },
  { date: 'Apr 13', label: 'Campaign Closes', desc: 'Meta paused · all assets secured',  pct: 100, color: GOLD_BRIGHT   },
];

export const weekData = [
  { phase: 'Week 1',    label: 'Mar 30 – Apr 5', spend: 424.70, impressions: 30514, purchases: 19, roas: 1.77, accent: COPPER },
  { phase: 'Week 2',    label: 'Apr 6 – Apr 12', spend: 691.84, impressions: 50428, purchases: 41, roas: 2.42, accent: GOLD   },
  { phase: 'Final Day', label: 'Apr 13',          spend: 33.82,  impressions: 2584,  purchases: 1,  roas: 2.54, accent: SAGE  },
];

// ─── Meta Ads ─────────────────────────────────────────────────────────────────
export const adData: { ad: string; spend: number; impressions: number; purchases: number; roas: number | null; winner: boolean }[] = [
  { ad: 'The Drop',     spend: 571.16, impressions: 44967, purchases: 36, roas: 2.82, winner: true  },
  { ad: 'Construction', spend: 565.19, impressions: 37738, purchases: 25, roas: 1.60, winner: false },
  { ad: 'Spring Golf',  spend: 14.01,  impressions: 821,   purchases: 0,  roas: null,  winner: false },
];

export const placements = [
  { name: 'Facebook',  spend: 231.07, pct: 20, purchases: 15, roas: 2.84, cpa: 15.40, note: 'Efficiency channel · 41% lower CPA', color: GOLD   },
  { name: 'Instagram', spend: 919.29, pct: 80, purchases: 46, roas: 2.02, cpa: 19.98, note: 'Scale channel · 3× purchase volume',  color: COPPER },
];

// ─── Email ────────────────────────────────────────────────────────────────────
export const emailSends = [
  { name: 'Launch Day',   date: 'Mar 24', opens: 5362, clicks: 357, revenue: 700.40 },
  { name: 'Selling Fast', date: 'Apr 4',  opens: 2520, clicks: 105, revenue: 590.12 },
];

// ─── Products ─────────────────────────────────────────────────────────────────
export const products = [
  { name: 'Azalea White', pct: 59, color: GOLD     },
  { name: 'Peach Sky',    pct: 30, color: COPPER   },
  { name: 'Peach Camo',   pct: 9,  color: WARM_TAN },
  { name: 'Peach Rope',   pct: 8,  color: SAGE     },
  { name: 'Outline Blue', pct: 6,  color: TEAL     },
  { name: 'Outline Camo', pct: 6,  color: WARM_TAN },
  { name: 'Azalea Blue',  pct: 5,  color: TEAL     },
  { name: 'Azalea Camo',  pct: 5,  color: SAGE     },
  { name: 'Azalea Tee',   pct: 1,  color: LABEL    },
];

export const cartData = [
  { type: 'Georgia Only', orders: 102, aov: 42.91, color: COPPER   },
  { type: 'Mixed Cart',   orders: 12,  aov: 70.40, color: GOLD     },
  { type: 'Non-Georgia',  orders: 36,  aov: 44.22, color: WARM_TAN },
];

// ─── Customer Acquisition ─────────────────────────────────────────────────────
export const customerPieData = [
  { name: 'New',       value: 124, color: COPPER },
  { name: 'Returning', value: 26,  color: '#242220' },
];

// ─── Geography ────────────────────────────────────────────────────────────────
export const stateData = [
  { state: 'Georgia',           orders: 51, revenue: 2082.35, color: GOLD     },
  { state: 'Tennessee',         orders: 20, revenue: 949.55,  color: COPPER   },
  { state: 'North Carolina',    orders: 8,  revenue: 279.20,  color: SAGE     },
  { state: 'Texas',             orders: 7,  revenue: 329.30,  color: WARM_TAN },
  { state: 'South Carolina',    orders: 6,  revenue: 296.40,  color: TEAL     },
  { state: 'Maryland',          orders: 6,  revenue: 206.40,  color: WARM_TAN },
  { state: 'Pennsylvania',      orders: 5,  revenue: 315.50,  color: SAGE     },
  { state: 'Florida',           orders: 5,  revenue: 226.60,  color: COPPER   },
  { state: 'Ohio',              orders: 5,  revenue: 198.50,  color: TEAL     },
  { state: 'Mississippi',       orders: 4,  revenue: 437.14,  color: WARM_TAN },
  { state: 'Other (14 states)', orders: 33, revenue: 1493.40, color: LABEL    },
];

// ─── Attribution ──────────────────────────────────────────────────────────────
export const attributionData = [
  { name: 'Georgia Meta',     orders: 79, pct: 47.1, color: GOLD      },
  { name: 'Georgia Klaviyo',  orders: 24, pct: 24.0, color: COPPER    },
  { name: 'Other Meta',       orders: 21, pct: 12.6, color: WARM_TAN  },
  { name: 'Unknown / Direct', orders: 19, pct: 12.7, color: SAGE      },
  { name: 'Direct Traffic',   orders: 5,  pct: 2.5,  color: TEAL      },
  { name: 'Google Organic',   orders: 2,  pct: 1.0,  color: '#5A5040' },
];

// ─── Baseline ─────────────────────────────────────────────────────────────────
export const baselineRows = [
  { label: 'Total Orders',  baseline: '793',     campaign: '150'    },
  { label: 'Total Revenue', baseline: '$36,488', campaign: '$6,813' },
  { label: 'Orders / Day',  baseline: '~1.9',    campaign: '10.0'   },
  { label: 'Revenue / Day', baseline: '~$86',    campaign: '~$454'  },
];

// ─── Brand Momentum ───────────────────────────────────────────────────────────
export const momentumStats = [
  { label: 'Instagram Followers', value: '4,131',  sub: 'End of campaign window',          color: GOLD_BRIGHT    },
  { label: 'FB Page Follows',     value: '395',    sub: '372 → 395 · +6.2% growth',       color: COPPER_BRIGHT  },
  { label: 'New Page Follows',    value: '+23',    sub: 'Earned during campaign window',   color: SAGE_BRIGHT    },
  { label: 'Retargeting Segment', value: '~2,000', sub: 'Georgia openers · not purchased', color: WARM_TAN       },
];
