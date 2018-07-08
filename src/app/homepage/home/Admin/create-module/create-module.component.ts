///<reference path="../../../../../../node_modules/@angular/core/src/metadata/directives.d.ts"/>
import { Component, OnInit } from '@angular/core';
import {UserService} from '../../../../shared/user.service';
import {HttpClient} from '@angular/common/http';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-create-module',
  templateUrl: './create-module.component.html',
  styleUrls: ['./create-module.component.css']
})
export class CreateModuleComponent implements OnInit {
  batch: string;
  mCode: string;
  title: string;
  select: number;

  allSemesters  = [
    { semester: 1 },
    { semester: 2 },
    { semester: 3 },
    { semester: 4 },
    { semester: 5 },
    { semester: 6 },
    { semester: 7 },
    { semester: 8 },
  ]

  constructor(private http: HttpClient,private service: UserService,private toastr: ToastrService) {

  }
//erpkfkpk[fs
  async save() {
    if(await this.service.submitNewModule(this.batch,this.select,this.mCode,this.title)){

    //Probable cause of unknown errors because select is chosen from a drop down menu
    this.batch = "";
    this.mCode = "";
    this.title = "";
      this.toastr.success('','Module Created', {positionClass: 'toast-bottom-right'});
    }

  }
  ngOnInit() {
  }




}
