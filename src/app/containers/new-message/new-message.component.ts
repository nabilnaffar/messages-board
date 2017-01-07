import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Message }from '../../models/IMessage';
import { MessagesActions } from '../../actions/messages.actions';

@Component({
  selector: 'app-new-message',
  templateUrl: './new-message.component.html',
  styleUrls: ['./new-message.component.less']
})
export class NewMessageComponent implements OnInit {
  @Output() newMessage:EventEmitter<any> = new EventEmitter();
  message: Message;
  
  constructor(private messagesActions:MessagesActions) { }

  ngOnInit() {
    this.message = new Message();
  }

  add(){
    let now = new Date();
    this.message.date = now.toString();
    this.messagesActions.addMessage(this.message);
    this.message = new Message();
  }
  
}
