import { Injectable } from '@angular/core';
import { AppActions } from '../actions';
import { Subject, Observer, Observable } from 'rxjs';

const SERVER_URL:string = 'ws://localhost:3000';

@Injectable()
export class LoginService {
  private socket: Subject<MessageEvent>;

  constructor() {}

  connect(username){
      if(!this.socket) {
        this.socket = this.create(username);
        }
        return this.socket;
  }

  create(username:string):Subject<MessageEvent>{
      let ws = new WebSocket(SERVER_URL);
        let observable = Observable.create(
            (obs: Observer<MessageEvent>) => {
                ws.onmessage = obs.next.bind(obs);
                ws.onerror = obs.error.bind(obs);
                ws.onclose = obs.complete.bind(obs);
                return ws.close.bind(ws);
            }
        );
        let observer = {
            next: (data: Object) => {
                if (ws.readyState === WebSocket.OPEN) {
                    ws.send(JSON.stringify(data));
                }
            },
        };
        return Subject.create(observer, observable);
  }

  sendMessage(message){

  }

  middleware = store => next => action => {
     if(action.type === AppActions.LOGIN){
         this.connect(action.payload);
     }
    return next(action);
  }
}