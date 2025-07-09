import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { ExposureItem } from '../../models/exposure.model';
import { EXPOSURE_DATA } from '../../data/performance-metrics.data';

@Component({
  selector: 'app-performance-metrics',
  standalone: true,
  imports: [MatProgressBarModule, CommonModule],
  templateUrl: './performance-metrics.component.html',
  styleUrls: ['./performance-metrics.component.scss'],
})
export class PerformanceMetricsComponent {
  title = 'Performance Metrics';
  exposure: ExposureItem[] = EXPOSURE_DATA;
}
