import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-module',
  templateUrl: './create-module.component.html',
  styleUrls: ['./create-module.component.css']
})
export class CreateModuleComponent implements OnInit {
  index: number;
  inFlag = false;
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
  constructor() { }
  save( semester: string) {

      this.regCourses.push({modNum: this.index, modName: course});
      console.log(this.regCourses);

    this.inFlag = false;
  }
  ngOnInit() {
  }

}
