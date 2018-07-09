import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UserService} from '../../../../shared/user.service';

@Component({
  selector: 'app-register-new-course',
  templateUrl: './register-new-course.component.html',
  styleUrls: ['./register-new-course.component.css']
})

export class RegisterNewCourseComponent implements OnInit {
  index: number;
  inFlag = false;
  registableModules  = [ ];
  registeredModules = [];


  constructor(private http: HttpClient,private us: UserService) {

  }

  async register( course: string) {
    await this.http.post(this.us.rootUrl + 'subscribe', {
      index: localStorage.getItem('un'),
      module: course
    }).toPromise();

    this.pageLoad();
  }

  async unsubscribe( course: string) {
    await this.http.post(this.us.rootUrl + 'unsubscribe', {
      index: localStorage.getItem('un'),
      module: course
    }).toPromise();

    this.pageLoad();
  }


  ngOnInit() {
    this.pageLoad();
  }

  async getAllModules(){
    return (<Array<any>>await this.http.post(this.us.rootUrl + 'getAllModules', {
      index: localStorage.getItem('un')
    }).toPromise()).map(a => a._id);
  }

  async getSubscribedModules(){
    return <Array<any>>await this.http.post(this.us.rootUrl + 'getSubscribedModules', {
      index: localStorage.getItem('un')
    }).toPromise();
  }

  async pageLoad(){
    let a1 = await this.getAllModules();
    let a2 = this.registeredModules = await this.getSubscribedModules();
    this.registableModules = a1.filter(function(i) {return a2.indexOf(i) < 0;});
  }

}

