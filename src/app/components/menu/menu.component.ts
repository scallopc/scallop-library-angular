import {
  Component,
  Output,
  EventEmitter,
  OnInit,
  ChangeDetectorRef,
  Input,
} from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  @Output() pageChange = new EventEmitter<any>();
  @Input() menuItems: MenuItem[] = [];
  @Input() selectedMenuItem: any = ''; // Propriedade para rastrear o item selecionado
  showSubMenu: boolean = false;

  constructor(private cdr: ChangeDetectorRef, private router: Router) {}

  ngOnInit(): void {}

  // changePage(page: any) {
  //   this.pageChange.emit(page);
  //   this.cdr.detectChanges(); // Detect changes manually
  // }

  changePage(page: any) {
    console.log(this.selectedMenuItem);
    this.pageChange.emit(page);

    if (page && page.route) {
      this.router.navigateByUrl(page.route);
      this.showSubMenu = false;
    } else if (page && page.subMenuItems) {
      this.showSubMenu = !this.showSubMenu;
    } else {
      this.showSubMenu = true; // Feche o submenu quando um item do menu principal for clicado
    }
  }
}

interface MenuItem {
  name: string;
  icon: string;
  route?: any;
  subMenuItems?: SubMenuItem[];
}
interface SubMenuItem {
  name: string;
  url?: string;
  icon?: string;
  route?: any;
}
