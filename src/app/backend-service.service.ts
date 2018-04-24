import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable()
export class BackendServiceService {

  constructor(public  http: HttpClient ) {
  }
    getUserName() {
      return this.http.get('/');
    }

}
