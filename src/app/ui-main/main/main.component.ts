import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  menuList = [
    { name: 'Button', icon: 'bi-ui-radios' },
    { name: 'Tabs', icon: 'bi-card-list' },
  ];

  constructor() {}

  ngOnInit(): void {}

  currentPage: string = '';

  changePage(page: any) {
    this.currentPage = page;
  }
}
