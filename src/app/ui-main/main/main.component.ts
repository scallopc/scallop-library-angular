import { Component, OnInit } from '@angular/core';
import { ButtonComponent } from 'src/app/components/button/button.component';
import { TabsComponent } from 'src/app/components/tabs/tabs.component';
import { Router } from '@angular/router';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  menuList = [
    { name: 'Button', icon: 'bi-ui-radios', route: 'button' },
    { name: 'Tabs', icon: 'bi-card-list', route: 'tabs' },
    {
      name: 'Ex',
      icon: 'bi-card-list',
      subMenuItems: [
        { name: 'Tab 1', route: 'b' },
        { name: 'Tab 2', route: 't' },
        { name: 'External Link', url: 'https://example.com' },
      ],
    },
    { name: 'Tabs', icon: 'bi-card-list', route: 'tabs' },
  ];

  currentPage: string = '';
  selectedMenuItem = '';

  constructor() {}

  ngOnInit(): void {}

  changePage(page: any) {
    this.currentPage = page;
  }
}
