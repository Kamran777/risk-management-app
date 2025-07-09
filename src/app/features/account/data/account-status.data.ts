import { StatusStep } from '../models/status-step.model';

export const STATUS_STEPS_DATA: StatusStep[] = [
  { label: 'Submitted', status: 'completed' },
  { label: 'Review', status: 'completed' },
  { label: 'Quote', status: 'completed' },
  { label: 'Bind', status: 'completed' },
  { label: 'Issue', status: 'completed' },
  { label: 'Renew', status: 'pending' }
];

export const COMPLIANCE_ITEMS_DATA: string[] = [
  'KYC verification',
  'Required Documentation',
  'Regulatory approval',
  'Financial Verification'
];
