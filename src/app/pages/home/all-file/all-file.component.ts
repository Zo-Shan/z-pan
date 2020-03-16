import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-file',
  templateUrl: './all-file.component.html',
  styleUrls: ['./all-file.component.less']
})
export class AllFileComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }

  uploadChange(e) {
    console.log(e);
  }

}
