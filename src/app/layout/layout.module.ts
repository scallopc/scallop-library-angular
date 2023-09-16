import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '../components/components.module';
import { HeaderComponent } from './header/header.component';
import { LayoutComponent } from './layout/layout.component';

@NgModule({
  declarations: [HeaderComponent, LayoutComponent],
  imports: [CommonModule, ComponentsModule],
  exports: [HeaderComponent, LayoutComponent],
})
export class LayoutModule {}
