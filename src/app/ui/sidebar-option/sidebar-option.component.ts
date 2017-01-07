import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sidebar-option',
  templateUrl: './sidebar-option.component.html',
  styleUrls: ['./sidebar-option.component.less']
})
export class SidebarOptionComponent {
  @Input() title: string;
  @Input() unread: number;
}
