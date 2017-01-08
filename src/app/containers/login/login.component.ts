import { Component, OnInit } from '@angular/core';
import {AppActions} from '../../actions';
import { select } from 'ng2-redux';
import { Observable } from 'rxjs';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {
  username: string;
  @select('username') loggedUser$: Observable<string>;

  constructor(private appActions: AppActions, private router:Router) {}
   
   ngOnInit(){
    this.loggedUser$.subscribe(username =>{
      if(username){
        //navigate to main app
        console.warn(username);
      }
    });  
   }

  login(username){
    this.appActions.login(username);
    //then...
    this.router.navigate(['']);
  }
}
