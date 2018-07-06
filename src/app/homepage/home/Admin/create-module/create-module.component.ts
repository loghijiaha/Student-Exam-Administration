///<reference path="../../../../../../node_modules/@angular/core/src/metadata/directives.d.ts"/>
import { Component, OnInit } from '@angular/core';
import {UserService} from '../../../../shared/user.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-create-module',
  templateUrl: './create-module.component.html',
  styleUrls: ['./create-module.component.css']
})
export class CreateModuleComponent implements OnInit {
  batch: number;
  mCode: string;
  title: string;
  select: string;

  allSemesters  = [
    { semester: 'S1' },
    { semester: 'S2' },
    { semester: 'S3' },
    { semester: 'S4' },
    { semester: 'S5' },
    { semester: 'S6' },
    { semester: 'S7' },
    { semester: 'S8' },
  ]
//vrvvvrer
   moduleDetails = [
    {batch:this.batch}, {semester:this.select},
    {nmCode:this.mCode}, {title:this.title}
  ]
  constructor(private http: HttpClient,private service: UserService) {

  }
  async save(batch,select,mCode,title) {
    if(await this.service.submitNewModule(batch,select,mCode,title)){
    this.batch = 0;
    //Probable cause of unknown errors because selct is chosen from a drop down menu
    this.select = "";
    this.mCode = "";
    this.title = "";
    }

  }
  ngOnInit() {
  }




}
