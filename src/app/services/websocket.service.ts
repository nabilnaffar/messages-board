import { Injectable } from '@angular/core';
import { AppActions } from '../actions';
import { Subject, Observer, Observable } from 'rxjs';
//source: https://github.com/PeterKassenaar/ng2-websockets/blob/master/client/app/create-message/create-message.component.tsNn

@Injectable()
export class WebsocketService {
  private socket: Subject<MessageEvent>;

  constructor() {}

  connect(url){
      if(!this.socket) {
        this.socket = this.create(url);
        }
        return this.socket;
  }

  create(url:string):Subject<MessageEvent>{
      let ws = new WebSocket(url);
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
}