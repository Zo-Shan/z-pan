import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {
  isCollapsed = false;
  homeTitles = [
    { name: '全部文件', rout: '/home', },
    { name: '我的分享', rout: '/home/myShare' }
  ];
  currentTitle = '全部文件';
  constructor() { }

  ngOnInit(): void {
  }

  toggleCollapsed(): void {
    this.isCollapsed = !this.isCollapsed;
  }

}
