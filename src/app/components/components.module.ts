import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { TabsComponent } from './tabs/tabs.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [ButtonComponent, TabsComponent, MenuComponent],
  imports: [CommonModule],
  exports: [ButtonComponent, TabsComponent, MenuComponent],
})
export class ComponentsModule {}
