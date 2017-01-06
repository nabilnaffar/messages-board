import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MessagesBoardComponent } from './containers/messages-board/messages-board.component';
import { SidebarComponent } from './containers/sidebar/sidebar.component';
import { NewMessageComponent } from './containers/new-message/new-message.component';
import { MessageRowComponent } from './ui/message-row/message-row.component';
import { SidebarOptionComponent } from './ui/sidebar-option/sidebar-option.component';
import { BadgeComponent } from './ui/sidebar-option/badge/badge.component';
import { MessageComponent } from './containers/message/message.component';
import { ResizeDirective } from './directives/resize.directive';

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
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
