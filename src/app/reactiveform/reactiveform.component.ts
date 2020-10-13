import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';



@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit {
  rform: FormGroup;
  countries = ['India', 'USA', 'Nigeria', 'Hungary', 'Canada', 'France'];
  


  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.rform = this.fb.group({
      id: [''],
      name: [''],
      department: [''],
      country: ['']
    });
  }

  send() {
    console.log(this.rform.value);
  }

}
