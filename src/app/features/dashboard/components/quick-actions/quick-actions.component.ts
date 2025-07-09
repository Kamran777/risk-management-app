import { Component } from '@angular/core';
import { QUICK_ACTIONS } from '../../data/quick-actions.data';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-quick-actions',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './quick-actions.component.html',
  styleUrls: ['./quick-actions.component.scss'],
})
export class QuickActionsComponent {
  title = 'Quick actions';
  actions = QUICK_ACTIONS;
}
