import { Component, OnInit } from '@angular/core';
import { Vacancy } from 'src/app/model/vacancy';

@Component({
  selector: 'app-add-vacancy',
  templateUrl: './add-vacancy.component.html',
  styleUrls: ['./add-vacancy.component.css']
})
export class AddVacancyComponent implements OnInit {

  vacancyObject= new Vacancy();

  constructor() { }

  ngOnInit() {
  }

  postVacancy(){
   if(this.vacancyObject.name == null || this.vacancyObject.email == null || this.vacancyObject.description == null){
      console.log("Please fill all the Fieleds!");
   } else{
     
   }
  }

}
