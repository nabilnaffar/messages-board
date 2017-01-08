import {Injectable} from '@angular/core';
import {WebsocketService} from './websocket.service';
const URL = 'ws://localhost:3000';
import {MessagesActions} from '../actions';
import {Subject} from 'rxjs';

@Injectable()
export class MessagesService{
    public messages: Subject<any>;

    constructor(private websocketService:WebsocketService, private messagesActions:MessagesActions){
        this.messages =  <Subject<any>> websocketService.connect(URL).map((res:MessageEvent) => {
            let data = JSON.parse(res.data);
            this.messagesActions.addMessage(data);
            return data
        });
    }
}