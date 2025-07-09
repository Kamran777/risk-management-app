import { Component } from '@angular/core';
import { ComingSoonComponent } from '../../shared/components/coming-soon/coming-soon.component';

@Component({
  selector: 'app-brokers',
  standalone: true,
  imports: [ComingSoonComponent],
  templateUrl: './brokers.component.html',
  styleUrls: ['./brokers.component.scss'],
})
export class BrokersComponent {
  pageName = 'Brokers';
}
