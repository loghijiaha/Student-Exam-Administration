import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import {UserService} from '../../../../shared/user.service';
import {HttpClient} from '@angular/common/http';
import {ToastrService} from 'ngx-toastr';
@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  data = [
  ];

  constructor(private http: HttpClient,private us: UserService, private toastr: ToastrService) { }


  ngOnInit() {
    this.pageLoad();
  }

  async pageLoad(){
    let aa = await this.getExams();

    for(let m of aa){
      let y = <any>(await this.getResult(m));
      if(y.result!=null)this.data.push({modName: m, grade: y.result});
    }

    let e=76;
  }


  async getExams(){
    return (<Array<any>>await this.http.post(this.us.rootUrl + 'getSubscribedExams', {
      index: localStorage.getItem('un')
    }).toPromise()).map(a=>a._id);
  }

  async getResult(mod){
    return (<Array<any>>await this.http.post(this.us.rootUrl + 'getResult', {
      index: localStorage.getItem('un'),
      module_id: mod
    }).toPromise());
  }

}


