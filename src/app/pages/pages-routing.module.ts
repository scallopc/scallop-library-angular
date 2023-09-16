import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ButtonPageComponent } from './button-page/button-page.component';
import { TabsPageComponent } from './tabs-page/tabs-page.component';

const routes: Routes = [
  { path: 'button', component: ButtonPageComponent },
  { path: 'tabs', component: TabsPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
