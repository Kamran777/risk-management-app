import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { WorkQueueRow } from '../../models/work-queue.model';
import { Subscription } from 'rxjs/internal/Subscription';
import { ApiService } from '../../../../core/services/api.service';

interface TabConfig {
  label: string;
  filterFn: (row: WorkQueueRow) => boolean;
}

@Component({
  selector: 'app-work-queue',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatIconModule, MatMenuModule],
  templateUrl: './work-queue.component.html',
  styleUrls: ['./work-queue.component.scss'],
})
export class WorkQueueComponent implements OnInit, OnDestroy {
  title = 'Work Queue';
  displayedColumns: string[] = [
    'originator',
    'clientLine',
    'type',
    'status',
    'created',
    'actions',
  ];
  allRows: WorkQueueRow[] = [];
  tabConfigs: TabConfig[] = [
    {
      label: 'Assigned to me',
      filterFn: (row) => row.name === 'Me' || row.initials === 'MK',
    },
    {
      label: 'Pending Review',
      filterFn: (row) => row.status === 'Pending Review',
    },
    {
      label: 'Referrals',
      filterFn: (row) => row.type.includes('Referral'),
    },
  ];
  activeTabLabel = this.tabConfigs[0].label;
  filteredRows: WorkQueueRow[] = [];

  private subscription: Subscription;

  get filterTabs(): { label: string; count: number }[] {
    return this.tabConfigs.map((tab: TabConfig) => ({
      label: tab.label,
      count: this.getFilteredRowsByTab(tab.label).length,
    }));
  }

  constructor(private apiService: ApiService, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.subscription = this.apiService
      .getData<WorkQueueRow[]>('work-queue.json')
      .subscribe((data: WorkQueueRow[]) => {
        this.allRows = data;
        this.applyFilter();
        this.cdr.detectChanges();
      });
  }

  private applyFilter(): void {
    const config = this.tabConfigs.find(
      (tab: TabConfig) => tab.label === this.activeTabLabel
    );
    this.filteredRows = config
      ? this.allRows.filter(config.filterFn)
      : this.allRows;
  }

  private getFilteredRowsByTab(label: string): WorkQueueRow[] {
    const config = this.tabConfigs.find(
      (tab: TabConfig) => tab.label === label
    );
    return config ? this.allRows.filter(config.filterFn) : this.allRows;
  }

  setActiveTab(label: string): void {
    this.activeTabLabel = label;
    this.applyFilter();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
