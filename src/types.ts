export type AppScreenId = 'home' | 'txns' | 'heatmap' | 'analytics' | 'ask_cfo' | 'settings';

export interface AppScreen {
  id: AppScreenId;
  title: string;
  subtitle: string;
  tag: string;
  description: string;
  highlights: string[];
}

export interface BankTransaction {
  id: string;
  title: string;
  bank: 'CBE' | 'telebirr' | 'Awash' | 'Abyssinia' | 'Dashen';
  amount: number;
  type: 'inflow' | 'outflow';
  date: string;
  time: string;
  category: string;
  verified?: boolean;
  fee?: number;
}

export interface Persona {
  id: string;
  title: string;
  subtitle: string;
  problem: string;
  benefit: string;
  quote: string;
  iconName: string;
}

export interface ChatMessage {
  id: string;
  sender: 'ai' | 'user';
  text: string;
  timestamp: string;
  metadata?: {
    amount?: string;
    recipient?: string;
    reason?: string;
    balanceAfter?: string;
    fee?: string;
  };
}

export interface PricingPlan {
  name: string;
  price: string;
  period: string;
  description: string;
  badge?: string;
  popular?: boolean;
  features: string[];
  cta: string;
}
