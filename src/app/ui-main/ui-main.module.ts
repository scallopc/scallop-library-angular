import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MainComponent } from './main/main.component';
import { ContentComponent } from './content/content.component';
import { ComponentsModule } from '../components/components.module';
import { ButtonPageComponent } from './pages/button-page/button-page.component';
import { TabsPageComponent } from './pages/tabs-page/tabs-page.component';
import { HeaderComponent } from './header/header.component';
import { UiMainRoutingModule } from './ui-main-routing.module';

@NgModule({
  declarations: [
    MainComponent,
    ContentComponent,
    ButtonPageComponent,
    TabsPageComponent,
    HeaderComponent,
  ],
  imports: [CommonModule, ComponentsModule, UiMainRoutingModule],
  exports: [MainComponent],
})
export class UiMainModule {}
