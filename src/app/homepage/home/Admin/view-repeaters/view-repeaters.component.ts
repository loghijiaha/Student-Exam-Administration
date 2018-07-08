import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UserService} from '../../../../shared/user.service';

@Component({
  selector: 'app-view-repeaters',
  templateUrl: './view-repeaters.component.html',
  styleUrls: ['./view-repeaters.component.css']
})
export class ViewRepeatersComponent implements OnInit {
  dat: {};
  selectedoption: string;
  change:any;
  allModules: Array<any>;

  lists : any;

  sell:any;
  constructor(private http: HttpClient, private services: UserService) {
  }

  ngOnInit() {
    this.pageLoad();
  }

  async pageLoad() {
    this.allModules = <Array<any>>await this.services.getAllXhams();

  }

  async show(module){
    let res = await this.http.post(this.services.rootUrl+'getRepeatRequests',{
      exam:module
    }).toPromise();

    this.lists = res;

  }
  async changeContent(selection) {
    this.dat = {};
    let m = selection;
    let w = await this.services.getRepeatRequests(m);
    this.dat[m] = w || [];
    this.change = w;

  }
}

