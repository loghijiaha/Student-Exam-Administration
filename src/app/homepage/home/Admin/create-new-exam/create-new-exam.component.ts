import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UserService} from '../../../../shared/user.service';

@Component({
  selector: 'app-create-new-exam',
  templateUrl: './create-new-exam.component.html',
  styleUrls: ['./create-new-exam.component.css']
})
export class CreateNewExamComponent implements OnInit {
  start_time:string
  venue:string
  mCode:string
  allModules:any
  async showAllModules(){
    this.allModules = await this.service.getAllModulesF()

  }



  constructor(private http:HttpClient, private service:UserService) {

  }

  ngOnInit() {
    this.showAllModules();
  }
  async create(mCode,date,start_time,venue){
    if(await this.service.submitExamDetails(mCode,date,start_time,venue)){

      this.start_time = "";
      this.venue = "";
      //Probable cause of errors by adding more options to the list
      this.mCode = "";
    }
  }
}
