import { Injectable } from '@angular/core';
import { Message } from './message';
import { MESSAGES } from './mock-messages';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  messages: Message[] = [];

  constructor() {
    this.messages = MESSAGES;
  }

  getMessages(): Message[] {
    return this.messages;
  }
}
