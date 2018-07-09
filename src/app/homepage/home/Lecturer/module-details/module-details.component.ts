import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-module-details',
  templateUrl: './module-details.component.html',
  styleUrls: ['./module-details.component.css']
})
export class ModuleDetailsComponent implements OnInit {
  moduleDetails : any;
  rootUrl = 'http://localhost:8082/';

  constructor(public http:HttpClient) {

  }

  ngOnInit() {
    this.getSubscribedModules();
  }
  public async getSubscribedModules(){
    let result = await this.http.post(this.rootUrl+'getAllModuleDetails',{}).toPromise();
    this.moduleDetails= result;
    console.log(result);
  }
}
