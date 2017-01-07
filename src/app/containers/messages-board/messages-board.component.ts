import { Component } from '@angular/core';
import { select } from 'ng2-redux';
import { Observable } from 'rxjs/Observable';
import { Message } from '../../models/IMessage';
import { MessagesActions } from '../../actions/messages.actions';

@Component({
  selector: 'app-messages-board',
  templateUrl: './messages-board.component.html',
  styleUrls: ['./messages-board.component.less']
})
export class MessagesBoardComponent {
  @select('messages') messages$: Observable<Message[]>;

  constructor(private messagesActions:MessagesActions) { }
  
  selectMessage(messageId){
    this.messagesActions.selectMessage(messageId);
  }
}
