import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuService } from 'src/app/layout/menu/menu.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  menuList = [
    { name: 'Home', icon: 'bi-ui-radios', route: 'home' },
    { name: 'Button', icon: 'bi-ui-radios', route: 'page/button' },
    { name: 'Tabs', icon: 'bi-card-list', route: 'page/tabs' },
    {
      name: 'Ex',
      icon: 'bi-card-list',
      subMenuItems: [
        { name: 'Tab 1', route: 'b' },
        { name: 'Tab 2', route: 't' },
        { name: 'External Link', url: 'https://example.com' },
      ],
    },
  ];

  constructor(
    private route: ActivatedRoute,
    private menuService: MenuService
  ) {}

  ngOnInit(): void {}

  isHomePage() {
    return this.route.snapshot.routeConfig?.path === 'home';
  }

  get fixMenu() {
    return this.menuService.fixMenu$;
  }

  menuFixed() {
    this.menuService.toggleMenuFixed();
  }
}
