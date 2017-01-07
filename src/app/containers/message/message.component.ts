import { Component, OnInit } from '@angular/core';
import { select } from 'ng2-redux';
import {Observable} from 'rxjs';
import {  Message } from '../../models/IMessage';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.less']
})
export class MessageComponent implements OnInit {
  @select('selectedMessageId') selectedMessageId$: Observable<number>;
  @select('messages') messages$: Observable<Message[]>;

  selectedMessage$:Observable<Message>;

  constructor() { }

  ngOnInit() {
    this.selectedMessage$ = Observable.combineLatest(this.selectedMessageId$, this.messages$)
                                      .map(([id, messages])=>{
                                        let res =  messages.filter(message => message.id === id);
                                        return res.length ? res[0] : null;
                                      });
  }

}
