import { Injectable } from '@angular/core';
import { ChartOptions } from '../models/chart-options.model';

@Injectable({ providedIn: 'root' })
export class ChartOptionsService {
  getChartOptions(): ChartOptions {
    return {
      series: [{ name: 'Trend', data: [9, 13, 8, 15, 16, 11, 18, 20] }],
      chart: {
        type: 'line',
        height: 46,
        toolbar: { show: false },
        sparkline: { enabled: true },
      },
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'Now'],
        labels: { show: false },
      },
      stroke: { curve: 'straight', width: 2, colors: ['#3b82f6'] },
      fill: {
        type: 'gradient',
        gradient: { shadeIntensity: 0, opacityFrom: 0.4, opacityTo: 0.8 },
      },
      tooltip: { enabled: false },
    };
  }
}
