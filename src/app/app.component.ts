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
  isLoggedIn = false;
  badge: number;
  user: User;
  public log: String;
  constructor(private service: UserService) {
    this.user = this.service.user;
    this.badge = 5;
    this.username = this.service.user._FirstName;
    this.isLoggedIn = this.service._isLoggedIn;
  }
  clear() {
    this.badge = null ;
  }
logout() {
  this.isLoggedIn = this.service._isLoggedIn;
  this.service.logout();
}
ngOnInit() {

}

}
