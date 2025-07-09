import { TrendSection } from '../models/trend-section.model';

export const TREND_DATA: TrendSection[] = [
  {
    type: 'increasing',
    title: 'Increasing Winnability',
    icon: 'arrow_upward',
    iconColor: '#37a06e',
    colorClass: 'green',
    items: [
      { label: 'Longer Term Commitments', value: 22 },
      { label: 'Bundled Coverage', value: 18 },
      { label: 'Loyalty Discounts', value: 14 },
    ],
  },
  {
    type: 'decreasing',
    title: 'Decreasing Winnability',
    icon: 'arrow_downward',
    iconColor: '#e8c25e',
    colorClass: 'yellow',
    items: [
      { label: 'Short-Term Cargo Contracts', value: -14 },
      { label: 'Lack of Risk Controls', value: -9 },
      { label: 'High Deductibles', value: -6 },
    ],
  },
];
