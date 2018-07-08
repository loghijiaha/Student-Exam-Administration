import { Component, OnInit } from '@angular/core';
import  { HttpClient} from '@angular/common/http';
import  {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-sub-un-sub-module',
  templateUrl: './sub-un-sub-module.component.html',
  styleUrls: ['./sub-un-sub-module.component.css']
})
export class SubUnSubModuleComponent implements OnInit {
  rootUrl = 'http://localhost:8082/';
  allModuleList :any;
  subModules:any;my_id:string;
  constructor(public http:HttpClient , public toastr: ToastrService) { }

  ngOnInit() {
    this.getSubscribedModules();

    this.getAllModuleDetails();
  }
  public async getAllModuleDetails(){
    let result = await this.http.post(this.rootUrl+'getAllModules',{}).toPromise();
    this.allModuleList= result;
  }
  public async subscribe(module_id){
    console.log("module9d" + module_id)
    let index = localStorage.getItem('un');
    let result = await this.http.post(this.rootUrl+'subscribe',{index:index,module:module_id}).toPromise().then((e)=>{

      this.getSubscribedModules();
      this.toastr.success("Succesfully subscribed " + module_id);},()=>{
      this.toastr.error("Some problem occured","Error");

    });

    console.log(result);
  }
  public async getSubscribedModules(){
    let index =  localStorage.getItem('un');
    let result = await this.http.post(this.rootUrl+'getSubscribedModules',{index: index }).toPromise();
    this.subModules= result;

    console.log("getSubMods");

    console.log(result);
  }
  public async unsubscribe(module_id){

    let index = localStorage.getItem('un');
    let result = await this.http.post(this.rootUrl+'unsubscribe',{index : index,module:module_id}).toPromise().then((e)=>{

      this.getSubscribedModules();
      this.toastr.success("Succesfully unsubscribed " + module_id);},()=>{
      this.toastr.error("Some problem occured","Error");

    });


    console.log(result);
  }
}
