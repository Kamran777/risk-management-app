import {
  Component,
  ViewChild,
  ElementRef,
  ChangeDetectionStrategy,
  HostListener,
  AfterViewInit,
} from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-navbar',
  imports: [MatIconModule, CommonModule, RouterModule, MatButtonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent implements AfterViewInit {
  @ViewChild('tabBar', { static: true }) tabBarRef!: ElementRef;

  showLeft = false;
  showRight = false;

  tabs = [
    { label: 'Dashboard', icon: 'home', route: '/dashboard', active: true },
    { label: 'Accounts', icon: 'account_balance', route: '/accounts' },
    { label: 'Brokers', icon: 'group', route: '/brokers' },
    { label: 'Submissions', icon: 'assignment', route: '/submissions' },
    { label: 'Organizations', icon: 'business', route: '/organizations' },
    { label: 'Goals & Rules', icon: 'flag', route: '/goals-and-rules' },
    { label: 'Admin', icon: 'admin_panel_settings', route: '/admin' },
  ];

  ngAfterViewInit(): void {
    this.updateScrollButtons();
  }

  @HostListener('window:resize')
  onResize() {
    this.updateScrollButtons();
  }

  scrollLeft(): void {
    this.tabBarRef.nativeElement.scrollBy({ left: -150, behavior: 'smooth' });
    setTimeout(() => this.updateScrollButtons(), 200);
  }

  scrollRight(): void {
    this.tabBarRef.nativeElement.scrollBy({ left: 150, behavior: 'smooth' });
    setTimeout(() => this.updateScrollButtons(), 200);
  }

  updateScrollButtons(): void {
    const el = this.tabBarRef.nativeElement;
    this.showLeft = el.scrollLeft > 0;
    this.showRight = el.scrollLeft + el.clientWidth < el.scrollWidth - 5;
  }
}
