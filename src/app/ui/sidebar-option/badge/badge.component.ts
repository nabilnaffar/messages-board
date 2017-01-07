import { Component , Input} from '@angular/core';

@Component({
  selector: 'app-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.less']
})
export class BadgeComponent {
  @Input() count:number;
  @Input() title:string;
}
