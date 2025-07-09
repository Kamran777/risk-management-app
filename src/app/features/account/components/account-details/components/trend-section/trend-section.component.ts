import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { NgApexchartsModule } from 'ng-apexcharts';
import { TrendSection } from '../../models/trend-section.model';
import { TREND_DATA } from '../../data/trend-section.data';

@Component({
  selector: 'app-trend-section',
  standalone: true,
  imports: [MatIconModule, MatCardModule, CommonModule, NgApexchartsModule],
  templateUrl: './trend-section.component.html',
  styleUrls: ['./trend-section.component.scss'],
})
export class TrendSectionComponent {
  trends: TrendSection[] = TREND_DATA;
}
