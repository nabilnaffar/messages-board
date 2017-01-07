import { Injectable } from '@angular/core';
import { NgRedux } from 'ng2-redux';
import { IAppState } from '../models/IAppState';
import { Message } from '../models/IMessage';

@Injectable()
export class MessagesActions{
    constructor(private ngRedux: NgRedux<IAppState>){}
    
    static ADD_MESSAGE: string = 'ADD_MESSAGE';
    static SELECT_MESSAGE: string = 'SELECT_MESSAGE';
    static DELETE_MESSAGE: string = 'DELETE_MESSAGE';

    addMessage(message:Message):void{
        this.ngRedux.dispatch({
            type: MessagesActions.ADD_MESSAGE,
            payload: message
        })
    }
    selectMessage(messageId:number):void{
        this.ngRedux.dispatch({
            type: MessagesActions.SELECT_MESSAGE,
            payload: messageId
        })
    }
    deleteMessage(messageId:number):void{
        this.ngRedux.dispatch({
            type: MessagesActions.DELETE_MESSAGE,
            payload: messageId
        })
    }
}