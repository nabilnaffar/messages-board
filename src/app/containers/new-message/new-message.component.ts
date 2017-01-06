import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Message}from '../../models/message';

@Component({
  selector: 'app-new-message',
  templateUrl: './new-message.component.html',
  styleUrls: ['./new-message.component.less']
})
export class NewMessageComponent implements OnInit {
  @Output() newMessage:EventEmitter<any> = new EventEmitter();
  message: Message;
  
  constructor() { }

  ngOnInit() {
    this.message = new Message();
  }

  add(){
    let now = new Date();
    this.message.date = now.toString();
    console.log('Fire action here!');
  }

}
