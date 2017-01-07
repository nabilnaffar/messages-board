import { Component, OnInit } from '@angular/core';
import { select } from 'ng2-redux';
import { Observable } from 'rxjs';
import { Message } from '../../models/IMessage';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.less']
})
export class SidebarComponent implements OnInit {
  @select('messages') messages$:Observable<Message[]>;
  unreadIncomingMessages: number;

  constructor() { }

  ngOnInit() {
    this.messages$.subscribe(newMessages => {
      this.unreadIncomingMessages = newMessages.filter(message => !message.isRead).length;
    })
  };
}