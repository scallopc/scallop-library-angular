import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { TabsComponent } from './tabs/tabs.component';

@NgModule({
  declarations: [ButtonComponent, TabsComponent],
  imports: [CommonModule],
  exports: [ButtonComponent],
})
export class ComponentsModule {}
