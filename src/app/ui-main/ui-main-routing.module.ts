import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ButtonPageComponent } from './pages/button-page/button-page.component';
import { TabsPageComponent } from './pages/tabs-page/tabs-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'button', pathMatch: 'full' },
  { path: 'button', component: ButtonPageComponent },
  { path: 'tabs', component: TabsPageComponent },
  { path: 'ex/tab1', component: ButtonPageComponent },
  { path: 'ex/tab2', component: TabsPageComponent },
  // ... outras rotas ...
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UiMainRoutingModule {}
