export const PORTFOLIO_LOSS_RATIO = {
  value: 48.2,
  target: 55,
  delta: '-6.8% (GOOD)',
  statusColor: 'green' as 'green' | 'yellow' | 'red',
  segments: { green: 35, yellow: 25, red: 40 },
};

export const RENEWAL_RETENTION = {
  value: 88,
  targetLabel: 'TG: 85-90%',
  statusLabel: 'ON TARGET',
  statusColor: 'green',
  segments: [40, 25, 10, 25],
};

export const GOAL_LINES = [
  {
    label: 'NEW BUSINESS TARGET',
    currentValue: '$8.1M',
    percentage: 67,
    totalValue: '$12M',
  },
  {
    label: 'ANNUAL GWP TARGET',
    currentValue: '$28.4M',
    percentage: 68,
    totalValue: '$42M',
  },
];
