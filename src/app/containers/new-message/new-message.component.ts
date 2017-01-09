import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Message }from '../../models/IMessage';
import { MessagesActions } from '../../actions/messages.actions';
import {MessagesService} from '../../services/messages.service';
import {select} from 'ng2-redux';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-new-message',
  templateUrl: './new-message.component.html',
  styleUrls: ['./new-message.component.less']
})
export class NewMessageComponent implements OnInit {
  message: Message;
  loggedUser:string;
  @select('username') username$:Observable<string>;

  constructor(private messagesActions:MessagesActions, private messagesService:MessagesService) {}

  ngOnInit() {
    this.message = new Message();
    this.username$.subscribe(username => this.loggedUser=username);
  }

  add(){
    // this.messagesActions.sendMessage(this.message);
    this.message.from = this.loggedUser;
    this.message.date = new Date().toString();
    this.messagesService.messages.next({type: 'MSG', payload: this.message});
    this.message = new Message();
  }
  
}
