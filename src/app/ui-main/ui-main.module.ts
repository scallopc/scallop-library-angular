import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MainComponent } from './main/main.component';
import { ContentComponent } from './content/content.component';
import { MenuComponent } from './menu/menu.component';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  declarations: [MainComponent, ContentComponent, MenuComponent],
  imports: [CommonModule, FormsModule, HttpClientModule, ComponentsModule],
  exports: [MainComponent],
})
export class UiMainModule {}
