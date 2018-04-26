import { Component, OnInit , Output , EventEmitter} from '@angular/core';
import { UserService} from '../shared/user.service';
import { User} from '../shared/user.model';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  user: User;
  cred: any;
  isLoggedIn: boolean;
  constructor(private service: UserService) {
    this.isLoggedIn=true;
    this.user = new User();
    this.cred = JSON.parse(localStorage.getItem('session'));
    this.service.getInfo(this.cred['index'], this.cred['key'])
      .subscribe(res => {
        const body = res;
        this.user.FirstName = body['name'];
        this.user.AccountType = body['accountType'];
        this.user.Key = body['key'];
        this.user.UserName = body['un'];
      });
  }

  ngOnInit() {
  }
}
