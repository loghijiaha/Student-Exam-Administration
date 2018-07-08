import { Component, OnInit } from '@angular/core';
import { UserService} from '../../shared/user.service';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  about:string;
  dis:string;
  constructor(private http: HttpClient,private service: UserService,private toastr: ToastrService) { }

  ngOnInit() {
  }

  async contact(){
    if(this.dis){
      if (await this.service.contact(this.about, this.dis)) {
        this.toastr.success('Message send!', 'Success', {positionClass: 'toast-bottom-right'});
        this.clear();
      }
      else {
        this.toastr.error('Message not send', 'Error', {positionClass: 'toast-bottom-right'});
        this.clear();
      }}else{
      this.toastr.error('Type your message', '?', {positionClass: 'toast-bottom-right'});

    }

  }

  clear(){
    this.about="";
    this.dis="";
  }
}
