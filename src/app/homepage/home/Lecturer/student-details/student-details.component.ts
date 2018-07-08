import { Component, OnInit } from '@angular/core';
import  { HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {
  rootUrl = 'http://localhost:8082/';
  studentList   : any;
  moduleDetails :any;
  module_id:any;
  constructor( public  http: HttpClient) {
    this.studentList={};
  }

  ngOnInit() {
    this.getSubscribedModules();
  }
  public async viewStudents(module_id){
    let result = await this.http.post(this.rootUrl+'viewStudents',{module_id : module_id}).toPromise();
    this.studentList= result;
    console.log(result);
  }
  public async getSubscribedModules(){
    let index =  localStorage.getItem('un');
    let resulti = await this.http.post(this.rootUrl+'getSubscribedModules',{index: index }).toPromise();

    this.moduleDetails= resulti;
    console.log(resulti);
  }
  public  change_id(event:any){
    console.log(event);
    console.log("hello");

    this.viewStudents(event);

  }
}
