export type CurrencyCode = 'INR' | 'USD' | 'EUR';
export type BillingCycle = 'monthly' | 'annual';

export interface PricingState {
  currency: CurrencyCode;
  billingCycle: BillingCycle;
}

export interface PricingTierConfig {
  id: string;
  name: string;
  baseMonthlyRate: number; // Base rate in USD
  description: string;
}

// 1. Multi-Dimensional PricingMatrix Configuration
export const PRICING_TIERS: PricingTierConfig[] = [
  {
    id: 'starter',
    name: 'Starter',
    baseMonthlyRate: 15,
    description: 'Perfect for small teams and developers beginning automation.'
  },
  {
    id: 'pro',
    name: 'Professional',
    baseMonthlyRate: 49,
    description: 'Advanced capabilities for scaling platform tasks.'
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    baseMonthlyRate: 149,
    description: 'Dedicated infrastructure for elite production demands.'
  }
];

export const REGIONAL_TARIFFS = {
  INR: { symbol: '₹', multiplier: 83, label: 'INR (₹)' },
  USD: { symbol: '$', multiplier: 1, label: 'USD ($)' },
  EUR: { symbol: '€', multiplier: 0.92, label: 'EUR (€)' }
};

export const ANNUAL_DISCOUNT_MULTIPLIER = 0.8; // Flat 20% discount multiplier

// 2. Dynamic Pricing Math Calculator
export function calculatePrice(
  baseMonthlyRate: number,
  currency: CurrencyCode,
  cycle: BillingCycle
) {
  const tariff = REGIONAL_TARIFFS[currency];
  
  // Calculate raw monthly price scaled by regional tariff variable
  const regionalMonthlyBase = baseMonthlyRate * tariff.multiplier;
  
  if (cycle === 'monthly') {
    const roundedMonthly = Math.round(regionalMonthlyBase);
    return {
      value: roundedMonthly,
      formatted: `${tariff.symbol}${roundedMonthly.toLocaleString()}`,
      billedLabel: 'Billed monthly'
    };
  } else {
    // Annual billing applies a flat 20% discount multiplier: Rate * 12 * 0.8
    const rawAnnualTotal = regionalMonthlyBase * 12 * ANNUAL_DISCOUNT_MULTIPLIER;
    const roundedAnnualTotal = Math.round(rawAnnualTotal);
    
    // Calculate the monthly equivalent price for display
    const monthlyEquivalent = Math.round(regionalMonthlyBase * ANNUAL_DISCOUNT_MULTIPLIER);
    
    return {
      value: monthlyEquivalent,
      formatted: `${tariff.symbol}${monthlyEquivalent.toLocaleString()}`,
      billedLabel: `Billed annually (${tariff.symbol}${roundedAnnualTotal.toLocaleString()}/yr)`
    };
  }
}

// 3. Lightweight Vanilla JS PricingStore
class PricingStore {
  private state: PricingState = {
    currency: 'USD',
    billingCycle: 'monthly'
  };
  
  private listeners = new Set<(state: PricingState) => void>();

  getState(): PricingState {
    return { ...this.state };
  }

  // 4. State Dispatcher triggering listeners instantly
  setState(newState: Partial<PricingState>) {
    this.state = {
      ...this.state,
      ...newState
    };
    this.notify();
  }

  // Listener Registration system
  subscribe(callback: (state: PricingState) => void): () => void {
    this.listeners.add(callback);
    // Initial emission on subscription to establish sync
    callback({ ...this.state });
    
    return () => {
      this.listeners.delete(callback);
    };
  }

  private notify() {
    this.listeners.forEach((listener) => listener({ ...this.state }));
  }
}

export const pricingStore = new PricingStore();
