import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatIconModule } from '@angular/material/icon';
import {
  GOAL_LINES,
  PORTFOLIO_LOSS_RATIO,
  RENEWAL_RETENTION,
} from '../../data/portfolio-goals.data';

@Component({
  selector: 'app-portfolio-goals',
  standalone: true,
  imports: [MatProgressBarModule, CommonModule, MatIconModule],
  templateUrl: './portfolio-goals.component.html',
  styleUrls: ['./portfolio-goals.component.scss'],
})
export class PortfolioGoalsComponent {
  title = 'Portfolio goals';
  unit = '%';

  portfolioLossRatio = PORTFOLIO_LOSS_RATIO;
  renewalRetention = RENEWAL_RETENTION;
  goalLines = GOAL_LINES;
}
