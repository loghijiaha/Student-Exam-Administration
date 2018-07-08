import { Component, Input } from '@angular/core';
//import { UserService} from '../shared/user.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent {
  title = 'Student and Exam Management System';

  constructor() {

  }

  ngOnInit() {
  }
}
