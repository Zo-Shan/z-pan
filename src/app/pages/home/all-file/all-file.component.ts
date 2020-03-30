import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-all-file',
  templateUrl: './all-file.component.html',
  styleUrls: ['./all-file.component.less']
})
export class AllFileComponent implements OnInit {
  constructor(
    private activatedRouter: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activatedRouter.data.subscribe(x => {
      console.log(x);
    });
  }

  uploadChange(e) {
    console.log(e);
  }

}
