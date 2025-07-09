export interface TrendItem {
  label: string;
  value: number;
}

export interface TrendSection {
  type: 'increasing' | 'decreasing';
  title: string;
  icon: string;
  iconColor: string;
  colorClass: 'green' | 'yellow' | 'blue';
  items: TrendItem[];
}
