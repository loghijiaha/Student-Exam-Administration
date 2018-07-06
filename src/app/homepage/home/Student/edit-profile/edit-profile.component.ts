import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { User} from '../../../../shared/user.model';

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

  constructor( ) {
    for (let i = 1; i < 30 ; i++) {
      this.days.push(i);
    }
    for (let i = 1; i < 13 ; i++) {
      this.months.push(i);
    }
    for (let i = 1900; i < 2050  ; i++) {
      this.years.push(i);
    }
  }
  ngOnInit() {
  }
  onEditSubmit(form: NgForm) {
    this.isValidFormSubmitted = false;
    if ( form.invalid) {
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

}
