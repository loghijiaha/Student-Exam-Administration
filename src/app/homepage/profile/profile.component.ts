import { Component, OnInit , Input } from '@angular/core';
import { UserService} from '../../shared/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  name: string;
  accounttype: string;
  constructor( userS: UserService) {
    this.name = userS.user.FirstName;
    console.log(userS.user.FirstName);
    this.accounttype = userS.user.AccountType;
  }

  ngOnInit() {
  }

}
