import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MessageCardComponent } from './components/message-card/message-card.component';
import { CommonModule } from '@angular/common';
import { Message } from '../../models/message.model';
import { ApiService } from '../../../../core/services/api.service';
import { Subscription } from 'rxjs/internal/Subscription';

export interface MessagesResponse {
  newMessages: Message[];
  oldMessages: Message[];
}

@Component({
  selector: 'app-communication',
  standalone: true,
  imports: [MatIconModule, MessageCardComponent, CommonModule],
  templateUrl: './communication.component.html',
  styleUrls: ['./communication.component.scss'],
})
export class CommunicationComponent implements OnInit, OnDestroy {
  title = 'Communication';
  newMessages: Message[] = [];
  oldMessages: Message[] = [];
  private subscription: Subscription;

  constructor(private apiService: ApiService, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.subscription = this.apiService
      .getData<MessagesResponse>('messages.json')
      .subscribe((data: MessagesResponse) => {
        this.newMessages = data.newMessages;
        this.oldMessages = data.oldMessages;
        this.cdr.detectChanges();
      });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
