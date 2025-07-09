import {
  ChangeDetectorRef,
  Component,
  computed,
  OnDestroy,
  OnInit,
  signal,
} from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../../../core/services/api.service';
import { Subscription } from 'rxjs/internal/Subscription';
import { Account } from '../../../account/models/account.model';

@Component({
  selector: 'app-my-accounts',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatMenuModule,
    MatButtonModule,
    MatTableModule,
    MatChipsModule,
    MatIconModule,
    CommonModule,
    FormsModule,
  ],
  templateUrl: './my-accounts.component.html',
  styleUrls: ['./my-accounts.component.scss'],
})
export class MyAccountsComponent implements OnInit, OnDestroy {
  title = 'My accounts';
  displayedColumns = [
    'accountNameType',
    'live',
    'broker',
    'renewalDate',
    'premium',
    'ratedPremium',
    'lossRatio',
    'appetite',
    'status',
    'triage',
    'winnability',
    'actions',
  ];

  private subscription = new Subscription();
  accountsSignal = signal<Account[]>([]);
  searchText = signal('');

  filteredAccounts = computed(() => {
    const term = this.searchText().trim().toLowerCase();
    if (!term) return this.accountsSignal();

    return this.accountsSignal().filter((account) =>
      Object.values(account).some((value) =>
        String(value).toLowerCase().includes(term)
      )
    );
  });

  constructor(private apiService: ApiService, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.subscription = this.apiService
      .getData<Account[]>('my-accounts.json')
      .subscribe((accounts) => {
        this.accountsSignal.set(accounts);
      });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  getStatusColor(status: string): string {
    return (
      {
        New: 'blue',
        'Pending Review': 'orange',
        Completed: 'green',
      }[status] || 'gray'
    );
  }

  getLossRatioClass(ratio: number): string {
    return ratio >= 0.5
      ? 'loss-ratio-high'
      : ratio >= 0.3
      ? 'loss-ratio-medium'
      : 'loss-ratio-low';
  }

  getAppetiteClass(appetite: Account['appetite']): string {
    return `appetite-${appetite.toLowerCase()}`;
  }

  getStatusClass(status: Account['status']): string {
    return status === 'Active'
      ? 'status-active'
      : status === 'Under review'
      ? 'status-under-review'
      : '';
  }

  getWinnabilityStars(winnability: Account['winnability']): number {
    return (
      {
        'Very Strong': 5,
        Strong: 4,
        Medium: 3,
        Weak: 2,
      }[winnability] || 0
    );
  }

  applyFilter(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    this.searchText.set(value);
  }

  get dataSource(): Account[] {
    return this.filteredAccounts();
  }
}
