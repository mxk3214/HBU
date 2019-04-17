import { Injectable } from '@angular/core';
import { Message } from './message';
import { MESSAGES } from './mock-messages';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  messages: Message[] = [];

  constructor() {
    this.messages = MESSAGES;
  }


  /**
   * getMessages
   * Returns the messages array
   */
  getMessages() {
    return this.messages;
  }


  /**
   * addMessage
   * @param msg - New message object to add to array
   */
  addMessage(msg: Message){
    this.messages.push(msg);
  }
}
