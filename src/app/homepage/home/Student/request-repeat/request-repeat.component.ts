import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-request-repeat',
  templateUrl: './request-repeat.component.html',
  styleUrls: ['./request-repeat.component.css']
})
export class RequestRepeatComponent implements OnInit {
  allRegCourses: any;
  selectedOption: string;
  options: any;
  constructor() {
    this.allRegCourses  = [
      { modNum: 455 , modName: 'Maths'},
      {modNum: 458 , modName: 'Data'},
      {modNum: 457, modName: 'English'}
    ]
    this.options = [
      { name: '2016', value: 2016 },
      { name: '2017', value: 2017 },
      { name: '2018', value: 2018 },
      { name: '2019' , value: 2019} ];
  }

  ngOnInit() {
  }
  requestRepeat(modName: string, year: number) {
    // add request for recoreection
  }
}
