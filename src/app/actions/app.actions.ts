import { Injectable } from '@angular/core';
import { NgRedux } from 'ng2-redux';
import { IAppState } from '../models/IAppState';

@Injectable()
export class AppActions{
    constructor(private ngRedux: NgRedux<IAppState>){}
    
    static LOGIN: string = 'LOGIN';

    login(username:string):void{
        this.ngRedux.dispatch({
            type: AppActions.LOGIN,
            payload: username
        })
    }
}