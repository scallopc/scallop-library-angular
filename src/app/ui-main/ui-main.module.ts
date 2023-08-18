import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MainComponent } from './main/main.component';
import { ContentComponent } from './content/content.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [MainComponent, ContentComponent, MenuComponent],
  imports: [CommonModule, FormsModule, HttpClientModule],
  exports: [MainComponent],
})
export class UiMainModule {}
