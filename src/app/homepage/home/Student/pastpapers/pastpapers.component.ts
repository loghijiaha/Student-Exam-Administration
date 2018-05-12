import { Component, OnInit } from '@angular/core';
import { NgModel} from '@angular/forms';
import { FormsModule} from '@angular/forms';

@Component({
  selector: 'app-pastpapers',
  templateUrl: './pastpapers.component.html',
  styleUrls: ['./pastpapers.component.css']
})

export class PastpapersComponent {
  selectedOption: string;
  printedOption: string;
  pdfSrc: string;
  constructor() { }

  options = [
    { name: '2016', value: 2016 },
    { name: '2017' , value: 2017}
  ]
  print() {
    this.printedOption = this.selectedOption;
    this.pdfSrc = './assets/' + this.selectedOption + '.pdf';

  }

}
