import { Component, OnInit } from '@angular/core';
import { User} from '../../../../shared/user.model';

@Component({
  selector: 'app-add-messages',
  templateUrl: './add-messages.component.html',
  styleUrls: ['./add-messages.component.css']
})
export class AddMessagesComponent implements OnInit {
  public moduleName: string;
  public moduleList: string[];
  constructor(user: User) {
    this.moduleList = user.SubscribedModules;
  }

  ngOnInit() {
  }

}
