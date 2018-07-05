import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-pastpaper',
  templateUrl: './add-pastpaper.component.html',
  styleUrls: ['./add-pastpaper.component.css']
})
export class AddPastpaperComponent implements OnInit {
  fileToUpload: File = null;
  constructor() { }

  ngOnInit() {
  }
  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
  }
}
