import { Component, OnInit } from '@angular/core';
import { UserService} from '../../../../shared/user.service';
import { ToastrService} from 'ngx-toastr';
import  {User} from '../../../../shared/user.model';
import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-add-messages',
  templateUrl: './add-messages.component.html',
  styleUrls: ['./add-messages.component.css']
})
export class AddMessagesComponent implements OnInit {
  rootUrl = 'http://localhost:8082/';
  public message: string;
  public module_id: string;
  public  user :User;
  public moduleList :any;
  constructor(public http :HttpClient, public toast: ToastrService,public userS : User, public userServ:UserService) {
    this.user= userS;
  }

  ngOnInit() {
    this.getSubscribedModules();
  }
  public async sendNoticel(module_id) {
    console.log(module_id,this.message);
    if (this.message != '') {
      let result = await this.userServ.sendNotice(module_id,this.message);
      console.log(result);
      if (result != null) this.toast.success('Successfully sent', 'Success', {positionClass: 'toast-bottom-right'});
      else this.toast.error('Error', 'Error', {positionClass: 'toast-bottom-right'});

    }
    else {
      this.toast.error('Empty message', 'Error', {positionClass: 'toast-bottom-right'});
    }
  }
  public async getSubscribedModules(){
    let index =  localStorage.getItem('un');
    let result = await this.http.post(this.rootUrl+'getSubscribedModules',{index: index }).toPromise();

    this.moduleList= result;
    console.log(result);
  }
  public change_id(event){
    this.module_id = event.target.value();
  }
}
