import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {


  registerUser:any = {
    firstName: '',
    lastName: '',
    email: '',
    roles: []
  };

  theError:any;

  constructor(private myRouter: Router) { }

  redirect() {
    if (window.confirm("Do you really want to leave and loose all new user data?")) { 
      this.myRouter.navigate(['./']);
    }
  }

  firstPhase(userInfo){
    console.log('userinfo: ', userInfo)
    this.registerUser = userInfo;
    newUser = this.registerUser;
    this.myRouter.navigate(["/assigned-roles"]);
  }
  

  ngOnInit() {
  }

}

export let newUser;