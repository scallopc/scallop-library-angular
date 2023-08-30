import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './ui-main/main/main.component';
import { ButtonPageComponent } from './ui-main/pages/button-page/button-page.component';
import { TabsPageComponent } from './ui-main/pages/tabs-page/tabs-page.component';

const routes: Routes = [
  {
    path: '',
    component: TabsPageComponent,
    children: [
      { path: '', redirectTo: 'button', pathMatch: 'full' },
      { path: 'button', component: ButtonPageComponent },
      { path: 'tabs', component: TabsPageComponent },
      { path: 'b', component: ButtonPageComponent },
      { path: 't', component: TabsPageComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
