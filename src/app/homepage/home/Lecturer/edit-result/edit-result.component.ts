import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-edit-result',
  templateUrl: './edit-result.component.html',
  styleUrls: ['./edit-result.component.css']
})
export class EditResultComponent implements OnInit {
  results : any;
  rootUrl = 'http://localhost:8082/';
  module_id : any;
  index:string;
  result:string;
  moduleList:any;
  constructor( private  http: HttpClient, public  toastr:ToastrService) { }

  ngOnInit() {
    this.getAllResult();
    this.getSubscribedModules()
  }
  public async editResult(value:any){
    let index =  localStorage.getItem('un');
    let result = await this.http.post(this.rootUrl+'editResult',{module_id: value ,result:this.result,index: this.index} ).toPromise().then(()=>{
      this.toastr.success("Result has changed "+ this.index +" grade to " + this.result,"Success", {positionClass: 'toast-bottom-right'});
    },()=>{
      this.toastr.info("No entry found","Error", {positionClass: 'toast-bottom-right'});
    });

    console.log(result);
  }
  public async getAllResult(){
    let result = await this.http.post(this.rootUrl+'getAllResult',{module_id: this.module_id}).toPromise();
    this.results= result;
    console.log(result);
  }
  public async getSubscribedModules(){
    let index =  localStorage.getItem('un');
    let result = await this.http.post(this.rootUrl+'getSubscribedModules',{index: index }).toPromise();
    this.moduleList= result;
    console.log(result);
  }
}
