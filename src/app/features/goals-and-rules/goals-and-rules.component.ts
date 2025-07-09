import { Component } from '@angular/core';
import { ComingSoonComponent } from '../../shared/components/coming-soon/coming-soon.component';

@Component({
  selector: 'app-goals-and-rules',
  standalone: true,
  imports: [ComingSoonComponent],
  templateUrl: './goals-and-rules.component.html',
  styleUrls: ['./goals-and-rules.component.scss'],
})
export class GoalsAndRulesComponent {
  pageName = 'Goals and Rules';
}
