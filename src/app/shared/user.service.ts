import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {User} from './user.model';
import { Router} from '@angular/router';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import index from '@angular/cli/lib/cli';
@Injectable()
export class UserService {
  rootUrl = 'http://localhost:8082/';
  public  user: User;
  cred: any;
  public log = 'Login';
  constructor(private http: HttpClient, private router: Router ) {this.user = new  User();
  }
  public _isLoggedIn(): boolean {
    return localStorage.getItem('un') != null;
  }
  public getInfo(index, key) {
    return this.http.post(this.rootUrl + 'userInfo', { index: index, key : key });

  }
  // For student
  public logout() {
    localStorage.removeItem('session');
    localStorage.removeItem('key');
    localStorage.removeItem('un');
    console.log('removed');
    this.router.navigate(['login']);
  }
  public async login( username, password) {
    if (username === '' && password === '') {
      alert('Enter your password and username');
      console.log('invalid');
    } else {

      try {
        console.log("working)");
        let res = await this.http.post(this.rootUrl + 'auth', {index: username, pw: password}).toPromise();
        localStorage.setItem('session', JSON.stringify({index: username, key: res['key']}));
        localStorage.setItem('un', username);
        localStorage.setItem('key', res['key']);
        this.router.navigate(['home']);
        this.cred = JSON.parse(localStorage.getItem('session'));
        console.log(this.cred['key']);
        this.getInfo(this.cred['index'], this.cred['key'])
          .subscribe(res => {
            const body = res;
            this.user.FirstName = body['name'];
            this.user.AccountType = body['accountType'];
            this.user.Key = body['key'];
            this.user.UserName = body['un'];
          });
      }
      catch (e) {
        console.log('err');
        alert('Username and Password are not matching');
      }
    }
  }
  public getPastpaper( year) {
    // after implementing api
  }
  public requestForRecorrection() {}
  public requestForRepeat() {}
  public async contact(about,dis) {
    let res: Object = await this.http.post(this.rootUrl + 'contactAdmin', {
      index:localStorage.getItem('un'),
      topic: about,
      description: dis

    }).toPromise();

    return true;
  }
  // For lecturer
  public putPastpaper(fileToUpload: File, path: string): Observable<boolean> {
    const endpoint = path;
    const formData: FormData = new FormData();
    formData.append('filekey', fileToUpload , fileToUpload.name);
    return this.http.post( endpoint , formData).map(() => { return true} );
  }
  public async changePass(old,neww) {

    let res = await this.http.post(this.rootUrl + 'changePass', {
      index: localStorage.getItem('un'),
      key: localStorage.getItem('key'),
      old:old,
      new:neww
    }).toPromise();

    if (res['result'] == 200)return true;
    return false;

  }
  public async submitNewModule(batch,select,mCode,title){
    let res = await this.http.post(this.rootUrl + 'createModule', {
      batch:batch,
      semester:select,
      moduleCode:mCode,
      title:title

    }).toPromise();

    if (res['result'] == 200)return true;
    return false;
  }


  public async submitAccountDetails(pass,acType,index,batch){
    let res = await this.http.post(this.rootUrl + 'createUser', {
      index:index,
      pw:pass,
      accountType:acType,
      batch:batch
    }).toPromise();

    if (res['result'] == 200)return true;
    return false;
  }

  public async submitExamDetails(moduleCode,date,start_time,venue){
    let res = await this.http.post(this.rootUrl + 'createExam', {
        module:moduleCode,
        date:date,
        startTime:start_time,
        venue:venue,

      }

    ).toPromise();

    if (res['result'] == 200)return true;
    return false;
  }

  public async getAllModulesF(){
    let res = await this.http.post(this.rootUrl + 'getAllModules', {

    }).toPromise();

    //The type check might be redundant and errornuous
      return res;
    }

  public async getSubscribedModules(){
    return this.http.post(this.rootUrl+'getSubscribedModules',{index: localStorage.getItem('un')}).toArray;
  }
  public async sendNotice(message){
    return this.http.post(this.rootUrl+'sendNotice',{message :message});
  }
  public async getAllXhams(){
    let res = await this.http.post(this.rootUrl + 'getAllExams',{

    }).toPromise();

      return res
  }

  public async submitDeleteExam(module){
    let res = await this.http.post(this.rootUrl + 'deleteExam', {
      module:module,
    }).toPromise()
    if (res['result'] == 200){
      console.log('200:OK')
      return true;
    }
    return false;
  }

  public async submitProfileDetails(index,name,date,address,tp,email,gender){
    let res = await this.http.post(this.rootUrl + 'setProfile', {
      index:index,
      fullname:name,
      dob:date,
      address:address,
      tele:tp,
      gender:gender,
      email:email,

    }).toPromise();
    if (res['result'] == 200){
      console.log('200:OK');
      return true;
    }
    return false;
  }

  public async submitRepeatingXham(exam,index){
    let res = await this.http.post(this.rootUrl + 'addRepeat',{
      exam:exam,
      index:index,
    }).toPromise();
    if (res['result'] == 200){
      console.log('200:Add OK');
      return true;
    }
    return false;
  }
}

