import { Component, OnInit , Input } from '@angular/core';
import { UserService} from '../../shared/user.service';
import {MatSidenavModule} from '@angular/material/sidenav';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  name: string;
  accounttype: string;
  isStudent = false;
  isLecturer = false;
  isAdmin = false;
  constructor( userS: UserService) {
    this.name = userS.user.FirstName;
    this.accounttype = localStorage.getItem('accountType');
    console.log(this,this.accounttype);
    if ( this.accounttype === 'student'){
      this.isStudent = true;
    } else if (this.accounttype === 'lecturer') {
      this.isLecturer = true;
    } else {
      this.isAdmin = true;
    }
  }

  ngOnInit() {
  }

}
