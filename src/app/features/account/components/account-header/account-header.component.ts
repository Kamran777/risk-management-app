import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { AccountMeta, AlertItem } from '../../models/account-header.model';
import {
  ACCOUNT_META_DATA,
  ALERT_ITEMS_DATA,
} from '../../data/account-header.data';

@Component({
  selector: 'app-account-header',
  standalone: true,
  imports: [MatCardModule, MatIconModule, CommonModule],
  templateUrl: './account-header.component.html',
  styleUrls: ['./account-header.component.scss'],
})
export class AccountHeaderComponent {
  accountMeta: AccountMeta[] = ACCOUNT_META_DATA;
  alertItems: AlertItem[] = ALERT_ITEMS_DATA;
}
