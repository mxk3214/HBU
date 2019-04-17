import { Component, OnInit } from '@angular/core';
import { Message } from '../message';
import { ChatService } from '../chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {
  messages: Message[] = [];

  constructor(private chatSerivce: ChatService) { }

  ngOnInit() {
    this.messages = this.chatSerivce.getMessages();
  }

}
