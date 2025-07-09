import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { NgApexchartsModule } from 'ng-apexcharts';
import { POSITION_BARS } from '../../data/position-bars.data';
import { PositionBar } from '../../models/position-bar.model';
import { ChartOptions } from '../../models/chart-options.model';
import { ChartOptionsService } from '../../services/chart-options.service';

@Component({
  selector: 'app-score-section',
  standalone: true,
  imports: [MatCardModule, CommonModule, NgApexchartsModule],
  templateUrl: './score-section.component.html',
  styleUrls: ['./score-section.component.scss'],
})
export class ScoreSectionComponent implements OnInit {
  positionBars: PositionBar[] = POSITION_BARS;
  chartOptions: ChartOptions;

  constructor(private chartOptionsService: ChartOptionsService) {}

  ngOnInit(): void {
    this.chartOptions = this.chartOptionsService.getChartOptions();
  }
}
