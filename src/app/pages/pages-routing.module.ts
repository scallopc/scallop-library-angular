import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ButtonPageComponent } from './button-page/button-page.component';
import { TabsPageComponent } from './tabs-page/tabs-page.component';
import { AvatarComponent } from '../components/avatar/avatar.component';
import { AvatarPageComponent } from './avatar-page/avatar-page.component';
import { InputPageComponent } from './input-page/input-page.component';

const routes: Routes = [
  { path: 'button', component: ButtonPageComponent },
  { path: 'tabs', component: TabsPageComponent },
  { path: 'avatar', component: AvatarPageComponent },
  { path: 'input', component: InputPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
