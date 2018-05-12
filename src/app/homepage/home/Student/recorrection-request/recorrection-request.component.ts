import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recorrection-request',
  templateUrl: './recorrection-request.component.html',
  styleUrls: ['./recorrection-request.component.css']
})
export class RecorrectionRequestComponent implements OnInit {
  allRegCourses  = [
    {modNum: 455 , modName: 'Maths'},
    {modNum: 458 , modName: 'Data'},
    {modNum: 457, modName: 'English'}
  ]
  selectedOption: string;
  options = [
    { name: '2016', value: 2016 },
    { name: '2017', value: 2017 },
    { name: '2018', value: 201 },
    { name: '2019' , value: 2019}
  ]
  constructor() { }
  request(modName: string, year: number) {
    // add request for recoreection
  }
  ngOnInit() {
  }

}
