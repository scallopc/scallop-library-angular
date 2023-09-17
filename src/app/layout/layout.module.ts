import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '../components/components.module';
import { HeaderComponent } from './header/header.component';
import { LayoutComponent } from './layout/layout.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [HeaderComponent, LayoutComponent, MenuComponent],
  imports: [CommonModule, ComponentsModule],
  exports: [HeaderComponent, LayoutComponent, MenuComponent],
})
export class LayoutModule {}
