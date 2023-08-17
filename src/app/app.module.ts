import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UiLoginModule } from './ui-login/ui-login.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, UiLoginModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
