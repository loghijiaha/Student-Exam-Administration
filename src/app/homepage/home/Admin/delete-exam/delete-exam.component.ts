import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UserService} from '../../../../shared/user.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-delete-exam',
  templateUrl: './delete-exam.component.html',
  styleUrls: ['./delete-exam.component.css']
})
export class DeleteExamComponent implements OnInit {
  selectedOption: string
  allXhams:any

  constructor(private http: HttpClient, private service: UserService, private toastr:ToastrService) {}


    async showAllXhams(){
      let temp = await this.service.getAllXhams()
      this.allXhams = temp
    }

    ngOnInit(){
      this.showAllXhams();
    }

    async proceed(module)
    {
      if (await this.service.submitDeleteExam(module)
    )
      {
        this.selectedOption = "";
        this.toastr.success('','Exam Successfully Removed', {positionClass: 'toast-bottom-right'});
      }
    }
//edfffrw
}
