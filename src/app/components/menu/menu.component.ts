import {
  Component,
  Output,
  EventEmitter,
  OnInit,
  ChangeDetectorRef,
  Input,
} from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  @Output() pageChange = new EventEmitter<any>();
  @Input() menuItems: MenuItem[] = [];
  @Input() selectedMenuItem: string = ''; // Propriedade para rastrear o item selecionado

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {}

  changePage(page: any) {
    console.log(page);
    this.pageChange.emit(page);
    this.cdr.detectChanges(); // Detect changes manually
  }
}
interface MenuItem {
  name: string;
  icon: string;
}
