import { Component, Input } from '@angular/core';
import { Message } from '../../../../models/message.model';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-message-card',
  standalone: true,
  imports: [MatIconModule, CommonModule],
  templateUrl: './message-card.component.html',
  styleUrls: ['./message-card.component.scss'],
})
export class MessageCardComponent {
  @Input() message: Message;
}
