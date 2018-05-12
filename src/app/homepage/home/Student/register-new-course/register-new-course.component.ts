import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register-new-course',
  templateUrl: './register-new-course.component.html',
  styleUrls: ['./register-new-course.component.css']
})

export class RegisterNewCourseComponent implements OnInit {
  index: number;
  inFlag = false;
  allRegCourses  = [
    { modNum: 455 , modName: 'Maths'},
    {modNum: 458 , modName: 'Data'},
    {modNum: 457, modName: 'English'}
  ]
  regCourses = [
    {
      modNum: 451 , modName: 'hello'
    },
    {
      modNum: 459 , modName: 'ggergr'
    },
    {
      modNum: 478 , modName: 'helfghglo'
    },
    {
      modNum: 454 , modName: 'hellohf'
    }
  ];
  constructor() {
  }
  register( course: string) {
   this.allRegCourses.forEach(i => {
     if ( i.modName === course) {
       this.index = i.modNum;
       console.log(i);
       this.regCourses.forEach( j => {
         if (JSON.stringify(j) === JSON.stringify({modNum: i.modNum, modName: i.modName})) {
           this.inFlag = true;
         }
       });
     }
     });
   if (this.inFlag) {
     alert('You have enroled already');
   } else {
     this.regCourses.push({modNum: this.index, modName: course});
     console.log(this.regCourses);
   }
   this.inFlag = false;
  }
  ngOnInit() {
  }

}

