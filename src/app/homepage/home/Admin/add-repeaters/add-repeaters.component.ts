import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UserService} from '../../../../shared/user.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-add-repeaters',
  templateUrl: './add-repeaters.component.html',
  styleUrls: ['./add-repeaters.component.css']
})
export class AddRepeatersComponent implements OnInit {
  exam: string
  index: string
  allXhams:any

  constructor(private http: HttpClient, private service: UserService, private toastr:ToastrService) {}


  async showAllXhams(){
    let temp = await this.service.getAllXhams()
    this.allXhams = temp
  }

  ngOnInit(){
    this.showAllXhams();
  }

  async add(exam,index)
  {
    if (await this.service.submitRepeatingXham(this.exam,this.index)){
      this.exam = "";
      this.index = "";
      this.toastr.success('','Add Successful', {positionClass: 'toast-bottom-right'});
    }
  }
//ewfefewfwfewfew
}
