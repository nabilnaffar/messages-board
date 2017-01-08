import { Component, OnInit } from '@angular/core';
import {AppActions} from '../../actions';
import { select } from 'ng2-redux';
import { Observable } from 'rxjs';
import {Router} from '@angular/router';
import {MessagesService} from '../../services/messages.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {
  username: string;
  @select('username') loggedUser$: Observable<string>;

  constructor(private appActions: AppActions, private router:Router, private messagesService:MessagesService) {}
   
   ngOnInit(){
    this.loggedUser$.subscribe(username =>{
      if(username){
        //navigate to main app
        console.warn('welcome: ' + username);
        this.router.navigate(['']);
      }
    });  
   }

  login(username){
    this.messagesService.messages.next({type: 'LOGIN', payload: username});
    this.appActions.login(username);
  }
}
