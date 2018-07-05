import { Component, OnInit } from '@angular/core';
import { UserService} from '../../../../shared/user.service';
import { ToastrService } from 'ngx-toastr';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
  old:any;
  neww:String;
  confirm:String;




  constructor(private http: HttpClient,private service: UserService, private toastr: ToastrService) {

  }

  ngOnInit() {
  }

  async changePass() {
    if (this.confirm !== this.neww) this.toastr.error('Passwords do not match','Error',  {positionClass: 'toast-bottom-right'});
    else if (this.neww.length < 6) this.toastr.error('Password too short','Error',  {positionClass: 'toast-bottom-right'});
    else{

      if (await this.service.changePass(this.old,this.neww)) {
        this.toastr.success('Password changed', 'Success', {positionClass: 'toast-bottom-right'});
        this.confirm = "";
        this.old = "";
        this.neww = "";
      }
      else
        this.toastr.error('', 'Error', {positionClass: 'toast-bottom-right'});
      //this.oldd ='';

    }
  }
}

