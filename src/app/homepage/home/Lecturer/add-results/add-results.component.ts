import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ToastrService} from 'ngx-toastr';

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

  constructor( public  http: HttpClient ,public toastr: ToastrService) { }

  ngOnInit() {
    this.getSubscribedModules();
  }
  public async addResult(value:any){
    let index =  localStorage.getItem('un');
    let result = await this.http.post(this.rootUrl+'addResult',{module_id: value , result :{'result':this.result,'index': this.index} }).toPromise().then(()=>{
      this.toastr.success("Result Added","Success", {positionClass: 'toast-bottom-right'});
    },()=>{
      this.toastr.error("Some problem occured","Error", {positionClass: 'toast-bottom-right'});

    });

    console.log(result);
  }
  public async getSubscribedModules(){
    let index =  localStorage.getItem('un');
    let result = await this.http.post(this.rootUrl+'getSubscribedModules',{index: index }).toPromise();

    this.moduleList= result;
    console.log(result);
  }
  public async getAllResult(){
    console.log(this.result);

    let result = await this.http.post(this.rootUrl+'getAllResult',{module_id: this.module_id}).toPromise().then(()=>{
      this.results= result;
      console.log(this.result);
    },()=>{
      this.toastr.info("No results found","Info", {positionClass: 'toast-bottom-right'});

    });

  }
  public  async getResult(event){
    console.log("fdsfdf");

  }
}
