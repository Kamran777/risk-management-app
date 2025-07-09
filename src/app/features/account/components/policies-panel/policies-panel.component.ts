import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { PolicyPanelItem } from '../../models/policy-panel.model';
import { Subscription } from 'rxjs/internal/Subscription';
import { ApiService } from '../../../../core/services/api.service';
import { MatMenuModule } from '@angular/material/menu';

@Component({
  selector: 'app-policies-panel',
  standalone: true,
  imports: [MatIconModule, MatMenuModule, CommonModule, FormsModule],
  templateUrl: './policies-panel.component.html',
  styleUrls: ['./policies-panel.component.scss'],
})
export class PoliciesPanelComponent implements OnInit, OnDestroy {
  title = 'Policies';
  searchTerm = '';
  policies: PolicyPanelItem[] = [];
  private subscription: Subscription;

  get filteredPolicies(): PolicyPanelItem[] {
    const term = this.searchTerm.trim().toLowerCase();
    if (!term) return this.policies;

    const terms = term.split(/\s+/);

    return this.policies.filter((policy: PolicyPanelItem) => {
      const combinedValues = Object.values(policy)
        .map((value) =>
          typeof value === 'string'
            ? value.replace(/[$,%]/g, '').toLowerCase()
            : String(value).toLowerCase()
        )
        .join(' ');

      return terms.every((t) => combinedValues.includes(t));
    });
  }

  get totalExpiringTech(): number {
    return this.filteredPolicies.reduce(
      (sum, p) => sum + Number(this.parseNumber(p.expiringTech)),
      0
    );
  }

  get totalExpiringPremium(): number {
    return this.filteredPolicies.reduce(
      (sum, p) => sum + Number(this.parseNumber(p.expiringPremium)),
      0
    );
  }

  get totalRenewalToTech(): number {
    return this.filteredPolicies.reduce(
      (sum, p) => sum + Number(this.parseNumber(p.renewalToTech)),
      0
    );
  }

  get totalRenewalTech(): number {
    return this.filteredPolicies.reduce(
      (sum, p) => sum + Number(this.parseNumber(p.renewalTech)),
      0
    );
  }

  get totalRenewalPremium(): number {
    return this.filteredPolicies.reduce(
      (sum, p) => sum + Number(this.parseNumber(p.renewalPremium)),
      0
    );
  }

  get averageLossRatio(): number {
    const ratios = this.filteredPolicies
      .map((p) => this.parseNumber(p.lossRatio))
      .filter((n) => !isNaN(n));
    if (ratios.length === 0) return 0;
    const sum = ratios.reduce((acc, val) => acc + val, 0);
    return sum / ratios.length;
  }

  get averageRateChange(): number {
    const rates = this.filteredPolicies
      .map((p) => this.parseNumber(p.rateChange))
      .filter((n) => !isNaN(n));
    if (rates.length === 0) return 0;
    const sum = rates.reduce((acc, val) => acc + val, 0);
    return sum / rates.length;
  }

  constructor(private apiService: ApiService, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.subscription = this.apiService
      .getData<PolicyPanelItem[]>('policies-panel.json')
      .subscribe((data: PolicyPanelItem[]) => {
        this.policies = data;
        this.cdr.detectChanges();
      });
  }

  private parseNumber(value: any): number {
    if (typeof value === 'number') return value;
    if (!value) return 0;
    return Number(String(value).replace(/[^0-9.-]+/g, '')) || 0;
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
