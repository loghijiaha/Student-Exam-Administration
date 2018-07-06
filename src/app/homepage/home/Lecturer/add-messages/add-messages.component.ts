import { Component, OnInit } from '@angular/core';
import { UserService} from '../../../../shared/user.service';
import { ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-add-messages',
  templateUrl: './add-messages.component.html',
  styleUrls: ['./add-messages.component.css']
})
export class AddMessagesComponent implements OnInit {
  public moduleName: string;
  public moduleList: any;
  constructor(public userServ: UserService, public toast: ToastrService) {
    this.moduleList = userServ.getSubscribedModules();
    console.log(this.moduleList);
  }

  ngOnInit() {
  }
  public sendNotice(messsage) {
    if (messsage != null) {
      this.userServ.sendNotice(messsage);
      this.toast.success('Successfully sent', 'Success', {positionClass: 'toast-bottom-right'});
    }
    else {
      this.toast.error('Empty message', 'Error', {positionClass: 'toast-bottom-right'});
    }
  }
}
