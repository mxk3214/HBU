import { Component, OnInit } from '@angular/core';
import { Message } from '../message';
import { ChatService } from '../chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {
  // Array of messages
  messages: Message[] = [];

  // New msg that has a two way binding
  newMsg: string;

  
  constructor(private chatSerivce: ChatService) { }

  ngOnInit() {
    // get messages onInit
    this.messages = this.chatSerivce.getMessages();
  }

  sendMessage(){
    // Check if empty
    if(this.newMsg == ""){
      return;
    }
    else{
      // Otherwise, make a new msg and add to array
      const newMsg: Message = {
        id: 8,
        value: this.newMsg
      }
      this.chatSerivce.addMessage(newMsg);

      this.newMsg = "";
    }
  }

}
