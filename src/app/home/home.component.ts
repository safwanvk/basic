import { Component, OnInit } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http'
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';


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
  constructor(private http: HttpClient, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.getFriends();
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
    const url = 'http://localhost:8888/friends/addnew';
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

}
