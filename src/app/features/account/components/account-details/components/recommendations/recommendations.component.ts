import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { Recommendation } from '../../models/recommendation.model';
import { CommonModule } from '@angular/common';
import { RECOMMENDATION_DATA } from '../../data/recommendations.data';

@Component({
  selector: 'app-recommendations',
  standalone: true,
  imports: [MatIconModule, MatCardModule, CommonModule],
  templateUrl: './recommendations.component.html',
  styleUrls: ['./recommendations.component.scss'],
})
export class RecommendationsComponent {
  icon = 'rocket_launch';
  title = 'AI-Powered Recommendations';
  recommendations: Recommendation[] = RECOMMENDATION_DATA;
}
