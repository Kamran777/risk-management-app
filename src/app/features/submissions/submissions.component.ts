import { Component, OnInit } from '@angular/core';
import { ComingSoonComponent } from '../../shared/components/coming-soon/coming-soon.component';

@Component({
  selector: 'app-submissions',
  standalone: true,
  imports: [ComingSoonComponent],
  templateUrl: './submissions.component.html',
  styleUrls: ['./submissions.component.scss'],
})
export class SubmissionsComponent {
  pageName = 'Submissions';
}
