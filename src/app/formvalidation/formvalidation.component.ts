import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-formvalidation',
  templateUrl: './formvalidation.component.html',
  styleUrls: ['./formvalidation.component.css']
})
export class FormvalidationComponent implements OnInit {
  message: string;
  countries = ['India', 'USA', 'Nigeria', 'Hungary', 'Canada', 'France'];

  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(f: NgForm) {
    if (f.valid) {
      this.message = 'The form is VALID';
    }
    if (f.invalid){
      this.message = 'The form is INVALID';
    }
   }

}

