import { Observable } from 'rxjs/Observable';
import { JwtHttp } from '../../utils/jwt-http';
import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import 'rxjs/Rx';
import { User } from '../../models/User';

@Injectable()
export class UserProvider {
  constructor (private http: JwtHttp) {
    console.log('profile provider');
  }
  url: string = "https://localhost:8443/api/users";
  id:number = 2;
  user:User;



  fetchUser(){
    return this.http.get(`${this.url}/${this.id}`).map((response: Response) => {
      return response.json();
    })
    .do((data) => {
      this.user = data
    });
  }

  updateUser(user:any){
    return this.http.put(`${this.url}/${this.id}`, user)
    .map((response: Response) => {
      console.log('vers back:', user);
      
      return response.json();
    });

   }

}
