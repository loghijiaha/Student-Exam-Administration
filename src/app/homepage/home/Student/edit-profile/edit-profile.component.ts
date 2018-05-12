import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
  bDay;
  selectedDay;
  selectedMonth;
  selectedYear;
  months: number[] = [];
  years: number[] = [];
  days: number[] = [];
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

}
