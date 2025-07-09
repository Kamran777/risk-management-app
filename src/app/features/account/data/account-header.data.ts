import { AccountMeta, AlertItem } from '../models/account-header.model';

export const ACCOUNT_META_DATA: AccountMeta[] = [
  { label: 'EXISTING ACCOUNT', value: '54383' },
  { label: 'BROKER', value: 'Marsh McLennan' },
  { label: 'UNDERWRITER', value: 'Kate Johnson' },
];

export const ALERT_ITEMS_DATA: AlertItem[] = [
  {
    title: 'Marine Survey Required',
    subtitle: 'Scheduled for 06/12/2025',
    linkText: 'Review details link',
  },
  {
    title: 'Loss Control Complete',
    subtitle: 'Last inspection: 02/15/2025',
    linkText: 'View report',
  },
  {
    title: 'Claims Review Required',
    subtitle: '3 open claims // $245,000 TTL',
    linkText: 'View claims',
  },
];
