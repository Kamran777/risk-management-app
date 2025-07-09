export interface Account {
  accountNameType: string;
  live: string;
  broker: string;
  renewalDate: Date;
  premium: number;
  ratedPremium: number;
  lossRatio: number;
  appetite: 'HIGH' | 'MEDIUM' | 'LOW' | 'CAUTIOUS';
  status: 'Active' | 'Under review';
  triage: number;
  winnability: 'Very Strong' | 'Strong' | 'Medium' | 'Weak';
}
