import { Component } from '@angular/core';
import { PortfolioGoalsComponent } from './components/portfolio-goals/portfolio-goals.component';
import { QuickActionsComponent } from './components/quick-actions/quick-actions.component';
import { MarketIntelligenceComponent } from './components/market-intelligence/market-intelligence.component';
import { WorkQueueComponent } from './components/work-queue/work-queue.component';
import { MyAccountsComponent } from './components/my-accounts/my-accounts.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    WorkQueueComponent,
    PortfolioGoalsComponent,
    QuickActionsComponent,
    MarketIntelligenceComponent,
    MyAccountsComponent,
  ],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {}
