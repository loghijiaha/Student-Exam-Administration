import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { User} from '../../../../shared/user.model';
import {HttpClient} from '@angular/common/http';
import {UserService} from '../../../../shared/user.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  isValidFormSubmitted = false;
  validateEmail = true;
  emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$';
  selectedDay;
  selectedMonth;
  selectedYear;
  months: number[] = [];
  years: number[] = [];
  days: number[] = [];
  user = new User();

  checker: number

  name: string
  email: string
  date: string
  gender: string
  tp: string
  address: string
  genders = [
    {gender: 'Male'},
    {gender: 'Female'},
    {gender: 'Other...'},
  ]

  constructor(private http: HttpClient, private service: UserService, private toastr: ToastrService) {
  }

  * /*for (let i = 1; i < 30 ; i++) {
    *  this.days.push(i);
    *}
    *for (let i = 1; i < 13 ; i++) {
    *  this.months.push(i);
    *}
    *for (let i = 1900; i < 2050  ; i++) {
    *  this.years.push(i);
    *}*/

  ngOnInit() {
    this.pageLoad();
  }

  async pageLoad(){

    //let res = await this.http.post(this.rootUrl + 'userInfo', {
    //  index: localStorage.getItem('un'),
    //  key: localStorage.getItem('key')
   // }).toPromise();
   // let u = 98;
  }

  onEditSubmit(form: NgForm) {
    this.isValidFormSubmitted = false;
    if (form.invalid) {
      return;
    }
    this.isValidFormSubmitted = true;
    this.user = form.value;
    form.resetForm();
    console.log(this.user);
  }

  keyPressTel(event: any) {
    const pattern = /^(\+\94{1,2}[- ])\d{10}$/;

    const inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode !== 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }

  async shove() {
    if (this.email.indexOf("@")< 0) {
      this.toastr.error('', 'Invalid Email Address', {positionClass: 'toast-bottom-right'});
      this.checker = 1;
      return;
    }
    if (this.email.slice(this.email.indexOf("@")+1).indexOf(".")< 0 && this.checker != 1){
      this.toastr.error('','Invalid Email Address', {positionClass: 'toast-bottom-right'});
      return;
    }
      this.checker = 0;

      //this.toastr.error('','Invalid Email Address', {positionClass: 'toast-bottom-right'});
      //this.toastr.error('', 'Error', {positionClass: 'toast-bottom-right'});


    if (await this.service.submitProfileDetails(localStorage.getItem('un'),this.name,this.date,this.address,this.tp,this.email,this.gender)){
      this.name="";
      this.date="";
      this.tp="";
      this.email="";
      this.gender="";
      this.address="";
      this.toastr.success('','Account Updated', {positionClass: 'toast-bottom-right'});
    }
  }
}


