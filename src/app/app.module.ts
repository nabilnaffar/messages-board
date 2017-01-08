import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { routes } from './routes';
import { AuthGuard } from './services/auth.guard';


import { AppComponent } from './app.component';
import { MessagesBoardComponent, MessageComponent, NewMessageComponent, SidebarComponent, LoginComponent, MainComponent } from './containers';
import { MessageRowComponent, BadgeComponent, SidebarOptionComponent } from './ui';
// import { ResizeDirective } from './directives/resize.directive';
import { LoginService } from './store/login.middleware';

import  { NgReduxModule, NgRedux, DevToolsExtension } from 'ng2-redux';
import {rootReducer,  INITIAL_STATE} from './store/root.reducer';
import { IAppState } from './models/IAppState';
import { MessagesActions, AppActions } from './actions';
let logger  = require('redux-logger');
// import ReduxThunk from 'redux-thunk';

import '../rxjs-addons';
import {Observable, Observer, Subject} from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    MessagesBoardComponent,
    SidebarComponent,
    NewMessageComponent,
    MessageRowComponent,
    SidebarOptionComponent,
    BadgeComponent,
    MessageComponent,
    LoginComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    NgReduxModule,
    RouterModule.forRoot(routes)
  ],
  providers: [MessagesActions, AppActions, LoginService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(ngRedux:NgRedux<IAppState>, devTools: DevToolsExtension, loginService: LoginService){
    const MIDDLEWARES = [
      logger(),

      loginService.middleware
      ];
    const ENHANCERS = [
      devTools.enhancer()
      ];
    ngRedux.configureStore(rootReducer, INITIAL_STATE, MIDDLEWARES, ENHANCERS);
  }
}
