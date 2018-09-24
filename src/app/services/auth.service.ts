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

 //this is the hardcoded version of the role options:   
    return this.roles;

  //this would be my approach to getting it from an API, but the data's format from this link
  // is giving me trouble; (normally the response would be an array of ojects = [{}, {}, {}], 
  // but here it's an object with the nested array declaration ? ). 

    // return this.myHttp.get('http://demo1224749.mockable.io/roles')
    //   .map((res) => res.json());
    // .catchError(this.handleError);
  }

}
