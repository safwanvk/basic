import { Component, OnInit } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http'
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { NgForm, FormGroup, FormBuilder } from '@angular/forms';


export class Friend {
  constructor(
    public id: number,
    public name: string,
    public username: string,
    public phone: string,
    public email: string,
    public website: string
  ){

  }
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  closeResult: string;
  friends: Friend[];
  friend: Friend[];
  editForm: FormGroup;

  constructor(private http: HttpClient, private modalService: NgbModal, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.getFriends();
    this.editForm = this.fb.group({
      name: [''],
      username: [''],
      phone: [''],
      email: [''],
      website: ['']
    } );
  
   
  }
  getFriends(){
    this.http.get<any>('https://jsonplaceholder.typicode.com/users').subscribe(
      response => {
        console.log(response);
        this.friends = response;
      }
    );
  }
  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
  onSubmit(f: NgForm) {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    this.http.post(url, f.value)
      .subscribe((result) => {
        this.ngOnInit(); //reload the table
      });
    this.modalService.dismissAll(); //dismiss the modal
  }
  openDetails(targetModal, friend: Friend) {
    this.modalService.open(targetModal, {
     centered: true,
     backdrop: 'static',
     size: 'lg'
   });
    document.getElementById('name1').setAttribute('value', friend.name);
    document.getElementById('username1').setAttribute('value', friend.username);
    document.getElementById('phone1').setAttribute('value', friend.phone);
    document.getElementById('email1').setAttribute('value', friend.email);
    document.getElementById('website1').setAttribute('value', friend.website);
 }

 openEdit(targetModal, friend: Friend) {
  this.modalService.open(targetModal, {
    centered: true,
    backdrop: 'static',
    size: 'lg'
  });
  this.editForm.patchValue( {
    name: friend.name,
    username: friend.username,
    phone: friend.phone,
    email: friend.email,
    website: friend.website
  });
}
onSave() {
  const editURL = 'https://jsonplaceholder.typicode.com/posts' + this.editForm.value.id;
  console.log(this.editForm.value);
  this.http.put(editURL, this.editForm.value)
    .subscribe((results) => {
      this.ngOnInit();
      this.modalService.dismissAll();
    });
}
}
