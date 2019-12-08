import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { AddVacancyComponent } from './component/add-vacancy/add-vacancy.component';
import { ViewVacancyComponent } from './component/view-vacancy/view-vacancy.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddVacancyComponent,
    ViewVacancyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
