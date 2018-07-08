import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-add-results',
  templateUrl: './add-results.component.html',
  styleUrls: ['./add-results.component.css']
})
export class AddResultsComponent implements OnInit {
  module_id: any;
  moduleList:any;
  results:any;
  index:string;
  result:string;
  rootUrl = 'http://localhost:8082/';

  constructor( public  http: HttpClient) { }

  ngOnInit() {
  }
  public async addResult(value:any){
    let index =  localStorage.getItem('un');
    let result = await this.http.post(this.rootUrl+'addResult',{module_id: value , result :{'result':this.result,'index': this.index} }).toPromise();
    console.log(result);
  }
}
