import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Message }from '../../models/IMessage';
import { MessagesActions } from '../../actions/messages.actions';

@Component({
  selector: 'app-new-message',
  templateUrl: './new-message.component.html',
  styleUrls: ['./new-message.component.less']
})
export class NewMessageComponent implements OnInit {
  message: Message;
  
  constructor(private messagesActions:MessagesActions) {}

  ngOnInit() {
    this.message = new Message();
  }

  add(){
    this.messagesActions.sendMessage(this.message);
    this.message = new Message();
  }
  
}
