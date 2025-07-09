import { Component } from '@angular/core';
import { AccountHeaderComponent } from './components/account-header/account-header.component';
import { PerformanceMetricsComponent } from './components/performance-metrics/performance-metrics.component';
import { PoliciesComponent } from './components/policies/policies.component';
import { AccountStatusComponent } from './components/account-status/account-status.component';
import { AccountDetailsComponent } from './components/account-details/account-details.component';
import { CommunicationComponent } from './components/communication/communication.component';
import { PoliciesPanelComponent } from './components/policies-panel/policies-panel.component';

@Component({
  selector: 'app-accounts',
  standalone: true,
  imports: [
    AccountHeaderComponent,
    PerformanceMetricsComponent,
    PoliciesComponent,
    AccountStatusComponent,
    AccountDetailsComponent,
    CommunicationComponent,
    PoliciesPanelComponent,
  ],
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
})
export class AccountsComponent {}
