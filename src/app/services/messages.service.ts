import {Injectable} from '@angular/core';
import {WebsocketService} from './websocket.service';
const URL = 'ws://localhost:3000';
import {MessagesActions} from '../actions';
import {Subject} from 'rxjs';
import { Message } from '../models/IMessage';

@Injectable()
export class MessagesService{
    public messages: Subject<any>;

    constructor(private websocketService:WebsocketService, private messagesActions:MessagesActions){
        this.messages =  <Subject<any>> websocketService.connect(URL).map((res:MessageEvent) => {
            // console.warn('recieved: ', res);
            let data = JSON.parse(res.data);
            
            if(data.type==='MSG'){
                console.debug('New message received!!!', data.payload);
                let incomingMessage: Message = {
                    content: data.payload.content,
                    date: data.payload.date,
                    from: data.payload.from,
                    id: Math.floor(Math.random() * 10),
                    isRead: false,
                    title: data.payload.title
                }
                this.messagesActions.addMessage(incomingMessage);
            }
            return data
        });

        this.messages.subscribe();
    }
}