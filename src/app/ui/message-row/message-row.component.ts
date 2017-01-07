import { Component, Input } from '@angular/core';
import { Message } from '../../models/IMessage';

@Component({
  selector: 'app-message-row',
  templateUrl: './message-row.component.html',
  styleUrls: ['./message-row.component.less']
})
export class MessageRowComponent {
  @Input() message:Message;
  constructor() { }
}
