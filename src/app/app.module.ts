import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UiMainModule } from './ui-main/ui-main.module';
import { UiMainRoutingModule } from './ui-main/ui-main-routing.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, UiMainModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
