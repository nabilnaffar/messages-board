import { Component, OnInit } from '@angular/core';
import { select } from 'ng2-redux';
import {Observable} from 'rxjs';
import {  Message } from '../../models/IMessage';
import { MessagesActions } from '../../actions/messages.actions';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.less']
})
export class MessageComponent implements OnInit {
  @select('selectedMessageId') selectedMessageId$: Observable<number>;
  @select('messages') messages$: Observable<Message[]>;

  selectedMessage: Message;

  constructor(private messagesActions: MessagesActions) { }

  ngOnInit() {
    Observable.combineLatest(this.selectedMessageId$, this.messages$)
              .map(([id, messages])=>{
                let res =  messages.filter(message => message.id === id);
                return res.length ? res[0] : null;
              }).subscribe(message => {
                this.selectedMessage = message;  
              });
}

  delete(){
    this.messagesActions.deleteMessage(this.selectedMessage.id)
  }

}
