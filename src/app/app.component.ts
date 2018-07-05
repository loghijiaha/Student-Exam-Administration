import { Component , OnInit } from '@angular/core';
import {UserService} from './shared/user.service';
import {User} from './shared/user.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {
  username: string;
  badge: number;
  user: User;
  public log: String;
  constructor(private service: UserService) {
    this.user = this.service.user;
    this.badge = 5;
    this.username = this.service.user._FirstName;
  }
  clear() {
    this.badge = null ;
  }
logout() {
  this.service.logout();
  console.log("hello");
}
ngOnInit() {

}

}
