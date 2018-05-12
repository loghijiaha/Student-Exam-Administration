import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';
@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  displayedColumns = ['modNum', 'modName', 'index', 'grade'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  constructor() { }

  ngOnInit() {
  }

}
export interface Element {
  modNum: number;
  modName: string;
  index: string;
  grade: string;
}

const ELEMENT_DATA: Element[] = [
  {modNum: 1, modName: 'John', index: 'Doe', grade: 'john@gmail.com'},
  {modNum: 1, modName: 'Mike', index: 'Hussey', grade: 'mike@gmail.com'},
  {modNum: 1, modName: 'Ricky', index: 'Hans', grade: 'ricky@gmail.com'},
  {modNum: 1, modName: 'Martin', index: 'Kos', grade: 'martin@gmail.com'},
  {modNum: 1, modName: 'Tom', index: 'Paisa', grade: 'tom@gmail.com'}
];
