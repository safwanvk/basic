import { Component, OnInit } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http'

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
  friends: Friend[];
  constructor(private http: HttpClient) { }

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

}
