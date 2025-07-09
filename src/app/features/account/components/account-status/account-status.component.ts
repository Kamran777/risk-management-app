import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { StatusStep } from '../../models/status-step.model';
import {
  COMPLIANCE_ITEMS_DATA,
  STATUS_STEPS_DATA,
} from '../../data/account-status.data';

@Component({
  selector: 'app-account-status',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './account-status.component.html',
  styleUrls: ['./account-status.component.scss'],
})
export class AccountStatusComponent {
  title = 'Account Status';
  statusSteps: StatusStep[] = STATUS_STEPS_DATA;
  complianceItems: string[] = COMPLIANCE_ITEMS_DATA;
}
