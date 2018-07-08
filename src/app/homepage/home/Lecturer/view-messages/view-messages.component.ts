import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-view-messages',
  templateUrl: './view-messages.component.html',
  styleUrls: ['./view-messages.component.css']
})
export class ViewMessagesComponent implements OnInit {
  rootUrl = 'http://localhost:8082/';

  constructor(public  http:HttpClient) { }

  ngOnInit() {
  }


}
