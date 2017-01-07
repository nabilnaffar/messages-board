import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { MessagesBoardComponent, MessageComponent, NewMessageComponent, SidebarComponent } from './containers';
import { MessageRowComponent, BadgeComponent, SidebarOptionComponent } from './ui';
import { ResizeDirective } from './directives/resize.directive';

import  { NgReduxModule, NgRedux, DevToolsExtension } from 'ng2-redux';
import { rootReducer , INITIAL_STATE} from './store/root.reducer';
import { IAppState } from './models/IAppState';
import { MessagesActions } from './actions/messages.actions';
// import createLogger from 'redux-logger';

import '../rxjs-addons';


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
    ResizeDirective
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    NgReduxModule
  ],
  providers: [MessagesActions],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(ngRedux:NgRedux<IAppState>, devTools: DevToolsExtension){


    ngRedux.configureStore(rootReducer, INITIAL_STATE, [], [devTools.enhancer()]);
  }
}
