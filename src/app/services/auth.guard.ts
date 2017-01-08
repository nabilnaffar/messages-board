import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { select } from 'ng2-redux';
import {Observable} from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
    @select('username') username:Observable<string>;
    isLogged: boolean;
    constructor(private router:Router){
        this.username.subscribe(username=>{
            this.isLogged = !!username;
        })
    }
    canActivate() {
        if(this.isLogged){
            return true;
        }else{
            this.router.navigate(['/login']);
            return false;
        }
    }
}