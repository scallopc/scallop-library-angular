import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { TabsComponent } from './tabs/tabs.component';
import { RouterModule } from '@angular/router';
import { AvatarComponent } from './avatar/avatar.component';

@NgModule({
  declarations: [ButtonComponent, TabsComponent, AvatarComponent],
  imports: [CommonModule, RouterModule],
  exports: [ButtonComponent, TabsComponent, AvatarComponent],
})
export class ComponentsModule {}
