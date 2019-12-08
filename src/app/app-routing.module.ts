import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './component/home/home.component';
import {AddVacancyComponent} from './component/add-vacancy/add-vacancy.component';
import {ViewVacancyComponent} from './component/view-vacancy/view-vacancy.component';
import { from } from 'rxjs';

const routes: Routes = [
  // {path: 'homepage', component: HomeComponent, children: [
  //   {path: 'add_vacancy', component: AddVacancyComponent},
  //   {path: 'view_vacancies', component: ViewVacancyComponent}
  // ]},
  {path: 'homepage',component: HomeComponent},
  {path: 'add_vacancy', component:AddVacancyComponent},
  {path: 'view_vacancy', component:ViewVacancyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
