import { Component, OnInit } from '@angular/core';
import { Student } from './Student';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {
  countries = ['India', 'USA', 'Nigeria', 'Hungary', 'Canada', 'France'];
  private model: Student;


  constructor(

  ) { }

  ngOnInit(): void {
    this.model = new Student(1,
      'Kindson Munonye',
      this.countries[2],
      'Computer Engineering'
    );
  
  }
  send() {
    console.log(this.model);
  }

}
