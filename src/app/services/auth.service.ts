import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs'
import roles from '../roles'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  errorMessage:any;
  roles = roles;

  constructor(private myHttp: Http) { }


  handleError(e) {
    this.errorMessage = e.json().message;
    return Observable.throw(e.json().message);
  }

  register(user) {
    return this.myHttp.post(`http://requestbin.fullcontact.com/18dnasj1`, {
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      roles: user.roles
    })
      .map(res => res.json())
  }



// Get the list of roles from the server
  getRoles() {
    const blah = this.myHttp.get('http://demo1224749.mockable.io/roles')
    .map((res) => res.json());
    console.log('blah blah blah in SERVICE : ', blah) 
    // return this.roles;
    return this.myHttp.get('http://demo1224749.mockable.io/roles.json')
      .map((res) => res.json());
      // .catchError(this.handleError);
  }

}
