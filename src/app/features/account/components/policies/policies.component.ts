import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Policy } from '../../models/policy.model';
import { POLICIES_DATA } from '../../data/policies.data';

@Component({
  selector: 'app-policies',
  standalone: true,
  imports: [MatIconModule, CommonModule],
  templateUrl: './policies.component.html',
  styleUrls: ['./policies.component.scss'],
})
export class PoliciesComponent {
  title = 'Policies';
  policies: Policy[] = POLICIES_DATA;
}
