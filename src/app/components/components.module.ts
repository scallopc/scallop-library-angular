import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { TabsComponent } from './tabs/tabs.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ButtonComponent, TabsComponent],
  imports: [CommonModule, RouterModule],
  exports: [ButtonComponent, TabsComponent],
})
export class ComponentsModule {}
