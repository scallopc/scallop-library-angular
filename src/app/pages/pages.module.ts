import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonPageComponent } from './button-page/button-page.component';
import { TabsPageComponent } from './tabs-page/tabs-page.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { HomePageComponent } from './home-page/home-page.component';
import { LayoutModule } from '../layout/layout.module';
import { PagesRoutingModule } from './pages-routing.module';
import { AvatarPageComponent } from './avatar-page/avatar-page.component';
import { InputPageComponent } from './input-page/input-page.component';

@NgModule({
  declarations: [ButtonPageComponent, TabsPageComponent, HomePageComponent, AvatarPageComponent, InputPageComponent],
  imports: [CommonModule, PagesRoutingModule, ComponentsModule, LayoutModule],
  exports: [],
})
export class PagesModule {}
