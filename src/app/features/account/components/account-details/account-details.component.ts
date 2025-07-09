import { Component } from '@angular/core';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ScoreSectionComponent } from './components/score-section/score-section.component';
import { TrendSectionComponent } from './components/trend-section/trend-section.component';
import { RecommendationsComponent } from './components/recommendations/recommendations.component';

@Component({
  selector: 'app-account-details',
  standalone: true,
  imports: [
    SidebarComponent,
    ScoreSectionComponent,
    TrendSectionComponent,
    RecommendationsComponent,
  ],
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.scss'],
})
export class AccountDetailsComponent {
  title = 'Account Details';
}
