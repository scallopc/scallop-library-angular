import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { TabsComponent } from './tabs/tabs.component';
import { MenuComponent } from './menu/menu.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ButtonComponent, TabsComponent, MenuComponent],
  imports: [CommonModule, RouterModule],
  exports: [ButtonComponent, TabsComponent, MenuComponent],
})
export class ComponentsModule {}
