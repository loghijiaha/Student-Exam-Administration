import { Component, Input } from '@angular/core';
import { UserService} from '../shared/user.service';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent {
  title = 'Student and Exam Management System';

  constructor( private service: UserService) {

  }
  login(username, password) {
    this.service.login(username, password);
  }
  }

