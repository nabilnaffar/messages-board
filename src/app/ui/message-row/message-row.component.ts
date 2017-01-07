import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Message } from '../../models/IMessage';

@Component({
  selector: 'app-message-row',
  templateUrl: './message-row.component.html',
  styleUrls: ['./message-row.component.less']
})
export class MessageRowComponent {
  @Input() message:Message;
  @Output() delete:EventEmitter<any> = new EventEmitter();

  constructor() { }

  onDelete(){
    this.delete.emit(this.message.id);
  }
}
